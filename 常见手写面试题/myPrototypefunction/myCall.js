Function.prototype.myCall = function(ctx){
    ctc = ctx || window 
    console.log(ctx);
    let fn = Symbol()
    ctx[fn] = this
    console.log(ctx);
    let result = ctx[fn](...arguments)
    console.log(result);
    delete ctx[fn] //delete 操作符用于删除对象的某个属性；如果没有指向这个属性的引用，那它最终会被释放。
    return result
}
let obj = {name:"liuzibin"}
function foo(){
    return this.name
}
console.log(foo({name:'aaaa'}))
console.log(foo.call(obj))
console.log(foo.myCall(obj));