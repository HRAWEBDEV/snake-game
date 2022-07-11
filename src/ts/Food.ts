const createRandomNumber = (): number => {
 return Math.floor(Math.random() * 22);
};
// *
class Food {
 x: number = 0;
 y: number = 0;
 constructor() {
  this.create();
 }
 remove(): void {
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
  board?.appendChild(food);
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
