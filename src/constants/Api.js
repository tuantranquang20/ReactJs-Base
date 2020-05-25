import axios from "axios";
import Cookie from "js-cookie";

// function createAxios() {
//   var axiosInstant = axios.create();
//   //your server?
//   axiosInstant.defaults.baseURL = "http://localhost:3030";
//   axiosInstant.defaults.timeout = 20000;
//   axiosInstant.defaults.headers = { "Content-Type": "application/json" };

//   axiosInstant.interceptors.request.use(
//     async (config) => {
//       config.headers.token = Cookie.get("SESSION_ID");
//       return config;
//     },
//     (error) => Promise.reject(error)
//   );

//   return axiosInstant;
// }

// export const getAxios = createAxios();

/* Support function */
function handleResult(api) {
  return api.then((res) => {
    if (res.data.status != "success") {
      return Promise.reject(res.data);
    }
    res.config.headers.token = Cookie.get("SESSION_ID");
    return Promise.resolve(res.data);
  });
}


export const requestLogin = (payload) => {
  return handleResult(
    axios.post(`http://localhost:3030/users/login`, {
      email: "tuantranquang20@gmail.com",
      password: "tuantranf",
    })
  );
};
