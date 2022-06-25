class Counter {
  constructor(runEveryFiveTimes) {
    this.counter = 0;
    this.callback = runEveryFiveTimes;
  }

  //class에서 함수선언을 할 때는 function키워드 작성 안해도 됨
  increase() {
    this.counter++;
    console.log(this.counter);
    if(this.counter % 5 === 0) {
      this.callback && this.callback(this.counter);
    }
  }
}


function printSomething (num) {
  console.log(`yo! ${num}`);
}

function alertNum(num) {
  alert(`wow! ${num}`)
}

// new라는 키워드를 이용해 class를 만들게 되면, construntor가 실행됨.
const printCounter = new Counter(printSomething);
const alertCounter = new Counter(alertNum);

/* 
  가능하면 class를 완전히 다 만들어진 완전체로 만들기 보다는, 
  원하는 기능을 끼워 맞춰서 재조립이 가능하도록 만드는 것이 좋음
*/