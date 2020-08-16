class Static {
    constructor() {
       var options = {
       isStatic: true,
       } 
        this.body = Bodies.rectangle(random(10, windowWidth - 20), random(100, windowHeight - 50), 50, 50, options);
        World.add(world, this.body);
        this.width = 50;
        this.height = 50;
        this.body.velocity.x = 1;
    }

    display () {
        rectMode(CENTER);
        fill(255);
        rect(this.body.position.x, this.body.position.y, this.width, this.height);

    }

}