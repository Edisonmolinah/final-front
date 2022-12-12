import Cookies from "js-cookie";

const ENDPOINT_PATH = "localhost:8000/api/";

export default {
  setUserLogged(userLogged) {
    Cookies.set("userLogged", userLogged);
  },
  getUserLogged() {
    return Cookies.get("userLogged");
  },
  register(email, password, name, role_id) {
    const user = { email, password, name, role_id };
    return fetch.post(ENDPOINT_PATH + "regiser", user);
  },
  login(email, password) {
    const user = { email, password};
    return fetch.post(ENDPOINT_PATH + "login", user);
  }
};
