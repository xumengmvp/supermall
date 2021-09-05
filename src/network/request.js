import axios from 'axios'

export function request(config){
  const axiosInstance = axios.create({
    baseURL: 'http://127.0.0.1/api/m5',
    timeout: 5000
  })

  //请求拦截器
  axiosInstance.interceptors.request.use( reqConfig => {
    // console.log(reqConfig);
    return reqConfig
  },error => {
    console.log(error)
  })

  //响应拦截器
  axiosInstance.interceptors.response.use(res => {
    return res.data
  },error => {
    console.log(error)
  })

  //返回promise
  return axiosInstance(config)

}