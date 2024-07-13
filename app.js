let inputDir = { x: 0, y: 0 };
let scorebox=document.querySelector('#scorebox');
let Hiscorebox=document.querySelector('#Hiscorebox');
const gameOverSound = new Audio("gameover.mp3");
const moveSound = new Audio("move.mp3");
const foodSound = new Audio("food.mp3");
const musicSound = new Audio("music.mp3");
let board = document.querySelector("#board");
let snake_Arr = [{ x: 13, y: 15 }]; //Snake is a Array
let food = { x: 3, y: 5 }; //food is a object
let speed = 10;
let lastTime = 0;
let score = 0;
let HiScoreVal;
// Render Game
function main(ctime) {
  window.requestAnimationFrame(main);
  if ((ctime - lastTime) / 1000 < 1 / speed) {
    return;
  }
  lastTime = ctime;
  GameEngine();
}
// console.log(ctime);

function isCollide(snake) {
  // if you bump into yourself
  for (let i = 1; i < snake.length; i++) {
    if (snake[i].x === snake[0].x && snake[i].y === snake[0].y) {
      return true; 
    }
  }
  // If you bump to the wall
  if (
    snake[0].x >= 18 ||
    snake[0].x <= 0 ||
    snake[0].y >= 18 ||
    snake[0].y <= 0
  ) {
    return true;
  }
  return false;
}

function GameEngine() {
  if (isCollide(snake_Arr)) {
    gameOverSound.play();
    musicSound.pause();
    inputDir = { x: 0, y: 0 };
    alert("Game Over press any key to play again");
    snake_Arr = [{ x: 13, y: 15 }];
    // musicSound.play();
    score = 0;
    scorebox.innerHTML="Score: " + score;
    return;
  }
  // if you have eaten the food ,increment the score and regenrate the food
  if (snake_Arr[0].x === food.x && snake_Arr[0].y === food.y) {
    foodSound.play();
    score++;
    if(score>HiScoreVal){
        HiScoreVal=score;
        localStorage.setItem('hiscore',JSON.stringify(HiScoreVal));
        Hiscorebox.innerHTML='Hi Score: '+HiScoreVal;
    }
    scorebox.innerHTML="Score: " + score;
    snake_Arr.unshift({
      x: snake_Arr[0].x + inputDir.x,
      y: snake_Arr[0].y + inputDir.y,
    });
    let a = 2;
    let b = 16;
    food = {
      x: Math.round(a + (b - a) * Math.random()),
      y: Math.round(a + (b - a) * Math.random()),
    };
  }
  //   moving the snake
  for (let i = snake_Arr.length - 2; i >= 0; i--) {
    snake_Arr[i + 1] = { ...snake_Arr[i] }; //to solve refrennce problem
  }
  snake_Arr[0].x += inputDir.x;
  snake_Arr[0].y += inputDir.y;

  // Display snake
  board.innerHTML = "";
  snake_Arr.forEach((e, index) => {
    let snakeElement = document.createElement("div");
    snakeElement.style.gridRowStart = e.y;
    snakeElement.style.gridColumnStart = e.x;
    if (index === 0) {
      snakeElement.classList.add("head");
    } else {
      snakeElement.classList.add("big");
    }
    board.appendChild(snakeElement);
  });
  // Display food
  let foodElement = document.createElement("div");
  foodElement.style.gridRowStart = food.y;
  foodElement.style.gridColumnStart = food.x;
  foodElement.classList.add("food");
  board.appendChild(foodElement);
}

// Main Logic
let hiscore=localStorage.getItem("hiscore");
if(hiscore===null){
    HiScoreVal=0; 
    localStorage.setItem('hiscore',JSON.stringify(HiScoreVal));
}
else{
    HiScoreVal=JSON.parse(hiscore);
    Hiscorebox.innerHTML='Hi Score: '+HiScoreVal;

}

window.requestAnimationFrame(main);
window.addEventListener("keydown", (e) => {
  inputDir = { x: 0, y: 0 }; //start the game
  moveSound.play();
  switch (e.key) {
    case "ArrowUp":
      inputDir.x = 0;
      inputDir.y = -1;
      console.log("ArrowUp");
      break;
    case "ArrowDown":
      inputDir.x = 0;
      inputDir.y = 1;
      console.log("ArrowDown");
      break;
    case "ArrowLeft":
      inputDir.x = -1;
      inputDir.y = 0;
      console.log("ArrowLeft");
      break;
    case "ArrowRight":
      inputDir.x = 1;
      inputDir.y = 0;
      console.log("ArrowRight");
      break;
    case "w":
      inputDir.x = 0;
      inputDir.y = -1;
      console.log("w");
      break;
    case "s":
      inputDir.x = 0;
      inputDir.y = 1;
      console.log("s");
      break;
    case "a":
      inputDir.x = -1;
      inputDir.y = 0;
      console.log("a");
      break;
    case "d":
      inputDir.x = 1;
      inputDir.y = 0;
      console.log("d");
      break;
    default:
      break;
  }
});
