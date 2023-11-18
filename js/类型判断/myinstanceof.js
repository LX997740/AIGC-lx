function instanceOf(a, b) {
    while (a.__proto__ !== null) {
        if (a.__proto__ === b.prototype) {
            return true
        } else a = a.__proto__
    }
    return false
}
console.log(instanceOf([], Array));//true
console.log(instanceOf([], Object));//true
console.log(instanceOf([], Number));//false