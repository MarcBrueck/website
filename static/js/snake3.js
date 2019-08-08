function setup() {
	var cnv = createCanvas(400, 400);
	cnv.parent("portfolio");
	cnv.position(windowWidth/2-200,300); //windowWidth/2
	stroke(100); // Set line drawing color to white
	frameRate(10);
	x=20*floor(random(0,20))
	y=20*floor(random(0,20))
	l=20;
	speed=20;
	xvel=0;
	yvel=0;
	counter=0;
	tailsize=3;
	xapple = 20*floor(random(0,19))
	yapple = 20*floor(random(0,19))
	apple()
	xpos=[]
	ypos=[]
	step=0
	gameproperty='alive'
	document.addEventListener("keydown",keyPush);
}

function draw() {
	if (gameproperty=='alive'){
		move();
		background(0);
		snakehead();
		snakebody();
		apple()
		eatapple()
		death()
		if (xvel!=0 || yvel!=0){
			step+=1
		}
	}
}

function keyPush(evt) {
    switch(evt.keyCode) {
        case 65:
           	xvel= -speed
           	yvel=0
            break;
        case 87:
        	xvel= 0
          	yvel=-speed
            break;
        case 68:
            xvel=speed
          	yvel=0
            break;
        case 83:
           	xvel= 0
          	yvel=speed
            break;
    }
}

function snakehead(){
	let c = color(100, 90, 0);
	fill(c);
	rect(x,y,l,l);
	xpos.push(x)
	ypos.push(y)
		
	if (xpos.length>tailsize){
		xpos.shift()
		ypos.shift()
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
		xapple = 20*floor(random(0,19))
		yapple = 20*floor(random(0,19))
		tailsize=tailsize+1
	}
}

function move(){
	x=x+xvel
	y=y+yvel

	if (x>380){
		x=0
	}
	if (y>380){
		y=0
	}
	if (x<0){
		x=380
	}
	if (y<0){
		y=380
	}
}

function death(){
	if (step>tailsize+10){
		for (var i = 0; i < xpos.length -1; i++) {
			if (xpos[xpos.length -1]==xpos[i] && ypos[ypos.length -1]==ypos[i]){
				tailsize=3
				for (var k1 = 0; k1<xpos.length-tailsize ; k1++) {
					xpos.shift()
					ypos.shift()
				}
				console.log('you died')
				document.getElementById("p1").innerHTML = "You died ";
				gameproperty='dead'
			}	
		}
	}
}

function reload(){
	location.reload();
}


