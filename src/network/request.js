import axios from "axios";

export function request(config) {
  // 1.create instance
  const instance = axios.create({
    baseURL: 'http://152.136.185.210:7878/api/hy66',
    timeout: 5000
  })
  // 2.axios interceptors
  // 2.1 request interceptors rules
  instance.interceptors.request.use(config => {
    // request interceptors .do sth like show a loading img
    return config
  }, err => {
    console.log(err);
  })

  // 2.2 response interceptors rules
  instance.interceptors.response.use(
    res => {
    // console.log(res);
    // 
    return res.data
  }
  , err => {
    console.log(err);
  })
  //3. send real request
  return instance(config)


}