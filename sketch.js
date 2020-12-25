var ball;

var database;

var position;

function setup(){
    database = firebase.database();
    createCanvas(800,800)
    ball = createSprite(400,400,100,100);
    var ballpos = database.ref("ball/position")
    ballpos.on("value",readpos)
    
}
function draw(){
    background(255,255,255)
    if(keyDown("up")){
       move(0,-10)
    }
    if(keyDown("down")){
       move(0,10)
    }
    if(keyDown("left")){
        move(-10,0)
    }
    if(keyDown("right")){
       move(10,0)
    }
    drawSprites();
}
function move(x,y){
    database.ref("ball/position").set({
        'x':position.x+x,
        'y':position.y+y
    })
}
function readpos(data){
    position = data.val();
    ball.x = position.x;
    ball.y = position.y;
}