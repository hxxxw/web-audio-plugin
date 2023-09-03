// 请求统一配置
import axios from 'axios'
import type { AxiosInstance, InternalAxiosRequestConfig } from 'axios' // 导入配置声明

class Request { 
    instance:AxiosInstance
    constructor(config: InternalAxiosRequestConfig) { 
        this.instance = axios.create(config)
        // 配置请求拦截器
        this.instance.interceptors.request.use(
            (res: InternalAxiosRequestConfig) => {
                console.log("请求拦截触发了");
                return res
            },
            (e) => {console.log("请求拦截失败",e);}
        )
        // 响应拦截器
        this.instance.interceptors.response.use(
            (res: any) => {
                console.log("响应拦截触发了");
                return res?.data // 辅助请求到的数据的拆解
            },
            (e) => {console.log("响应拦截失败",e);}
        )
    }
    request(config: InternalAxiosRequestConfig) { 
        return this.instance.request(config)
    }
}
export default Request