const wiw = window.innerWidth;
const wih = window.innerHeight;
const g = 1;
const m = (wiw * wih) / 100000;
const defaultx = wiw * 0.2;
const defaulty = wih * 0.6;

function mouseIn(obj, shape) {
  const size = obj.size;
  const x = obj.x;
  const y = obj.y;
  switch (shape) {
    case "circle":
      const radius = size / 2;
      return (
        mouseX <= x + radius &&
        mouseX >= x - radius &&
        mouseY >= y - radius &&
        mouseY <= y + radius
      );
  }
}

function objectOverScreen(obj, shape) {
  const size = obj.size;
  const x = obj.x;
  const y = obj.y;
  switch (shape) {
    case "circle":
      const radius = size / 2;
      return {
        x: x + radius >= wiw || x - radius <= 0,
        y: /*y - radius <= 0 ||*/ y + radius >= wih,
      };
  }
}

function getFlyInfo(bird, spring, a, sin, cos) {
  return {
    x: bird.x + a * cos * bird.flyingTime * bird.speedx,
    y:
      bird.y +
      (a * sin * bird.flyingTime + (g * bird.flyingTime ** 2) / 2) *
        bird.speedy,
  };
}
