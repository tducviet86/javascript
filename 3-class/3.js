class Cart {
  constructor() {
    this.itemList = [];
  }
  add(item) {
    this.itemList.push(item);
  }
  getTotal() {
    const sumProduct = this.itemList.reduce(
      (total, product) => total + product.price,
      0
    );
    return sumProduct;
  }
}
class Product {
  constructor(name, price) {
    this.name = name;
    this.price = price;
  }
}
const iphone = new Product("Iphone", 800);
const laptop = new Product("Laptop", 1200);
const headphone = new Product("Headphone", 50);

const cart = new Cart();

cart.add(iphone);
cart.add(laptop);
cart.add(headphone);

console.log("Sum:", cart.getTotal());
