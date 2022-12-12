import {useProfile} from "../../../hooks";
import {useEffect, useState} from "react";
import {findAllTuitsDislikedByUser} from "../../../services/likes-service";
import Tuits from "../../../tuits";

export const Dislikes = () => {
  const {profile} = useProfile();
  const [likes, setLikes] = useState([]);
  const fetchLikes = async () => {
    if (profile) {
      const likes = await findAllTuitsDislikedByUser(profile._id)
      setLikes(likes)
    }
  }
  useEffect(() => {
    fetchLikes();
  }, [profile]);
  return (
    <div>
      <Tuits tuits={likes} refreshTuits={fetchLikes} profile={profile}/>
    </div>
  )
}
