const salario = 4000;

if (salario <= 2500) {
  console.log("A sua aliquota é de 15%");
  console.log("Você pode deduzir até R$ 350");
} else if (salario <= 3750) {
  console.log("A sua aliquota é de 22,5%");
  console.log("Você pode deduzir até R$ 636");
}
