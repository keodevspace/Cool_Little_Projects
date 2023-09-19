// let n1 = 10;
// let n2 = 20;
// let n3 = 30;

const notas = [10, 6, 8];

// notas.push(7); aadiciona um elemento no final do array
// notas.pop(); remove o ultimo elemento do array
// notas.shift(); remove o primeiro elemento do array
// notas.unshift(7); adiciona um elemento no inicio do array
// notas.splice(1, 1); remove um elemento do array

const media = (notas[0] + notas[1] + notas[2] + notas[3]) / notas.length;

console.log(media);


// concat()
// Junta dois arrays, colocando o array passado como argumento, logo depois do primeiro. Em português essa operação é conhecida como concatenação.
// Não altera o array no qual foi chamado, então precisamos salvar esse resultado em um novo array.

// filter()
// Retorna uma lista contando todos os elementos que passaram em um teste, ou seja, uma função escrita por nós.
// Não altera o array onde foi chamado, então precisamos salvar esse resultado em um novo array.

// find()
// Funciona de forma parecida com o filter, porém retorna apenas o primeiro valor que satisfizer o teste, podendo ser uma string ou um número.

// findIndex()
// Funciona igual o find(), mas retorna o índice em vez do elemento, possibilitando usá-lo em outras partes do código.

// lastIndexOf()
// É igual o findIndex() porém começa do último elemento, não no primeiro.

// forEach()
// Executa uma função em cada elemento do array de forma individual.
// Não altera o array original e nem retorna um valor, deixando esse trabalho a cargo da função escolhida.

// pop()
// Retira o último elemento do array.
// Altera o array original removendo o elemento.

// shift()
// Retira o primeiro elemento do array.
// Altera o array original removendo o elemento e trocando o índice de todos os elementos para um a menos do que eram, o índice 1 passa a ser o 0, o 2 passa a ser o 1, e assim por diante.

// push()
// Adiciona o elemento passado como parâmetro do array, porém na última posição.
// Altera o array original com o novo valor.

// unshift()

// Funciona igual ao push(), porém adiciona na primeira posição e acaba trocando o índice de todos os elementos.
// Altera o array original com o novo valor.

// reduce()
// Utiliza uma função definida pelo usuário em cada um dos elementos, guardando o resultado em uma variável que pode ser acessada dentro da função que foi definida, retornando um único valor no final, reduzindo o array para um único valor.

// reduceRight()
// Funciona igual o reduce() porém começa do final do array e segue até o início.
// reverse()

// Inverte a ordem dos elementos do array, então o primeiro vira o último, o segundo o penúltimo e assim por diante.

// slice()
// Copia uma parte do array para outro array.

// sort()
// Organiza o array de acordo com a classificação Unicode, onde os números vêm antes das letras, porém não funciona corretamente para números, onde temos que definir uma função que irá auxiliar o comando.

// splice()
// Consegue remover, um ou mais elementos consecutivos caso o segundo parâmetro tenha um valor maior que 0, e incluir um ou mais elementos a partir de um índice escolhido.


const alunos = [
    "João",
    "Juliana",
    "Ana",
    "Caio",
    "Lara",
    "Marjorie",
    "Guilherme",
    "Aline",
    "Fabiana",
    "Andre",
    "Carlos",
    "Paulo",
    "Bia",
    "Vivian",
    "Isabela",
    "Vinícius",
    "Renan",
    "Renata",
    "Daisy",
    "Camilo",
];
// onde começa, onde termina
//array intacto
alunos.slice(0, 10);

const sala1 = alunos.slice(0, 10);
const sala2 = alunos.slice(10);

console.log(sala1);
console.log(sala2);
/////////////////////////////////////////////////////////

const nomes = ["João", "Ana", "Caio", "Lara", "Marjorie", "Leo"];

// remove 1 e 2 e adiciona rodrigo
nomes.splice(1, 2, "Rodrigo");

/////////////////////////////////////////////////////////

// unindo arrays
const salaJS = ["Evaldo", "Camis", "Mari"];
const salaPython = ["Ju", "Leo", "Ray"];

const salasUnificadas = salaJS.concat(salaPython);.

console.log(salasUnificadas);

/////////////////////////////////////////////////////////

const alunos = ["João", "Juliana", "Ana", "Caio"];
const medias = [10, 8, 7.5, 9];

const listaDeAlunosEMedias = [alunos, medias];

console.log(listaDeAlunosEMedias);

// listaDeAlunosEMedias[0] = [0] lista de alunos [1] nome do aluno
console.log(
    `A aluna da posição 1 da lista de alunos é: ${listaDeAlunosEMedias[0][1]}.
    A nota dessa aluna é ${listaDeAlunosEMedias[1][1]}.`
);

/////////////////////////////////////////////////////////

// Arquivo procurando-aluno

// ...

function exibeNomeENota(aluno){
    if (listaDeAlunosEMedias[0].includes(aluno)) {
        const indice = listaDeAlunosEMedias[0].indexOf(aluno);

        const mediaDoAluno = listaDeAlunosEMedias[1][indice];

        console.log(`${aluno} tem a média ${mediaDoAluno}.`);

    } else {
        console.log("Aluno não encontrado!");
    }
}

exibeNomeENota("João");

// quando o aluno estiver incluso na lista, temos que procurar sua média e exibi-la. Sabemos que a média está no mesmo índice do aluno, porém em outra lista. Por exemplo, João está no índice 0 da lista alunos e sua média está no índice 0 da lista medias. Então, para descobrirmos a média de um aluno, precisamos saber seu índice.Para encontrar o índice de um elemento em um array, podemos usar o método indexOf() — que significa "índice de", em inglês. Vamos utilizá-lo dentro do bloco if, após o console.log()
//Sabemos que o índice de João é 0, então nosso código está funcionando e aplicamos o método indexOf() corretamente.Agora que conseguimos selecionar o índice do aluno, vamos pesquisar sua média! A princípio, declararemos a constante mediaDoAluno. Para referenciar a lista medias, usaremos a sintaxe listaDeAlunosEMedias[1]. Em seguida, acessaremos o elemento no mesmo índice do aluno:
// o método includes() confere se o elemento passado por parâmetro está incluso em uma lista;
//o método indexOf() retorna o índice do elemento passado por parâmetro.

/////////////////////////////////////////////////////////

const alunos = ["João", "Juliana", "Ana", "Caio"];
const medias = [10, 8, 7.5, 9];

const listaDeAlunosEMedias = [alunos, medias];

function exibeNomeENota(aluno){
    if (listaDeAlunosEMedias[0].includes(aluno)) {
        const [alunos, medias] = listaDeAlunosEMedias;

        const indice = alunos.indexOf(aluno);

        const mediaDoAluno = medias[indice];

        console.log(`${aluno} tem a média ${mediaDoAluno}.`);

    } else {
        console.log("Aluno não encontrado!");
    }
}

exibeNomeENota("Ana");

/////////////////////////////////////////////////////////

// Primeira expressão: é executada apenas uma única vez
// Segunda expressão: condição de execução
// Terceira expressão: é executada sempre ao final do bloco
// Assim, primeiramente o JavaScript executa a expressão let indice = 0. Em seguida, ele adentra no bloco contido entre as chaves. No caso, o console.log(). Terminado o bloco, o JavaScript executa a terceira expressão dentro dos parênteses, incrementando o valor da variável indice. Se antes era 0, agora temos 1.
// Com o novo valor de indice, a segunda expressão será interpretada — a condição de execução. Caso a condição seja satisfeita, o bloco entre chaves será executado novamente. Esse ciclo será repetido, até que a condição deixe de ser satisfeita. 
// Executamos o console.log(). Terminado o bloco, executamos indice++. Agora, indice é igual a 2. Verificamos a condição de execução: 2 é menor que 6? Sim, então continuamos a repetição. Em dado momento, indice terá valor 6 e a condição de execução não será mais satisfeita.
// Como queremos imprimir cada elemento do array numeros, podemos usar numeros[indice] no console.log(). Na primeira iteração, teremos numeros[0]. Na segunda iteração, numeros[1], e assim em diante.
// Como um toque final pra melhorar nosso código, na condição de execução do bloco for, podemos substituir o número 6 por um valor dinâmico. Em vez de 6, usaremos o tamanho do array: antes era for (let indice = 0; indice < 6; indice++){

const numeros = [100, 200, 300, 400, 500, 600];

for (let indice = 0; indice < numeros.length; indice++){
    console.log(numeros[indice]);
}

/////////////////////////////////////////////////////////

//usaremos essa estrutura for para somar todas as notas da lista. A ideia é guardar o valor de cada uma delas, somando-as em uma variável separada chamada somaDasNotas. Começaremos declarando essa variável antes do for, a inicializando com o valor 0
//Em seguida, dentro das chaves do for, determinaremos que a variável somaDaNotas deve ser incrementada com o valor do elemento na posição i, a cada iteração
// Quando entrarmos no for pela primeira vez, a variável i terá valor igual a 0. Portanto, notas[i] será notas[0], que corresponde à nota 10 da lista. Ou seja, na primeira iteração, vamos somar 10 à variável somaDasNotas. Na segunda iteração, i será igual a 1. Como notas[1] corresponde a 6.5, vamos incrementar esse valor à somaDasNotas, resultando em 10.5, e assim em diante até o último item do array. Após o for, vamos imprimir o valor de somaDasNotas para verificar se elas foram somadas corretamente.
// Agora que conseguimos fazer a soma, podemos calcular a média. Após o for, em vez do console.log(), vamos declarar uma constante chamada media, que receberá a somaDasNotas e fará a divisão pelo tamanho da lista.

const notas = [10, 6.5, 8, 7.5];

let somaDasNotas = 0;

for (let i = 0; i < notas.length; i++) {
  somaDasNotas += notas[i];
}

const media = somaDasNotas / notas.length;

console.log(`A média das notas é ${media}.`);

///////
//se quisermos percorrer matrizes, um único for não será suficiente. Mas podemos usar o for várias vezes, uma para cada dimensão da matriz. Assim, uma matriz de duas dimensões usará dois for, um dentro do outro. Começaremos criando mais alguns arrays e uma matriz de 2 dimensões.

const notas1 = [10 , 6.5, 8 ,7.5]
const notas2 = [9  , 6  , 6]
const notas3 = [8.5, 9.5]

const notasGerais = [notas1,notas2,notas3]

let media = 0

// Com a matriz criada, vamos iterar sobre os elementos. Mas não poderemos usar o mesmo for utilizado da última vez, já que agora notasGerais[i] contém um array e não mais um valor numérico. Por isso usaremos outro for para acessar esse array.

for (let i = 0; i < notasGerais.length; i++) {
    for (let j = 0; j < notasGerais[i].length; j++) {
      media += notasGerais[i][j]/notasGerais[i].length;
    }
  }

// No primeiro for criamos uma let i e vamos executar o bloco de código enquanto i for menor que notasGerais.length. Como temos 3 elementos (nesse caso, arrays), o primeiro for será executado 3 vezes, com i=0,i=1,i=2.
// O segundo for tem uma nova variável, a let j, já que não podemos usar uma nova let i porque ela já está definida, e vamos executá-lo enquanto j for menor que notasGerais[i].length. Como cada notasGerais[i] é um array, podemos obter a propriedade de tamanho dele utilizando o .length.
// O código dentro do segundo for vai acumular o valor de notasGerais[i][j], lembrando que notasGerais[i] é um dos 3 arrays iniciais. Assim, o parâmetro [j] vai acessar o elemento dentro array escolhido pelo notasGerais[i], retornando um número que podemos usar na nossa conta.

const notas1 = [10 , 6.5, 8 ,7.5]
const notas2 = [9  , 6  , 6]
const notas3 = [8.5, 9.5]

const notasGerais = [notas1,notas2,notas3]

let media = 0

for (let i = 0; i < notasGerais.length; i++) {
  for (let j = 0; j < notasGerais[i].length; j++) {
    media += notasGerais[i][j]/notasGerais[i].length;
  }
}

console.log(media)

// No entanto, este código retorna uma média de 24. Como tal média é possível se não temos nenhum número maior do que 10? O que acontece é que para conseguir a média entre todos os arrays, temos que somar as médias dos arrays de notas, 8+7+9 edividir pela quantidade de arrays em notasGerais.

const notas1 = [10, 6.5, 8 ,7.5]
const notas2 = [9, 6, 6]
const notas3 = [8.5, 9.5]

const notasGerais = [notas1,notas2,notas3]

let media = 0

for (let i = 0; i < notasGerais.length; i++) {
  for (let j = 0; j < notasGerais[i].length; j++) {
    media += notasGerais[i][j]/notasGerais[i].length;
  }
}

media = media/notasGerais.length

console.log(media)

/////////////////////////////////////////////////////////
//fot of

const notas = [10, 6.5, 8, 7.5];

for (let elemento of notas) {
    console.log(elemento);
}

// As quatro notas do nosso array notas foram impressas no console. Vamos analisar o código para compreender como ele funciona.
//Portanto, com essa expressão, é como se estivéssemos dizendo: para cada elemento de notas, execute o código que está dentro das chaves. O for of é muito adequado para utilizarmos com arrays.
// Quando queremos percorrer um array, podemos usar o for of. Assim, o JavaScript já entende que temos que percorrer o array do início ao fim. A grande vantagem dessa estrutura é que podemos selecionar diretamente o valor de cada elemento da lista e, por exemplo, imprimi-lo com um console.log(), como fizemos.

const notas = [10, 6.5, 8, 7.5];

let somaDasNotas = 0;

for (let elemento of notas) {
    console.log(elemento);
}

// Dentro das chaves do for of, em vez do console.log(), vamos incrementar o valor de somaDasNotas com o valor de elemento

const notas = [10, 6.5, 8, 7.5];

let somaDasNotas = 0;

for (let nota of notas) {
  somaDasNotas += nota;
}

const media = somaDasNotas / notas.length;

console.log(`A média das notas é ${media}.`);

// O for of é uma forma mais concisa de escrever o for tradicional, mas depende da situação. Ele funciona em casos que precisamos percorrer uma lista do início ao fim, passando por todos os elementos.
//O for clássico pode ter uma sintaxe mais complicada, porém ele também é mais flexível para abordar contextos mais complexos. Por exemplo, conseguimos percorrer um array de trás para frente, fazer um decremento na variável de controle e ou até aumentar essa variável de dois em dois, de três em três, caso não seja necessário passar por todos os itens da lista.
//O for of não tem toda essa flexibilidade, contudo ele fornece uma sintaxe mais sucinta que serve para a maioria dos casos, quando o objetivo é percorrer um array completo.

/////////////////////////////////////////////////////////
// forEach = método de array

const notas = [10, 6.5, 8, 7.5];

notas.forEach(function () {
  console.log('oi')
});

// Foi impresso "oi" quatro vezes, isso indica que o forEach também é uma estrutura de repetição. Essa função anônima foi passada como parâmetro de outra função, o forEach. Quando uma função é parâmetro de outra, chamamos a função passada como callback. Ou seja, essa função anônima também é callback nesse caso.
// Em português, callback significa "chamar de volta". tem esse nome porque é uma função que estamos guardando de alguma forma na lógica interna do forEach e ela vai ser chamada de volta em determinados momentos. Mais especificamente, ela será chamada para cada elemento do array de notas. Por isso o terminal imprimiu o "oi" quatro vezes.
// Mas como acessar os valores das notas aqui dentro? Depois de criar uma variável somaDasNotas que recebe 0 como pegaremos o valor das notas para incrementar na somaDasNotas?
// Para obter o valor de cada uma das notas podemos passar nota como parâmetro da função anônima.

const notas = [10, 6.5, 8, 7.5];
const notas = [10, 6.5, 8, 7.5];

let somaDasNotas = 0;

notas.forEach(function (nota) {
  somaDasNotas += nota;
});

const media = somaDasNotas / notas.length;

console.log(`A média das notas é ${media}.`);

//  o forEach tem uma vantagem em relação ao for of. Nos parâmetros da função callback, podemos passar mais um parâmetro, usando uma vírgula entre os parâmetros. Vamos chamá-lo de indice, por exemplo. Agora, além da nota, podemos ter acesso a esse indice. Vamos inserir um console.log('indice') para vermos o que aparece no terminal.

const notas = [10, 6.5, 8, 7.5];

let somaDasNotas = 0;

// notas.forEach(function (nota) {
//   somaDasNotas += nota;
// });
notas.forEach((nota) =>{
    somaDasNotas += nota;
  });

const media = somaDasNotas / notas.length;

console.log(`A média das notas é ${media}.`);

// E cada um dos índices do array foram impressos. Enquanto o for of dava somente o valor de cada um dos elementos, o forEach além de dar o valor dos elementos também dá o índice. 
// Provavelmente, no mercado, você verá o forEach sendo bastante utilizado, até mais do que o for of. Mas é importante você conhecer cada uma das estruturas, as diferenças entre elas e saber quando usar cada uma delas.

/////////////////////////////////////////////////////////
//metodo map

const notas = [10, 9.5, 8, 7, 6];

const notasAtualizadas = notas.map((nota) => {  
    return nota + 1 >= 10 ? 10 : nota + 1; 
    // add +1 ponto nas notas, mas não pode passar de 10
    // nota +1 deve ser menor ou igual a 10 (? sim ou nao)
    // se sim, retona 10; se não, nota add +1
})
console.log(notasAtualizadas);

/////////////////////////////////////////////////////////
// padronizando nomes
// metodo de strings

const nomes = ['ana Julia', 'Caio vinicius', 'BIA silva'];

const nomesAtualizados = nomes.map(nome => {
    return nome.toUpperCase();
});

console.log(nomesAtualizados);

// é possível utilizar alguns métodos de array e laços de repetição para acessar e alterar strings

const nome = "Alura";
let nomeMaiusculas = "";

for (let i = 0; i < nome.length; i++) {
 nomeMaiusculas += nome[i].toUpperCase()
}
console.log(nomeMaiusculas) //ALURA

const nomedoCurso = "Fundamentos de JS";
const nomeDaPlataforma = " Alura"

const nomeCompleto = nomedoCurso.concat(nomeDaPlataforma)
console.log(nomeCompleto)  //Fundamentos de JS Alura

/////////////////////////////////////////////////////////
// reprovados

const alunos = ["Ana", "Marcos", "Maria", "Mauro"];
const medias = [7, 4.5, 8, 7.5];

let listaDeReprovados = [];

alunos.forEach((aluno, indice) => {
    if (medias[indice] < 5) {
        reprovados.push(aluno);
    }
});

console.log(`Os alunos ${reprovados} estão reprovados!`);

// usando metodo filter
// O filter() vai receber uma função callback como parâmetro, vamos inserir uma arrow function, receberemos aluno e precisaremos também do indice porque com ele conseguiremos acessar a média de cada aluno na outra lista.
// Primeiro, devemos verificar se a média do aluno é menor do que 5. Então, para saber, por exemplo, a média de algum aluno temos que pegar a média na posição do índice de cada aluno, return medias[indice]. Então ,se medias na posição índice for menor do que 5, vai retornar true. Se não for menor do que 5, vai retornar false. Essa é a nossa lógica.
// callback retorna um booleano, se for true, o aluno será adicionado na lista de reprovados. Para isso, vamos usar o método push, que adiciona um elemento no final de um array. Vamos passar aluno como parâmetro, porque é ele que queremos adicionar na lista de reprovados.

const alunos = ["Ana", "Marcos", "Maria", "Mauro"];
const medias = [7, 4.5, 8, 7.5];

const reprovados = alunos.filter((aluno, indice) => {
    return medias[indice] < 5;
});

console.log(`Os alunos ${reprovados} estão reprovados!`);

/////////////////////////////////////////////////////////
// médias das turmas
// Já vimos como calcular média antes com o forEach(), mas essa lógica de ter uma variável que começa em zero e vai incrementando aos poucos, tem um método que vai nos ajudar nesse caso de somar vários números de uma lista.
// Já vou adiantar que o código que usaremos para calcular uma média será feito para três salas. Para reutilizar esse código, usaremos uma função chamada calculaMedia que receberá a lista de notas como parâmetro.

const salaJS = [7, 8, 8, 7, 10, 6.5, 4, 10, 7];
const salaJava = [6, 5, 8, 9, 5, 6];
const salaPython = [7, 3.5, 8, 9.5];

function calculaMedia(notasDaSala) {

}

// Dentro das chaves da função vamos usar o notasDaSala.reduce(). "Reduce", em português significa "reduzir". Esse método vai iterar sobre o array, então também vamos passar uma função callback como parâmetro para ele, usaremos a arrow function. Mas os parâmetros que essa função recebe são um pouco diferentes, chamaremos o primeiro parâmetro de acumulador e o segundo será o valor do elemento que estamos iterando agora, nota.

const salaJS = [7, 8, 8, 7, 10, 6.5, 4, 10, 7];
const salaJava = [6, 5, 8, 9, 5, 6];
const salaPython = [7, 3.5, 8, 9.5];

function calculaMedia(notasDaSala) {
  notasDaSala.reduce((acumulador, nota) => {
    
    })
}

// Além dessa função callback podemos passar um segundo parâmetro para o reduce(). Depois da declaração da função, depois da chave de fechamento e antes do parênteses de fechamento, vamos colocar uma vírgula e o parâmetro 0, que será o valor inicial desse acumulador.

const salaJS = [7, 8, 8, 7, 10, 6.5, 4, 10, 7];
const salaJava = [6, 5, 8, 9, 5, 6];
const salaPython = [7, 3.5, 8, 9.5];

function calculaMedia(notasDaSala) {
  notasDaSala.reduce((acumulador, nota) => {
    
    }, 0)
}

//O zero está fazendo o papel daquela somaDasNotas que fizemos no forEach(). Vai começar com valor zero e será somada cada uma das notas.
//Para fazer isso, vamos retornar o acumulador + nota. E daremos um console.log(notasDaSala).
//O reduce não altera o array original, então precisaremos retornar o valor de reduce para uma nova variável, const somaDasNotas, e damos na verdade o console.log(somaDasNotas).

const salaJS = [7, 8, 8, 7, 10, 6.5, 4, 10, 7];
const salaJava = [6, 5, 8, 9, 5, 6];
const salaPython = [7, 3.5, 8, 9.5];

function calculaMedia(notasDaSala) {
 const somaDasNotas = notasDaSala.reduce((acumulador, nota) => {
     return acumulador + nota;
    }, 0);
    
    console.log(somaDasNotas);
}
//executando a função
calculaMedia(salaJS);

//Apareceu "67.5", essa é a soma das notas da salaJS. Para entendermos como essa lógica está acontecendo, vamos ver o que acontece ao somarmos mais um ao acumulador, acumulador + 1.

const salaJS = [7, 8, 8, 7, 10, 6.5, 4, 10, 7];
const salaJava = [6, 5, 8, 9, 5, 6];
const salaPython = [7, 3.5, 8, 9.5];

function calculaMedia(notasDaSala) {
 const somaDasNotas = notasDaSala.reduce((acumulador, nota) => {
     return acumulador + 1;
    }, 0);
    
    console.log(somaDasNotas);
}

calculaMedia(salaJS); //9

// Isso aconteceu porque o valor inicial do acumulador vai ser o zero que passamos como segundo parâmetro do reduce. E o valor que estamos retornando para essa função callback será o novo valor do acumulador para essa iteração. Se o acumulador começa com o valor zero na primeira interação, vamos retornar o valor + 1, ele vai ficar com valor 1, na segunda iteração vai ficar com valor 2 e assim por diante. Então, ao retornar acumulador + 1 estamos simplesmente retornando a quantidade de elementos do array do JavaScript
// Mas se somarmos acumulador + nota, vai acontecer o comportamento que esperamos. O acumulador vai começar do zero e a cada iteração vai somar com uma nota da lista. Até por isso que chamamos de "acumulador". Ele é ótimo para esse caso em que queremos somar vários números de uma mesma lista.
//Agora, vamos apagar o console.log() e escreveremos const media = somaDasNotas / notasDaSala.length e retornaremos a média.

const salaJS = [7, 8, 8, 7, 10, 6.5, 4, 10, 7];
const salaJava = [6, 5, 8, 9, 5, 6];
const salaPython = [7, 3.5, 8, 9.5];

function calculaMedia(notasDaSala) {
  const somaDasNotas = notasDaSala.reduce((acumulador, nota) => {
     return acumulador + nota;
    },0);

  const media = somaDasNotas / notasDaSala.length;

  return media;
}

console.log(`A média da sala de JavaScript é ${calculaMedia(salaJS)}`);
console.log(`A média da sala de Java é ${calculaMedia(salaJava)}`);
console.log(`A média da sala de Python é ${calculaMedia(salaPython)}`);

//Funcionou corretamente. Num primeiro momento o reduce pode parecer um pouco mais complicado, ele tem uma lógica bem interna, abstrai bastante coisa. Mas, resumindo, usamos o acumulador, informamos o valor inicial dele no segundo parâmetro do reduce e vamos atualizando o valor do acumulador a cada iteração que fazemos na lista.
//Por fim, o parâmetro acumulador também é muito chamado de acc, que é uma abreviação do nome dele em inglês. E também podemos usar diretamente o retorno da função arrow function, em vez de usar a palavra return, vamos fazer essas modificações no nosso código:

const salaJS = [7, 8, 8, 7, 10, 6.5, 4, 10, 7];
const salaJava = [6, 5, 8, 9, 5, 6];
const salaPython = [7, 3.5, 8, 9.5];

function calculaMedia(notasDaSala) {
  const somaDasNotas = notasDaSala.reduce((acc, nota) => acc + nota, 0);

  const media = somaDasNotas / notasDaSala.length;

  return media;
}

console.log(`A média da sala de JavaScript é ${calculaMedia(salaJS)}`);
console.log(`A média da sala de Java é ${calculaMedia(salaJava)}`);
console.log(`A média da sala de Python é ${calculaMedia(salaPython)}`);

///////////////////////////////////////////////////////////////////
// criando cópias

const notas = [7, 7, 8, 9];

// Se queremos criar um novo array, sem alterar o original – que realmente é uma situação que acontece muito no dia a dia, às vezes queremos pegar o array original e fazer uma modificação para outros propósitos e sem alterar o original.
//A primeira coisa que pensamos em fazer é escrever, por exemplo, const novasNotas = notas e fazer um push para adicionar o 10 no final do array.
//Por fim, podemos inserir um console.log() informando as novas notas, usando uma interpolação ${novasNotas}.

const notas = [7, 7, 8, 9];

const novasNotas = notas;

novasNotas.push(10);

console.log(`As novas notas são ${novasNotas}`);

//Resolvemos o desafio? Na verdade, não. Vamos conferir se o array original está igual. Para isso, vamos inserir um console.log() exibindo as notas originais, notas:

const notas = [7, 7, 8, 9];

const novasNotas = notas;

novasNotas.push(10);

console.log(`As novas notas são ${novasNotas}`);
console.log(`As notas originais são ${notas}`);
//As novas notas são 7, 7, 8, 9, 10
//As notas originais são 7, 7, 8, 9, 10

//O "10" também apareceu nas notas originais. Mas nós só adicionamos a nota 10 em novasNotas, esse pode ser um comportamento inesperado e é, na verdade, uma peculiaridade do JavaScript.
//O "X" dessa questão está acontecendo onde fizemos a atribuição do array de notas para as novas notas: const novasNotas = notas;.
//Ao fazer uma atribuição direta como essa, usando o sinal de igual, o JavaScript entende que a partir desse momento, é como se esses dois arrays fossem o mesmo, como se eles apontassem para o mesmo endereço da memória.
//Então, qualquer alteração que fizermos em novasNotas será feita no array original e vice-versa. É como se, para o JavaScript, eles fossem o mesmo array. E não é isso que queremos.
//Nós queremos fazer uma cópia do array, mas sem que eles estejam tão interligados assim. Para resolver isso, na linha da atribuição coloremos notas dentro de colchetes e acompanhado de três pontos (...), como reticências.

const novasNotas = [...notas];

//Esse é um operador do JavaScript que se chama spread operator, ou "operador de espalhamento". Ao utilizá-lo junto com uma lista, ele pega todo o conteúdo desse array e espalhar seus valores no local que estamos indicando. É como se copiássemos o conteúdo da lista, "7, 7, 8, 9", e colássemos no lugar do [...notas]. É isso que estamos dizendo para o JavaScript.

const notas = [7, 7, 8, 9];

const novasNotas = [...notas];

novasNotas.push(10);

console.log(`As novas notas são ${novasNotas}`);
console.log(`As notas originais são ${notas}`);
//As novas notas são 7, 7, 8, 9, 10
//As notas originais são 7, 7, 8, 9

// Isso resolveu nosso problema. Agora não temos o "10" no final das notas originais. Essa é a forma JavaScript de fazer a cópia de um array. Também podemos usar essa sintaxe do operador de espalhamento no parâmetro de uma função, por exemplo, ele vai pegar o conteúdo de uma array e colocar separado por vírgulas onde queremos.
//Uma última coisa que podemos fazer no código é, em vez de fazer o novasNotas.push(10), podemos apagar essa linha e colocar o número "10" dentro do colchetes depois de notas: [...notas, 10].

const notas = [7, 7, 8, 9];

const novasNotas = [...notas, 10];

console.log(`As novas notas são ${novasNotas}`);
console.log(`As notas originais são ${notas}`);

// Ao salvarmos e executarmos novamente no terminal, vai exibir corretamente. Essa sintaxe de espalhamento é bem flexível, podemos até colocar, notas no início do array, por exemplo: [5,...notas, 10].
//Então, o spread operator é um operador que podemos usar para clonar arrays sem ter problemas de referências do JavaScript.

///////////////////////////////////////////////////////////////////
// removendo duplicatas

//Remova os nomes repetidos, deixando apenas um de cada.
//No VS Code, criaremos um arquivo chamado Set.js.

const nomes = ["Ana", "Clara", "Maria", "Maria", "João", "João", "João"];

// Poderíamos usar métodos do JS que já aprendemos nesse curso para resolver esse problema. Poderíamos usar o forEach() com uma lógica de programação. Mas ficaria um pouco complicado, pode ficar como desafio para você fazer.
//Vou mostrar uma forma mais facilitada que o JS oferece com uma estrutura chamada Set, que em português significa "conjunto".
//Para criar um novo Set vamos escrever const meuSet = new Set().

const nomes = ["Ana", "Clara", "Maria", "Maria", "João", "João", "João"];

const meuSet = new Set()

//Esse Set é uma classe do JavaScript, usaremos uma classe porque ela já vem com algumas lógicas internas.
//O Set bem parecido com as listas que trabalhamos até agora, mas tem algumas regras a mais. Uma delas é que os elementos de um Set não podem se repetir. O que é ótimo para nos ajudar nesse desafio.
//Para criar um Set com valores iniciais podemos passar uma lista dentro do parênteses de Set(). Vamos testar colocando alguns números e alguns deles reeptidos: "1, 1, 2, 3, 4, 4". e um console.log(meuSet) para vermos o que vai acontecer no meuSet.

const nomes = ["Ana", "Clara", "Maria", "Maria", "João", "João", "João"];

const meuSet = new Set([1, 1, 2, 3, 4, 4]);

console.log(meuSet); //Set(4) { 1, 2, 3, 4 }
//foi impresso o Set indicando que tem tamanho 4 e, entre chaves, temos os elementos 1, 2, 3 e 4 sem as repetições da lista que inserimos.

const nomes = ["Ana", "Clara", "Maria", "Maria", "João", "João", "João"];

const meuSet = new Set(nomes);

console.log(meuSet); //Set(4) { 'Ana', 'Clara', 'Maria', 'João' }

//Agora temos um Set de quatro posições com os nomes Ana, Clara, Maria e João sem as duplicatas.
//Porém, não queremos ficar com o Set, queremos a lista de volta. Então, vamos transformar o Set em uma lista.
//Para isso, logo após a declaração do Set, vamos escrever const nomesAtualizados, que vai receber um spread operator no meuSet. O Set é uma estrutura bem parecida com uma lista e também podemos usar o spread operator nele.
//Por fim, daremos um console.log() em nomesAtualizados.

const nomes = ["Ana", "Clara", "Maria", "Maria", "João", "João", "João"];

const meuSet = new Set(nomes);

const nomesAtualizados = [...meuSet];

console.log(nomesAtualizados);//[ 'Ana', 'Clara', 'Maria', 'João' ]

///////////////////////////////////////////////////////////////////

