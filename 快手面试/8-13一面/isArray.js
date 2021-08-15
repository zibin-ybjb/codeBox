//判断一个变量是不是数组

let arr = [1,2]
let arr2 = new Array()

console.log(arr instanceof Array);
console.log(Array.isArray(arr));
console.log(arr.constructor === Array )
console.log(Object.prototype.toString.call(arr) === "[object Array]");
console.log(Array.prototype.isPrototypeOf(arr));
console.log(arr.__proto__.isPrototypeOf(arr));