//
/*
addEventListener('deviceorientation',(e)=>{

//deviceorientation

let pos={
x:Math.round(e.beta),
y:Math.round(e.gamma),
z:Math.round(e.alpha),
}


if(pos.x >= 7){
movin.left=true
movin.right=false
}

else if(pos.x <= -7){
movin.left=false
movin.right=true
}

else{
movin.left=false
movin.right=false
}

cg.x = pos.x;
cg.y = pos.y;
cg.z = pos.z;

//see('g')

})
*/





let fireTheBullet = setInterval(fire, 1*fireSpeed);





btnLeft.addEventListener(touch[0],()=>{


if(!movin.left){
movin.left=true;
}

})



btnRight.addEventListener(touch[0],()=>{


if(!movin.right){
movin.right=true;
}



})


//ygjiekek


btnLeft.addEventListener(touch[2],()=>{


if(movin.left){
movin.left=false;
}

})



btnRight.addEventListener(touch[2],()=>{


if(movin.right){
movin.right=false;
}



})




//deviceorientation


//resize fun




addEventListener('resize',reSize);



pre.addEventListener('dblclick',()=>{
miniBox.requestFullscreen()
})
