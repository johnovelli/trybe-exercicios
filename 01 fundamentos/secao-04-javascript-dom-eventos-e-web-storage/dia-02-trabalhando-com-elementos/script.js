const titulo = document.createElement('h1');
titulo.innerText = 'Titulo do Site';
document.body.appendChild(titulo);

const main = document.createElement('main');
main.className = ('main-content');
document.body.appendChild(main);

const section = document.createElement('section');
section.className = ('center-content');
main.appendChild(section);

const paragrafo = document.createElement('p');
paragrafo.innerText = 'Conteudo do site , viva Syndra!'
section.appendChild(paragrafo);

const sectionLeft = document.createElement('section');
sectionLeft.className = ('left-content');
main.appendChild(sectionLeft);

const sectionRight = document.createElement('section');
sectionLeft.className = ('right-content');
main.appendChild(sectionRight);

const foto = document.createElement('img');
foto.src = 'https://picsum.photos/200';
foto.className = ('small-image');
sectionLeft.appendChild(foto);

const listaSite = document.createElement('ul');
const lista = ['um', 'dois', 'três', 'quatro', 'cinco',
  'seis', 'sete', 'oito', 'nove', 'dez'];

  for (index = 0; index < lista.length; index += 1) {
  const item = document.createElement('li');
  item.innerText = lista[index];
  listaSite.appendChild(item);

}
sectionRight.appendChild(listaSite);