import * as axios from "axios";

const instance = axios.create({
  withCredentials: true,
  baseURL: `https://social-network.samuraijs.com/api/1.0/`,
  headers: {
    "API-KEY": "0b33513f-dce5-466b-9c81-8713d7df6fb4",
  },
});

export const userApi = {
  uGet(currentPage , pageSize) {
    return instance
      .get(`users?page=${currentPage}&count=${pageSize}`)
      .then((response) => {
        return response.data;
      });
  },
  fDelete(userId) {
    return instance.delete(`follow/${userId}`).then((response) => {
      return response.data;
    });
  },
  fPost(userId) {
    return instance.post(`follow/${userId}`).then((response) => {
      return response.data;
    });
  },
};

export const authApi = {
  authMe() {
    return instance.get(`auth/me`).then((response) => {
      return response.data;
    });
  },

  postLogin(email, password, rememberMe) {
    return instance.post(`auth/login`, {email, password, rememberMe}).then((response) => {
      return response.data;
    });
  },

  deleteLogin() {
    return instance.delete(`auth/login`).then((response) => {
      return response.data;
    })
  }
};

export const profileApi = {
  getUserProfile(userId) {
    return instance.get(`profile/` + userId).then((response) => {
      return response.data;
    });
  },

  getUserStatus(userId) {
    return instance.get(`profile/status/` + userId).then((response) =>{
      return response.data;
    });
  },

  setUserStatus(status) {
    return instance.put(`profile/status`, {status}).then((response) => {
      return response.data.resultCode;
    });
  },

  putAuthUserProfile(profile) {
   return instance.put(`profile/`, {profile}).then((response) => {
     return response.data.resultCode;
   })
 }
};
