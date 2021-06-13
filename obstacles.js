const obstaclesArray = [];

const obstaclesImage = new Image();
obstaclesImage.src = "plant.png";

class Obstacle {
  constructor() {
    this.top = (Math.random() * canvas.height) / 3 + 20;
    this.bottom = (Math.random() * canvas.height) / 2;
    this.x = canvas.width;
    this.width = 40;
    this.color = "brown";
    this.counted = false;
  }
  draw() {
    ctx.fillStyle = this.color;
    ctx.fillRect(this.x, 0, this.width, this.top);
    // ctx.fillRect(this.x, canvas.height - this.bottom, this.width, this.bottom);
    ctx.drawImage(
      obstaclesImage,
      0,
      0,
      679,
      862,
      this.x,
      canvas.height - this.bottom,
      this.width,
      this.bottom
    );
  }
  update() {
    this.x -= gamespeed;
    if (!this.counted && this.x < surfer.x) {
      score++;
      this.counted = true;
    }
    this.draw();
  }
}

function handleObstacles() {
  if (frame % 50 === 0) {
    obstaclesArray.unshift(new Obstacle());
  }
  for (let count = 0; count < obstaclesArray.length; count++) {
    obstaclesArray[count].update();
  }
  if (obstaclesArray.length > 20) {
    obstaclesArray.pop(obstaclesArray[0]);
  }
}
