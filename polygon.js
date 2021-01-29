class Polygon {
    constructor(x, y, radiusX) {
        this.x = x;
        this.y = y;
        this.radiusX = radiusX;
        this.body = Bodies.circle(x, y, radiusX);

        World.add(world, this.body);
    }
    display() {
        push();
        translate(this.body.position.x, this.body.position.y);
        fill(250, 245, 0);
        ellipseMode(RADIUS);
        ellipse(0, 0, this.radiusX);
        pop();
    }
}