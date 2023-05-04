let numbers = [5, 9, 3, 19, 70, 8, 100, 2, 35, 27];

//for (showNumbers of numbers) 
// console.log(showNumbers);
//}

let somaTotal = 0;
//1
for (index = 0; index < numbers.length; index += 1) {
  somaTotal = somaTotal + numbers[index];
}
console.log(somaTotal);
//2
let mediaArit = somaTotal / numbers.length
console.log(mediaArit);
//3
if (mediaArit > 20) {
  console.log("O valor da média é ", mediaArit, ".");
} else {
  console.log("O valor da média aritmética é menor ou igual a 20.")
}
//4
let maiorValor = 0;
for (index2 = 0; index2 < numbers.length; index2 += 1) {
  if (numbers[index2] > maiorValor) {
    maiorValor = maiorValor = numbers[index2];
  }
}
console.log(maiorValor);
//5
let valoresImpar = 0;
for (index3 = 0; index3 < numbers.length; index3 += 1) {
  if ((numbers[index3] % 2) != 0) {
    valoresImpar = valoresImpar + 1;
  }
}
console.log(valoresImpar);
//6
let menorValor = 101;
for (index4 = 0; index4 < numbers.length; index4 += 1) {
  if (numbers[index4] < menorValor) {
    menorValor = menorValor = numbers[index4];
  }
}
console.log(menorValor);
//7
let numbers2 = [];
for (let index5 = 1; index5 <= 25; index5 += 1) {
  numbers2.push(index5);
}
console.log(numbers2);
//8
for (let index = 0; index < numbers2.length; index += 1) {
  console.log(numbers2[index] / 2);
};
//9






