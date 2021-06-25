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
        if(cart[0].qty){
            cart[0].qty++;
            return;
        }
        cart[0].qty = this.qty;
        this.cart.push(...cart);
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

    getTotalPrice()
    {
        let totalPrice = 0;
        for(let i = 0; i < this.cart.length; i++){
            totalPrice += this.cart[i].price * this.cart[i].qty;
        }
        return totalPrice;
    }

}