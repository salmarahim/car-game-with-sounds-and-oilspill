var  database;
var gameState = 0;
var playerCount=0;
var form,player,game
var allPlayers;
var car1,car2,car3,car4,cars
var car1_img,car2_img,car3_img,car4_img;
var track_img;
var xVel,yVel;
var oilspill,oilspillImg;
var oilGroup;
var collideSound;
function preload(){
car1_img=loadImage("images/car1.png")
car2_img=loadImage("images/car2.png")
car3_img=loadImage("images/car3.png")
car4_img=loadImage("images/car4.png")
track_img=loadImage("images/track.png")
oilspillImg=loadImage("images/oilspill.png")
collideSound=loadSound("sound/sliding.mp3")
}

function setup(){
  database = firebase.database();
  console.log(database);
  createCanvas(displayWidth,displayHeight);
  game = new Game();
  game.getState();
  game.start();
  
  xVel=0;
  yVel=0;
  oilGroup= createGroup();
  
  for (var i=0; i<5; i++){
    oilspill=createSprite(random(200,900),random(-height*4,height-300),10,10);
    oilspill.addImage("oil",oilspillImg);
    oilGroup.add(oilspill)
  }


}

function draw(){
  background("white")
if (playerCount===4){
game.update(1)  
} 
if(gameState===1){

  game.play()
}
 if(gameState===2){
   game.end()
 } 
}

