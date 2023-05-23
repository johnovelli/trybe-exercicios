

form.addEventListener('submit', (e) => {
  e.preventDefault();
  let textoC = '';
  textoC = texto.value;
  console.log(textoC);
  const comentario = document.createElement('p');
  comentario.classList = 'comentario';
  comentario.innerText = textoC;
  document.body.appendChild(comentario);
  texto.value = '';
});

