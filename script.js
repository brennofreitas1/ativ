const Buttom = document.getElementById('teclar');
const chamar = document.getElementById('chamar');

const btRodarDado = () => {
  const dado = Math.floor(Math.random() * 6) + 1;
  chamar.innerHTML = dado;
};
Buttom.onclick = btRodarDado;