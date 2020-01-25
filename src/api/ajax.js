/* 
能发送ajax请求的函数模块
- 包装axios
- 函数的返回值是promise
- axios.get()/post()返回的就是promise对象
- 返回自己创建的promise对象：
优化：
    统一异步处理
    在外层包一个自己创建的promise对象
    在请求出错时，不reject(error)，而不是显示错误提示
    异步返回结果数据，而不是包含结果数据的response
 */

import axios from 'axios'
import { message } from 'antd'

//下面接受三个参数  接口由4个部分组成url、方式、请求体(三个决定) 
export default function ajax(url, data = {}, method = "GET") {
    //这里返回的不是axios的promise而是外层包了一个自己创建的promise对象
    return new Promise(function (resolve, reject) {
        /* 
        1.执行异步ajax请求
        2.如果成功了调用resolve()请求
        3.如果失败了不到用reject(reason),而是message异常信息
        */
        let promise
        if (method === 'GET') {
            promise = axios.get(url, { params: data }) /* parms配置指定的是query参数要拼串 */
        } else {
            promise = axios.post(url, data)
        }
        promise.then(response => {
            //如果成功了，调用resolve(response.data)
            resolve(response.data)
        }).catch(err => message.error('请求出错：' + err.message))
    })
}
