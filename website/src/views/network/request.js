import axios from "axios";
export function request(config) {
    // const instance = new axios.create({
    //     baseURL: 'https://mall.agued.cn/',
    //     timeout: 60000
    // })
    const instance = new axios.create({
        baseURL: 'http://www.zhouyulongart.com/',
        timeout: 60000
    })
    instance.interceptors.request.use(config => {
        return config
    }, err => {
        console.log(err)
    })
    instance.interceptors.response.use(res => {
        return res.data
    }, err => {
        console.log(err)
    })
    return instance(config)
}
