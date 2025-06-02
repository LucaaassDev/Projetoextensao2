document.addEventListener('DOMContentLoaded', function () {
    const botaoTopo = document.getElementById('botao-topo');
    const menu = document.getElementById('menu');
  
    // Esconde o botão inicialmente
    botaoTopo.classList.remove('visivel');
  
    window.addEventListener('scroll', function () {
      // Pega a posição do menu em relação ao topo da janela
      const menuBottom = menu.getBoundingClientRect().bottom;
  
      if (menuBottom < 0) {
        botaoTopo.classList.add('visivel'); // Usa flex para centralizar o ícone
      } else {
        botaoTopo.classList.remove('visivel');
      }
    });
  
    botaoTopo.addEventListener('click', function () {
      window.scrollTo({
        top: 0,
        behavior: 'smooth'
      });
    });
  });