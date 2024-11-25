const createProductCart = (name, price, productImage) => {
        let cartContainer = document.querySelector(".cart-items");
    
        let cartProduct = document.createElement('div');
    
        cartProduct.innerHTML =`
        <div class="cart-item">
        <img src="${productImage}" alt="${name}">
        <div class="item-details">
            <p class="item-name">${name}</p>
            <p class="item-price">${price}</p>
        </div>
        <div class="quantity">
            <button class="minus-btn">-</button>
            <input type="number" value="1" class="quantity-input">
            <button class="plus-btn">+</button>
        </div>
        <button class="remove-btn">Remover</button>
        </div>
        `
        cartContainer.appendChild(cartProduct);
}

    const removeBtns = document.querySelectorAll('.remove-btn');
    const quantityInputs = document.querySelectorAll('.quantity-input');
    const plusBtns = document.querySelectorAll('.plus-btn');
    const minusBtns = document.querySelectorAll('.minus-btn');
    const totalPriceElement = document.getElementById('total-price');

    document.addEventListener('click', (event) => {
        // Verifica se o clique é em um botão de remover
        if (event.target.matches('.remove-btn')) {
            const item = event.target.closest('.cart-item');
            item.remove();
            updateTotal();
        }
    
        // Verifica se o clique é em um botão de aumentar
        if (event.target.matches('.plus-btn')) {
            const item = event.target.closest('.cart-item');
            const input = item.querySelector('.quantity-input');
            input.value = parseInt(input.value) + 1;
            updateTotal();
        }
    
        // Verifica se o clique é em um botão de diminuir
        if (event.target.matches('.minus-btn')) {

            const item = event.target.closest('.cart-item');
            const input = item.querySelector('.quantity-input');
            if (input.value > 1) {
                input.value = parseInt(input.value) - 1;
            }
            if(input.value == 1){
                item.remove();
                updateTotal();
            }
            updateTotal();
        }
    });
        

    function updateTotal() {
        let total = 0;
        const items = document.querySelectorAll('.cart-item');
        items.forEach(item => {
            const price = parseFloat(item.querySelector('.item-price').innerText.replace('R$', '').replace(',', '.').trim());
            const quantity = parseInt(item.querySelector('.quantity-input').value);
            total += price * quantity;
        });
        totalPriceElement.innerText = `R$ ${total.toFixed(2)}`;
    }







