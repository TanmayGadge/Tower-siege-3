class SlingShot {
    constructor(bodyA, pointB) {
        var options = {
            bodyA: bodyA,
            pointB: pointB,
            stiffness: 0.04,
            length: 20
        }

        this.sling = Constraint.create(options);
        World.add(world, this.sling);
        console.log(this.sling);
    }

    fly() {
        this.sling.bodyA = null;
    }
    attach(){
        this.sling.bodyA = polygon.body;
    }
    

    display() {
        if (this.sling.bodyA) {
            var pointA = this.sling.bodyA.position;
            var pointB = this.sling.pointB;
            push();
            stroke(63, 224, 208);
            strokeWeight(3);
            line(pointA.x, pointA.y, pointB.x, pointB.y);
            pop();
        }
    }

}
