let main_page = document.getElementById('main_page');
let catalog = document.getElementById('catalog');
let about = document.getElementById('about');
let faq = document.getElementById('faq');
let blog = document.getElementById('blog');
let crumMain = document.getElementById('crumMain');
let crumCatalog = document.getElementById('crumCatalog');
let crumInfo = document.getElementById('crumInfo');
let crumFAQ = document.getElementById('crumFAQ');
let crumBLOG = document.getElementById('crumBLOG');
let bread_crumbs = document.getElementById('bread_crumbs');

this.basket = document.querySelector('.container_cart');

function menuClick(event){
    // console.log(event.currentTarget.innerHTML);

    switch(event.currentTarget.innerHTML){       
        
       
        case "<a>Главная</a>":
            main_page.style.display = 'block';
            catalog.style.display = 'none';  
            about.style.display = 'none';   
            faq.style.display = 'none';  
            blog.style.display = 'none';  
            basket.style.display = 'none';  
            bread_crumbs.style.display = 'none';
            
            // crumMain.style.display = 'none';
            // crumCatalog.style.display = 'none';
            // crumInfo.style.display = 'none';
            // crumFAQ.style.display = 'none';
            // crumBLOG.style.display = 'none';
            break;
        case "<a>Каталог</a>":
            crumMain.style.display = 'block';
            crumCatalog.style.display = 'block';
            crumInfo.style.display = 'none';
            crumFAQ.style.display = 'none';
            crumBLOG.style.display = 'none';
            bread_crumbs.style.display = 'block';


            main_page.style.display = 'none';
            catalog.style.display = 'flex'; 
            basket.style.display = 'none'; 
            about.style.display = 'none';
            faq.style.display = 'none';
            blog.style.display = 'none';   
            container_products.innerHTML = ''; 
            allProducts = new AllProducts('.container_products', catalogProduct, '.catalog_counter', 'All');            

            for (let i = 0; i < document.getElementsByName('1').length; i++) {
                document.getElementsByName('1')[i].checked = false;
            };

            break;
        case "<a>О компании</a>":
            bread_crumbs.style.display = 'block';
            crumMain.style.display = 'block';
            crumCatalog.style.display = 'none';
            crumInfo.style.display = 'block';
            crumFAQ.style.display = 'none';
            crumBLOG.style.display = 'none';

            main_page.style.display = 'none';
            catalog.style.display = 'none';
            about.style.display = 'flex';
            faq.style.display = 'none';
            blog.style.display = 'none';
            basket.style.display = 'none';    
            break;
        case "<a>FAQ</a>":
            bread_crumbs.style.display = 'block';
            crumMain.style.display = 'block';
            crumCatalog.style.display = 'none';
            crumInfo.style.display = 'none';
            crumFAQ.style.display = 'block';
            crumBLOG.style.display = 'none';

            main_page.style.display = 'none';
            catalog.style.display = 'none';
            about.style.display = 'none';
            faq.style.display = 'flex';
            blog.style.display = 'none';
            basket.style.display = 'none';    
            break;
        case "<a>Блог компании</a>":
            bread_crumbs.style.display = 'block';
            crumMain.style.display = 'block';
            crumCatalog.style.display = 'none';
            crumInfo.style.display = 'none';
            crumFAQ.style.display = 'none';
            crumBLOG.style.display = 'block';

            main_page.style.display = 'none';
            about.style.display = 'none';
            catalog.style.display = 'none';
            faq.style.display = 'none';
            blog.style.display = 'flex';
            basket.style.display = 'none';    
            break;
        
    }
};

for (let i = 0; i < document.getElementById('menu').getElementsByTagName('li').length; i++) {
    document.getElementById('menu').getElementsByTagName('li')[i].addEventListener('click', menuClick);
}

document.getElementById('logo').addEventListener('click', function(){
    main_page.style.display = 'block';
    catalog.style.display = 'none';  
    about.style.display = 'none';   
    faq.style.display = 'none';  
    blog.style.display = 'none';  
    basket.style.display = 'none';   
    bread_crumbs.style.display = 'none'; 
})
document.getElementById('crumMain').addEventListener('click', function(){
    bread_crumbs.style.display = 'none';
    main_page.style.display = 'block';
    catalog.style.display = 'none';  
    about.style.display = 'none';   
    faq.style.display = 'none';  
    blog.style.display = 'none';  
    basket.style.display = 'none';  
            
    crumMain.style.display = 'none';
    crumCatalog.style.display = 'none';
    crumInfo.style.display = 'none';
    crumFAQ.style.display = 'none';
    crumBLOG.style.display = 'none';
})