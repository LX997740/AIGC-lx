/**
 * @func 771. Jewels and Stones
 * @param {string} jewels
 * @param {string} stones
 * @return {number}
 * @author lx
 */
const jewels = "aA", stones = "aAAbbbb"
var numJewelsInStones = function(jewels, stones) {
    let res = 0;
    let set = new Set(jewels);
    for (let i = 0; i < stones.length; i++) {
        if (set.has(stones[i])) {
            res++;
        }
    }
    return res;
};