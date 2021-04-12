var practice1;
var a ;

function setup() {
  createCanvas(800, 800);
  practice1 = new Practice(14)
console.log(practice1.a)
}
function draw() {
  background("black");
  practice1.checkdivisiblebySevenornot();

}
