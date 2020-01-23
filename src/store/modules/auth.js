import axios from "axios"
import tokenService from "./../../services/TokenService"
import router from "./../../router"

export default {
  // ==============================[ actions::dispatch ]==============================
  actions: {

    // Fetch registration
    async fetchRegister({commit, dispatch}, user) {
      axios({
        method: "POST",
        url: "http://127.0.0.1:8065/auth/0.1/register",
        headers: { "content-type": "application/json" },
        data: {
          username: user.username,
          email: user.email,
          password: user.password
        }
      }).then(function (response) {
        tokenService.save(response.data.access_token, response.data.refresh_token); // save tokens
        commit("refreshTokens", response.data);
        dispatch("fetchCurrentUser");
        commit("isLogging", false);
        commit("isLogged", true);
      })
      .catch(function (error) {
        console.log(error.response.data.message);
        dispatch("fetchLogout");
      });
    },

    // Fetch login
    async fetchLogin({commit, dispatch}, user) {
      axios({
        method: "POST",
        url: "http://127.0.0.1:8065/auth/0.1/login",
        headers: { "content-type": "application/json" },
        data: {
          username: user.username,
          password: user.password
        }
      }).then(function (response) {
        router.push('home');
        tokenService.save(response.data.access_token, response.data.refresh_token); // save tokens
        commit("refreshTokens", response.data);
        dispatch("fetchCurrentUser");
        commit("isLogging", false);
        commit("isLogged", true);
      })
      .catch(function (error) {
        console.log(error);
        dispatch("fetchLogout");
      });
    },

    // Fetch current user's credentionals by token
    async fetchCurrentUser({commit, dispatch}) {
      if (tokenService.readAccessToken() !== "" && tokenService.readRefreshToken() !== "") {
        axios({
          method: "GET",
          url: "http://127.0.0.1:8065/auth/0.1/whoami",
          headers: {
            "Content-Type": "application/json",
            "Authorization": "Bearer " + tokenService.readAccessToken()
          }
        }).then(function (response) {
          commit("refreshUser", response.data);
          commit("isLogging", false);
          commit("isLogged", true);
        }).catch(function (error) {
          // if wrong token
          if (error.response.status == 400) {
            dispatch("fetchLogout");
          }

          // if expired token
          if (error.response.status == 401 && error.response.data.message == "Expired token") {
            dispatch("fetchLogout");
          }
        });
      } else {
        dispatch("fetchLogout");
      }
    },

    // Fetch new tokens from server
    async fetchNewTokens({commit, dispatch}) {
      if (tokenService.readAccessToken() !== "" && tokenService.readRefreshToken() !== "") {
        tokenService.refresh()
        .then(function(response) {
          commit("refreshTokens", response.data);
          commit("isLogging", false);
        }).catch(function(error) {

          // if wrong token
          if (error.response.status == 400) {
            dispatch("fetchLogout");
          }

          // if expired token
          if (error.response.status == 401 && error.response.data.message == "Expired token") {
            dispatch("fetchLogout");
          }
        });
      } else {
        dispatch("fetchLogout");
      }
    },

    // Logout from application
    fetchLogout({commit}) {
      tokenService.destroy();
      commit("isLogged", false);
      commit("isLogging", false);
    }
  },

  // ==============================[ mutations::commit ]==============================
  mutations: {
    // Refresh logging auth status (true of false)
    isLogging(state, isLogging) {
      state.auth.isLogging = isLogging;
    },

    // Refresh authenticated status
    isLogged(state, isLogged) {
      state.auth.isLogged = isLogged;
    },

    refreshTokens(state, tokens) {
      state.tokens = tokens;
    },

    // Refresh username
    refreshUser(state, user) {
      state.user.id = user.id;
      state.user.username = user.username;
      state.user.email = user.email;
      state.user.roles = user.roles;
      state.user.status = user.status;
      state.user.created = user.created;
      state.user.updated = user.updated;
    },

    // Refresh username
    refreshUsername(state, username) {
      state.user.username = username;
    },
  },

  // ==============================[ state::state ]==============================
  state: {
    auth: {
      isLogging: false,
      isLogged: false
    },
    tokens: {
      access_token: "",
      refresh_token: "",
      token_type: "",
      expires_in: "",
    },
    user: {
      id: "",
      username: "",
      email: "",
      roles: [],
      status: "",
    }
  },

  // ==============================[ getters::getters ]==============================
  getters: {
    // Get auth statuses
    getAuth(state) {
      return state.auth;
    },

    // Get auth statuses
    getRefreshToken(state) {
      return state.auth;
    },

    // Get current user
    getUser(state) {
      return state.user;
    },

    // Get user's roles
    getUsersRoles(state) {
      if (state.user.roles && state.user.roles.length > 0) return state.user.roles;
      else return [
        {
          name: "ROLE_GUEST"
        }
      ];
    }
  }
}
