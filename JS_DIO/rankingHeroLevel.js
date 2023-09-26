// Solicite o nome e a experiência do herói ao usuário
const nome = prompt("Digite o nome do herói:");
const XP = parseInt(prompt("Digite a quantidade de experiência do herói:"));

let nivel;

// Utilize uma estrutura de decisão para determinar o nível do herói
if (XP < 1000) {
  nivel = "Ferro";
} else if (XP >= 1001 && XP <= 2000) {
  nivel = "Bronze";
} else if (XP >= 2001 && XP <= 5000) {
  nivel = "Prata";
} else if (XP >= 6001 && XP <= 7000) {
  nivel = "Ouro";
} else if (XP >= 7001 && XP <= 8000) {
  nivel = "Platina";
} else if (XP >= 8001 && XP <= 9000) {
  nivel = "Ascendente";
} else if (XP >= 9001 && XP <= 10000) {
  nivel = "Imortal";
} else {
  nivel = "Radiante";
}

// Exiba a mensagem com o nome e o nível do herói
console.log(`O Herói de nome ${nome} está no nível de ${nivel}`);
