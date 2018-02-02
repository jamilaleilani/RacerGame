var shark = document.getElementById("shark");
var goldfish = document.getElementById("goldfish");

function carMoving(letterVal, car, color) {
  car.style.marginLeft = "0%";
  document.addEventListener('keydown', function(whichKey) {
    var carMarginLeft = parseInt(car.style.marginLeft, 10);
    if (whichKey.keyCode === letterVal && carMarginLeft < 90) {
      car.style.marginLeft = carMarginLeft + 1 + "%";
    } else if (carMarginLeft >= 90 && document.querySelector("h1").innerHTML == "Racer Game") {
      document.querySelector("h1").innerHTML = color +" Wins!";
    }
  })
}

carMoving(65, shark, "Shark");
carMoving(76, goldfish, "Goldfish");


document.querySelector('h2').addEventListener('click', function() {
  console.log("reset")
  purpleCar.style.marginLeft = "0%";
  orangeCar.style.marginLeft = "0%";
  document.querySelector("h1").innerHTML = "Racer Game";
})
