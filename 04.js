const distanciaTotal = 200;
const velocidadeCarro = 110;
const velocidadeCaminhao = 80;

const tempo = distanciaTotal / (velocidadeCarro + velocidadeCaminhao);

const distanciaCarro = velocidadeCarro * tempo;
const distanciaCaminhao = velocidadeCaminhao * tempo;

if (distanciaCarro < distanciaCaminhao) {
    console.log('O carro estará mais proximo da cidade de Ribeirão Preto.');
} else {
    console.log('O caminhão estará mais proximo da cidade de Ribeirão Preto.');
}