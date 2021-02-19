var Drops
function preload(){
    
}

function setup(){
    var canvas = createCanvas(400,200);
    background=("black")
    
}

function draw(){
    
}   

function eclipse(){
ellipse(20, 50, 20, 20);


}
function update(){


    if (this.drop.position.y > height){

        matter.body.setPosition(this.rain,{x:random(0,400),y:random(0,400)})
    }
}