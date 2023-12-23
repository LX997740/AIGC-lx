//没有使用,也会警告
import type { Banner } from '../models/banner'//es6 引入类型
import type { Personalized } from '../models/personalized'

import http from './http.ts'
//ts 有完整的编译阶段 ts->js->运行

//后端api 业务代码 
//广告位
export async function useBanner() {
    //前端也有数据校验了,为用户负责   ts 接口
    //http.get<> 泛型  返回值的类型得是Banner数组
    const { banners } = await http.get<{
        banners: Banner[]
    }>('/banner', { type: 1 })
    // console.log(banners);

    return banners
}
//看接口文档 亮点 JSDOC 生成 后端写给前端
//api/index.ts中加一个业务方法
//为了大型项目,前端模型层 后端的数据就不怕不规范了
//pinia+model  让数据更安全
export async function usePersonalized() {

    const { result } = await http.get<{
        result: Personalized[]
    }>('/personalized')
    console.log(result);
    
    return result
}