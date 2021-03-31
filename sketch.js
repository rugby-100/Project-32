const Engine = Matter.Engine;
const World= Matter.World;
const Bodies = Matter.Bodies;
const Constraint = Matter.Constraint;

var engine, world;
var backgroundImg;

var bg ;

function preload() {
    backgroundImg = loadImage("sunrise1.png")
    getBackgroundImg();
}

function setup(){
    var canvas = createCanvas(1200,700);
    engine = Engine.create();
    world = engine.world;

}

function draw(){
    background(backgroundImg)

    Engine.update(engine);

    // write code to display time in correct format here


}

async function getBackgroundImg(){

    var response = await fetch("http://worldtimeapi.org/api/timezone/America/Los_Angeles")
    var responseJSON = await response.json()
    var datetime = responseJSON.datetime
    var hour = datetime.slice(11,13)
    console.log(hour)

    if (hour > 05 && hour < 6) {
        bg = "sprites/sunrise1.png";   
    }
    else if (hour > 07 && hour < 8) {
        bg = "sprites/sunrise2.png";   
    }
    else if (hour > 09 && hour < 10) {
        bg = "sprites/sunrise3.png";   
    }
    else if (hour > 11 && hour < 12) {
        bg = "sprites/sunrise4.png";   
    }
    else if (hour > 13 && hour < 14) {
        bg = "sprites/sunrise5.png";   
    }
    else if (hour > 15 && hour < 17) {
        bg = "sprites/sunrise6.png";   
    }
    else if (hour > 18 && hour < 19) {
        bg = "sprites/sunrise7.png";   
    }
    else if (hour > 20 && hour < 21) {
        bg = "sprites/sunrise8.png";   
    }
    else if (hour > 22 && hour < 23) {
        bg = "sprites/sunrise11.png";   
    }
    else {
        bg = "sprites/sunset12.jpg"
    }

    backgroundImg = loadImage(bg)

}
