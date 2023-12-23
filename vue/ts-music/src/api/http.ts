import axios from 'axios'

axios.defaults.baseURL = '/api'
axios.defaults.timeout = 10 * 1000
axios.defaults.maxBodyLength = 1024 * 1024 * 5
axios.defaults.withCredentials = true

//响应拦截
axios.interceptors.response.use(
    (response) => {
        return response
    },
    function (error) {
        return Promise.reject(error)
    }
)

interface Http {
    //? 可选  unknown
    // 返回值, 难点,亮点 tailwind hooks编程 ts
    get<T>(url: string, params?: unknown): Promise<T>
}
const http: Http = {

    get(url, params) {
        return new Promise((resolve, reject) => {
            axios
                .get(url, { params })
                .then((res) => {
                    resolve(res.data)
                })
                .catch((err) => {
                    reject(err)
                })
        })
    }
}

export default http