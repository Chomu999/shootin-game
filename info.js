
let body=document.body;

let mainBox=document.querySelector('#mainBox');

let miniBox=document.getElementById('miniBox');

let startBtn=document.querySelector('p');

let pre=document.querySelector('pre');



let cvs=document.querySelector("canvas")

let ctx = cvs.getContext("2d");




let touch=['touchstart','touchmove','touchend','touchcancel'];

let btnBox,btnLeft,btnRight,mainGameLoop;


let firing,enemieSwpaning,starSwpaning;


let gameSpeed=2;

let playerParlicles=[];
let enemies=[];
let stars=[];
let arrows=[];
let booms=[];
let exposions=[];


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
enemySwpanRate:0

}





];


let crr={
canvas:{
width:0,
height:0,
x:0,
y:0,
},

ctx:{
gap:50,
width:0,

left:{
height:0,
x:0,
y:0,
},

right:{
height:0,
x:0,
y:0,
},

},

distroyY:0,
playerY:0,
homeY:0,

EnemiesParlicle:{
left:0,
right:0,
y:0,
},


poartl:{
leftx:0,
rightx:0,


},

};


//let mainHI=undefined;
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
goin:false,
top:false,
left:false,
right:false,
down:false,
speed:3.6,
};

let MOUSE={
x:undefined,
y:undefined,
}





//let iii = cvs.getBoundingClientRect().x;



//cvs.width=window.innerWidth;
//cvs.height=window.innerHeight;


