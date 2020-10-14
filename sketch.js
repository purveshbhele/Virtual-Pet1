//Create variables here
var  database;
var dog,dogImg,dogImg2;
var foodS,foodStock;
function preload()
{
  //load images here
  dogImg=loadImage("images/dogImg.png");
  dog_happy=loadImage("images/dogImg1.png");
}


function setup() {
  database=firebase.database();
	createCanvas(500, 500);
 dog=createSprite(250,300,100,100);
dog.addImage(dogImg);
dog.scale=0.2;
foodStock=database.ref('Food');
foodStock.on("value",readStock);
}


function draw() {  
background(46, 139, 87);
if(keyWentDown(UP_ARROW)){
  writeStock(foodS);
dog.addImage(dog_happy);
}
  drawSprites();
  //add styles here
textSize(15);
fill("white");
stroke("black");
text("Food Remaining"+foodS,170,200);
textSize(13);
text("Note:Press Up Arrow Key To Feed Drago",130,10,300,20);
}
function readStock(data){
  foodS=data.val();
}
function writeStock(x){
  if(x<=0){
    x=0;
  }else{
    x=x-1;
  }
database.ref('/').update({
  Food:x
})
}




