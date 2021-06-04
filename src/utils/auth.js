import Cookie from "js-cookie";

const tokenKey = "MY_VUE3_TOKEN";

export function setToken(token) {
  return Cookie.set(tokenKey, token);
}

export function getToken() {
  return Cookie.get(tokenKey);
}

export function removeToken() {
  return Cookie.remove(tokenKey);
}
