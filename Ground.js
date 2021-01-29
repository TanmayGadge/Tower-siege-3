class Ground {
  constructor(x, y, width, height) {
    var options = {
      isStatic: true
    }
    this.width = width;
    this.height = height;
    this.body = Bodies.rectangle(x, y, width, height, options);
    World.add(world, this.body);
  }
  display() {
    push();
    translate(this.body.position.x, this.body.position.y);
    rectMode(CENTER);
    fill(187, 66, 66);
    rect(0, 0, this.width, this.height);
    pop();
  }
};
