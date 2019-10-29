var teclaCima = false;
var teclaBaixo = false;
var teclaEsquerda = false;
var teclaDireita = false;
window.addEventListener('keydown', this.keyPressed, false);
window.addEventListener('keyup', this.keyReleased, false);
window.addEventListener('mousemove', this.keyReleased, false);
var letras = ['t', 'e', 's', 't', 'e'];

let personagem = new Personagem();


function gameLoop() {
    personagem.setPosX(personagem.getVelX() + personagem.getPosX());
    personagem.setPosY(personagem.getVelY() + personagem.getPosY());
    checarColisoes();
    handlerEvents();
    render();
}

function escreverLetras() {
    console.log(letras);
}

function handlerEvents() {
    personagem.setVelX(0);
    personagem.setVelY(0);
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

function keyPressed(e) {
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

    console.log("X: ", evt.clientX);
    console.log("Y: ", evt.clientY);
    personagem.setPosX(evt.clientX);
    personagem.setPosY(evt.clientY);

    teste = true;
    escreverLetras();
    console.log(teste);
}

function testeMouse() {
    teste = false;
    escreverLetras();
    console.log(teste);
}