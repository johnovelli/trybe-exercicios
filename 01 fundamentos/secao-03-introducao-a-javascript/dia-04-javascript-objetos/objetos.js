let diasDaSemana = {
  1: 'domingo',
  2: 'segunda-feira',
  3: 'terça-feira',
  4: 'quarta-feira',
  5: 'quinta-feira',
  6: 'sexta-feira',
  7: 'sábado',
};
console.log(diasDaSemana['1']); // domingo

let name = 'Marta';
let lastName = 'Silva';
let age = 34;
let medals = { golden: 2, silver: 3 };

let player = {
  name: 'Marta',
  lastName: 'Silvia'
}
console.log('A jogadora ' + player.name + ' ' + player.lastName + " es noobs.")

let car = {
  type: 'Fiat',
  model: '500',
  color: 'white',
};

for (let index in car) {
  console.log(index, car[index]);
}

