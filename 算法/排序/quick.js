let arr = [51, 3, 2, 4, 6, 8, 7, 1]
function quickSort(arr) {
    if (arr.length <= 1) {
        return arr
    }
    const base = arr[0]
    const len = arr.length
    let left = [], right = []

    for (let i = 1; i < len; i++) {
        if (arr[i] < base) {
            left.push(arr[i])
        }
        else {
            right.push(arr[i])
        }
    }
    return [...quickSort(left), base, ...quickSort(right)]
}
console.log(quickSort(arr));