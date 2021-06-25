/**
 * @copyright Filippo Mazzamuto
 * @license LGPL
 */
export default class Product {

    id;
    name = '';
    description = '';
    price = 0;
    imgPath = 'vendor/ecommerce/img/not-found.jpeg';

    /**
     * 
     * @param {number} id
     * @param {string} name 
     * @param {string} description 
     * @param {number} price 
     * @param {string} imgPath 
     */
    constructor(id, name, description, price, imgPath){
        this.id = id;
        this.name = name;
        this.description = description;
        this.price = price;
        this.imgPath = imgPath || this.imgPath;
    }
}