function setName(obj){
    obj.name="lilili";
    obj = new Object();
    obj.name="lllllllllll"
}
let person = new Object();
// person.name= 'liuzibin'
setName(person)
console.log(person.name);