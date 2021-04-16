var bgImg, canvas;
var together;
var tom, tomImg1, tomImg2, tomImg3;
var jerry, jerryImg1, jerryImg2, jerryImg3;

function preload() {

   bgImg = loadImage("images/garden.png");
   tomImg1 = loadAnimation("images/Tom1.png");
   tomImg2 = IoadAnimation("images/Tom2.png","images/Tom3.png");
   tomImg3 = loadAnimation("images/Tom4.png");
   jerryImg1 = loadAnimation("images/mouse1.png");
   jerryImg2 = loadAnimation("images/mouse2.png","images/mouse3.png");
   jerryImg3 = loadAnimation("images/mouse4.png");

}

function setup(){
    createCanvas(1000,800);
    
    tom = createSprite(870,600);
    tom.addAnimation("tomSleeping", tomImg1);
    tom.scale = 0.2;

    jerry = createSprite(200,600);
    jerry.addAnimation("jerryStanding", jerryImg1)
    jerry.scale = 0.15;

}

function draw() {

    background(bgImg);
    
    if(tom.x - jerry.x < (tom.width - jerry.width)/2)
    {
        tom.velocityX = 0;
        tom.addAnimation("tomLastImage", tomImg3);
        tom.x = 300;
        tom.scale = 0.2;
        tom.changeAnimation("tomLastImage");
        jerry.addAnimation("jerryLastImage",jerryImg3);
        jerry.scale = 0.15;
        jerry.changeAnimation("jerrylastImage");

    }
    drawSprites();
}


function keyPressed(){

   if(keyCode === LEFT_ARROW){
       tom.velocityX = -5;
       tom.addAnimation("tomRunning",tomImg2);
       tom.changeAnimation("tomRunning");

       jerry.addAnimation("jerryTeasing",jerryImg2);
       jerry.frameDelay = 25;
       jerry.changeAnimation("jerryTeasing");
   }

}
