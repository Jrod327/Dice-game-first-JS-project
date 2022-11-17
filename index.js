var randomNumber1 = Math.floor((Math.random() * 6) + 1)
var randomNumber2 = Math.floor((Math.random() * 6) + 1)

var p1DiceImg = document.querySelector(".img1")
var p2DiceImg = document.querySelector(".img2")
var header = document.querySelector("h1")

p1DiceImg.setAttribute("src", `images/dice${randomNumber1}.png`)
p2DiceImg.setAttribute("src", `images/dice${randomNumber2}.png`)

if (randomNumber1 > randomNumber2) {
    header.innerHTML = "🏆 Player 1 wins!"
} else if (randomNumber1 < randomNumber2) {
    header.innerHTML = "Player 2 wins! 🏆"
} else if (randomNumber1 === randomNumber2) {
    header.innerHTML = "It is a draw!"
}

function refreshPage(){
    window.location.reload();
} 