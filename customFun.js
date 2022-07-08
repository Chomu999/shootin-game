


class NewBox{
constructor(x,y,width,height,color,health){

this.x=x;
this.y=y;
this.color=color;
this.width=width;
this.height=height;
this.speed={x:0,y:0};
this.losin=false;
this.health=health;
}
draw(){

ctx.fillStyle=this.color;
ctx.fillRect(this.x,this.y,this.width,this.height);

}




update(){
this.draw();

this.x += this.speed.x;
this.y += this.speed.y;



}


}






//

class Parlicle{
constructor(left,right,y){

this.left=left;
this.right=right;


this.y=y;
this.size=randint(1,4);
this.colorAlpha=randint(10,99);
this.color=`rgba(255,255,255,0.${this.colorAlpha}`;
this.weight=0.06;
this.speed={x:0,y:0};
}
draw(){
ctx.fillStyle=this.color;
ctx.beginPath();
//for left smoke
ctx.arc(this.left,this.y,this.size,0,Math.PI * 2);

//for right smoke
ctx.arc(this.right,this.y,this.size,0,Math.PI * 2);

ctx.fill();
}
update(){
    
this.draw()
//this.y += gameSpeed;
//this.speed.y -= this.weight
//this.y += this.speed.y;



if(this.size >= 0.3){
this.size += 0.14;
}

}

}


// arrow system


class Arrow{
constructor(x,y,size,color){
this.x=x
this.y=y
this.width=size;
this.height=size;
this.color=color
this.speed={x:0,y:0}
this.damege=10
}

draw(){
ctx.beginPath();
ctx.fillStyle=this.color;
ctx.fillRect(this.x,this.y,this.width,this.height);
ctx.fill();
//ctx.lineWidth='40px';
ctx.strokeStyle='#00FF46';
ctx.stroke();
}
update(){
this.draw();

this.x += this.speed.x;
this.y += this.speed.y;


}

}

























function handlePlayerParlicles(left,right,y){

playerParlicles.unshift(new Parlicle(left,right,y));

playerParlicles.forEach((parlicle)=>{

parlicle.update();
parlicle.y += gameSpeed;

})

if(playerParlicles.length > 19)playerParlicles.pop();

}



function handleEnemiesParlicles(left,right,y){

enemiesParlicles.unshift(new Parlicle(left,right,y));

enemiesParlicles.forEach((parlicle)=>{

parlicle.update();
parlicle.y -= gameSpeed;

})

if(enemiesParlicles.length > 19)enemiesParlicles.pop();

}







//handleParlicles()


function swpanEnemies(){



let health=3;

let x=randint(player.width*2,cvs.width - player.width)

enemies.unshift(new NewBox(x, -player.height,player.width,player.height,'#FF00D6',health));
CurrSwpanEnemiesCount++;
}


//fire fun


const fire=()=>{
arrows.unshift(new Arrow(
    player.x + player.width/2 -2,
    player.y,3,'blue'
))
}



let swpanEnemiesFun = setInterval(swpanEnemies, 1*EnemiesSwpanSpeed);











 
//custom function




function randint(min,max){
return Math.floor(Math.random() * (max-min) + min)
}




function DrawSpite(img,sX,sY,sW,sH,dX,dY,dW,dH){
ctx.drawImage(img,sX,sY,sW,sH,dX,dY,dW,dH)
}

function IScollision(ObjectA,ObjectB){
return (ObjectA.x + ObjectA.width >= ObjectB.x &&
ObjectA.x <= ObjectB.x + ObjectB.width &&
ObjectA.y + ObjectA.height >= ObjectB.y &&
ObjectA.y <= ObjectB.y + ObjectB.height)
}

/// console.log();
function see(see){
console.log(see);
}



function CTXtext(c,t,x=cvs.width/1.76,y=15){
ctx.fillStyle=c;
ctx.fillText(`${t}`,x,y);
}



function ISButtonEvent(traget,condion,fun){
traget.addEventListener(condion,fun);
}




//for reSize the window
const reSize=()=>{



let mw=window.innerWidth;
let mh=window.innerHeight;
let fw,fh;


fw= mw/100;
fh= mh/100;



if(mw <= mh){
cvs.width= fw*90;
cvs.height= fh*85;
playerY=500;
homeY=560;
}else{

cvs.width= fw*60;
cvs.height= fh*90;
playerY=220;
homeY=250;
}

}
