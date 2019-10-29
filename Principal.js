var canvas = document.getElementById('tela');
var context = canvas.getContext('2d');
var LARGURA_TELA = canvas.width;
var ALTURA_TELA = canvas.height;


function render() {
    context.fillStyle = "#ff00ff";
    context.fillRect(0, 0, LARGURA_TELA, ALTURA_TELA);
    context.drawImage(atual, posX, posY);
}