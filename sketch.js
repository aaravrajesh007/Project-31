const Engine = Matter.Engine;
const World= Matter.World;
const Bodies = Matter.Bodies;

var engine,world;
var ground;

function setup() {
  createCanvas(480,800);
  ground=new Ground(240, 790, 480, 10);
}

function draw() {
  background(255,255,255); 
   ground.display();
  drawSprites();
}