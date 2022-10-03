import axios from "axios";
import { store } from "../redux/store"
import { setLoading } from "../slices/loadingSlice";

axios.defaults.baseURL = "http://localhost:5000"

// request攔截器
axios.interceptors.request.use(function (config) {
    // 發送請求前
    store.dispatch(setLoading(true));
    return config;
}, function (error) {
    // 發送請求出現錯誤
    store.dispatch(setLoading(false));
    return Promise.reject(error);
});

// response攔截器
axios.interceptors.response.use(function (response) {
    // 接收正確結果後
    store.dispatch(setLoading(false));
    return response;
}, function (error) {
    // 接收異常結果後
    store.dispatch(setLoading(false));
    return Promise.reject(error);
});