
# Snake Game

A classic Snake game built using HTML, CSS, and JavaScript. In this game, the player controls a snake that moves around the board to eat food, growing in size with each food item eaten. The objective is to get the highest score possible without hitting the walls or the snake's own body.



## Features

- Smooth Animations: The snake moves fluidly across the grid.
- Sound Effects: Game includes sound effects for eating food, moving, and game over.
- High Score Tracking: The game saves the highest score in the browser using localStorage.
- Multiple Control Options: The player can control the snake using both arrow keys and WASD keys.
- Responsive Design: The game adapts to different screen sizes.

## How to Play
1. Press any arrow key or W, A, S, D keys to start the game.
2. Move the snake using:
- Arrow Keys (Up, Down, Left, Right)
- W (Up), A (Left), S (Down), D (Right)
3. The objective is to eat the food that appears randomly on the grid, which increases your score and the snake’s length.
4. Avoid hitting the walls or the snake’s own body. If you do, the game ends, and you will need to press a key to restart.
5. The game tracks and displays your current score and high score.
## Installation

To run the game locally, follow these steps:

1. Clone the repository:

```bash
  git clone https://github.com/keshav-koli/snake-game.git

```

2. Navigate to the project directory:

```bash
cd snake-game
```
3. Open index.html in your browser:
```bash
  open index.html
```
## Code Explanation

#### The game logic is powered by JavaScript:

- Snake Movement: The snake moves based on keyboard inputs (Arrow and WASD keys). Its body is updated in each frame to follow the head. 

- Collision Detection: Checks if the snake collides with walls or itself, triggering a game over.
- Food Consumption: If the snake’s head collides with food, the snake grows, and the score increases.
- Local Storage: The high score is saved in localStorage, allowing it to persist between sessions.


## Technologies Used
- HTML: Structure of the game.
- CSS: Styling for the game board and elements.
- JavaScript: Logic for the game engine, movement, collision detection, and scoring.
- Local Storage: To store and display the high score.


## Future Improvements
- Add increasing speed as the snake grows.
- Implement different levels or difficulties.
- Add touch controls for mobile devices.
- Implement a pause and resume feature.

## Contributing
Contributions are welcome! If you'd like to improve the game or add new features, feel free to fork the repository and submit a pull request.
