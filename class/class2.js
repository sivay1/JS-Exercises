class Product{
    constructor ( name, price, stock , quantity ){
        this.name = name;
        this.price = price;
        this.maxStock = 10;
        this.stock = stock;
        this.quantity = quantity;
        this.isAvailable = false;
        if(!this.isAvailable){
            this.isAvailable = true;
        }
        
    }
    getProduct(){
        if(this.stock > this.maxStock){
                return `Error stock limit exceeded, max stock is ${this.maxStock}`;
        }
        return {
            name: `Name: ${this.name}`,
            price: `Price: ${this.price}`,
            stock: `Stock added: ${this.stock}`,
            isAvailable: ` ${this.isAvailable}`
            
        };
    }    
    calculateTotalPrice() {
       if (this.quantity === 1) {
            return `Total Price is: ${this.price}`;
        }else {
        return `Total Price: ${this.price * this.quantity}`;
    }
    
    }
}

class Discount extends Product{
    constructor(name, price, stock, quantity, discountPercent){
        super(name, price, stock, quantity, applyDiscounts);
        this.discountPercent = discountPercent;

    }
    applyDiscounts(){
        if(this.name === "mobile"){
            const finalPrice = this.price - (this.price * this.discountPercent / 100);
            return `Offer applied ${this.discountPercent}% Final price is ${finalPrice}`;
        }
        return "No discount applied.";
    }
}
const product2 = new Product('mobile', 800, 10, 1);
const product1 = new Product('battery', 1000, 5,2)
console.log(product1.getProduct());
const product3 = new Discount('mobile', 800, 20);

console.log(product3.applyDiscounts());


// console.log(product2.getProduct());
// console.log(product1.getProduct());
// console.log(product1.calculateTotalPrice());
// console.log(product2.calculateTotalPrice());