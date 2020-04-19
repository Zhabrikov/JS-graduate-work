class Cart{
    constructor(containerCart, basket, catalogProduct){
        this.containerCart = document.querySelector(containerCart);
        this.basket = document.querySelector(basket);
        this.catalogProduct = catalogProduct;
        this.createCart();
    }

    createCart(){
        function cartclick(){
            cart.containerCart.style.display = 'block';
            let productsCart = cart.getProductCart();
            let wrapper = document.createElement('slot');
            let main_page = document.getElementById('main_page');
            let catalog = document.getElementById('catalog');
            let products = store.getProducts();
            for (let i = 0; i < products.length; i++){ 
                
               
                let item = createOneProduct.getProductItem({
                    nameTag: 'div',
                    nameClass: 'item'
                });
                let name = createOneProduct.getProductItem({
                    nameTag: 'div',
                    nameClass: 'name',
                    nameText: productsCart[i].name
                });
                let price = createOneProduct.getProductItem({
                    nameTag: 'div',
                    nameClass: 'price',
                });
                let img = createOneProduct.getProductItem({
                    nameTag: 'div',
                    nameClass: 'img',
                    bgImage: `url(${productsCart[i].img})`
                });
                let btn = createOneProduct.getProductItem({
                    nameTag: 'button',
                    nameClass: 'btn',
                    nameText: 'Удалить',
                    id: `del${productsCart[i].id}`
                });
                let quantity = createOneProduct.getProductItem({
                    nameTag: 'div',
                    nameClass: 'quantity'
                });
                let sumkol = createOneProduct.getProductItem({
                    nameTag: 'div',
                    nameClass: 'sumkol'
                });
                let btndel = createOneProduct.getProductItem({
                    nameTag: 'div',
                    nameClass: 'btndel'
                });

              
                

               
                item.appendChild(img);
                
                item.appendChild(name);
                item.appendChild(price);
                price.innerHTML = `
                <div>
                    <p>Стоимость одного товара: <span>${productsCart[i].price}</span></p>
                    
                </div>
                `;
                item.appendChild(quantity);
                quantity.innerHTML = `
                <div>
                    <button id='plus${productsCart[i].id}'>+</button>
                    <input type='text' id='text${productsCart[i].id}' value='1' readonly>
                    <button id='minus${productsCart[i].id}'>-</button>
                              
                </div>
                `;
                
                item.appendChild(sumkol); 
                sumkol.innerHTML = `<p>Сумма за несколько товаров: <span id='total${productsCart[i].id}' class='total'>${productsCart[i].price}</span></p>    `;     
                item.appendChild(btndel);      
                btndel.appendChild(btn);      

                wrapper.appendChild(item);
                
                
                
            }
            
            wrapper.innerHTML += `<div class='itogsum'><p>Итоговая сумма: <span id='itog'>0</span></p><div>`;
            

            main_page.style.display = 'none';
            catalog.style.display = 'none';
            about.style.display = 'none';
            faq.style.display = 'none';
            blog.style.display = 'none';

            cart.containerCart.innerHTML = '';
            cart.containerCart.appendChild(wrapper);

            for (let i = 0; i < productsCart.length; i++){
                document.getElementById(`del${productsCart[i].id}`).addEventListener('click', function(){
                    
                    let id = productsCart[i].id;
                    let result = store.putProduct(id);
                    allProducts.catalogCounter.innerHTML = result.products.length;
                    document.getElementById(`del${productsCart[i].id}`).parentNode.parentNode.remove();
                    // productsCart.length -= 1;
                    if (productsCart.length != 0){
                        itogsum();
                    } else {
                        document.getElementById('itog').innerText = 0;
                    }
                    // console.log(productsCart);
                })

                document.getElementById(`plus${productsCart[i].id}`).addEventListener('click', function(){     
                          
                    document.getElementById(`text${productsCart[i].id}`).value =  +document.getElementById(`text${productsCart[i].id}`).value + 1;
                    document.getElementById(`total${productsCart[i].id}`).innerText = productsCart[i].price * document.getElementById(`text${productsCart[i].id}`).value;
                    itogsum();
                   
                })
                document.getElementById(`minus${productsCart[i].id}`).addEventListener('click', function(){                    
                    document.getElementById(`text${productsCart[i].id}`).value =  +document.getElementById(`text${productsCart[i].id}`).value - 1;
                    
                    document.getElementById(`total${productsCart[i].id}`).innerText = document.getElementById(`total${productsCart[i].id}`).innerText - productsCart[i].price;
                    if (document.getElementById(`text${productsCart[i].id}`).value < 1){
                        document.getElementById(`total${productsCart[i].id}`).innerText = productsCart[i].price;
                        document.getElementById(`text${productsCart[i].id}`).value = 1;
                        
                    }
                    itogsum();
                })
                
            }
            function itogsum(){
                document.getElementById('itog').innerText = ''; 
                let len = productsCart.length;
                for (let i = 0; i < len; i++){
                    // console.log(productsCart.length);
                    // console.log(document.getElementsByClassName('total')[i].innerText);
                    // if(document.getElementsByClassName('total')[i].innerText)
                
                        document.getElementById('itog').innerText =  +document.getElementById('itog').innerText + +document.getElementsByClassName('total')[i].innerText;
                    console.log(document.getElementsByClassName('total')[i].innerText);
                    
                   
                }
            }
            itogsum();

        }
        this.basket.addEventListener('click', cartclick);
        
    };

    getProductCart(){
        let products = store.getProducts();
        let productsCart = [];
        for (let i = 0; i < this.catalogProduct.length; i++){
            if (products.indexOf(this.catalogProduct[i].id) !== -1) {
                productsCart.push(this.catalogProduct[i]);
            }
        }

        return productsCart;
    };
};



let cart = new Cart('.container_cart', '.basket', catalogProduct);
