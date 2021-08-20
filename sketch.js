var milk, milkImage
var coin, coinImage
var dog, dogImage
var cat, catImage
var gameState
var maze, mazeImage


function preload(){
 
  mazeImage = 
  loadImage("images/maze.png");



function setup(){
  createCanvas (400,400);

  

  maze = createSprite(200,200,50,70);

  maze.addImage("maze",mazeImage);
}

function draw(){
  drawSprites();
}
}