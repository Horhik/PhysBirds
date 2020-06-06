function setup() {
  createCanvas(wiw, wih);
}

let slingshot = new Slingshot();
let bird = new Bird(slingshot);
let spring = new Spring(bird, slingshot);

function mouseReleased() {
  bird.canMove = false;
  bird.flying = true;
}
let a = 0;
let sin = 0;
let cos = 0;
function draw() {
  background("#453323");
  if (!bird.flying) {
    spring.draw();
    if (mouseIsPressed && (mouseIn(bird, "circle") || bird.canMove)) {
      (bird.x = mouseX), (bird.y = mouseY);
      bird.canMove = true;
      slingshot.drawTraectory(spring, bird);
      a = bird.calcSpeed(spring.info().force);
      sin = spring.info().sin;
      cos = spring.info().cos;
    }
  }

  if (bird.flying) {
    x = getFlyInfo(bird, spring, a, sin, cos).x;
    y = getFlyInfo(bird, spring, a, sin, cos).y;
    bird.x = x;
    bird.y = y;
    bird.flyingTime += 1;
    // change direction by x axis
    if (objectOverScreen(bird, "circle").x) {
      document.location.reload();
      bird.flying = false

    }
    // change direction by y axis
    if (objectOverScreen(bird, "circle").y) {
      bird.speedy = (bird.speedy * -1)/2;
    }
  }

  slingshot.show();
  bird.draw();
  bird.getMoveInfo();
}
