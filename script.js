const productCard = (name, description,price = 'free', productImage, type = 'outros', petType = "cachorro") => {
    let grid = document.querySelector(".grid");
    grid = grid.querySelector(".productGrid");

    const productCard = document.createElement('div');

    
    const productID = Math.floor(Math.random() * 90000) + 10000;
    
    productCard.id = productID;

    productCard.className = `productCard ${type} ${petType}`;

    productCard.innerHTML = `
        <img src="${productImage}" alt="${name}" class="product-img"></img>
        <h3>${name}</h3>
        <p>${description}</p>
        <h3>${price}</h3>
        <button id="${productID}" class="buyItem">Adicionar ao carrinho</button>
    `
    grid.appendChild(productCard);
    
}

// Função para carregar o arquivo JSON e armazenar no objeto products
async function loadProducts() {

    let products = null;

    const response = await fetch('src/produtos.json');  // Faz a requisição para o JSON

    products = await response.json();  // Converte a resposta para JSON e armazena na variável products

    for (const product of products){
      productCard(product.name, product.description, product.price, product.imgUrl, product.type, product.petType);
    }

    let buttons = document.getElementsByClassName("buyItem");

    for (let button of buttons) {
      button.addEventListener("click", (event) => {
        let productCard = document.getElementById(event.target.id);

        let product = {
          name: productCard.querySelector('h3').textContent,
          price: productCard.querySelectorAll('h3')[1].textContent, 
          imageUrl: productCard.querySelector('img').src
      };

      createProductCart(product.name, product.price, product.imageUrl);

      });

    }

    document.getElementById('productTypeFilter').addEventListener('change', function () {
      const filterValue = this.value; 
      const products = document.querySelectorAll('.productCard');
  
      products.forEach(product => {
              if (filterValue === 'outros' || product.classList.contains(filterValue)) {
                product.style.display = ''; 
                product.classList.remove('hidden'); 
              }else {
                  product.style.display = 'none'; 
                  product.classList.add('hidden'); 
              }
      });       
  });
}


loadProducts();

const cartButton = document.getElementById('cartButton');
const cartContainer = document.querySelector('.cart-container');

// Inicialmente, esconde o contêiner do carrinho
cartContainer.style.display = 'none';

// Evento de clique no botão
cartButton.addEventListener('click', () => {
    // Muda o display do contêiner do carrinho para flex
    cartContainer.style.display = 'flex';
});










