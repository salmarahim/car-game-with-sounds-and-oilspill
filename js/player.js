class Player{
constructor(){
this.name=null;
this.distance=0;
this.index=0;
this.xPos=0;
    
}
getcount(){
    var playercountRef  = database.ref('playerCount');
    playercountRef.on("value",(data)=>{
       playerCount=data.val();
    })

  }

  updateCount(Count){
    database.ref('/').update({
      playerCount: Count
    });
  }

update(){
database.ref("players/player"+this.index)
.set({
"name":this.name,
"distance":this.distance,
"xPos":this.xPos
})

}

static getplayerinfo(){
var playerinforef=database.ref('players')
playerinforef.on("value",(data)=>{
allPlayers=data.val();  
})


}

    
  


}