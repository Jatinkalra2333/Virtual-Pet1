

var dog
var happyDog
var database
 var foodS
 var foodStock


function preload()
{
  //load images here
  dog = loadImage("images/dogImg.png")
  happyDog = loadImage("images/dogImg1.png")
}

function setup() {
  createCanvas(900,900);
  database = firebase.database();
  Dog = createSprite(500,450,20,20)
  Dog.addImage(dog);
  Dog.scale = 0.5;

  foodStock = database.ref('Food')
  foodStock.on("value",readStock);
 
}


function draw() {  
 background(46, 139, 87) 
if(keyWentDown(UP_ARROW)){
  writeStock(foodS)
  Dog.addImage(happyDog);

 
}
 

  drawSprites();
  //add styles here
  fill("white");
  text(foodS,100,50);

}
function readStock(data){
  foodS = data.val();
}

function writeStock(x){

if(x<=0){
  x=0
}
else{
  x=x-1
}

  database.ref('/').update({
    Food:x
  })
}




