var canvas = document.getElementById('tela');
var context = canvas.getContext('2d');
var raio = 50;
var velX = 3;
var velY = 3;
var posX = 100;
var posY = 100;
var k_cima = false;
var k_baixo = false;
var k_esquerda = false;
var k_direita = false;
var parada = document.getElementById('parada');
var direita = document.getElementById('direita');
var esquerda = document.getElementById('esquerda');
var cima = document.getElementById('cima');
var baixo = document.getElementById('baixo');
var direita_baixo = document.getElementById('direita_baixo');
var direita_cima = document.getElementById('direita_cima');
var esquerda_baixo = document.getElementById('esquerda_baixo');
var esquerda_cima = document.getElementById('esquerda_cima');
var atual = parada;
window.addEventListener('keydown', this.keyPressed, false);
window.addEventListener('keyup', this.keyReleased, false);
window.addEventListener('mousemove', this.keyReleased, false);
var letras = ['t', 'e', 's', 't', 'e'];

document.onmousemove = function(e) {
    var event = e || window.event;
    window.mouseX = event.clientX;
    window.mouseY = event.clientY;
}

function gameLoop() {
    posX += velX;
    posY += velY;
    checarColisoes();
    handlerEvents();
    render();
}

function escreverLetras() {
    console.log(letras);
}

function handlerEvents() {
    velX = 0;
    velY = 0;
    atual = parada;
    if (k_cima == true) {
        atual = cima;
        velY = -3;
        if (k_direita == true) {
            atual = direita_cima;
            velX = 3;
        }
        if (k_esquerda == true) {
            atual = esquerda_cima;
            velX = -3;
        }
    } else if (k_baixo == true) {
        atual = baixo;
        velY = 3;
        if (k_direita == true) {
            atual = direita_baixo;
            velX = 3;
        }
        if (k_esquerda == true) {
            atual = esquerda_baixo;
            velX = -3;
        }
    } else if (k_esquerda == true) {
        atual = esquerda;
        velX = -3;
    } else if (k_direita == true) {
        atual = direita;
        velX = 3;
    }
}

function render() {
    context.fillStyle = "#ff00ff";
    context.fillRect(0, 0, LARGURA_TELA, ALTURA_TELA);
    context.drawImage(atual, posX, posY);
}

function checarColisoes() {
    if (posX + (raio * 2) >= LARGURA_TELA || posX <= 0) {
        posX -= velX;
    }
    if (posY + (raio * 2) >= ALTURA_TELA || posY <= 0) {
        posY -= velY;
    }
}

function keyPressed(e) {
    var code = e.keyCode;
    switch (code) {
        case 37:
            k_esquerda = true;
            break; //Left key
        case 38:
            k_cima = true;
            break; //Up key
        case 39:
            k_direita = true;
            break; //Right key
        case 40:
            k_baixo = true;
            break; //Down key
    }
}

function keyReleased(e) {
    var code = e.keyCode;
    switch (code) {
        case 37:
            k_esquerda = false;
            break; //Left key
        case 38:
            k_cima = false;
            break; //Up key
        case 39:
            k_direita = false;
            break; //Right key
        case 40:
            k_baixo = false;
            break; //Down key
    }
}

setInterval(gameLoop, 17);

function showCoords(evt) {


    console.log(

    );
    teste = true;
    escreverLetras();
    console.log(teste);
}

function testeMouse() {
    teste = false;
    escreverLetras();
    console.log(teste);
}