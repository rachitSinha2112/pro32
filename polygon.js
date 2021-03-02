class Polygon {
    constructor(){
        
    this.image=loadImage("polygon.png")    
    this.body=Bodies.circle(100,600,20)
  World.add(world,this.body)  
}
    display(){
        imageMode(CENTER);
        image(this.image,this.body.position.x,this.body.position.y,60,60);
    }
}