// Add a request interceptor
import axios from 'axios'
import { Toast } from 'antd-mobile'

axios.interceptors.request.use(function (config) {
    // Do something before request is sent
    console.log("axios.interceptors.request")
    Toast.show({
        icon: "loading",
        duration: 0,
        content: "載入中..."
    })
    return config;
}, function (error) {
    // Do something with request error
    console.log("axios.interceptors.request.error")
    Toast.clear()
    return Promise.reject(error);
});

// Add a response interceptor
axios.interceptors.response.use(function (response) {
    // Any status code that lie within the range of 2xx cause this function to trigger
    // Do something with response data
    console.log("axios.interceptors.response")
    Toast.clear()
    return response;
}, function (error) {
    // Any status codes that falls outside the range of 2xx cause this function to trigger
    // Do something with response error
    console.log("axios.interceptors.response.error")
    Toast.clear()
    return Promise.reject(error);
});