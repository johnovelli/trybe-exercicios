let lado1 = 9;
let lado2 = 7;
let lado3 = 8;
//1
let checar1 = false;
function checkIntegerPositive(l1, l2, l3) {
  if (l1 > 0 && l2 > 0 && l3 > 0) {
    checar1 = true;
    return checkIntegerPositive = checar1
  } else {
    checar2 = false;
    return checkIntegerPositive = checar1
  }
}
console.log(checkIntegerPositive(lado1, lado2, lado3));
//2
let checar2 = false;
function checkItsATriangle(l1, l2, l3) {
  if (l1 < l2 + l3 && l2 < l1 + l3 && l3 < l2 + l1) {
    checar2 = true;
    return checkItsATriangle = checar2
  } else {
    checar2 = false;
    return checkItsATriangle = checar2
  }
}
console.log(checkItsATriangle(lado1, lado2, lado3));
//3
let tipo = "";
function checkWitchTriangle(l1, l2, l3) {
  if (l2 != l1 && l2 != l3 && l1 != l3) {
    tipo = "escaleno"
    return checkWitchTriangle = tipo
  }
}
console.log(checkWitchTriangle(lado1, lado2, lado3));
//4
function checkPerimeterTriangle(l1, l2, l3) {
  let soma = l1 + l2 + l3
  return checkPerimeterTriangle = soma
}
console.log(checkPerimeterTriangle(lado1, lado2, lado3));
5//
function infoTriangle(l1, l2, l3) {
  if (checar1 && checar2) {
    return "O triângulo é " + tipo + " meus parabéns!"
  }
}
console.log(infoTriangle(lado1, lado2, lado3));