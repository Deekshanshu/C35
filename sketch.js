var  dog, happyDog, database, foodS, foodStock

function preload()
{
  dogImg=loadImage("images/dogImg.png")
  happyDogImg=loadImage("images/dogImg1.png")
}

function setup() {
  database=firebase.database()

	createCanvas(500, 500);
  
  dog=createSprite(250,300,150,150)
  dog.addImage(dogImg)

  foodStock=database.ref('Food')
  foodStock.on("value",readStock)
}




function draw() { 
  background(46, 139, 87) 

  if(keyWentDown(UP_ARROW)){
    writeStock(foodS)
    dog.addImage(happyDogImg)
  }

  drawSprites();
fill("Red")
stroke("Black")
  text("foodStock"+foodS,170,200)
textSize(30)


  //add styles here

}

function readStock(data){
  foodS=data.val()
}
function writeStock(){
  if(x<=0){
  x=0
  }else{
    x=x-1
  }
  database.ref('/').update({
    Food:x
  })
}



