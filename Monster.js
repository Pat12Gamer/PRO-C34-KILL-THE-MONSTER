class Monster{
    constructor(x, y, r){
        var options = {
            'density': 1,
            'frictionAir': 0.005,
        }
        this.x = x;
        this.y = y;
        this.r = r;
        this.image=loadImage("images/monster-01.png");
        this.body=Bodies.circle(this.x, this.y, (this.r)/2 , options)
        World.add(world, this.body);
    }

    no(){
        this.image = loadImage("images/monster-02.png")
    }

    display(){
        push();
        translate(this.body.position.x, this.body.position.y)
        scale(0.2)
        imageMode(CENTER);
        image(this.image, 0, 0, this.width, this.height);
        pop();
    }
}