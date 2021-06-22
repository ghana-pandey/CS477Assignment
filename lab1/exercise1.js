Array.prototype.even = function () {
    let even = this.filter(num => num % 2 == 0)
    return even;
}
Array.prototype.odd = function () {
    let odd = this.filter(num => num % 2 !== 0)
    return odd;
}
let num = [1, 2, 4, 5, 6, 7, 8, 9, 10]
console.log(num.even());
console.log(num.odd());