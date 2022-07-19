


class NewBox{
constructor(x,y,size,color='rgba(0,0,0,0.0001)',health=1){

this.x=x;
this.y=y;
this.size=size;
this.color=color;
this.width=this.size;
this.height=this.size;
this.speed={x:0,y:0};
this.losin=false;
this.health=health;
}
draw(ctx){

ctx.fillStyle=this.color;
ctx.fillRect(this.x,this.y,this.width,this.height);

}




update(){
//this.draw();

this.x += this.speed.x;
this.y += this.speed.y;



}


}




class NewCircle{
constructor(x,y,radius,color='rgba(0,0,0,0)',health=1){

this.x=x;
this.y=y;
this.radius=radius;
this.color=color;
this.speed={x:0,y:0};
this.losin=false;
this.health=health;
}
draw(ctx){
ctx.beginPath()
//ctx.fillStyle=this.color;
ctx.strokeStyle=this.color;
ctx.arc(this.x,this.y,this.radius,0,Math.PI * 2);
//ctx.fill()
ctx.stroke()
ctx.closePath()


}




update(){
//this.draw();

this.x += this.speed.x;
this.y += this.speed.y;



}


}



class NewCircleFill{
constructor(x,y,radius,color='rgba(0,0,0,0)',health=1){

this.x=x;
this.y=y;
this.radius=radius;
this.color=color;
this.speed={x:0,y:0};
this.losin=false;
this.health=health;
}
draw(){
ctx.beginPath()
ctx.fillStyle=this.color;
ctx.arc(this.x,this.y,this.radius,0,Math.PI * 2,false);
ctx.fill()
ctx.closePath()


}




update(){
this.draw();

this.x += this.speed.x;
this.y += this.speed.y;



}


}









//


// arrow system


class Arrow{
constructor(x,y,radius,color){
this.x=x
this.y=y
this.color=color
this.radius=radius
this.speed={x:Math.random() * 3 - 1.5 ,y:Math.random() * 3 - 1.5}
this.alpha=1
}
draw(){
ctx.save()
ctx.beginPath();
//ctx.fillStyle=this.color;
ctx.strokeStyle=this.color;
ctx.arc(this.x,this.y,this.radius,45,Math.PI * 2,false)
//ctx.fill()
ctx.stroke()
ctx.globalAlpha=this.alpha
ctx.closePath();
ctx.restore()
}

update(){
this.draw()

this.x += this.speed.x
this.y += this.speed.y


if(this.radius > 0.3){
this.radius -= 0.3;
this.alpha -= 0.13;

}


}
}




























function arrowsAdds(x,y,radius,color){

for(let i=0;i<randint(4,12);i++){
let size=randint(2,radius/2)
exposions.push(new Arrow(x,y,size,color))
}
}




























//function handleEnemiesParlicles(left,right,y){

//enemiesParlicles.unshift(new Parlicle(left,right,y));

//}







//handleParlicles()


function swpanEnemies(time,cond){


if(time >= cond){
let health=3;

let size = 10 * randint(3,7)

let x = randint(size,cvs.width -size);

enemies.unshift(new NewCircle(x, -3*size,size,`hsl(${randint(0,360)},100%,50%,1)`,health));


}
CurrSwpanEnemiesCount++;

}


//fire fun


function fire(time,cond){

if(time >= cond){

arrows.unshift(new NewCircle(
    player.x,
    player.y,3,'white'
))
}

}






function swpanStars(){

for(let i=0;i < randint(10,30);i++){
let gap=randint(-5,-20)

let x=randint(0,cvs.width -gap)
let y=randint(0, -cvs.height)
let size=randint(2,player.radius/4)

stars.unshift(new NewCircleFill(x+gap,y+gap,size,'#A3B5B8'));


}


}






 
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






function ISCircleCollision(ObjectA,ObjectB){


let dist=Math.hypot(ObjectA.x - ObjectB.x, ObjectA.y - ObjectB.y)

return (dist - ObjectB.radius - ObjectA.radius < 1)

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

//miniBox.style.width=window.innerWidth;
//miniBox.style.height=window.innerHeight;


let mw=window.innerWidth;
//miniBox.getBoundingClientRect().window
let mh=window.innerHeight;
//miniBox.getBoundingClientRect().height


let fw,fh;


fw= mw/100;
fh= mh/100;



if(mw <= mh){



cvs.width= fw*80;
cvs.height= fh*85;


//backgroundCvs.width=cvs.width
//backgroundCvs.height=cvs.height

controllCvs.width=cvs.width
controllCvs.height=cvs.height




crr.canvas.width = cvs.width;
crr.canvas.height = cvs.height;

crr.canvas.x=cvs.getBoundingClientRect().x
crr.canvas.y=cvs.getBoundingClientRect().y



crr.distroyY= cvs.height*1 + 60;
crr.playerY= cvs.height/100 * 90;


MOUSE.y = crr.canvas.height/3 *2;



LeftBlock.height=crr.canvas.height;
LeftBlock.x=  -50;


RightBlock.height=crr.canvas.height;
RightBlock.x= crr.canvas.width + 30;





leftPad.width= cvs.width/100 *45;
leftPad.height= cvs.height
leftPad.x= 0
leftPad.y= 0




rightPad.width= cvs.width/100 *45;
rightPad.height= cvs.height;
rightPad.x= cvs.width - rightPad.width;
rightPad.y= 0






DistroyBlock.radius=crr.canvas.width/2;
DistroyBlock.x=crr.canvas.width/2;
DistroyBlock.y=crr.canvas.height*2;






}else{

cvs.width= fw*80;
cvs.height= fh*80;



//backgroundCvs.width=cvs.width
//backgroundCvs.height=cvs.height

controllCvs.width=cvs.width
controllCvs.height=cvs.height




crr.canvas.width = cvs.width;
crr.canvas.height = cvs.height;

crr.canvas.x=cvs.getBoundingClientRect().x
crr.canvas.y=cvs.getBoundingClientRect().y


crr.distroyY= crr.canvas.height*1 + 60;
crr.playerY= crr.canvas.height/100 * 80;
//crr.homeY= crr.canvas.height/100 * 100;

MOUSE.y = crr.canvas.height/3 *2;



LeftBlock.height=crr.canvas.height;
LeftBlock.x=  -50;


RightBlock.height=crr.canvas.height;
RightBlock.x= crr.canvas.width + 30;



leftPad.width= cvs.width/100 *45;
leftPad.height= cvs.height
leftPad.x= 0
leftPad.y= 0


rightPad.width= cvs.width/100 *45;
rightPad.height= cvs.height;
rightPad.x= cvs.width - rightPad.width;
rightPad.y= 0


}

}

