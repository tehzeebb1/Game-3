var canvas
var gameState=0;
var playerCount;
var database;
var form,player,game;
var backgroundImg;
var allPlayers;
var player1, player2,players;
var player1Img, player2Img;
var reward1, reward2, reward3, reward4; 

function preload()
{
    player1Img=loadImage("Images/Sun1.png");
    player2Img=loadImage("Images/WingBot.png");
}

function setup()
{
    canvas=createCanvas(displayWidth-100, displayHeight-100);
    database=firebase.database();
    game = new Game();
    game.getState();
    game.start();
   

}
function draw()
{
if(playerCount === 2)
{
game.update(1);
}
if(gameState === 1)
{
    clear();
    game.play();
}
if(gameState === 2)
{
    game.end();
}
}