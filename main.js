function tocaSom (elementoAudioId) {
  document.querySelector(elementoAudioId).play();
};

const listaDeTeclas = document.querySelectorAll('.tecla');

let contador = 0;

while (contador < listaDeTeclas.length) {
  const tecla = listaDeTeclas[contador];

  const instrumento = tecla.classList[1];

  const idAudio = `#som_${instrumento}`;

  tecla.onclick = function () {
    tocaSom(idAudio)
  }; 

  contador += 1; //tinha esquecido essa parte pqp 
}





// function tocaSomPom() {
//   document.querySelector('#som_tecla_pom').play()
// }

// document.querySelector('.tecla_pom').onclick = tocaSomPom;







