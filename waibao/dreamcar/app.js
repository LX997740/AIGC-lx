//应用
//page()页面
//配置
App({
    globalData:{

    },
    onLaunch(){
        //在应用启动的时候,发送接口请求
        // console.log('应用启动了');
        //发送一个远程请求
        wx.request({
          url: 'https://resources.ninghao.net/wxapp-case/db.json',
          success:(res)=>{
            console.log(res);
            Object.assign(this.globalData,res.data)
            console.log(this,'------');
          }
        })
    }
})