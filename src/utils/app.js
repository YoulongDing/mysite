import cookie from "cookie_js";

const adminToken = "admin_Token";
const username = "username";

export function getToken() {
  return cookie.get(adminToken);
}
export function setToken(Token) {
  return cookie.set(adminToken, Token);
}
export function removeToken() {
  return cookie.remove(adminToken);
}

export function getUsername() {
  return cookie.get(username);
}
export function setUsername(value) {
  return cookie.set(username, value);
}
export function removeUsername() {
  return cookie.remove(username);
}
