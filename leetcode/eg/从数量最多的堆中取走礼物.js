/**
 * @func 从数量最多的堆中取走礼物
 *  选择礼物数量最多的那一堆。
    如果不止一堆都符合礼物数量最多，从中选择任一堆即可。
    选中的那一堆留下平方根数量的礼物（向下取整），取走其他的礼物。
 * @param {number[]} gifts 数组
 * @param {number} k 秒数
 * @return {number}
 * @author lx
 */

let gifts = [25,64,9,4,100], k = 4



var pickGifts = function(gifts, k) {
    let n = gifts.length-1
    let total = 0

    for(let j = 0;j<k;j++){
        gifts.sort(function(a,b){
            return a-b
        })
        gifts[n] = Math.floor(Math.sqrt(gifts[n]))

    }


    for(let i = 0;i<gifts.length;i++){
        
        total = total+gifts[i]
        
    }
    return total
};
console.log(pickGifts(gifts,k));