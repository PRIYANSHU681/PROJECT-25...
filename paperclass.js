class paperclass{
    constructor (x,y,radius){
        var options={
            isStatic:false,
            restitution:0.2,
            friction:0,
            density:1.2,
            
        }
       this.radius=radius;
       this.image = loadImage("paper.png");
        this.body=Bodies.circle(x,y,this.radius,options)
        World.add(world,this.body);
    }
    display(){
        var pos =this.body.position;
        push();
        translate(pos.x,pos.y)
        fill("pink");
        imageMode(CENTER)
        image(this.image,0,0,this.radius,this.radius);
        console.log("hi");
        pop();
        
        
    }
    
     }
