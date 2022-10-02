import { sendlogin } from "@/api/login";
import {
  setToken,
  getToken,
  setUsername,
  getUsername,
  removeToken,
  removeUsername,
} from "@/utils/app";

const state = {
  drawer: JSON.parse(sessionStorage.getItem("drawer")) || true,
  Token: getToken() || "",
  username: getUsername() || "",
};
const getters = {
  drawer: (state) => state.drawer,
  username: (state) => state.username,
};
const mutations = {
  SET_drawer(state) {
    state.drawer = !state.drawer;
    sessionStorage.setItem("drawer", JSON.stringify(state.drawer));
  },
  SET_Token(state, value) {
    state.Token = value;
    setToken(value);
  },
  SET_username(state, value) {
    state.username = value;
    setUsername(value);
  },
};
const actions = {
  login(content, data) {
    return new Promise((resolve, reject) => {
      sendlogin(data)
        .then((response) => {
          let data = response.data;
          // console.log("GGG");
          // console.log(data.token);
          content.commit("SET_Token", data.token);
          resolve(response);
        })
        .catch((error) => {
          reject(error);
        });
    });
  },
  exit(content) {
    return new Promise((resolve, reject) => {
      console.log("enxt");
      removeToken();
      removeUsername();
      content.commit("SET_Token", "");
      content.commit("SET_username", "");
      resolve();
    });
  },
};
export default {
  namespaced: true,
  state,
  getters,
  mutations,
  actions,
};
