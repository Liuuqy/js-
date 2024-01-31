//instanceof 本质是获取Object类型的隐式原型链
//只能识别对象类型
//使用方法: obj instanceof Object
//function instanceof Function //true
//function instanceof Object //true
function myInstanceof(item, type) {
  let proto = Object.getPrototypeOf(item); //获取对象的原型
  let prototype = type.prototype;
  console.log("右", prototype);
  while (proto !== null) {
    console.log("原型：", proto);
    if (proto === prototype) return true;
    proto = Object.getPrototypeOf(proto);
  }
  return false;
}
function Person() {}
console.log(Person.prototype);
var p = new Person();
console.log(myInstanceof(p, Object));
console.log(myInstanceof(Person, Function));
