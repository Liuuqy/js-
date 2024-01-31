let arr = [1, 2, [3, 4, [5, [6]]]];
function my_flat(arr) {
  return arr.reduce((prev, cur) => {
    console.log(cur);
    return prev.concat(Array.isArray(cur) ? my_flat(cur) : cur);
  }, []);
}

let res = my_flat(arr);
console.log(res);
