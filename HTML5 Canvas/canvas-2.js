var canvas=document.querySelector("canvas");
var W=canvas.width=window.innerWidth;
var H=canvas.height=window.innerHeight;
var c=canvas.getContext("2d");
var x,y,dx,dy,radius,color;
var cArr=["#248EA6","#25C7D9","#F2D338","#F2762E","#F23030"];

function ball(x,y,dx,dy,radius,color){
   this.x=x;
   this.y=y;
   this.dx=dx;
   this.dy=dy;
   this.radius=radius;
   this.color=color;

   this.draw=function(){
   c.beginPath();
   c.arc(this.x,this.y,this.radius,0,Math.PI*2,false);
   c.fillStyle=this.color;
   c.fill();
   c.stroke();
   }
   this.update=function(){
      if(this.y>H-this.radius){
      this.dy=-this.dy;
   }
   if(this.dy>0){
      this.dy++;
   if(this.y>H-this.radius){
      this.dy=0;
   }
   }
   else if(this.dy<=0 && this.y<H-this.radius){
      this.y++;
      this.dy++;
   }
  
   this.y+=this.dy;
   }
}
var arr=[];
var circle;
for(var i=0;i<500;i++){
   x=Math.random()*W-20;
   y=Math.random()*H+60;
   dx=0;
   dy=Math.random()*13+2;
   color=Math.floor(Math.random()*4);
   radius=Math.random()*30 +10;
   circle = new ball(x,y,dx,dy,radius,cArr[color]);
   arr.push(circle);
}

function loop(){
   c.clearRect(0,0,W,H);

for(var i=0;i<500;i++){

   arr[i].draw();

   arr[i].update();
}

}
setInterval(loop,25);

/*
x=200;
y=200;
dx=0;
dy=10;
radius=30;
function draw(){
   c.beginPath();
   c.clearRect(0,0,W,H);
   c.arc(x,y,radius,0,Math.PI*2,false);
   c.stroke();
}

function update(){
  if(y>H-radius){
      dy=-dy;
   }
   if(dy>0){
      dy++;
   }
   else if(dy<=0 && y<H-radius){
      y++;
      dy++;
   }
   if(y>H){
      dy=0;
   }
   y+=dy;

}

function loop(){
   draw();
   update();
}
setInterval(loop,10);
*/
