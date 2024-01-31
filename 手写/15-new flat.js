function my_flat(arr) {
  let res = arr.reduce((prev, cur) => {
    if (Array.isArray(cur)) {
      console.log("当前元素为数组");
      let ans = my_flat(cur);
      console.log("扁平化后的数组为", ans);
      console.log("原来的数组为:", prev);
      prev = prev.concat(ans);
      console.log("加入扁平化后的数组为:", prev);
    } else {
      console.log(cur);
      prev.push(cur);
      console.log("加入元素后的数组:", prev);
    }
    return prev;
  }, []);
  return res;
}
console.log(my_flat([1, 2, [3]]));
