import Axios from 'axios'
import Cookies from "js-cookie";

//url到index.html配置

const DECODE = {
    CODE_INVALID: -1,//失效
    CODE_OK: 0,//成功
    CODE_FAIL: 1//失败
}

function logout() {
    vm.$router.push({
        name: "login",
        params: {
            autoSign: false
        }
    });
}
function funcThen(response, resolve, reject) {
    var res = response.data;
    if (res.code == DECODE.CODE_INVALID) {//失效
        logout();
        console.log(res.msg);
        reject(res);
    } else if (res.code == DECODE.CODE_OK) {//成功
        resolve(res);
    } else {//其他返回失败
        console.log(res.msg);
        reject(res);
    }
}
function funcCatch(err, reject) {
    console.log(err.msg);
    reject(err)
}
/**
 * 封装get方法
 * @param url 
 * @param params 
 * @returns {Promise} 
 */
export function z_get(url, params = {}, config = {}) {
    Axios.defaults.withCredentials = false;
    return new Promise((resolve, reject) => {
        Axios.get(baseUrl + url, {
            params: params,
            config: config
        })
            .then(response => funcThen(response, resolve, reject))
            .catch(err => funcCatch(err, reject))
    })
}
/**
 * 封装post请求
 * @param url
 * @param data
 * @returns {Promise}
 */
export function z_post(url, data = {}, config = {}) {
    Axios.defaults.withCredentials = false;
    return new Promise((resolve, reject) => {
        Axios.post(baseUrl + url, data, config)
            .then(response => funcThen(response, resolve, reject))
            .catch(err => funcCatch(err, reject))
    })
}
/**
 * 封装patch请求
 * @param url
 * @param data
 * @returns {Promise}
 */
export function z_patch(url, data = {}, config = {}) {
    Axios.defaults.withCredentials = false;
    return new Promise((resolve, reject) => {
        Axios.patch(baseUrl + url, data, config)
            .then(response => funcThen(response, resolve, reject))
            .catch(err => funcCatch(err, reject))
    })
}
/**
 * 封装put请求
 * @param url
 * @param data
 * @returns {Promise}
 */
export function z_put(url, data = {}, config = {}) {
    Axios.defaults.withCredentials = false;
    return new Promise((resolve, reject) => {
        Axios.put(baseUrl + url, data, config)
            .then(response => funcThen(response, resolve, reject))
            .catch(err => funcCatch(err, reject))
    })
}
/**
 * 封装delete请求
 * @param url
 * @param data
 * @returns {Promise}
 */
export function z_delete(url, data = {}, config = {}) {
    Axios.defaults.withCredentials = false;
    return new Promise((resolve, reject) => {
        Axios.delete(baseUrl + url, {
            data: data,
            config: config
        })
            .then(response => funcThen(response, resolve, reject))
            .catch(err => funcCatch(err, reject))
    })
}