var canvas, backgroundImage;

var gameState = 0;
var playerCount;
var allPlayers;
var distance = 0;
var database;

var form, player, game;

var cars, car1, car2, car3, car4;
var car1image,car2image,car3image,car4image,trackimage,ground;

function preload(){
  car1image = loadImage("Images/car1.png");
  car2image = loadImage("Images/car2.png");
  car3image = loadImage("Images/car3.png");
  car4image = loadImage("Images/car4.png");
  trackimage = loadImage("Images/track.jpg");
  ground = loadImage("Images/ground.png");

}

function setup(){
  canvas = createCanvas(displayWidth - 20, displayHeight-30);
  database = firebase.database();
  game = new Game();
  game.getState();
  game.start();
  
}


function draw(){
  if(playerCount === 4){
    game.update(1);
  }
  if(gameState === 1){
    clear();
    game.play();
  }
}
