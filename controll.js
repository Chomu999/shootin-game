
cvs.addEventListener(touch[0],(e)=>{

MOUSE.x = e.touches[0].clientX - crr.canvas.x


movin.goin = true;

})



cvs.addEventListener(touch[1],(e)=>{


MOUSE.x = e.touches[0].clientX - crr.canvas.x

movin.goin = true;

})



cvs.addEventListener(touch[2],(e)=>{
movin.goin = false;

})


pre.addEventListener('dblclick',()=>{
miniBox.requestFullscreen()
})



addEventListener('resize',reSize);
