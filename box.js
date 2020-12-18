class Box{

   constructor(x,y,w1,h1){
       this.body=Bodies.rectangle(x,y,w1,h1,{restitution:0.8});
       this.width=w1;
       this.height=h1;
       World.add(world,this.body);
   }
   display(){
       var pos=this.body.position;
       var ang=this.body.angle;
       push();
       translate(pos.x,pos.y);
       rotate(ang);
       rectMode(CENTER);
       fill(255);
       rect(0,0,this.width,this.height);
       pop();
   }

}