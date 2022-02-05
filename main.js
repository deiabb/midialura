function tocaSom (seletorAudio) {
  const elemento = document.querySelector(seletorAudio)

  //maneira mais simples ainda: 
  //o if é inteligente, dizer que elemento != null, é a mesma coisa que colocar só if (elemento), pois o javascript já entende que elemento é alguma coisa, ou seja tem algum valor, ou seja não é nulo
  if (elemento && elemento.localName === 'audio') {
    elemento.play();
  }else {
    console.log('Elemento não encontrado ou seletor inválido')
  }

  // if (elemento === null || elemento.localName != 'audio') {
  //   console.log('Elemento não encontrado')
  // } else if (elemento != null && elemento.localName === 'audio') {
  //   elemento.play();
  // }
  
};

const listaDeTeclas = document.querySelectorAll('.tecla');

// let contador = 0;

// while (contador < listaDeTeclas.length) 
//contador += 1; //tinha esquecido essa parte pqp 

for (let contador = 0; contador < listaDeTeclas.length; contador ++){
  const tecla = listaDeTeclas[contador];
  const instrumento = tecla.classList[1];
  const idAudio = `#som_${instrumento}`;

  tecla.onclick = function () {
    tocaSom(idAudio)
  }; 

  tecla.onkeydown = function (evento) {
    if(evento.code === 'Space' || evento.code === 'Enter') {
      tecla.classList.add('ativa')
    }
  };

  tecla.onkeyup = function () {
    tecla.classList.remove('ativa')
  }
  

}


//remover o while e colocar um for


// function tocaSomPom() {
//   document.querySelector('#som_tecla_pom').play()
// }

// document.querySelector('.tecla_pom').onclick = tocaSomPom;







