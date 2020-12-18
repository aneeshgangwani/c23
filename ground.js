class Ground{

    constructor(x,y,w1,h1){
        this.body=Bodies.rectangle(x,y,w1,h1,{isStatic:true});
        this.width=w1;
        this.height=h1;
        World.add(world,this.body);
    }
    display(){
        var pos=this.body.position;
        rectMode(CENTER);
        fill(255);
        rect(pos.x,pos.y,this.width,this.height);
    }
 
 }