
let body=document.body;

let mainBox=document.querySelector('#mainBox');

let miniBox=document.getElementById('miniBox');

let startBtn=document.querySelector('p');

let pre=document.querySelector('pre');



let cvs=document.querySelector("canvas")

let ctx = cvs.getContext("2d");



let btnBox,btnLeft,btnRight,mainloopFun;



btnBox=document.getElementById('btnBox');

btnLeft=document.querySelector('.left');

btnRight=document.querySelector('.right');




// btnBox=document.createElement('div');
// btnLeft=document.createElement('div');
// btnRight=document.createElement('div');

// btnBox.setAttribute('id','btnBox');
// btnLeft.setAttribute('class','btns left');
// btnRight.setAttribute('class','btns right');

let gameSpeed=2;

let playerParlicles=[];
let enemiesParlicles=[];
let enemies=[];
let arrows=[];


let swpanEnemiesCount=[
{level:30},
{level:60},
{level:90},
{level:120},
{level:150},
{level:180},
{level:210},
{level:240},
{level:270},
{level:300},
];

let CurrSwpanEnemiesCount=0;


let allINFO=[

{
enemyKillTraget:0,
score:0,
enemySwpanRate:0,

}





];



let playerY=0;
let homeY=0;
let mainHI=undefined;
let levelCount=0;
let EnemiesIsScapeCount=0;
let LevelUP=false;

let fireSpeed=300;
let EnemiesSwpanSpeed=1000;





//let sorce=0;
let hue=0;
let level=1;
//let player;


let movin={
top:false,
left:false,
right:false,
down:false,
speed:2.6,
}



let playerInfo={
w:20,
h:20,
x:cvs.width/2 - 10/2,
y:cvs.height/2 - 10/2,
}


let cg={
x:0,
y:0,
z:0,
}






let touch=['touchstart','touchmove','touchend'];






//cvs.width=window.innerWidth;
//cvs.height=window.innerHeight;



