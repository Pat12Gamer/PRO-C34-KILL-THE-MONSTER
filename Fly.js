class Fly{
    constructor(bodyA, pointB){
        var options = {
            'bodyA': bodyA,
            'pointB': pointB,
            'stiffness': 0.04,
            'length': 200
        }
        this.pointB = pointB
        this.rope = Constraint.create(options)
        World.add(world, this.rope)
    }
    display(){
        var pointA = this.rope.bodyA.position
        var pointB = this.pointB
        push();
        stroke("10")
        fill("black")
        line(pointB.x, pointB.y, pointA.x, pointA.y)
        pop();
    }

    fly(){
        this.rope.bodyA = null;
    }
}