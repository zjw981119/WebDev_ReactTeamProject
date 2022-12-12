import {useEffect, useState} from "react";
import {findAllTuitsLikedByUser} from "../../../services/likes-service";
import Tuits from "../../../tuits";
import {useParams} from "react-router";
import {getUserProfile} from "../../../services/user-service";

export const UserLikes = () => {
  const {uid} = useParams();
  const [likes, setLikes] = useState([]);
  const profileUser = getUserProfile(uid);
  const fetchLikes = async () => {
    if (uid) {
      const likes = await findAllTuitsLikedByUser(uid)
      setLikes(likes)
    }
  }
  useEffect(() => {
    fetchLikes();
  }, [uid]);
  return (
    <div>
      <Tuits tuits={likes} refreshTuits={fetchLikes} profile={profileUser}/>
    </div>
  )
}
