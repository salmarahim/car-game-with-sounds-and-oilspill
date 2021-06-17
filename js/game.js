class Game {
    constructor(){}
  
    getState(){
      var gameStateRef  = database.ref('gameState');
      gameStateRef.on("value",function(data){
         gameState = data.val();
      })
  
    }
  
    update(state){
      database.ref('/').update({
        gameState: state
      });
    }
    async start(){
        if(gameState === 0){
            player=new Player()
       var playercountRef=await database.ref("playerCount").once("value")
       if(playercountRef.exists()){
           playerCount=playercountRef.val()
           player.getcount();
       }
          form = new Form()
          form.display();
         
          
         
        }
      car1=createSprite(100,200,50,50);

      car1.addImage("Car1",car1_img)
      car2=createSprite(300,200,50,50)

      

      car2.addImage("Car2",car2_img)
      car3=createSprite(500,200,50,50);


      car3.addImage("Car3",car3_img)
      car4=createSprite(700,200,50,50);
  

      car4.addImage("Car4",car4_img)

      cars=[car1,car2,car3,car4]

   

      }

      play(){
        form.hide()  
        //textSize(30)
        //text('the game has begun',200,200)
         
        Player.getplayerinfo()

        if(allPlayers!==undefined){
          background("grey");
          image(track_img,0,-displayHeight*4,displayWidth,displayHeight*5)
         var index=0
         var x=175;
         var y=0


        //var yPos=200
        for(var plr in allPlayers){
            index++;
            x=200+(index*200)+allPlayers[plr].xPos;
            
            y=displayHeight-allPlayers[plr].distance;
            cars[index-1].x=x;
            cars[index-1].y=y;

           if(index===player.index){
            // fill("red")
            cars[index-1].shapeColor="red"
            camera.position.x=displayWidth/2;
            camera.position.y=cars[index-1].y;
            if(cars[index-1].isTouching(oilGroup)){
            
              yVel-=0.9;
              collideSound.play();

              

            }
           textSize(20);
           fill("red");
           text(allPlayers[plr].name,cars[index-1].x-20,cars[index-1].y-75)
           }else{
            // fill("black") 
            cars[index-1].shapeColor="black"
           }

        //yPos=yPos+50
        //textSize(20)
        //text(allPlayers[plr].name+":"+allPlayers[plr].distance,250,yPos)
        
        }
        }
if(keyDown(38)&&player.index!==null){
yVel+=0.9;
if(keyDown(37)){
xVel-=0.2;

}
if(keyDown(39)){
xVel+=0.2;
}
player.xPos+=xVel;
xVel*=0.9;   

player.distance+=yVel;
yVel*=0.9;
player.update()
}
 if(player.distance >3860){
gameState=2
 }      




drawSprites();
      }
    end(){
    console.log("the game has ended");
    }  
}