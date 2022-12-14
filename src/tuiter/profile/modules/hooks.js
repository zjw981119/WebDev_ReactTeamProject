import {useEffect, useState} from "react";
import * as secureService from "../../services/user-service";
import * as userService from "../../services/user-service";

export const useUserProfile = (uid) => {
  const [profile, setProfile] = useState();
  useEffect(() => {
    const fetchProfile = async () => {
      const user = await secureService.getUserProfile(uid)
      console.log(user)
      if (user) {
        setProfile(user);
      }
      //console.log("user", user)

    }
    fetchProfile();
  }, [uid]);
  return {
    profile
  }
}

export const useProfile = async () => {
  return await secureService.profile();
}
