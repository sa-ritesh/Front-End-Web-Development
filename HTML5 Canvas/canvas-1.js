var canvas=document.querySelector("canvas");
var W=canvas.width=window.innerWidth;
var H=canvas.height=window.innerHeight;
var c=canvas.getContext("2d");

document.addEventListener("mousemove",function(event){
console.log(event);
for(var i=0;i<800;i++){
   if(arr[i].x-event.x<100 && arr[i].x-event.x>=0 && arr[i].y-event.y<100 && arr[i].y-event.y>=0 ){
    if(arr[i].radius<=arr[i].maxR){
    arr[i].radius+=2;
  }
   }
   else{
    if(arr[i].radius>4){
    arr[i].radius--;
  }
   }
}
});
function Circle(x,y,radius,dx,dy,maxR,color){
 this.radius=radius;
 this.x=x;
 this.y=y;
 this.dx=dx;
 this.dy=dy;
 this.maxR=maxR;
 this.color=color;

this.draw=function(){

  c.beginPath();
  c.arc(this.x,this.y,this.radius,0,Math.PI*2,false);
  c.fillStyle=colorA[this.color];
  c.fill();
  c.stroke();
} 

this.update=function(){
  if(this.x>W-this.radius || this.x<this.radius){
    this.dx=-this.dx;
  }
  if(this.y<this.radius || this.y>H-this.radius){
    this.dy=-this.dy;
  }
this.x+=this.dx;
this.y+=this.dy;
}
};

var arr=[];
var colorA=["#01087C", "#4048C9", "#505AFC", "#020A96", "#0311FC"]; //kuler colors
for(var i=0;i<800;i++){
  var x=Math.random()*(W-2*radius) +radius;
  var y=Math.random()*(H-2*radius) +radius;
  var dx=Math.random()*10 -5;
  var dy=Math.random()*10 -5;
  var radius=Math.random()*10+2;
  var color=Math.floor(Math.random()*5); // To make number a whole number as for index
  var maxR=Math.random()*100+2;
  arr.push(new Circle(x,y,radius,dx,dy,maxR,color));
}

function loop(){
  c.clearRect(0,0,W,H);
  for(var i=0;i<800;i++){
  arr[i].draw();
  arr[i].update();
  }
}

setInterval(loop,100);
