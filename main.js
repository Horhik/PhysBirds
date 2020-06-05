  const wiw = window.innerWidth 
  const wih = window.innerHeight 
function setup() {
  createCanvas(wiw, wih);
}

function createBird (newpos = {x : wiw * 0.2, y : wih * 0.8}){
 return {
   start: {
     x: newpos.x,
     y: newpos.y
   },
   x: newpos.x,
   y: newpos.y,
   draw: function () {
    fill('red');
    circle(this.x,this.y, 30);
   },
   showStart: function () {
    fill('blue');
    circle(this.start.x,this.start.y, 10);
   },
   getMoveInfo: function () {
    //minuses because at startpoint  x: 0, y :0
    const startx =  this.start.x
    const starty = this.start.y
    const x = this.x
    const y = this.y
    const diffx = - startx - x 
    const diffy = - starty - y
    const hypotenuse = Math.sqrt(diffx**2 + diffy**2)
    console.log(hypotenuse) 
    return {
      drawLine: function () {
        line( startx, starty, x, y)
      }
    }
   },
  }
}


let bird = new createBird()




function draw() {


  if (mouseIsPressed) {
    bird.x = mouseX,
    bird.y = mouseY
  }

  background('#508300');
  bird.getMoveInfo().drawLine()
  bird.showStart()
  bird.draw()
}