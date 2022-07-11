// * import snake
import { createSnake } from './Snake.js';
// * import food
import { createFood } from './Food.js';
// * initializing the game
const initializeSnakeGame = () => {
    let animationId = null;
    const snake = createSnake();
    const food = createFood();
    console.log(food);
    // * keyboard direct snake
    const handleSnakeSteer = (e) => {
        const keyCode = e.keyCode || e.which;
        const keyType = e.key;
        if (keyType.includes('Arrow')) {
            snake.changeDirection(keyType);
            return;
        }
        if (keyCode == 27 && animationId) {
            clearInterval(animationId);
            return;
        }
    };
    window.addEventListener('keydown', handleSnakeSteer);
    // * boundry checking
    const boundryCheck = (min, max) => {
        if (min <= 0 || max >= 21) {
            return true;
        }
        return false;
    };
    // * snake bite itself
    const snakeBiteSnake = (snakeXCoords, snakeYCoords) => {
        for (let j = 0; j < snakeXCoords.length; j++) {
            for (let i = 1; i < snakeXCoords.length; i++) {
                if (snakeXCoords[j] == snakeXCoords[i] &&
                    snakeYCoords[j] == snakeYCoords[i]) {
                    return true;
                }
            }
        }
        return false;
    };
    // * inspect food
    const foodCreatorInspector = (foodCoords, snakeXCoords) => {
        return snakeXCoords.some((item) => {
            return item.x == foodCoords.x && item.y == foodCoords.y ? true : false;
        });
    };
    // * game loop
    animationId = setInterval(() => {
        gameLoope();
    }, 150);
    const gameLoope = () => {
        snake.update();
        const snakeInfo = snake.snakeInfo;
        const foodInfo = food.foodCoords;
        console.log(snakeInfo);
        const snakeXCoords = snakeInfo.map((item) => item.x);
        const snakeYCoords = snakeInfo.map((item) => item.y);
        if (boundryCheck(Math.min(...snakeXCoords), Math.max(...snakeXCoords)) ||
            boundryCheck(Math.min(...snakeYCoords), Math.max(...snakeYCoords)) ||
            snakeBiteSnake(snakeXCoords, snakeYCoords)) {
            clearInterval(animationId);
        }
    };
};
// *
initializeSnakeGame();
