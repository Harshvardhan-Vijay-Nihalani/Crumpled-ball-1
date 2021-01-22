class Paper{
    constructor(x,y){
        var paper_options={
            'restitution':0.3,
            'friction':0.5,
            'density':1.2
        }
        
        this.body=Bodies.circle(x,y,30, paper_options);
	    World.add(world, this.body);
    }
    
    display(){
        ellipseMode(CENTER);
        ellipse(this.body.position.x,this.body.position.y,30,30);
    }
}