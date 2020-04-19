class AllProducts{
    constructor(containerProducts, catalogProduct, catalogCounter, paramSearch){
        this.containerProducts = document.querySelector(containerProducts);
        this.catalogProduct = catalogProduct;
        this.catalogCounter = document.querySelector(catalogCounter);
        this.paramSearch = paramSearch;
        this.createProducts();
    }


    createProducts(){
        let wrapper = document.createElement('slot');
        let products = store.getProducts();
        this.catalogCounter.innerHTML = products.length;

            for(let i = 0; i < this.catalogProduct.length; i++){
                let index = products.indexOf(this.catalogProduct[i].id);
                let activeText;
                if (index === -1){                
                    activeText = 'Добавить в корзину';               
                } else {
                    activeText = 'Удалить из корзины';
                }

                let item = createOneProduct.getProductItem({
                    nameTag: 'div',
                    nameClass: 'item'
                });
                let name = createOneProduct.getProductItem({
                    nameTag: 'div',
                    nameClass: 'name',
                    nameText: this.catalogProduct[i].name
                });
                let img = createOneProduct.getProductItem({
                    nameTag: 'div',
                    nameClass: 'img',
                    bgImage: `url(${this.catalogProduct[i].img})`
                });
                let price = createOneProduct.getProductItem({
                    nameTag: 'div',
                    nameClass: 'price',
                    nameText: 'Цена: ' + this.catalogProduct[i].price + ' BYN'
                });
                
                
                let buttons = createOneProduct.getProductItem({
                    nameTag: 'div',
                    nameClass: 'buttons'
                });
                

                let btn = createOneProduct.getProductItem({
                    nameTag: 'button',
                    nameClass: 'btn',
                    nameText: activeText,
                    id: this.catalogProduct[i].id
                });
                let btnMore = createOneProduct.getProductItem({
                    nameTag: 'button',
                    nameClass: 'btn',
                    nameText: 'Подробнее',
                    id: this.catalogProduct[i].id
                });

                btn.addEventListener('click', function(){
                    let id = this.getAttribute('id');
                    let result = store.putProduct(id);
                    allProducts.catalogCounter.innerHTML = result.products.length;

                    if(result.statusProduct){
                        this.innerHTML = 'Удалить из корзины';
                    } else {
                        this.innerHTML = 'Добавить в корзину';
                    }
                })  

                function more(){
                    console.log(catalogProduct[i].description);
                    let container_products = document.getElementById('container_products');
                    
                    container_products.innerHTML = `
                    <div class='oneElement'>
                        
                        <div class='images'> 
                            <div class="headImages" id="headImages">
                                <img id='mainImg' src=${catalogProduct[i].img}> 
                            </div>
                            <div class="footImages" id="footImages">
                                <img id='oneImg' src=${catalogProduct[i].img}> 
                                <img id='twoImg' src=${catalogProduct[i].img2}>
                                <img id='threeImg' src=${catalogProduct[i].img3}> 
                            </div>                            
                        </div>
                        <div class='descrElement' id='descrElement'>
                            <h5>${catalogProduct[i].name}</h5>
                            <p>${catalogProduct[i].description}</p>
                            <div id='tableInformation' class='tableInformation'></div>
                            <div id="btnOneProduct" class="btnOneProduct">
                                <button onclick="newCatalog()">Назад</button>
                            </div>
                            
                        </div>
                        
                    </div>
                    
                    `;

                    if(catalogProduct[i].manufacturers == 'AMD' || catalogProduct[i].manufacturers == 'Intel'){
                        document.getElementById('tableInformation').innerHTML += `
                        <table>
                            <thead>
                                <tr>
                                    <td colspan="2">Технические характеристики</td>
                                </tr>
                            </thead>
                            <tbody>
                                <tr>
                                    <td>Модельный ряд</td>
                                    <td>${catalogProduct[i].lineup}</td>
                                </tr>
                                <tr>
                                    <td>Тип поставки</td>
                                    <td>${catalogProduct[i].deliveryType}</td>
                                </tr>
                                <tr>
                                    <td>Охлаждение в комплекте</td>
                                    <td>${catalogProduct[i].coolingIncluded}</td>
                                </tr>
                                <tr>
                                    <td>Кодовое название кристалла</td>
                                    <td>${catalogProduct[i].crystalCodeName}</td>
                                </tr>
                                <tr>
                                    <td>Сокет</td>
                                    <td>${catalogProduct[i].socket}</td>
                                </tr>
                                <tr>
                                    <td>Количество ядер</td>
                                    <td>${catalogProduct[i].numberOfCores}</td>
                                </tr>
                                <tr>
                                    <td>Максимальное количество потоков</td>
                                    <td>${catalogProduct[i].maximumNumberOfThreads}</td>
                                </tr>
                                <tr>
                                    <td>Базовая тактовая частота</td>
                                    <td>${catalogProduct[i].baseClock}</td>
                                </tr>
                                <tr>
                                    <td>Максимальная частота</td>
                                    <td>${catalogProduct[i].maximumFrequency}</td>
                                </tr>
                            </tbody>
                           
                        </table>
                        `;
                    };


                    if(catalogProduct[i].manufacturers == 'Crucial' || catalogProduct[i].manufacturers == 'HyperX' || catalogProduct[i].manufacturers == 'Kingston' || catalogProduct[i].manufacturers == 'Samsung'){
                        document.getElementById('tableInformation').innerHTML += `
                        <table>
                            <thead>
                                <tr>
                                    <td colspan="2">Основные</td>
                                </tr>
                            </thead>
                            <tbody>
                                <tr>
                                    <td>Набор</td>
                                    <td>${catalogProduct[i].set}</td>
                                </tr>
                                <tr>
                                    <td>Объем</td>
                                    <td>${catalogProduct[i].memory}</td>
                                </tr>
                                <tr>
                                    <td>Тип</td>
                                    <td>${catalogProduct[i].type}</td>
                                </tr>
                                <tr>
                                    <td>ECC</td>
                                    <td>${catalogProduct[i].ecc}</td>
                                </tr>
                                <tr>
                                    <td>Частота</td>
                                    <td>${catalogProduct[i].frequency}</td>
                                </tr>
                                <tr>
                                    <td>PC-индекс</td>
                                    <td>${catalogProduct[i].pcindex}</td>
                                </tr>
                                <tr>
                                    <td>CAS Latency</td>
                                    <td>${catalogProduct[i].casLatency}</td>
                                </tr>
                                <tr>
                                    <td>Тайминги</td>
                                    <td>${catalogProduct[i].timings}</td>
                                </tr>
                                <tr>
                                    <td>Напряжение питания</td>
                                    <td>${catalogProduct[i].supplyVoltage}</td>
                                </tr>
                            </tbody>
                           
                        </table>
                        `;
                    };


                    if(catalogProduct[i].manufacturers == 'Chieftec' || catalogProduct[i].manufacturers == 'AeroCool' || catalogProduct[i].manufacturers == 'Seasonic' || catalogProduct[i].manufacturers == 'Zalman'){
                        document.getElementById('tableInformation').innerHTML += `
                        <table>
                            <thead>
                                <tr>
                                    <td colspan="2">Технические характеристики</td>
                                </tr>
                            </thead>
                            <tbody>
                                <tr>
                                    <td>Мощность</td>
                                    <td>${catalogProduct[i].power}</td>
                                </tr>
                                <tr>
                                    <td>Стандарт блока питания</td>
                                    <td>${catalogProduct[i].powerSupplyStandard}</td>
                                </tr>
                                <tr>
                                    <td>Количество отдельных линий +12V</td>
                                    <td>${catalogProduct[i].numberOfIndividualLines}</td>
                                </tr>
                                <tr>
                                    <td>Макс. ток по линии +12V</td>
                                    <td>${catalogProduct[i].maxLineCurrent}</td>
                                </tr>
                                <tr>
                                    <td>Коррекция фактора мощности (PFC)</td>
                                    <td>${catalogProduct[i].pfc}</td>
                                </tr>
                                <tr>
                                    <td>КПД</td>
                                    <td>${catalogProduct[i].efficiency}</td>
                                </tr>
                                <tr>
                                    <td>Сертификат 80 PLUS</td>
                                    <td>${catalogProduct[i].certificate80Plus}</td>
                                </tr>
                                <tr>
                                    <td>Размер вентилятора блока питания</td>
                                    <td>${catalogProduct[i].powerSupplyFanSize}</td>
                                </tr>
                                <tr>
                                    <td>Количество вентиляторов</td>
                                    <td>${catalogProduct[i].numberOfFans}</td>
                                </tr>
                                <tr>
                                    <td>Подсветка вентилятора</td>
                                    <td>${catalogProduct[i].fanBbacklight}</td>
                                </tr>
                            </tbody>
                           
                        </table>
                        `;

                        
                    };

                    

                    document.getElementById('btnOneProduct').appendChild(btn);
                    
                    document.getElementById('oneImg').addEventListener('click', function(){
                        document.getElementById('mainImg').src = catalogProduct[i].img;
                    })
                    document.getElementById('twoImg').addEventListener('click', function(){
                        document.getElementById('mainImg').src = catalogProduct[i].img2;
                    })
                    document.getElementById('threeImg').addEventListener('click', function(){
                        document.getElementById('mainImg').src = catalogProduct[i].img3;
                    })
                    
                    
                }

                btnMore.addEventListener('click', more);

                name.addEventListener('click', more);
                img.addEventListener('click', more);
                // console.log(catalogProduct[i].manufacturers);
                
                
                if (this.paramSearch == catalogProduct[i].manufacturers){
                    item.appendChild(name);
                    item.appendChild(img);
                    item.appendChild(price);
                    
                    item.appendChild(buttons);
                    
                    buttons.appendChild(btn);
                    buttons.appendChild(btnMore);
                    wrapper.appendChild(item);
                } else if(this.paramSearch == 'All'){
                    item.appendChild(name);
                    item.appendChild(img);
                    item.appendChild(price);
                    
                    item.appendChild(buttons);
                    
                    buttons.appendChild(btn);
                    buttons.appendChild(btnMore);
                    wrapper.appendChild(item);
                }
                
            };
        this.containerProducts.appendChild(wrapper);

    };
    
}
function newCatalog(){
    container_products.innerHTML = '';
    allProducts = new AllProducts('.container_products', catalogProduct, '.catalog_counter', paramSearch);
}
let allProducts = new AllProducts('.container_products', catalogProduct, '.catalog_counter', 'All');