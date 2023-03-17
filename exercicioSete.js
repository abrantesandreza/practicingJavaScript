//Medidor de velocidade -> Velocidade Máxima até 70km
//a cada 5km acima do limite, acrescenta 1 ponto na carteira
//caso pontos maior que 12 -> "carteira suspensa"

function verificarVelocidade(velocVeiculo) {

    const velocidadeMaxima = 70
    let pontosCarteira = 0
    const intervaloLimiteVelocidade = 5
    const pontuacaoMaxima = 12

    if (velocVeiculo <= velocidadeMaxima) {
        return "Você está dentro do limite de velocidade"
    } else if (velocVeiculo > velocidadeMaxima) {

        //Calcula o intervalo da velocidade capturada com o limite do radar
        let intervalo = Math.floor(velocVeiculo - velocidadeMaxima)

        //Calcula quanto o intervaloLimiteVelocidade cabe dentro do intervalo calculado
        pontosCarteira = Math.floor(intervalo/intervaloLimiteVelocidade) 

        //Verifica as pontuacoes na carteira e se suspende a carteira
        if (pontosCarteira > pontuacaoMaxima) {
            return `Você está acima da velocidade permitida. Sua velocidade foi de: ${velocVeiculo} km/h, sua pontuação na carteira de motorista é de: ${pontosCarteira} ponto(s), portanto sua carteira está suspensa.`
        } else {
            return `Você está acima da velocidade permitida. Sua velocidade foi de: ${velocVeiculo} km/h, sua pontuação na carteira de motorista é de: ${pontosCarteira} ponto(s)`
        }

    }

}

console.log(verificarVelocidade(70)) //Dentro do limite
console.log(verificarVelocidade(75)) //Acima do limite + 1 ponto na carteira
console.log(verificarVelocidade(180)) //Acima do limite + 22 pontos na carteira + carteira suspensa
console.log(verificarVelocidade(100)) //Acima do limite + 6 pontos na carteira
