class Bob{
    constructor(x,y,r){
        var options = {
            'restitution':0.3,
            'friction':0,
            'density':0.35
        }

        this.body = Bodies.circle(x,y,r,options);
        this.r = r;

        World.add(world,this.body);
    }

    display(){
        var pos = this.body.position;
        var angle = this.body.angle;

        push();
        translate(pos.x,pos.y);
        rotate(angle);
        ellipseMode(RADIUS);
        fill("purple");
        ellipse(pos.x,pos.y,this.r,this.r);
        pop();
    }
}

