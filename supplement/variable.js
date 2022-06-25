// number, string, boolean, null, undefined

let number = 2;
let number2 = number;
console.log(number);
console.log(number2);

number2 = 3;
console.log(number);
console.log(number2);

let obj = {
  name: 'ellie',
  age: 5,
};
console.log(obj.name);

let obj2 = obj;
console.log(obj2.name);

obj2.name = 'coco';
console.log(obj.name);
console.log(obj2.name);

