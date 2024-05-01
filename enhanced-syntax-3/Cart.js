function Cart() {
  this.productList = [];
}
Cart.prototype.add = (product) => {
  const addProduct = this.productList.find((item) => item.id === product.id);
  if (addProduct) {
    addProduct.quantity += product.quantity;
  } else {
    this.productList.push(product);
  }
};
Cart.prototype.remove = (id) => {
  const removeProduct = this.productList.find((item) => item.id === id);
  if (removeProduct !== -1) {
    this.productList.splice(removeProduct, 1);
  }
};
Cart.prototype.updateQuantity = (id, quantity) => {
  if (quantity <= 0) {
    return undefined;
  }
  const productUpdate = this.productList.find((item) => item.id === id);
  if (productUpdate) {
    productUpdate.quantity += quantity;
  }
};
Cart.prototype.display = () => {
  console.log("----------Cart---------");
  this.productList.forEach((item) => item.display);
  console.log("====================================");
  const sumProduct = this.productList.reduce(
    (total, product) => total + product.price * product.quantity,
    0
  );

  console.log(`Sum: ${sum}`);
  console.log("--------End--------");
  console.log("====================================");
};

export default Cart;
