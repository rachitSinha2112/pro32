class Block{
    constructor(x,y){
        var options={
            friction:0.0
            
        }
        this.body=Matter.Bodies.rectangle(x,y,50,70,options);
       this.visibility=255
       this.width=50;
       this.height=70;
        World.add(world,this.body);
    }

    display(){
        
//console.log(this.body.speed);

         if(this.body.speed<4){
            var pos=this.body.position
            rectMode(CENTER) 
            fill("pink");
            strokeWeight(2);
            stroke("red");
    
            rect(pos.x,pos.y,this.width,this.height); 
        }
        else{
         push();
            World.remove(world,this.body);
            this.visibility=this.visibility-3;                 
            tint(255,this.visibility)
        //rect(this.body.position.x,this.body.position.y,this.width,this.height);
             World.remove(world,this.body)       
            pop();
          }
        

    }
    score(){
        if(this.visibility<0 && this.visibility>=-1005){
          Score++;
        }
    }   
}