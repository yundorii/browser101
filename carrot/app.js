'use strict';

const CARROT_SIZE = 80;
const CARROT_COUNT = 5;
const BUG_COUNT = 5;
const GAME_DURATION_SEC = 5; 

const icon = document.querySelector('.fa-solid');

const gameBtn = document.querySelector('.game_button');
const gameTimer = document.querySelector('.game_timer');
const gameScore = document.querySelector('.game_score');

const field = document.querySelector('.game_field');
const fieldRect = field.getBoundingClientRect();

const popUp = document.querySelector('.pop-up');
const popUpMessage = document.querySelector('.pop-up_message');
const popUpRefresh = document.querySelector('.pop-up_refresh');

let started = false;
let score = 0;
let timer = undefined;

field.addEventListener('click',onFieldClick)
gameBtn.addEventListener('click',()=> {
  if(started) {
    stopGame();
  } else {
    startGame(); 
  }
});
popUpRefresh.addEventListener('click',()=> {
  startGame();
  hidePopUp();
})

function startGame() {
  started = true;
  initGame();
  showStopButton();
  showTimerAndScore();
  startGameTimer();
}

function stopGame() {
  started = false;
  stopGameTimer();
  hideStartButton();
  showPopUpWithText('REPLAY?');
}

function finishGame(text) {
  started = false;
  stopGameTimer();
  hideStartButton();
  showPopUpWithText(text);
}

function showPlayButton() {

  gameBtn.style.visibility = 'visible';
  icon.classList.add('fa-play');
  icon.classList.remove('fa-pause');
}

function showStopButton() {
  gameBtn.style.visibility = 'visible';
  icon.classList.add('fa-pause');
  icon.classList.remove('fa-play');
}

function hideStartButton() {
  gameBtn.style.visibility = 'hidden';
}

function showTimerAndScore() {
  gameTimer.style.visibility = 'visible';
  gameScore.style.visibility = 'visible';
}

function startGameTimer() {
  let remainingTimeSec = GAME_DURATION_SEC;
  updateTimerText(remainingTimeSec);
   timer = setInterval(()=> {
    if(remainingTimeSec <= 0 ) {
      clearInterval(timer);
      finishGame();
      showPopUpWithText('TIME OVER!');
      return; 
    }
    updateTimerText(--remainingTimeSec); 
  },1000);
}

function stopGameTimer() {
  clearInterval(timer);
}

function updateTimerText(time) {
  const minutes = Math.floor(time / 60);
  const seconds = Math.floor(time % 60);
  gameTimer.innerText = `${minutes}:${seconds}`
}

function showPopUpWithText(text) {
  popUpMessage.innerText = text;
  popUp.classList.remove('pop-up_hide');
}

function hidePopUp() {
  popUp.classList.add('pop-up_hide');
}

function initGame() {
  field.innerHTML = ``;
  gameScore.innerText = CARROT_COUNT;
  score = 0;
  addItem('carrot',CARROT_COUNT,'img/carrot.png');
  addItem('bug',BUG_COUNT,'img/bug.png');
}

function onFieldClick(e) {
  if(!started) {
    return;
  }
  const target = e.target;
  if(target.matches('.carrot')) {
    target.remove();
    score++;
    updateScoreBoard(score);
    if(score === CARROT_COUNT) {
      finishGame('이겼다!');
    }
  } else if(target.matches('.bug')) {
    finishGame('졌어요!');
  }
}


function updateScoreBoard() {
  gameScore.innerText = CARROT_COUNT - score;
}

function addItem(className, count,imgPath) {
  const x1 = 0;
  const y1 = 0;
  const x2 = fieldRect.width - CARROT_SIZE;
  const y2 = fieldRect.height - CARROT_SIZE;

  for(let i= 0; i < count; i++) {
    const item = document.createElement('img');
    item.setAttribute('class',className);
    item.setAttribute('src', imgPath);
    item.style.position = 'absolute';
    const x = randomNumber(x1, x2);
    const y = randomNumber(y1, y2);

    item.style.left = `${x}px`;
    item.style.top = `${y}px`
    
    field.appendChild(item);
  }
}

function randomNumber(min, max) {
  return Math.random() * (max - min) + min;
}