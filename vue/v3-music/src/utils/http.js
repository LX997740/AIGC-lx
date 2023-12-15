import axios from 'axios'
// fetch xhr vue应用时, 复用 APP不是页面 统一管理
//所有的请求前面加上baseURL地址
axios.defaults.baseURL = "http://localhost:3000"
// 超时时间
axios.defaults.timeout = 10 * 1000
// 图片
axios.defaults.maxBodyLength = 1024 * 1024 * 5

const http = {
    get(url, params = {}) {
        //能await
        return new Promise((resolve, reject) => {
            //请求的抽象
            axios.get(url, { params })
                .then(res => {
                    resolve(res.data)
                })
                .catch(err => {
                    reject(err)
                })
        })
    },
}
export default http