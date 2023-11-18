const secondHand = document.querySelector('.second-hand')
const minHand = document.querySelector('.min-hand')
const hourHand = document.querySelector('.hour-hand')
// console.log(secondHand);

function setTime(){
    const now = new Date()
    //获取当前秒数
    const seconds = now.getSeconds()
    const secondsDegress = seconds*6+90
    secondHand.style.transform = `rotate(${secondsDegress}deg)`
    //获取当前分数
    const mins = now.getMinutes()
    const minsDegress = mins*6+90
    minHand.style.transform = `rotate(${minsDegress}deg)`
    //获取当前时数
    const hours = now.getHours()
    const hoursDegress = hours*30+90+(mins/60)*30
    hourHand.style.transform = `rotate(${hoursDegress}deg)`
}

setTime()
setInterval(setTime,1000)