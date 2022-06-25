
// true: -1, 'hello', 'false', [], {}
// false: 0, -0, '', null, undefined, NaN

let num = 'df';  //undefined

if(num) {
  console.log('true!');
} 

//위에 if문을 사용한 것과 동일하다.
num && console.log(num);


let obj = {
  name: 'penguin'
};  

if (obj) {
  console.log(obj.name);
}

//위에 if문을 사용한 것과 동일하다.
obj && console.log(obj.name);