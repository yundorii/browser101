function add (num1, num2) {
  return num1 + num2;
}

function minus (num1, num2) {
  return num1 - num2;
}

function divide (num1, num2) {
  return num1 / num2;
}

// 함수의 인자는 조금 더 의미있는걸로 작성하면 좋음.
function print(a,b,c='penguin') {
  console.log(a,b);
  console.log(c);
  console.log('print');
}

print(4,33);

// add함수가 가리키고 있는 주소가 doSomething에 할당되어서
//둘은 결국 똑같은걸 가리키고 있음.
const doSomething = add;

const result = doSomething(2,3);
console.log(result);

const result2 = add(2,3);
console.log(result2);


function surprise(operator){
  const result = operator(4,2);
  console.log(result);
}

surprise(add);
surprise(minus);
surprise(divide);

// 함수를 전달한다는 것은 함수를 가리키고있는 reference가
// 복사 되어서 전달되는 것이다.