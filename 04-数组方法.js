//1.Array.map()==>创建一个新数组
// const list = new Array(3).fill(0);
// const res = list.map(() => {
//   return new Array(3).fill(0);
// });
// console.log(list);
// console.log(res);

// //2.Array.filter()==>创建一个新数组
// const list1 = [1, 2, 5, 7, 8];
// const res = list1.filter((item) => item > 3);
// console.log(list1);
// console.log(res);

//3.Array.reduce()
// const list = [1, 2, 4, 6, 8];
// const res = list.reduce((sum, cur) => {
//   console.log(sum);
//   sum += cur;
//   return sum;
// }, 0);
// console.log(res);

//4.Array.fill==>改变原数组，使用一个固定值填充元素

//5.Array.find()==》返回数组中满足提供的测试函数的第一个元素的值，否则返回undefined
// const list = [1, 2, 3, 4, 5];
// let res = list.find((item) => item > 3);
// console.log(res); //4
// let res2 = list.find((item) => item === 6);
// console.log(res2);

// //6.Array.indexOf():返回在数组中找到一个给定元素的第一个索引，如果不存在返回-1
// const list = [1, 2, 3, 4, 5];
// console.log(list.indexOf(3)); //2
// console.log(list.indexOf(6)); //-1

//7.Array.lastIndexOf()===》返回指定元素在数组中的最后一个值的索引
const list = [1, 2, 3, 4, 5];
console.log(list.lastIndexOf(3)); // 2
console.log(list.lastIndexOf(3, 1)); // -1

//8.Array.findIndex()

//9.Array.includes()==>是否存在一个指定的值，如果存在返回true，否则返回false

//10.pop、push、shift、unshift()

//11.Array.splice==>

//12.Array.slice==>返回一个新的数组对象，一个由[begin,end)决定的原数组的浅拷贝
//原始数组不会被改变

//13.Array.join()==>将一个数组的所有元素连接成一个字符串并返回这个字符串
