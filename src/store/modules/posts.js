import axios from "axios"
import tokenService from "./../../services/TokenService"

export default {
	actions: {
    async fetchPosts({commit}, filter) {
      commit('isPostsLoading', true);

      console.log(filter);

      axios({
        method: "GET",
        url: "http://127.0.0.1:8065/auth/0.1/users?limit=" + filter.limit + "&offset=" + filter.offset,
        headers: {
          "Content-Type": "application/json",
          "Authorization": "Bearer " + tokenService.readAccessToken()
        }
      }).then(function (response) {
        commit('updatePosts', response.data);
      }).catch(function () {
      });
      commit('isPostsLoading', false);
    }
  },

  mutations: {
    isPostsLoading(state, loading) {
      state.loading = loading;
    },
    updatePosts(state, posts) {
      state.posts = posts;
    }
  },

  state: {
    loading: false,
    posts: []
  },

  getters: {
    getPosts(state) {
      return state.posts;
    },
    getPostsCount(state) {
      return state.posts.length
    },
    getPostsLoadingStatus(state) {
      return state.loading;
    }
  }
}
