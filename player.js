class Player {
    constructor() { 
        this.body = Bodies.rectangle(random(10, windowWidth - 20), 0, 50, 50);
        World.add(world, this.body);
        this.width = 50;
        this.height = 50;
    }

    display () {
        rectMode(CENTER);
        fill(0,0,255);
        push();
        translate(this.body.position.x, this.body.position.y);
        rotate(this.body.angle);
        rect(0, 0, this.width, this.height);
        pop();

    }

}