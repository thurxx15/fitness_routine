function alternarBarra() {
  const barra = document.getElementById('barraLateral');
  const conteudo = document.getElementById('mainContent');
  const imagem = document.getElementById('imgYesNo');
  const carousel = document.querySelector('.carousel');

  barra.classList.toggle('oculta');
  conteudo.classList.toggle('expandida');

  // Imagem
  if (conteudo.classList.contains('expandida')) {
    imagem.classList.remove('oculta');
  } else {
    imagem.classList.toggle('oculta');
  }

  // Carousel
  if (!barra.classList.contains('oculta')) {
    carousel.classList.add('expande');
  } else {
    carousel.classList.remove('expande');
  }

  if (typeof atualizarConteudoLateral === 'function') {
    atualizarConteudoLateral();
  }
}


  

function resetarBarraLateral() {
  const barra = document.getElementById('barraLateral');
  const conteudo = document.getElementById('mainContent');
  const imagem = document.getElementById('imgYesNo');
  const container = document.getElementById('carousel');

  barra.classList.add('oculta');
  conteudo.classList.add('expandida');
  if (container) container.classList.remove('centrado');
}

window.addEventListener('DOMContentLoaded', resetarBarraLateral);



