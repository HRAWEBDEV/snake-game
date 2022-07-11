interface SnakeSetup {
 id: number;
 x: number;
 y: number;
 el: HTMLDivElement;
}
// * snake
class Snake {
 direction: string = 'ArrowUp';
 dx: number = 0;
 dy: number = 1;
 snakeBody: SnakeSetup[];
 constructor(snakeSetup: SnakeSetup) {
  this.snakeBody = [snakeSetup];
  this.create();
 }
 create(): void {
  const board = document.querySelector(
   '[data-snake-board]'
  ) as HTMLElement | null;
  if (!board) throw new Error('snake borad is not created');
  this.snakeBody.forEach((part) => {
   part.el.className = 'snake';
   part.el.id = `${part.id}`;
   part.el.style.gridRow = `${part.y}`;
   part.el.style.gridColumn = `${part.x}`;
   board.appendChild(part.el);
  });
 }
 changeDirection(direction: string): void {
  this.direction = direction;
  switch (direction) {
   case 'ArrowLeft':
    if (this.dx == +1) return;
    this.dx = -1;
    this.dy = 0;
    break;
   case 'ArrowRight':
    if (this.dx == -1) return;
    this.dx = +1;
    this.dy = 0;
    break;
   case 'ArrowUp':
    if (this.dy == +1) return;
    this.dx = 0;
    this.dy = -1;
    break;
   case 'ArrowDown':
    if (this.dy == -1) return;
    this.dx = 0;
    this.dy = +1;
    break;
  }
 }
 add(): void {}
 paint(): void {}
 update(): void {
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
