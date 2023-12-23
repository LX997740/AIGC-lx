//给banner 接口(:3000/banner)建立一个接口(类JAVA等强类型的接口定义 vuex ts类型检测)
//模型接口声明
//对应数据表的字段
export interface Banner {
    pic: string;
    targetId: number;
    adid: null;
    targetType: number;
    titleColor: string;
    typeTitle: string;
    url: null,
    exclusive: boolean,
    monitorImpress: null,
    monitorClick: null,
    monitorType: null,
    monitorImpressList: null,
    monitorClickList: null,
    monitorBlackList: null,
    extMonitor: null,
    extMonitorInfo: null,
    adSource: null,
    adLocation: null,
    adDispatchJson: null,
    encodeId: string,
    program: null,
    event: null,
    video: null,
    song: null,
    scm: string,
    bannerBizType: string
}
// 和vuex一道,把数据严谨在严谨
// let banner: Banner = {
//     imageUrl: '范家吵架图',
//     targetId: 123,
//     adid: null,
//     targetType: 1004,
//     titleColor: 'red',
//     typeTitle: '首页轮播图',
//     url: null,
//     exclusive: false,
//     monitorImpress: null,
//     monitorClick: null,
//     monitorType: null,
//     monitorImpressList: null,
//     monitorClickList: null,
//     monitorBlackList: null,
//     extMonitor: null,
//     extMonitorInfo: null,
//     adSource: null,
//     adLocation: null,
//     adDispatchJson: null,
//     encodeId: "14686603",
//     program: null,
//     event: null,
//     video: null,
//     song: null,
//     scm: "1.music-homepage.homepage_banner_force.banner.8527965.1388371235.null",
//     bannerBizType: "force_banner"
// }