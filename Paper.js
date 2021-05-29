class Paper
{
	constructor(x,y,w,h)
	{
		var options=
        {
            'restitution':0.5,
            'density':1.2,
            'friction':0

	    }
		this.x=x;
		this.y=y;
		this.w=w;
        this.h=h;
        this.image=loadImage("paper.png");
		this.body=Bodies.rectangle(x, y,w,h, options);
 		World.add(world, this.body);

	}
	display()
	{
			
			var groundPos=this.body.position;		

			push()
			translate(groundPos.x, groundPos.y);
			fill(128,128,128);
            imageMode("CENTER");
			image(this.image,0,0,this.w,this.h);
			pop()
			
	}

}