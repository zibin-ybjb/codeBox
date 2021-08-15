function argu(a,b){
    console.log(a);
    console.log(b);
    console.log(arguments instanceof Object);
    // arguments.callee(2,3,2)
    console.log(arguments);   
}
argu(1,2,3,3,4,2,3,2)

// arguments是一个保存所有传入的参数
//是一个对象，键是0～n
//相当于数组下标
//