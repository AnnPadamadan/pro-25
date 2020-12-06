class Ball
{
	constructor(x,y,r)
	{
		var options={
			isStatic:false,
			restitution:0.3,
			friction:0.5,
			density:2.5

			
			}
			this.image = loadImage("paper.png");
		this.x=x;
		this.y=y;
		this.r=r
		this.body=Bodies.circle(this.x, this.y, this.r/2, options)
		World.add(world, this.body);

	}
	display()
	{
			
			var paperpos=this.body.position;		

			push()
			translate(paperpos.x, paperpos.y);
			rectMode(CENTER)
			strokeWeight(3);
			fill(255);
			ellipse(0,0,this.r, this.r);
			imageMode(CENTER);
			image(this.image, 0,-this.r/15,this.r*1.25,this.r*1.3);
			
			pop()
			
	}

}