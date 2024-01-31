//map不改变原数组，返回一个新数组
Array.prototype._map = (callback) => {
  console.log(callback);
  console.log("this", this);
  let res = [];
  for (let i = 0; i < this.length; i++) {
    let ans = callback(this[i], i, this);
    console.log(ans);
    res.push(ans);
  }
  return res;
};
const arr = [1, 2, 3];
console.log(arr._map);
let res = arr._map((item, index, arr) => {
  console.log(this);
  return item * 2;
});
console.log(res);
