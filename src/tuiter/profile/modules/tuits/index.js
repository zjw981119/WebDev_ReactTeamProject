import {useEffect, useState} from "react";
import {getAllTuits, getUserProfile} from "../../../services/user-service";
import MyTuits from "../../../tuits";
import {useParams} from "react-router";

export const UserTuits = () => {
  const {uid} = useParams();
  const [tuits, setTuits] = useState([]);
  const profileUser = getUserProfile(uid);
  const fetchTuits = async () => {
    if (uid) {
      getAllTuits(uid)
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
