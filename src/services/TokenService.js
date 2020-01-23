import axios from "axios"

export default {
  // Store token in localStorage under the "token" key
  save(access_token, refresh_token) {
    window.localStorage.setItem("access_token", access_token);
    window.localStorage.setItem("refresh_token", refresh_token);
  },

  // Fetch the access token out of localStorage under the "access_token" key
  readAccessToken() {
    return window.localStorage.getItem("access_token") || "";
  },

    // Fetch the refresh token out of localStorage under the "refresh_token" key
    readRefreshToken() {
      return window.localStorage.getItem("refresh_token") || "";
    },

  // Refresh token
  refresh() {
    return axios({
      method: "GET",
      url: "http://127.0.0.1:8065/auth/0.1/refresh",
      headers: {
        "Content-Type": "application/json",
        "Authorization": "Bearer " + this.readAccessToken()
      },
      params: {
        "refresh_token": this.readRefreshToken()
      }
    })
  },

  // Delete the tokens from localStorage under the 'access_token' and 'refresh_token' keys
  destroy() {
    window.localStorage.removeItem("access_token");
    window.localStorage.removeItem("refresh_token");
  },
};
