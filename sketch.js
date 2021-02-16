var dog,sadDog,happyDog;
var foodStock;


function preload(){
  Dog=loadImage("Images/Dog.png");
 dog1=loadImage("Images/dog11.png");
}

function setup() {
  database = firebase.database();
  createCanvas(1000,400);

 food1 = new Food();
 food1. deductFood();
 food1.getfoodStock();
  
feed = createButton("Feed")
feed.position(700,95)
feed.mousePressed(feedDog)

addfood = createButton("Add Food")
addfood.position(800,95)
addfood.mousePressed(addFood)

  dog=createSprite(800,200,150,150);
  dog.addImage(Dog);
  dog.scale=0.15;

}

function draw() {
  background(46,139,87);


  food1.display();
  drawSprites();
}

function readStock(data){
  
  food1.updatefoodStock(foodS)
  foodS = data.val();
}
//function to read food Stock
function addFood(){
  foodStock++
  database.ref('/').update({
   food1:foodStock
  })
}

function feedDog(){
  dog.addImage(dog1)

  if(food1.getfoodStock()<=0){
    food1.updatefoodStock(food1.getfoodStock()*0)
  }
  else{
    food1.updatefoodStock(food1.getfoodStock()-1)
  }
}



//function to update food stock and last fed time


//function to add food in stock
