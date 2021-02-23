module.exports = function reverse (num) {
    let n= num>0?num: Math.abs(num)
    return +n.toString().split('').reverse().join('')

}
