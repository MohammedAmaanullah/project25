class BaseClass{
    constructor(x,y,width,height){
        var options = {
            "restitution" : 1.0,
            "friction" : 0.5, 
            "density" : 1.0
        }
        this.body = Bodies.rectangle(x,y,width,height,options);
        this.width = width;
        this.height = height;
        this.image = loadIMage("sprites/base.png");
        World.add(world, this.body);
    }
    diplay(){
        var angle = this.body.angle;
        push();
        translate(this.body.position.x, this.body.position.y);
        rotate(angle);
        imageMode(CENTER);
        this.image(this.image,0,0,this.width,this,height);
        pop();
    }

}