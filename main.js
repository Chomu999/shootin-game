const player = new NewBox(160,0,20,20, 'red',10)

const homeBlock = new NewBox(0,640,cvs.width*2,60, '#FF9000')





//let parlicles=[]


//local storage
//console.log(localStorage)










let hiscore=localStorage.getItem("hiscore")

var hhiscore;


if(hiscore === null){

hhiscore=0;

localStorage.setItem("hiscore", JSON.stringify(hhiscore))


}else{

hhiscore = JSON.parse(hiscore);


//mainHI = hhiscore

}


























startBtn.addEventListener('click',startGame);






function startGame(){

reSize()

mainBox.removeChild(startBtn)

// btnBox.appendChild(btnLeft)
// btnBox.appendChild(btnRight)
// miniBox.appendChild(btnBox)

//.style.display='none'

miniBox.requestFullscreen()


//main LOOP function here






function gameLoop(){

window.requestAnimationFrame(gameLoop)

//ctx.clearRect(0,0,cvs.width,cvs.height)
ctx.fillStyle='rgba(0,0,0,0.18)';
ctx.fillRect(0,0,cvs.width,cvs.height)






player.update();
player.y=playerY

if(movin.left && !movin.right){
player.speed.x = -movin.speed;
}
else if(movin.right && !movin.left){
player.speed.x = movin.speed;
}
else{
player.speed.x = 0;
}







handlePlayerParlicles(player.x, player.x + player.width ,player.y + player.height);

//enemies function

enemies.forEach((enemy)=>{
enemy.speed.y = 1.8
enemy.update();
})


arrows.forEach((arrow)=>{

arrow.speed.y = -4.80
arrow.update();

})

if(arrows.length >= 60)arrows.pop()




homeBlock.update()
homeBlock.y = homeY






//shoot and desipair


//enemies.forEach((enemy,i)=>{})



enemies.forEach((enemy, index)=>{

handleEnemiesParlicles(enemy.x+enemy.width/1.8, enemy.x+enemy.width/1.8 ,enemy.y);

if(IScollision(enemy,homeBlock)){

if(!player.losin){

player.losin=true
player.health--
setTimeout(()=>{
player.losin=false

},4000);

}


EnemiesIsScapeCount++

allINFO[0].score--
enemies.splice(index, 1);
enemiesParlicles.pop(enemiesParlicles.length)
}


if(IScollision(enemy,player)){


if(!player.losin){

player.losin=true
player.health--
setTimeout(()=>{
player.losin=false

},4000);

}

//ctx =cvs.getContext('webgl2')
//body.removeChild(cvs)
}


arrows.forEach((arrow, arrowIndex)=>{

if(IScollision(enemy,arrow)){

setTimeout(()=>{

arrows.splice(arrowIndex, 1);

enemies.splice(index, 1);

allINFO[0].score+=1;

enemiesParlicles.pop(enemiesParlicles.length)


//localStorage setup

if(allINFO[0].score > hhiscore){

hhiscore = allINFO[0].score;
localStorage.setItem("hiscore", JSON.stringify(hhiscore))


}




},1.9)

}


})

})


















if(enemies.length <= CurrSwpanEnemiesCount && CurrSwpanEnemiesCount >= swpanEnemiesCount[levelCount].level && swpanEnemiesCount[levelCount].level < allINFO[0].score){


//console.log(CurrSwpanEnemiesCount);
//enemies.pop();

if(levelCount >= swpanEnemiesCount.length -1){
//window.cancelAnimationFrame(gameLoop)

//let sr=document.querySelectorAll('script')




//sr.forEach((s)=>{

//body.removeChild(cvs)
levelCount=0
CurrSwpanEnemiesCount=0
//allINFO[0].sorce=0


//})





//console.log('game over lol');
}else{

levelCount++
//LevelUP=true;
//console.log('LevelUP lol');

}

}








//if player.health == 0 will gameOver

if(player.health <= 0 && player.losin){

}




//fes


//set hiScore


hue+=0.9
//sorce and display

pre.innerHTML=`score : ${allINFO[0].score} || Level:${levelCount +1}, Health: ${player.health}
Kill Traget: ${swpanEnemiesCount[levelCount].level} || enemies scape : ${EnemiesIsScapeCount}
hiScore : ${hhiscore} Tap to Full-Screen mod`;

//ctx.fillStyle='#0022FF';
//ctx.fillRect(cvs.width/2,0,1,cvs.height)
//ctx.fillRect(0,cvs.height/2,cvs.width,1)





}





    gameLoop()



}