//必须要等待上一个任务返回的promise才能执行下一个then调用
function Quene() {
  //1.创建空对象
  //2.该对象的__proto__属性指向构造函数的prototype属性
  //3.this指向该实例对象
  //4.赋值初始化
  this.Quene = [];
}
//箭头函数与具名函数区别
Quene.prototype.task = function (time, callback) {
  // console.log(this);
  this.Quene.push({ time, callback });
  return this;
};
Quene.prototype.start = function () {
  let res1 = Promise.resolve("first");
  this.Quene.forEach((item, index) => {
    //下一个item等待上一个item的过程
    console.log(res1);
    res1 = res1.then(() => {
      return new Promise((resolve, reject) => {
        setTimeout(() => {
          item.callback();
          resolve(index);
        }, item.time);
      });
    });
    return res1;
  });
};
new Quene()
  .task(1000, () => {
    console.log(1);
  })
  .task(2000, () => {
    console.log(2);
  })
  .task(1000, () => {
    console.log(3);
  })
  .start();
// const p1 = new Promise((resolve, reject) => {
//   resolve("test1");
// }).then(() => {
//   return new Promise((resolve, reject) => {});
// });
// console.log(p1);
// const p2 = p1.then(() => {
//   return new Promise((resolve, reject) => {
//     setTimeout(() => {
//       console.log(1);
//       resolve();
//     }, 1000);
//   });
// });
// const p3 = p2.then(() => {
//   return new Promise((resolve, reject) => {
//     setTimeout(() => {
//       console.log(2);
//       resolve();
//     }, 2000);
//   });
// });
// const p4 = p3.then(() => {
//   console.log(p3);
//   setTimeout(() => {
//     console.log(3);
//   }, 1000);
// });
// console.log(p4);
