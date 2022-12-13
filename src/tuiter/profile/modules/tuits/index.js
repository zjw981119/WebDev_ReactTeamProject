import {useEffect, useState} from "react";
import MyTuits from "../../../tuits";
import {useParams} from "react-router";
import {findAllTuitsPostedByUser} from "../../../services/tuits-service";
import * as userService from "../../../services/user-service";
import {ObjectID} from "bson";

export const UserTuits = () => {
  const {uid} = useParams();
  const [tuits, setTuits] = useState([]);
  const profileUser = userService.getUserProfile(uid);

  const fetchTuits = async () => {
    if (uid) {
      const user = await userService.profile();
      const reviewerId = Object.keys(user).length !== 0 ? user._id : new ObjectID();
      findAllTuitsPostedByUser(reviewerId, uid)
        .then(data => {
          setTuits(data);
        })
    }
  }

  useEffect(() => {
    fetchTuits()
  }, [uid]);


  return (
    <div>
      <MyTuits refreshTuits={fetchTuits} tuits={tuits} profile={profileUser}/>
    </div>
  )
}
