var purpleCar = document.getElementById("purpleCar");
var orangeCar = document.getElementById("orangeCar");

function carMoving(letterVal, car, color) {
  car.style.marginLeft = "0%";
  document.addEventListener('keyup', function(whichKey) {
    var carMarginLeft = parseInt(car.style.marginLeft, 10);
    if (whichKey.keyCode === letterVal && carMarginLeft < 95) {
      car.style.marginLeft = carMarginLeft + 1 + "%";
    } else if (carMarginLeft >= 95 && document.querySelector("h1").innerHTML == "Racer Game") {
      document.querySelector("h1").innerHTML = color +" Wins!";
    }
  })
}

carMoving(76, orangeCar, "Orange");
carMoving(65, purpleCar, "Purple");


document.querySelector('h2').addEventListener('click', function() {
  console.log("reset")
  blueCar.style.marginLeft = "0%";
  redCar.style.marginLeft = "0%";
  document.querySelector("h1").innerHTML = "Racer Game";
})
