import {useProfile, useUserProfile} from "../../hooks";
import {useEffect, useState} from "react";
import {findAllTuitsLikedByUser} from "../../../services/likes-service";
import Tuits from "../../../tuits";
import {useParams} from "react-router";

export const UserLikes = () => {
  const {uid} = useParams();
  const {profile} = useUserProfile(uid);
  const [likes, setLikes] = useState([]);
  const {profile: currentUser} = useProfile();
  const fetchLikes = async () => {
    if (uid) {
      const likes = await findAllTuitsLikedByUser(uid)
      setLikes(likes)
    }
  }
  useEffect(() => {
    fetchLikes();
  }, [uid]);
  if (!profile) {
    return <></>
  }
  return (
    <div>
      <Tuits tuits={likes} refreshTuits={fetchLikes} profile={currentUser}/>
    </div>
  )
}
