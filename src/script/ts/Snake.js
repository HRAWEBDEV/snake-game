// * snake
class Snake {
    constructor(snakeSetup) {
        this.direction = 'ArrowUp';
        this.dx = 0;
        this.dy = 1;
        this.snakeBody = [snakeSetup];
        this.create();
    }
    create() {
        const board = document.querySelector('[data-snake-board]');
        if (!board)
            throw new Error('snake borad is not created');
        this.snakeBody.forEach((part) => {
            part.el.className = 'snake';
            part.el.id = `${part.id}`;
            part.el.style.gridRow = `${part.y}`;
            part.el.style.gridColumn = `${part.x}`;
            board.appendChild(part.el);
        });
    }
    changeDirection(direction) {
        this.direction = direction;
        switch (direction) {
            case 'ArrowLeft':
                if (this.dx == +1)
                    return;
                this.dx = -1;
                this.dy = 0;
                break;
            case 'ArrowRight':
                if (this.dx == -1)
                    return;
                this.dx = +1;
                this.dy = 0;
                break;
            case 'ArrowUp':
                if (this.dy == +1)
                    return;
                this.dx = 0;
                this.dy = -1;
                break;
            case 'ArrowDown':
                if (this.dy == -1)
                    return;
                this.dx = 0;
                this.dy = +1;
                break;
        }
    }
    add() { }
    paint() { }
    update() {
        this.snakeBody.forEach((part) => {
            part.x += this.dx;
            part.y += this.dy;
            part.el.style.gridRow = `${part.y}`;
            part.el.style.gridColumn = `${part.x}`;
        });
    }
    get snakeInfo() {
        return this.snakeBody;
    }
}
// * snake creator
const createSnake = () => {
    const snakeHead = document.createElement('div');
    const snakeSetup = {
        id: 1,
        x: 11,
        y: 11,
        el: snakeHead,
    };
    return new Snake(snakeSetup);
};
// * export
export { createSnake };
