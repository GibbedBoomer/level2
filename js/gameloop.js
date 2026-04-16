//Declare my variables

var canvas;
var context;
var timer;
//1000 ms or 1 second / FPS
var interval = 1000/60;
var player;
var ball;

	//Set Up the Canvas
	canvas = document.getElementById("canvas");
	context = canvas.getContext("2d");	
	
	//Instantiate the Player and NPCs
	player = new GameObject(0,450,50,150,"purple");
	ball = new GameObject(450,450,100,100,"red");
	//npc1 = new GameObject(50,500,100,100,"yellow");
	//npc2 = new GameObject(500,500,100,100,"yellow");
	//npc3 = new GameObject(950,500,100,100,"yellow");

	//Set the Animation Timer
	timer = setInterval(animate, interval);

function animate()
{
	//Erase the Screen
	context.clearRect(0,0,canvas.width, canvas.height);	

	//move ball
	ball.move();

	//--------------Bounce of Right----------------------
	if(ball.x >= canvas.width - ball.width/2)
	{
		ball.vx = -ball.vx;	
	}
	//---------------------------------------------------

	//--------------Bounce of Left----------------------
	if(ball.x <= ball.width/2)
	{
		ball.vx = -ball.vx;
	}
	//---------------------------------------------------

	//--------------Bounce of Top----------------------
	if(ball.y <= ball.height/2)
	{
		ball.vy = -ball.vy;
	}
	//---------------------------------------------------

	//--------------Bounce of Bottom----------------------
	if(ball.y >= canvas.height - ball.height/2)
	{
		ball.vy = -ball.vy;
	}
	//---------------------------------------------------
	
	
	//Move the Player to the right
	//if(d)
	//{
		//console.log("Moving Right");
		//player.x += 4;
	//}
	//if(a)
	//{
		//console.log("Moving Left");
		//player.x += -4;
	//}

	if (w) {
		console.log("Moving UP");
		player.y += -4;
	}
	if (s) {
		console.log("Moving Down");
		player.y += 4;
	}
//////////////////////
/////////////////////

	//if (npc1.collisionCheck(player))
	//{
		//npc1.color = "green";
	//}
	//else
	//{
		//npc1.color = "green";
	//}

	//if(npc2.collisionCheck(player))
	//{
		//context.strokeRect(npc2.x-npc2.width/2, npc2.y-npc2.height/2, npc2.width, npc2.height);
	//}

	//if(npc3.collisionCheck(player))
	//{
		//player.x = player.prevX
	//}

//////////////////////
/////////////////////

	//--------------Bounce of Top----------------------
	if(player.y <= player.height/2)
	{
		player.y += 4;
	}
	//---------------------------------------------------

	//--------------Bounce of Bottom----------------------
	if(player.y >= canvas.height - player.height/2)
	{
		player.y -= 4;
	}
	//---------------------------------------------------

	//Update the Screen
	player.drawRect();
	ball.drawCircle();
	//npc1.drawCircle();
	//npc2.drawCircle();
	//npc3.drawCircle();
}
ball.drawCircle();
