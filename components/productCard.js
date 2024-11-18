const productCard = () => {
    productNum++;
    let grid = document.querySelector(".grid");
    grid = grid.querySelector(".productGrid");

    const productCard = document.createElement('div');

    productCard.className = "productCard";

    productImage = "https://via.placeholder.com/150";

    productCard.innerHTML = `
        <img src="${productImage}" alt="Produto${productNum}" class="product-img"></img>
        <h3>Produto ${productNum}</h3>
        <p>Descrição breve do produto 1.</p>
        <button>Comprar</button>
    `
    

    grid.appendChild(productCard);

    console.log(grid.children)
    
}

let productNum = 0;
productCard();
productCard();
