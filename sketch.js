//Create variables here
var dog,happyDog,foodS,foodStock;
var database;

function preload()
{
  //load images here
  img1.loadImage("images/dogImg.png");
  img2.loadImage("images/dogImg1.png");
}

function setup() {
  createCanvas(500, 500);
  dog=createSprite(250,250);
  database=firebase.database();
  foodStock=database.ref('food');
  foodStock.on("value",readStock);
  
}


function draw() {  
   background(46,139,87);
  drawSprites();
  if(keyWentDown(UP_ARROW)){
    writeStock(foodS);
    dog.addImage(img2);
  }
  //add styles here
  textSize(20);
  fill("black");
  stroke(5);
  text("Note: Press UP_ARROW keyto feed the dog",100,250);
}

function readStock(data){
  foodS=data.val();
}

function writeStock(x){

  database.ref('/').update({
    food:x
  })
}