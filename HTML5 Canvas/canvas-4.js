var canvas=document.querySelector("canvas");
var c=canvas.getContext("2d");
var W=canvas.width=window.innerWidth;
var H=canvas.height=window.innerHeight;
var radian=0;
var velocity;
var x,y;
var mouseX;
var mouseY;
window.addEventListener('mousemove',function(event){
mouseX=event.x;
mouseY=event.y;
})
var colorArr=["#026873","#04D9D9","#03A6A6","#BF8B2A","#BF3415"];
function ball(x,y,radian,velocity,radius,color,width){
  this.x=x;
  this.y=y; 
  this.radian=radian;
  this.velocity=velocity;
  this.radius=radius;
  this.color=color;
  this.width=width;
  this.draw=function(){
  c.beginPath();
  this.x=Math.cos(this.radian)*this.radius;
  this.y=Math.sin(this.radian)*this.radius;
  
  c.arc(mouseX+this.x,mouseY+this.y,this.width,0,Math.PI*2,false);
  c.fillStyle=this.color;
  c.fill();
  c.strokeStyle=this.color;
  c.stroke();
  }
  this.update=function(){
  this.radian+=this.velocity;
  }
}
/*
function draw(){
  c.beginPath();
  var x=Math.cos(radian)*100;
  var y=Math.sin(radian)*100;
  c.arc(W/2+x,H/2+y,2,0,Math.PI*2,false);
  c.stroke();
}
function update(){
  radian+=velocity;
}
*/
var arr=[];
for(var i=0;i<70;i++){
var circleRadius=Math.random()*150+1;
velocity=Math.random()*0.05;
var color=colorArr[Math.floor(Math.random()*5)];
var width=Math.random()*4;
var circle=new ball(0,0,radian,velocity,circleRadius,color,width);
arr[i]=circle;
}


function gameLoop(){
  c.fillStyle="rgba(255,255,255,0.05)";
  c.fillRect(0,0,W,H);
  for (var i=0;i<70;i++){
  
  arr[i].draw();
  arr[i].update();
}
}
setInterval(gameLoop,10);
