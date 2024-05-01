import Product from "./product.js";
import Cart from "./Cart.js";

const product1 = new Product(1, "Proident excepteur", 20);
const product2 = new Product(2, "Exercitation qui", 20);
const product3 = new Product(3, "Eiusmod nostrud", 19);
const product4 = new Product(4, "Cupidatat exercitation", 22);

const cart = new Cart();

cart.add(product1);
cart.add(product2);
cart.add(product3);
cart.add(product4);

cart.display();

cart.updateQuantity(4, 5);

cart.display();

cart.remove(2);

cart.display();
