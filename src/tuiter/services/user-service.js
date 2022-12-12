import axios from "axios";
const BASE_URL = process.env.REACT_APP_BASE_URL;
//const BASE_URL = process.env.REACT_APP_BASE_URL;
const USER_API = `${BASE_URL}/api/users`;
const SECURITY_API = `${BASE_URL}/api/auth`;

// creates an axios instance configured to include cookie headers
// by setting the withCredentials property to true
const api = axios.create({
    withCredentials: true
});

export const signup = (user) =>
    api.post(`${SECURITY_API}/signup`, user)
        .then(response => response.data);

export const login = (user) =>
    api.post(`${SECURITY_API}/login`, user)
        .then(response => response.data);

export const logout = () =>
    api.post(`${SECURITY_API}/logout`)
        .then(response => response.data);

export const profile = () =>
    api.post(`${SECURITY_API}/profile`)
        .then(response => response.data);

export const updateProfile = (uid, data) =>
    api.put(`${USER_API}/${uid}`, data)

export const findAllUsersWithoutMe = (uid) =>
    api.get(`${USER_API}/${uid}/excluded`)
        .then(response => response.data);

export const getAllTuits = (uid) =>
    api.get(`${BASE_URL}/api/users/${uid}/tuits`)
      .then(response => response.data)

export const getUserProfile = (uid) => {
    return api.get(`${BASE_URL}/api/users/${uid}/profile`).then(res => res.data)
}
