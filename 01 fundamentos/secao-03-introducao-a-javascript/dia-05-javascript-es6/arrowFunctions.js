//1 >>
const printName = function () {
  const myName = 'Lucas';
  return myName;
};
console.log(printName());
//2 >>
const printName2 = () => {
  const myName = 'Lucas';
  return myName;
};
console.log(printName2());
//3 >>
const printName3 = () => 'Lucas';
console.log(printName3());