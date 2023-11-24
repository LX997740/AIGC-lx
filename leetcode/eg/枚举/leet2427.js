/**
 * @func 公因子的数目
 * @param {number} a
 * @param {number} b
 * @return {number}
 * @author lx
 */
const a = 12, b = 6
var commonFactors = function(a, b) {
    let count = 0
    for (let i = 1; i <= Math.min(a, b); i++) {
        if(a%i ===0 && b%i===0){
            count++
        }
    }
    return count
};