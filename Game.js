var teclaCima = false;
var teclaBaixo = false;
var teclaEsquerda = false;
var teclaDireita = false;
var mousePosX;
var mousePosY;
window.addEventListener('keydown', this.keyPressed, false);
window.addEventListener('keyup', this.keyReleased, false);
window.addEventListener('mousemove', this.keyReleased, false);
window.addEventListener('keydown', this.getLetras, false);
var letras = ['t', 'e', 's', 't', 'e'];
var contador = 0;

let personagem = new Personagem();


function gameLoop() {
    personagem.setPosX(personagem.getVelX() + personagem.getPosX());
    personagem.setPosY(personagem.getVelY() + personagem.getPosY());
    checarColisoes();
    handlerEvents();
    render();
}

function escreverLetras(letra) {
    if (letras[0] == letra) {
        console.log("true");
    };
    console.log(letras);
}

function handlerEvents() {

    atual = personagem.getParada();
    if (teclaCima == true) {
        atual = personagem.getCima();
        personagem.setVelY(-3);
        if (teclaDireita == true) {
            atual = personagem.getDireitaCima();
            personagem.setVelX(3);
        }
        if (teclaEsquerda == true) {
            atual = personagem.getEsquerdaCima();
            personagem.setVelX(-3);
        }
    } else if (teclaBaixo == true) {
        atual = personagem.getBaixo();
        personagem.setVelY(3);
        if (teclaDireita == true) {
            atual = personagem.getDireitaBaixo();
            personagem.setVelX(3);
        }
        if (teclaEsquerda == true) {
            atual = personagem.getEsquerdaBaixo();
            personagem.setVelX(-3);
        }
    } else if (teclaEsquerda == true) {
        atual = personagem.getEsquerda();
        personagem.setVelX(-3);
    } else if (teclaDireita == true) {
        atual = personagem.getDireita();
        personagem.setVelX(3);
    }

}

function checarColisoes() {
    if (personagem.getPosX() + (personagem.getRaio() * 2) >= LARGURA_TELA || personagem.getPosX() <= 0) {
        personagem.setPosX(personagem.getVelX() - personagem.getPosX());
    }
    if (personagem.getPosY() + (personagem.getRaio() * 2) >= ALTURA_TELA || personagem.getPosY() <= 0) {
        personagem.setPosY(personagem.getVelY() - personagem.getPosY());
    }
}

function getLetras(e) {
    var letra = e.key;
    console.log(letra);
    escreverLetras(letra);
}

function keyPressed(e) {
    // console.log(e);
    var code = e.keyCode;
    switch (code) {
        case 37:
            teclaEsquerda = true;
            break; //Left key
        case 38:
            teclaCima = true;
            break; //Up key
        case 39:
            teclaDireita = true;
            break; //Right key
        case 40:
            teclaBaixo = true;
            break; //Down key
    }
}


function keyReleased(e) {
    // console.log(e);
    var code = e.keyCode;
    switch (code) {
        case 37:
            teclaEsquerda = false;
            break; //Left key
        case 38:
            teclaCima = false;
            break; //Up key
        case 39:
            teclaDireita = false;
            break; //Right key
        case 40:
            teclaBaixo = false;
            break; //Down key
    }
}

setInterval(gameLoop, 17);

function mouseCoord(evt) {
    mousePosX = evt.clientX;
    mousePosY = evt.clientY;
    mouseMove(evt.clientX, evt.clientY);
    escreverLetras();
    console.log(move);


}

function mouseMove(positionX, positionY) {
    // personagem.setPosX(positionX);
    // personagem.setPosY(positionY);
    atual = personagem.getParada();
    // SUBIR 
    if (positionY < personagem.getPosY()) {
        atual = personagem.getCima();
        console.log("cima")
        personagem.setVelY(-3);
        if (positionX > personagem.getPosX()) {

            console.log("cimaDireita")
            personagem.setVelX(3);
        }
        if (positionX < personagem.getPosX()) {
            console.log("cimaEsquerda")
            personagem.setVelX(-3);
        }
    } else if (positionY > personagem.getPosY()) {
        console.log("baixo")
        personagem.setVelY(3);
        if (positionX > personagem.getPosX()) {
            console.log("baixoDireita")
            personagem.setVelX(3);
        }
        if (positionX < personagem.getPosX()) {
            console.log("baixoEsquerda")
            personagem.setVelX(-3);
        }
    }
    escreverLetras();
}

function testeMouse() {
    teste = false;
    escreverLetras();
    console.log(teste);
}