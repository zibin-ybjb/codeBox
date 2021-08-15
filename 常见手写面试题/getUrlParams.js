//解析url里的参数转换为对象
function getUrlParams(url){
    let reg = /([^?&=]+)=([^?&=]+)/      //正则待学习
    let obj ={};
    url.replace(reg,function(){
        console.log([...arguments]);
        obj[arguments[1]] = arguments[2]
    })
    return obj
}

let url = "https://www.juejin.cn?a=1&b=2"
console.log(getUrlParams(url));

