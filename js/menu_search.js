let menu_search = document.getElementById('menu_search');
let processor = document.getElementById('processors');
let ram = document.getElementById('ram');
let powerSupplies = document.getElementById('powerSupplies');



function searchMenuClick(event){  
    switch(event.currentTarget.innerHTML){    
        
        case "Процессоры":
            if(processor.style.display != 'block'){
                processor.style.display = 'block';  
            } else {
                processor.style.display = 'none';  
            }           
            ram.style.display = 'none';  
            powerSupplies.style.display = 'none';  
            break;
        case "Оперативная память":
            if (ram.style.display != 'block'){
                ram.style.display = 'block'; 
            } else {
                ram.style.display = 'none'; 
            }
            processor.style.display = 'none'; 
            powerSupplies.style.display = 'none'; 
            break;        
        case "Блок питания":
            if (powerSupplies.style.display != 'block'){
                powerSupplies.style.display = 'block';
            } else {
                powerSupplies.style.display = 'none';
            }
            processor.style.display = 'none';
            ram.style.display = 'none';    
            break;        
    }
};
// console.log(document.getElementById('menu_search').getElementsByTagName('div'));

for (let i = 0; i < document.getElementById('menu_search').getElementsByTagName('div').length; i++) {
    document.getElementById('menu_search').getElementsByTagName('h5')[i].addEventListener('click', searchMenuClick);
}

function sorting(event){
    // console.log(event.currentTarget.id);
    switch(event.currentTarget.id){            
        case "amdInput":
            paramSearch = 'AMD';
            container_products.innerHTML = '';
            allProducts = new AllProducts('.container_products', catalogProduct, '.catalog_counter', 'AMD');            
            break;
        case "intelInput":
            paramSearch = 'Intel';
            container_products.innerHTML = '';
            allProducts = new AllProducts('.container_products', catalogProduct, '.catalog_counter', 'Intel');
            break;              
        case "crucialInput":
            paramSearch = 'Crucial';
            container_products.innerHTML = '';
            allProducts = new AllProducts('.container_products', catalogProduct, '.catalog_counter', 'Crucial');
            break;              
        case "hyperXInput":
            paramSearch = 'HyperX';
            container_products.innerHTML = '';
            allProducts = new AllProducts('.container_products', catalogProduct, '.catalog_counter', 'HyperX');
            break;              
        case "kingstonInput":
            paramSearch = 'Kingston';
            container_products.innerHTML = '';
            allProducts = new AllProducts('.container_products', catalogProduct, '.catalog_counter', 'Kingston');
            break;              
        case "samsungInput":
            paramSearch = 'Samsung';
            container_products.innerHTML = '';
            allProducts = new AllProducts('.container_products', catalogProduct, '.catalog_counter', 'Samsung');
            break;              
        case "chieftecInput":
            paramSearch = 'Chieftec';
            container_products.innerHTML = '';
            allProducts = new AllProducts('.container_products', catalogProduct, '.catalog_counter', 'Chieftec');
            break;              
        case "aeroCoolInput":
            paramSearch = 'AeroCool';
            container_products.innerHTML = '';
            allProducts = new AllProducts('.container_products', catalogProduct, '.catalog_counter', 'AeroCool');
            break;              
        case "seasonicInput":
            paramSearch = 'Seasonic';
            container_products.innerHTML = '';
            allProducts = new AllProducts('.container_products', catalogProduct, '.catalog_counter', 'Seasonic');
            break;              
        case "zalmanInput":
            paramSearch = 'Zalman';
            container_products.innerHTML = '';
            allProducts = new AllProducts('.container_products', catalogProduct, '.catalog_counter', 'Zalman');
            break;              
    }
}

for (let i = 0; i < document.getElementsByName('1').length; i++) {
    document.getElementById(`${document.getElementsByName('1')[i].id}Input`).addEventListener('click', sorting);
    document.getElementById(`${document.getElementsByName('1')[i].id}Input`).addEventListener('click', function(){
        document.getElementsByName('1')[i].checked = true;
    });

    document.getElementById(`l${document.getElementsByName('1')[i].id}`).addEventListener('click', function(){        
        document.getElementsByName('1')[i].checked = true;
    });
}

