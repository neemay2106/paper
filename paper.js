class paperclass{
    constructor(x,y){
       var  options={
            isStatic  :true,
            restitution:0.3,
            friction:0.5,
            density:0.2,
        }
    
    this.body = Bodies.rectangle(x, y, 50, 50, options);
    this.width = 50;
    this.height = 50;
    
    World.add(world, this.body);
    }
    display(){
        var pos =this.body.position;
        rectMode(CENTER);
        fill("brown");
        rect(pos.x, pos.y, this.width, this.height);
      }
      
  

}
function keyPressed(){ 
	if(keyCode === UP_ARROW){
		Matter.Body.applyForce(paper.body,paper.body.position,{x:85,y:-85});
	}
}