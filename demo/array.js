let nums =[1,2,4,4,4,4,3,3,2,5];
let target =6;
function adc(nums,target){
    let b = nums.map((item,index)=>{
        return target - item
    })
    return b
}
console.log(adc(nums,target));
