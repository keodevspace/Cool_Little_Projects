// const listaDeDestinos = new Array(`Salvador`, `São Paulo`, `Rio de Janeiro`);

// const idadeComprador = 15;
// const estaAcompanhado = true;
// let temPassagemComprada = false;
// const destino = "Salvador";

// console.log("\nDestinos possíveis:");
// console.log(listaDeDestinos);

// // if (idadeComprador >= 18) {
// //   console.log("Comprador maior de idade");
// //   listaDeDestinos.splice(1, 1); // removendo item
// // } else if (estaAcompanhada) {
// //   console.log("Comprador está acompanhado");
// //   listaDeDestinos.splice(1, 1); // removendo item
// // } else {
// //   console.log("Não é maior de idade e não posso vender");
// // }

// // console.log(listaDeDestinos);

// //concatena operações lógicas
// //if (idadeComprador >= 18 || estaAcompanhado == true) {
    
// const podeComprar = idadeComprador >= 18 || estaAcompanhado == true;

// // console.log("Boa viagem!");
// // listaDeDestinos.splice(1, 1); 
// //temPassagemComprada = true;
// //} else {
// // console.log("Não é maior de idade e não posso vender");
// //}


// //console.log("Embarque: \n\n");
// // if (idadeComprador >= 18 && temPassagemComprada) {
// //     console.log("Boa viagem!");
// // }else{
// //     console.log("Você não pode embarcar")
// //     temPassagemComprada = false;
// // }   

// // console.log(listaDeDestinos);

// let contador = 0;
// let destinoExiste = false;

// while (contador < 3) {
//     if(listaDeDestinos[contador] == destino){
//         console.log("Destino existe");
//         destinoExiste = true;
//         break;
//     }
//     contador += 1; // para não entrar em loop infinito
// }

// console.log("Destino existe: " + destino);

// if(podeComprar && destinoExiste){
//     console.log("Boa viagem");  
// }else{
//     console.log("Desculpe tivemos um erro!");
// }


const listaDeDestinos = new Array(`Salvador`, `São Paulo`, `Rio de Janeiro`);

const idadeComprador = 15;
const estaAcompanhado = true;
let temPassagemComprada = false;
const destino = "Salvador";

console.log("Destinos possíveis:");
console.log(listaDeDestinos);

const podeComprar = idadeComprador >= 18 || estaAcompanhado;

console.log("Destino: " + destino);

let contador = 0;
let destinoExiste = false;

while (contador < listaDeDestinos.length) {
  if (listaDeDestinos[contador] === destino) {
    destinoExiste = true;
    break;
  }
  contador += 1; // i++
}

if (podeComprar && destinoExiste) {
  console.log("Boa viagem");
} else {
  console.log("Desculpe, tivemos um erro!");
}

for (let i = 0; i < 3; i++) {
    if (listaDeDestinos[i] === destino) {
        destinoExiste = true;
    } 
}
