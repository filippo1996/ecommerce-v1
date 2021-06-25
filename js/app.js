/**
 * Import package class Product 
 */
import Product from "../vendor/ecommerce/Product.js";
import Cart from "../vendor/ecommerce/Cart.js";

const items = [
    new Product(1,'Playstation 1', 'Console sony top', 659, 'img/ps5.jpeg'),
    new Product(2,'Playstation 2', 'Console sony top', 459, 'img/ps5.jpeg'),
    new Product(3,'Playstation 3', 'Console sony top', 159, 'img/ps5.jpeg'),
    new Product(4,'Playstation 4', 'Console sony top', 459, 'img/ps5.jpeg'),
    new Product(5,'Playstation 5', 'Console sony top', 269, 'img/ps5.jpeg'),
    new Product(6,'Playstation 6', 'Console sony top', 459, 'img/ps5.jpeg'),
    new Product(7,'Playstation 7', 'Console sony top', 359, 'img/ps5.jpeg'),
    new Product(8,'Test quando l\'immaggine non è disponibile', 'Console sony top', 429)
];

//Instanziamo la classe cart
const cart = new Cart(items);


/**
 * oggetto di configurazione dell'app
 */
const conf = {
    priceFixed: function(number) { return number.toFixed(2)}
};

//Stampiamo nell'html l'array di oggetti dei prodotti
const viewProducts = document.getElementById('view-products');
items.forEach(obj => {
    let {id, name, description, price, imgPath} = obj;
    viewProducts.innerHTML += 
    `<div class="product">
        <img src="${imgPath}" alt="${name}">
        <h2 class="title-product">${name}<h2>
        <p class="description-product">${description}</p>
        <h4 class="margin-bottom">Prezzo: ${conf.priceFixed(price)}&euro;</h4>
        <button class="btn add-cart" data-product="${id}">Aggiungi al carrello</button>
    </div>`;
});

//Creiamo un evento al click sul pulsante aggiungi al carrello
const addCart = document.querySelectorAll('.add-cart');
addCart.forEach(item => {
    item.addEventListener('click', function(e){
        const idProduct = e.target.getAttribute('data-product');
        //Aggiungiamo il prodotto nel carrello
        cart.addCart(idProduct);
        //Mostrimo nell'html la quantità dei prodotti nel carrello
        document.getElementById('qty').innerHTML = cart.getCartQty();
        //Mostrimo nell'html il prodotto del carrello
        showBoxItemCart(idProduct);
        //Mostriamo le informazioni aggiornate ogni qualvolta si aggiunge un prodotto nel carrello
        showInfoCart();
    });
});



//Evento al click se premiamo il carrello
const clickCart = document.getElementById('click-cart');
let openCart = false;
clickCart.addEventListener('click', (e) =>{
    const showCart = document.querySelector('.show-cart');
    if(!openCart){
        openCart = true;
        showCart.classList.remove('hidden');
    }else{
        openCart = false;
        showCart.classList.add('hidden');
    }
});


/**
 * Funzione che stampa nell'hatml il prodotto aggiunto nel carrello
 * @param {number} id 
 */
function showBoxItemCart(id){
    id = +id;
    const listCart = document.getElementById('list-cart');
    let item = {};
    cart.getCart().forEach(obj => {
        if(obj.id === id){
            item = obj;
            return;
        }
    });
    if(item.qty === 1){
        listCart.innerHTML += 
        `<li class="list margin-bottom">
            <img class="preview-cart" src="${item.imgPath}" alt="${item.name}">
            <div class="d-inline-block">
                <p>${item.name}<p>
                <span>Prezzo ${conf.priceFixed(item.price)}&euro;<span>
                <p data-id="${item.id}">Quantità: ${item.qty}<p>
            </div>
        </li>`;
        return;
    }
    document.querySelector('[data-id ="' + item.id + '"]').innerHTML = 'Quantità: ' + item.qty;
}

/**
 * Funzione che ci mostra le informazioni della modale carrello
 */
function showInfoCart(){
    //Mostriamo e stampiamo sulla modal carrello il prezzo totale
    const totalPrice = document.getElementById('total-price');
    totalPrice.innerHTML = `(Totale ${conf.priceFixed(cart.getTotalPrice())}&euro;)`;
}