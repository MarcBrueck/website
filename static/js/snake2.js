function setup() {
	createCanvas(400, 400);
	stroke(100); // Set line drawing color to white
	frameRate(10);
	x=20*floor(random(0,20))
	y=20*floor(random(0,20))
	l=20;
	speed=20;
	xvel=0;
	yvel=0;
	counter=0;
	tailsize=0;
	xapple = 20*floor(random(0,20))
	yapple = 20*floor(random(0,20))
	apple()
	xpos=[]
	ypos=[]
	document.addEventListener("keydown",keyPush);
}

function draw() {
	background(0);
	snakehead();
	snakebody();
	apple()
	eatapple()
	rect(380,0,l,l)
}

function keyPush(evt) {
    switch(evt.keyCode) {
        case 37:
           	xvel= -speed
           	yvel=0
            break;
        case 38:
        		xvel= 0
          	yvel=-speed
            break;
        case 39:
            xvel=speed
          	yvel=0
            break;
        case 40:
           	xvel= 0
          	yvel=speed
            break;
    }
}

function snakehead(){
	let c = color(100, 90, 0);
	fill(c);
	rect(x,y,l,l);
	x=x+xvel
	y=y+yvel
	xpos.push(x)
	ypos.push(y)
		
	if (xpos.length>tailsize+1){
		xpos.shift()
		ypos.shift()
	}
	if (x>400-l){
		x=0
	}
	if (y>400-l){
		y=0
	}
	if (x<0){
		x=400-l
	}
	if (y<0){
		y=400-l
	}
}

function snakebody(){
	let c = color(199, 50, 0);
	fill(c);
	for (var k=0; k < xpos.length-1;k++){
		rect(xpos[k],ypos[k],l,l)
	}
}

function apple(){
	let c = color(3, 204, 0);
	fill(c);
	rect(xapple,yapple,l,l)
}

function eatapple(){
	if (x==xapple && y==yapple){
		xapple = 20*floor(random(0,20))
		yapple = 20*floor(random(0,20))
		tailsize=tailsize+1
	}
}





