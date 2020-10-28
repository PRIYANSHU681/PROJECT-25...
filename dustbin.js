class dustbin {
    constructor(x,y) {
      var options = {
          isStatic: true
      }
      this.x=x;
      this.y=y;
      this.width=200;
      this.height=250;
      this.wallThickness=20;
      this.image = loadImage("dustbingreen.png");
      this.bottombody = Bodies.rectangle(this.x,this.y,this.width,this.wallThickness,options);
      this.leftbody=Bodies.rectangle(this.x-this.width/2,this.y-this.height/2,this.wallThickness,this.height,options)
      this.rightbody=Bodies.rectangle(this.x+this.width/2,this.y-this.height/2,this.wallThickness,this.height,options)
      World.add(world, this.bottombody);
      World.add(world, this.leftbody);
      World.add(world, this.rightbody);
    }
    display(){
      var posbottom =this.bottombody.position;
      var posleft =this.leftbody.position;
      var posright =this.rightbody.position;
      push();
      translate(posleft.x,posleft.y)
      rectMode(CENTER);
      angleMode(RADIANS)
      fill(255);
      rotate(this.angle)
      pop()

      push();
      translate(posright.x,posright.y)
      rectMode(CENTER);
      angleMode(RADIANS)
      fill(255);
      rotate(-1*this.angle)
      pop()
      push()
      translate(posbottom.x,posbottom.y)
      rectMode(CENTER);
      fill(255);
      angleMode(RADIANS)
      imageMode(CENTER)
      image(this.image,0,- this.height/2, this.width,this.height);
    }
  };
