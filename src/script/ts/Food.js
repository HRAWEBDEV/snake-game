const createRandomNumber = () => {
    return Math.floor(Math.random() * 22);
};
// *
class Food {
    constructor() {
        this.x = 0;
        this.y = 0;
        this.create();
    }
    remove() {
        const food = document.querySelector('.food');
        if (food) {
            food.remove();
        }
    }
    create() {
        this.remove();
        this.x = createRandomNumber();
        this.y = createRandomNumber();
        const food = document.createElement('div');
        const board = document.querySelector('[data-snake-board]');
        food.className = 'food';
        food.style.gridColumn = `${this.x}`;
        food.style.gridRow = `${this.y}`;
        board === null || board === void 0 ? void 0 : board.appendChild(food);
        return { x: this.x, y: this.y };
    }
    get foodCoords() {
        return { x: this.x, y: this.y };
    }
}
// *
const createFood = () => {
    return new Food();
};
// *
export { createFood };
