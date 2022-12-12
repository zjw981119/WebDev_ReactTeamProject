import {useProfile, useUserProfile} from "../../hooks";
import {useEffect, useState} from "react";
import {getAllTuits} from "../../../services/user-service";
import MyTuits from "../../../tuits";
import {useParams} from "react-router";

export const UserTuits = () => {
  const {uid} = useParams();
  const [tuits, setTuits] = useState([]);
  const {profile} = useUserProfile(uid);
  const {profile: currentUser} = useProfile();
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
  if (!profile) {
    return <></>
  }
  return (
    <div>
      <MyTuits refreshTuits={fetchTuits} tuits={tuits} profile={currentUser}/>
    </div>
  )
}
