const bubblesArray = [];

class Bubble {
  constructor() {
    this.x = surfer.x;
    this.y = surfer.y;
    this.size = Math.random() * 7 + 3;
    this.speedY = Math.random() * 1 - 0.5;
    this.color = "hsla(" + (180 + hue / 10) + ",100%, 50%, 0.8)";
  }
  update() {
    this.x -= gamespeed;
    this.y += this.speedY;
  }
  draw() {
    ctx.fillStyle = this.color;
    ctx.beginPath();
    ctx.arc(this.x, this.y, this.size, 0, Math.PI * 2);
    ctx.fill();
  }
}

function handleBubbles() {
  bubblesArray.unshift(new Bubble());
  for (let count = 0; count < bubblesArray.length; count++) {
    bubblesArray[count].update();
    bubblesArray[count].draw();
  }
  if (bubblesArray.length > 200) {
    for (let count = 0; count < 20; count++) {
      bubblesArray.pop(bubblesArray[count]);
    }
  }
}
