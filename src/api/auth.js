import { getApiUrl } from "./api";
const api = "http://localhost:3002/";

export const loginApi = (user, callback) => {
  getApiUrl()
    .post(`${api}users/login`, user)
    .then((res) => {
      const data = res.data;
      localStorage.setItem("user", JSON.stringify(data));
      callback(true, data);
    })
    .catch((err) => {
      console.log(err.res);
    });
};

export const logoutApi = () => {
  localStorage.setItem("user", "");
  window.location.reload();
};
