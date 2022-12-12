import {useProfile} from "../../../hooks";
import {useEffect, useState} from "react";
import {getAllTuits} from "../../../services/user-service";
import MyTuits from '../../../tuits'
export const Tuits = () => {
  const {profile} = useProfile();
  const [tuits, setTuits] = useState([]);
  const fetchTuits = async () => {
    if (profile) {
      getAllTuits(profile._id)
        .then(data => {
          setTuits(data);
        })
    }
  }
  useEffect(() => {
    fetchTuits()
  }, [profile]);
  if (!profile) {
    return <></>
  }
  return (
    <div>
     <MyTuits refreshTuits={fetchTuits} tuits={tuits} profile={profile}/>
    </div>
  )
}
