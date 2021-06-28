/**
 * @copyright Filippo Mazzamuto
 * @license LGPL
 */
export default class Cart {

    cart = [];
    products = {};
    qty = 1;

    /**
     * 
     * @param {array, object} array
     */
    constructor(array){
        this.products = array;
    }

    /**
     * Add product in the cart
     * @param {number} id 
     */
    addCart(id)
    {
        id = +id;
        const cart = this.products?.filter(obj => obj.id === id);
        let index = this.cart.findIndex(e => e?.id === id);

        if(this.cart[index]?.qty){
            this.cart[index].qty++;
            return;
        }
        this.cart.push(...cart);
        this.cart[this.cart.length - 1].qty = this.qty;
    }

    /**
     * 
     * @returns {array}
     */
    getCart()
    {
        return this.cart;
    }


    /**
     * 
     * @returns {number}
     */
    getCartQty()
    {
        let totalQty = 0;
        this.cart.forEach(obj =>{
            totalQty += obj.qty;
        });
        return totalQty;
    }

    /**
     * 
     * @returns {number}
     */
    getTotalPrice()
    {
        let totalPrice = 0;
        for(let i = 0; i < this.cart.length; i++){
            totalPrice += this.cart[i].price * this.cart[i].qty;
        }
        return totalPrice;
    }


    deleteCart(id)
    {
        id = +id;
        //let index = this.cart.findIndex(e => e?.id === id);
        //this.cart.splice(index, 1); 
        //l problema splice()è che l'elemento viene rimosso dall'array sposta anche tutti gli altri elementi verso il basso di uno.
        // Sarebbe meglio usare filter():
        this.cart = this.cart.filter(e => e.id !== id);
        //Applicare un controllo booleano
        console.log(this.cart);
        return true;
    }

}