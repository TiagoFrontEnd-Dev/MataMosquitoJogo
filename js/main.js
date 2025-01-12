var width = 0
var heigth = 0
var lives = 1

function adjustsSuchAStageGame() {
    width = window.innerWidth
    heigth = window.innerHeight

    console.log(width, heigth)
}

adjustsSuchAStageGame()


function positionRandomica() {

    //remover o insects anterior (caso exista)
    if(document.getElementById('insects')){
        document.getElementById('insects').remove()

        // console.log('lv' + lives)
        if(lives > 3){
            alert('Game Over')
        }else{
        document.getElementById('lv' + lives).src = "img/coracao_vazio.png"

        lives++
        }
    }
    var positionX = Math.floor(Math.random() * width) - 100
    var positionY = Math.floor(Math.random() * heigth) - 100

    positionX = positionX < 0 ? 0 : positionX
    positionY = positionY < 0 ? 0 : positionY

    console.log(positionX, positionY)

    //Criar o elemento html
    var insects = document.createElement('img')
    insects.src = 'img/mosca.png'
    insects.className = randomSize() + ' ' + randomSide()
    insects.style.left = positionX + 'px'
    insects.style.top = positionY + 'px'
    insects.style.position = 'absolute'
    insects.id = 'insects'
    insects.onclick = function(){
        this.remove()
    }


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

function randomSide(){
    var classe = Math.floor(Math.random() * 2)

    switch (classe) {
        case 0:
            return 'sideOne'
        case 1:
            return 'sideTwo'
    }
}