import {useProfile} from "../../../user-profile/hooks";
import {useEffect, useState} from "react";
import {findAllTuitsLikedByUser} from "../../../services/likes-service";
import Tuits from "../../../tuits";

export const Likes = () => {
  const {profile} = useProfile();
  const [likes, setLikes] = useState([]);
  const fetchLikes = async () => {
    if (profile) {
      const likes = await findAllTuitsLikedByUser(profile._id)
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
