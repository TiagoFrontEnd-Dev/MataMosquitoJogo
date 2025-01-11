var width = 0
var heigth = 0

function adjustsSuchAStageGame() {
    width = window.innerWidth
    heigth = window.innerHeight

    console.log(width, heigth)
}

adjustsSuchAStageGame()


function positionRandomica() {

    var positionX = Math.floor(Math.random() * width) - 100
    var positionY = Math.floor(Math.random() * heigth) - 100

    positionX = positionX < 0 ? 0 : positionX
    positionY = positionY < 0 ? 0 : positionY

    console.log(positionX, positionY)

    //Criar o elemento html
    var insects = document.createElement('img')
    insects.src = 'img/mosca.png'
    insects.className = randomSize()
    insects.style.left = positionX + 'px'
    insects.style.top = positionY + 'px'
    insects.style.position = 'absolute'


    document.body.appendChild(insects)
}

function randomSize() {
    var classe = Math.floor(Math.random() * 3)

    switch (classe) {
        case 0:
            return 'insects'
        case 1:
            return 'insectsOne'
        case 2:
            return 'insectsTwo'
    }
}