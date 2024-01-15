// function Person(name, age) {
//   this.name = name;
//   this.age = age;
//   this.test1 = function () {
//     const arrowFunc = () => {
//       console.log(this.name);
//       console.log(this.age);
//     };
//     arrowFunc();
//   };
//   this.test2 = () => {
//     console.log(this.name);
//     console.log(this.age);
//   };
// }

// let per1 = new Person("test1", 23);
// console.log(per1.test1);
// per1.test1(); //test里的this指向per1，箭头函数外部有函数test，因此箭头函数的this为test的this，即为per1.因此输出为test1,23
// per1.test2(); //test2箭头函数外部有函数为Person，this指向per1，因此结果同上
// let test3 = per1.test1;
// test3(); //test3为普通调用，arrowFunc里的this为为test3的this即为window，因此为undefined

// let test4 = per1.test2; //箭头函数的this，定义了之后就不会改变
// test4(); //
// let test5 = () => {
//   console.log(this.name);
//   console.log(this.age);
// };
// test5(); //undefined

var x = 3;
var y = 4;
var obj = {
  x: 1,
  y: 6,
  getX: function () {
    var x = 5;
    return (() => {
      return this.x;
    })(); //箭头函数的this看外部有无函数，与外层函数的this相同，即为obj，因此为1
  },
  getY: function () {
    var y = 7;
    return this.y;
  },
};
console.log(obj.getX()); // 3
console.log(obj.getY()); // 6
