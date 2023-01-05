
const user = JSON.parse(localStorage.getItem("user"));

const initialState = user
  ? { status: { loggedIn: true }, user }
  : { status: { loggedIn: false }, user: null };

const authentication = {
  namespaced: true,
  state: initialState,
  actions: {
    login({ commit }, data) {
      if (data) {
        commit("loginSuccess", data);
      } else {
        commit("loginFailure");
      }
    },
  },
  getters: {
    isLoggedin(state) {
      return !!state.status.loggedIn
    }
  },
  mutations: {
    loginRequest(state, user) {
      state.status = { loggingIn: true };
      state.user = user;
    },
    loginSuccess(state, user) {
      state.status = { loggedIn: true };
      state.user = user;
    },
    loginFailure(state) {
      state.status = { loggedIn: false };
      state.user = null;
    },
    logout(state) {
      state.status = { loggedIn: false };
      state.user = null;
    },
  },
};

export default authentication
