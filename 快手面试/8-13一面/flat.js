//实现一个falt(),flat可以做数组扁平化，接受两个参数，第一个是数组，第二个是删除的层级
function flat(arr, inf = 1) {
  console.log(inf);
  if (inf >=1) {
    return arr.reduce((sum, item) => {
      inf--;
      if (item instanceof Array) {
        return [...sum, ...flat(item,inf-1)];
      }
      return [...sum, item];
    }, []);
  }
//   return flat(arr, inf - 1);
}

let arr = [1, 2, [22, 1], 3, 3, [1, 2, 23, [1, 2, 21, [1, 2, 1, 2]]]];
console.log(flat(arr, 3));
