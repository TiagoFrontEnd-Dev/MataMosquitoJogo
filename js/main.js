var width = 0
var heigth = 0

function adjustsSuchAStageGame() {
    width = window.innerWidth
    heigth = window.innerHeight

    console.log(width, heigth)
}

adjustsSuchAStageGame()

var positionX = Math.floor(Math.random() * width) - 100
var positionY = Math.floor(Math.random() * heigth) - 100

positionX = positionX < 0 ? 0 : positionX
positionY = positionY < 0 ? 0 : positionY

console.log(positionX, positionY)

//criar o elemento html
function positionRandomica() {
    var insects = document.createElement('img')
    insects.src = 'img/mosca.png'
    insects.className = 'insect'
    insects.style.left = positionX + 'px'
    insects.style.top = positionY + 'px'
    insects.style.position = 'absolute'


    document.body.appendChild(insects)
}