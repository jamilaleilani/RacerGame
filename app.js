var shark = document.getElementById("shark");
var goldfish = document.getElementById("goldfish");

function fishMoving(letterVal, fish, fishType) {
  fish.style.marginLeft = "0%";
  document.addEventListener('keydown', function(whichKey) {
    var fishMarginLeft = parseInt(fish.style.marginLeft, 10);
    if (whichKey.keyCode === letterVal && fishMarginLeft < 85) {
      fish.style.marginLeft = fishMarginLeft + 1 + "%";
    } else if (fishMarginLeft >= 85 && document.querySelector("h1").innerHTML == "Shark vs Goldfish") {
      document.querySelector("h1").style.color = "magenta";
      document.querySelector("h1").innerHTML = fishType +" wins!";
    }
  })
}

fishMoving(65, shark, "SHARK");
fishMoving(76, goldfish, "GOLDFISH");


document.querySelector('h2').addEventListener('click', function() {
  console.log("reset")
  shark.style.marginLeft = "0%";
  goldfish.style.marginLeft = "0%";
  document.querySelector("h1").style.color = "white";
  document.querySelector("h1").innerHTML = "Shark vs Goldfish";
})
