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
var ponteiro;



function gameLoop() {
    personagem.setPosX(personagem.getVelX() + personagem.getPosX());
    personagem.setPosY(personagem.getVelY() + personagem.getPosY());
    checarColisoes();
    render();
}

function escreverLetras(letra) {
    if (letras.includes(letra)) {
        console.log("letra foi removida: ", letra);
        letras.splice(letras.indexOf(letra), 1);
        console.log("letras restantes: ", letras);
    } else {
        if (!letras.includes(letra)) {
            personagem.setVida();
        }
    }
    if (letras.length == 0) {
        console.log("você venceu");
    }
}

function checarColisoes() {
    if (personagem.getPosX() + personagem.getRaio() / 2 >= LARGURA_TELA || personagem.getPosX() <= 0) {
        personagem.setPosX(personagem.getVelX() - personagem.getPosX());
    }
    if (personagem.getPosY() + personagem.getRaio() / 2 >= ALTURA_TELA || personagem.getPosY() <= 0) {
        personagem.setPosY(personagem.getVelY() - personagem.getPosY());
    }
}

function getLetras(e) {
    var letra = e.key;
    console.log(letra);
    console.log(letras);
    escreverLetras(letra);
}

setInterval(gameLoop, 17);

function mouseCoord(evt) {
    mousePosX = evt.clientX;
    mousePosY = evt.clientY;
    if (evt.clientX != personagem.getPosX()) {
        mouseMove(evt.clientX, evt.clientY);
    }
}

function mouseMove(positionX, positionY) {

    if (positionY < personagem.getPosY()) {
        atual = personagem.getCima();
        personagem.setVelY(-3);
        if (positionX > personagem.getPosX()) {
            personagem.setVelX(3);
        }
        if (positionX < personagem.getPosX()) {
            personagem.setVelX(-3);
        }
    } else if (positionY > personagem.getPosY()) {
        atual = personagem.getCima();
        personagem.setVelY(3);
        if (positionX > personagem.getPosX()) {
            personagem.setVelX(3);
        }
        if (positionX < personagem.getPosX()) {
            personagem.setVelX(-3);
        }
    }
}