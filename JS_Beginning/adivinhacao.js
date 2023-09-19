// const numeroAleatorio = 36;

//function adivinharNumero(isnan(palpite)) {
//prompt("Digite um numero de 1 a 100");
//}

//let palpite = adivinharNumero();

//if (palpite === numeroAleatorio) {
    //console.log("Parabéns, você acertou!");
//}
//else if (palpite > numeroAleatorio) {
   // console.log("O número chutado foi: " + palpite);
   // console.log("Errrrrrrrou, é menor");
//}
//else if (palpite < numeroAleatorio) {
 //   console.log("O número chutado foi: " + palpite);
 //   console.log("Errrrrrrrou, é maior")
 
 
 // CODIGO CORRIGIDO


// Nesta linha, declaramos uma constante chamada numeroAleatorio e atribuímos o valor 36 a ela. Esse será o número que o usuário terá que adivinhar.
 const numeroAleatorio = 36

// Aqui, definimos uma função chamada adivinharNumero sem nenhum parâmetro. Essa função será responsável por pedir um número ao usuário e retornar esse número. 
 function adivinharNumero() {
    const palpite = parseInt(prompt("digite um numero de 1 a 100"));

//Dentro da função adivinharNumero, usamos a função prompt() para exibir uma caixa de diálogo que solicita ao usuário que digite um número de 1 a 100. O número digitado é armazenado na variável 'palpite' após ser convertido para um número inteiro usando parseInt().

//Aqui, verificamos se o valor digitado pelo usuário não é um número válido. Usamos a função isNaN() para fazer essa verificação. Se o palpite não for um número válido, exibimos a mensagem "Por favor, digite um número válido." no console e retornamos, encerrando a execução da função.

if (isNaN(palpite)){
    console.log("Por favor, digite um numero valido");
    return;
}

//Nesta parte, comparamos o palpite do usuário com o numeroAleatorio que foi definido no início do código. Se o palpite for igual ao numeroAleatorio, exibimos a mensagem "Parabéns, você acertou!" no console.
//Se o palpite for maior do que o numeroAleatorio, exibimos a mensagem "O número chutado foi: " seguido do valor do palpite, e em seguida a mensagem "Errrrrrrrou, é menor" no console.
//Se o palpite for menor do que o numeroAleatorio, exibimos a mensagem "O número chutado foi: " seguido do valor do palpite, e em seguida a mensagem "Errrrrrrrou, é maior" no console.

if(palpite === numeroAleatorio){
    console.log("Parabéns, você acertou!");
} else if (palpite > numeroAleatorio){
    console.log("O número chutado foi: " + palpite);
    console.log("Errrrrrrrou, é menor");
} else if (palpite < numeroAleatorio){
    console.log("O número chutado foi: " + palpite);
    console.log("Errrrrrrrou, é maior");
}

//Por fim, chamamos a função adivinharNumero() para iniciar o jogo.

adivinharNumero();


