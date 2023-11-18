var speed = document.querySelector('.speed')
var bar = document.querySelector('.speed-bar')
var video = document.querySelector('video')

//监听鼠标在speed是否移动
speed.addEventListener('mousemove',function(a){
    var y = a.y - speed.offsetTop //speed.offsetTop speed容器距离顶部的距离
    var percent = y/speed.offsetHeight
    var height = Math.round(percent*100)+'%'

    bar.style.height = height

    var min = 0.1
    var max = 4

    var playbackRate = percent*(max-min)+min
    bar.textContent = playbackRate.toFixed(2)+'x'

    //视频播放速度
    video.playbackRate = playbackRate
})