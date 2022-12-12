import { createSlice } from "@reduxjs/toolkit";
import profile from "../data/profile.json";
import * as secureService from "../services/security-service";
import {message} from "antd";

const profileSlice = createSlice({
    name: "profile",
    initialState: {
        profile: null
    },
    reducers:{
        setProfile: (state, action) => {
          state.profile = action.payload;
        },
        updateProfile(state, action){
            console.log(state)
            state.username = action.payload.username;
            state.bio = action.payload.bio;
            state.location = action.payload.location;
            state.website = action.payload.website;
            state.dateOfBirth = action.payload.dateOfBirth;
        }
    }
});

export const {updateProfile, setProfile} = profileSlice.actions;

export const refreshProfile = () => dispatch => {
    secureService.profile().then(profile => {
        dispatch(setProfile(profile));
    })
}

export const updateUserData = (uid, data) => dispatch => {
    secureService.updateProfile(uid, data)
      .then(() => {
          dispatch(refreshProfile());
          message.success("Update successfully!");
      })
}

export default profileSlice.reducer;
