let direction = { x: 0, y: 0 };
const gameOverSound = new Audio('gameover.mp3');
const moverSound = new Audio('move.mp3');
const foodSound = new Audio('food.mp3');
const musicSound = new Audio('music.mp3');
let board = document.querySelector('#board');
let snake_Arr = [{ x: 13, y: 15 }];//Snake is a Array
let food = { x: 3, y: 5 };//food is a object
let speed = 2;
let lastTime = 0;



// Render Game
function main(ctime) {
    window.requestAnimationFrame(main);
    if ((ctime - lastTime) / 1000 < 1 / speed) {
        return
    }
    lastTime = ctime;
    // console.log(ctime);
}



// Display snake 
board.innerHTML = "";
snake_Arr.forEach((e,index) => {
    let snakeElement = document.createElement('div');
    snakeElement.style.gridRowStart = e.y;
    snakeElement.style.gridColumnStart = e.x;
    if(index===0){
        snakeElement.classList.add('head');
    }
    else{
        snakeElement.classList.add('big');
    }
    board.appendChild(snakeElement);
})
// Display food
let foodElement = document.createElement('div');
foodElement.style.gridRowStart = food.y;
foodElement.style.gridColumnStart = food.x;
foodElement.classList.add('food');
board.appendChild(foodElement);




// Main Logic
window.requestAnimationFrame(main);