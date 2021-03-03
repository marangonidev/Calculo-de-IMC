//Dados da pessoa
const nome = 'joão'
const peso = 70
const altura = 1.84
const sexo = 'Masculino'

const imc = peso / (altura * altura) //calculo do indice de massa corporal

// Se o imc maior ou igual a 30: Voce esta acima do peso; Se for menor você não está acima do peso
if(imc >= 30) {
    console.log('João você está acima do peso')
} else {
    console.log('Você não está acima do peso')
}