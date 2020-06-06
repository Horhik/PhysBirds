function Slingshot(pos = { x: defaultx, y: defaulty }) {
  const size = 10;
  return {
    x: pos.x,
    y: pos.y,
    show: function () {
      fill("#aa4300");
      circle(this.x, this.y, size);
    },
    drawTraectory: function (spring, bird) {
      for (let t = 0; t < 80; t++) {
        const a = bird.calcSpeed(spring.info().force);
        const sin = spring.info().sin;
        const cos = spring.info().cos;
        const x = bird.x + a * cos * t;
        const y = bird.y + a * sin * t + (g * t ** 2) / 2;
        circle(x, y, 5);
      }
    }
  };
}
function Bird(slingshot, newpos = { x: defaultx, y: defaulty }) {
  return {
    x: newpos.x,
    y: newpos.y,
    size: 30,
    mass: 0.1,
    canMove: false,
    flying: false,
    startVelocity: 0,
    flyingTime: 0,
    speedx: 1 / 56,
    speedy: 1 / 56,
    fly: {
      hypotenuse: 0,
      force: 0,
      sin: 0,
      cos: 0
    },
    draw: function () {
      fill("#ff0000");
      circle(this.x, this.y, this.size);
    },
    calcSpeed: function (force, length) {
      return force / this.mass;
    },
    getMoveInfo: function () {}
  };
}

function Spring(bird, slingshot) {
  const elastCoff = 0.07; // elasticity cofficent of spring
  return {
    //minuses because at startpoint  x: 0, y :0
    draw: function () {
      line(slingshot.x, slingshot.y, bird.x, bird.y);
    },
    info: function () {
      const diffx = slingshot.x - bird.x;
      const diffy = slingshot.y - bird.y;
      const hypotenuse = Math.sqrt(diffx ** 2 + diffy ** 2);
      const cos = diffx / hypotenuse || 0;
      const sin = diffy / hypotenuse || 0;
      const force = elastCoff * hypotenuse;
      return {
        sin,
        cos,
        force,
        hypotenuse
      };
    }
  };
}
