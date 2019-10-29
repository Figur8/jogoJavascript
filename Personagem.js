var posX = 100;
var posY = 100;
var raio = 50;
var velX = 3;
var velY = 3;
var parada = document.getElementById('parada');
var direita = document.getElementById('direita');
var esquerda = document.getElementById('esquerda');
var cima = document.getElementById('cima');
var baixo = document.getElementById('baixo');
var direita_baixo = document.getElementById('direita_baixo');
var direita_cima = document.getElementById('direita_cima');
var esquerda_baixo = document.getElementById('esquerda_baixo');
var esquerda_cima = document.getElementById('esquerda_cima');

class Personagem {

    getPosX() {
        return posX;
    }
    getPosY() {
        return posY;
    }
    getRaio() {
        return raio;
    }
    getVelX() {
        return velX;
    }
    getVelY() {
        return velY;
    }
    getParada() {
        return parada;
    }
    getEsquerda() {
        return esquerda;
    }
    getDireita() {
        return direita;
    }
    getCima() {
        return cima;
    }
    getBaixo() {
        return baixo;
    }
    getDireitaBaixo() {
        return direita_baixo;
    }
    getDireitaCima() {
        return direita_cima;
    }
    getEsquerdaBaixo() {
        return esquerda_baixo;
    }
    getEsquerdaCima() {
        return esquerda_cima;
    }
    setPosX(internalPosX) {
        posX = internalPosX;
    }
    setPosY(internalPosY) {
        posY = internalPosY
    }
    setRaio(internalRaio) {
        raio = internalRaio;
    }
    setVelX(internalVelX) {
        velX = internalVelX;
    }
    setVelY(internalVelY) {
        velY = internalVelY;
    }
    setParada(internalParada) {
        parada = internalParada;
    }
    setEsquerda(internalEsquerda) {
        esquerda = internalEsquerda;
    }
    setDireita(internalEsquerda) {
        esquerda = internalEsquerda;
    }
    setCima(internalCima) {
        cima = internalCima;
    }
    setBaixo(internalBaixo) {
        baixo = internalBaixo;
    }
    setDireitaBaixo(internalDireitaBaixo) {
        direita_baixo = internalDireitaBaixo;
    }
    setDireitaCima(internalDireitaCima) {
        direita_cima = internalDireitaCima;
    }
    setEsquerdaBaixo(internalEsquerdaBaixo) {
        esquerda_baixo = internalEsquerdaBaixo;
    }
    setEsquerdaCima(internalEsquerdaCima) {
        esquerda_cima = internalCima;
    }

}