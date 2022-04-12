import axios from "axios";

const API_URL = "http://localhost:8080/api/auth/";

class AuthService {
  login(username, password) {
    return axios
      .post(API_URL + "signin", {
        username,
        password,
      })
      .then((response) => {
        if (response) {
          localStorage.setItem("user", JSON.stringify(response.data));
          console.log("response.data", response.data);
        }

        return response.data;
      });
  }

  logout(user) {
    localStorage.removeItem(user);
    // console.log("responce data", user);
  }

  register(username, email, password, address) {
    return axios.post(API_URL + "signup", {
      username,
      email,
      password,
      address,
    });
  }

  getCurrentUser() {
    return JSON.parse(localStorage.getItem("user"));
  }
}

export default new AuthService();
