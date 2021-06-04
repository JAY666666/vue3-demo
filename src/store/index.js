import { createStore } from "vuex";
import { setToken, getToken } from "@/utils/auth";
import { login } from "@/api";

let state = {
  token: getToken(),
};

let mutations = {
  SET_TOKEN: (state, token) => {
    state.token = token;
  },
};

let actions = {
  login({ commit }, data) {
    return new Promise((resolve, reject) => {
      login(data)
        .then((res) => {
          let data = res.data;
          commit("SET_TOKEN", data.token);
          setToken(data.token);
          resolve(res);
        })
        .catch((error) => {
          reject(error);
        });
    });
  },
};

let getters = {};

export default createStore({
  state,
  mutations,
  actions,
  getters,
});
