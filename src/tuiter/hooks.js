import {useEffect, useState} from "react";
import * as secureService from "./services/security-service";

export const useProfile = () => {
  const [profile, setProfile] = useState();
  useEffect(() => {
    const fetchProfile = async () => {
      const user = await secureService.profile();
      if (user) {
        setProfile(user);
      }
      //console.log("user", user)

    }
    fetchProfile();
  }, []);
  return {
    profile
  }
}
