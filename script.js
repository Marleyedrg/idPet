

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
        <button id="${productID}" class="buyItem">Comprar</button>
    `
    grid.appendChild(productCard);
    
}

// Função para carregar o arquivo JSON e armazenar no objeto products
export async function loadProducts() {
    let products = null;

    const response = await fetch('src/produtos.json');  // Faz a requisição para o JSON

    products = await response.json();  // Converte a resposta para JSON e armazena na variável products

    for (const product of products){
      productCard(product.name, product.description, product.price, product.imgUrl, product.type, product.petType);
    }

    let buttons = document.getElementsByClassName("buyItem");

    for (let button of buttons) {
      button.addEventListener("click", (event) => {
          console.log(document.getElementById(event.target.id));
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







