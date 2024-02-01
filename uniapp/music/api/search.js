import baseUrl from './request.js'

// 搜索页面的所有接口

//热门搜索
export const apiSearchHotDetail =()=> {
	return uni.request({
		url:`${baseUrl}/search/hot/detail`,
		method: 'GET',
	})
}
//搜索接口
export const apiSearchSuggest =()=> {
	return uni.request({
		url:`${baseUrl}/search/suggest`,
		method: 'GET',
		data:{
			keywords: keywords,
		}
	})
}
