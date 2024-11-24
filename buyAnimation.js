window.onload = function() {
    let btnsBuy = document.querySelectorAll('.buyItem'); // Seleciona todos os botões com a classe .buyItem

    btnsBuy.forEach((button) => {
      button.addEventListener('click', () => {
        const emoji = document.createElement('span');
        const randomNumber = Math.floor(Math.random() * 2) + 1;

        switch (randomNumber) {
          case 1:
            emoji.textContent = '💸';
            break;
          case 2:
            emoji.textContent = '🐾';
            break;
        }

        emoji.classList.add('emoji'); // Adiciona a classe de animação ao emoji

        button.appendChild(emoji);

        emoji.addEventListener('animationend', () => {
          emoji.remove();
        });
      });
    });
  };