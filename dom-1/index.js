const idInput = document.querySelector("input[name='id']");
const nameInput = document.querySelector("input[name='name']");
const priceInput = document.querySelector("input[name='price']");
const submitInput = document.querySelector(".insert-form button");
const tbNode = document.querySelector("tbody");
let productLists = JSON.parse(localStorage.getItem("productLists")) || [];

const saveToLocalStorage = () => {
  localStorage.setItem("productLists", JSON.stringify(productLists));
};

// load local
// const loadLocalStorage = () => {};

//handleRemoveProduct
const handleRemoveProduct = (event) => {
  event.preventDefault();
  const deleteButton = event.target;
  const trNode = deleteButton.closest("tr");
  const targetId = deleteButton.getAttribute("data-id");
  console.log(deleteButton);
  const confirmation = confirm("ban co muon xoa san pham nay khong? ");

  if (confirmation) {
    productLists = productLists.filter(
      (product) => product.idValue !== targetId
    );
    console.log(productLists);
    saveToLocalStorage();
    trNode.remove();
  }
};

// handleEdit
const handleEditProduct = (event) => {
  const editButtonNode = event.target;

  const trNode = editButtonNode.closest("tr");

  const nameLabel = trNode.querySelector("td .name-label");
  const nameInput = trNode.querySelector("td .name-input");

  const priceLabel = trNode.querySelector("td .price-label");
  const priceInput = trNode.querySelector("td .price-input");

  const saveButton = trNode.querySelector("td .save-button");
  const cancelButton = trNode.querySelector("td .cancel-button");

  const editButton = trNode.querySelector("td .edit-button");
  const deleteButton = trNode.querySelector("td .delete-button");

  // edit name
  nameLabel.classList.add("hidden");
  nameInput.classList.remove("hidden");

  // edit price
  priceLabel.classList.add("hidden");
  priceInput.classList.remove("hidden");

  //chuyen edit thanh save
  editButton.classList.add("hidden");
  saveButton.classList.remove("hidden");
  // chuyen delete sang cancel
  cancelButton.classList.remove("hidden");
  deleteButton.classList.add("hidden");
};

// save product
const handleSaveProduct = (event) => {
  event.preventDefault();
  const saveButtonProduct = event.target;
  const trNode = saveButtonProduct.closest("tr");
  const updateName = trNode.querySelector("td .name-input").value;
  const updatePrice = trNode.querySelector("td .price-input").value;

  if (updateName.value === "" || updatePrice.value === "") {
    alert("vui long khong de trong");
    return;
  }
  const productId = saveButtonProduct.getAttribute("data-id");

  const productUpdate = productLists.find(
    (product) => product.idValue === productId
  );
  productUpdate.nameValue = updateName;
  productUpdate.priceValue = updatePrice;
  saveToLocalStorage();
  alert("Luu thanh cong");
  // renderProductList();

  const nameLabel = trNode.querySelector("td .name-label");
  const nameInput = trNode.querySelector("td .name-input");

  const priceLabel = trNode.querySelector("td .price-label");
  const priceInput = trNode.querySelector("td .price-input");

  const saveButton = trNode.querySelector("td .save-button");
  const cancelButton = trNode.querySelector("td .cancel-button");

  const editButton = trNode.querySelector("td .edit-button");
  const deleteButton = trNode.querySelector("td .delete-button");

  nameLabel.textContent = updateName;
  priceLabel.textContent = updatePrice;
  // edit name
  nameLabel.classList.remove("hidden");
  nameInput.classList.add("hidden");

  // edit price
  priceLabel.classList.remove("hidden");
  priceInput.classList.add("hidden");

  //chuyen edit thanh save
  editButton.classList.remove("hidden");
  saveButton.classList.add("hidden");

  cancelButton.classList.add("hidden");
  deleteButton.classList.remove("hidden");
};
const handleCancelProduct = (event) => {
  const cancelButtonProduct = event.target;
  const trNode = cancelButtonProduct.closest("tr");
  const nameLabel = trNode.querySelector("td .name-label");
  const nameInput = trNode.querySelector("td .name-input");

  const priceLabel = trNode.querySelector("td .price-label");
  const priceInput = trNode.querySelector("td .price-input");

  const saveButton = trNode.querySelector("td .save-button");
  const cancelButton = trNode.querySelector("td .cancel-button");

  const editButton = trNode.querySelector("td .edit-button");
  const deleteButton = trNode.querySelector("td .delete-button");

  nameLabel.classList.remove("hidden");
  nameInput.classList.add("hidden");

  // edit price
  priceLabel.classList.remove("hidden");
  priceInput.classList.add("hidden");

  //chuyen edit thanh save
  editButton.classList.remove("hidden");
  saveButton.classList.add("hidden");

  cancelButton.classList.add("hidden");
  deleteButton.classList.remove("hidden");
};
//render ProductLists
const renderProductList = () => {
  tbNode.innerHTML = " ";
  productLists.forEach((product) => {
    const trNode = document.createElement("tr");
    trNode.innerHTML = `<td>${product.idValue}</td>
  <td> 
    <span class="name-label">${product.nameValue}</span>
    <input class="name-input hidden" value="${product.nameValue}"/>
  </td>
  
  <td> 
  <span class="price-label">${product.priceValue}</span>
  <input class="price-input hidden" value="${product.priceValue}"/>
  </td>
  <td>
  <a class="action-button edit-button" href="#">Edit</a>
  <a class="action-button delete-button" data-id="${product.idValue}" >Delete</a>
  <button class="save-button hidden" data-id="${product.idValue}" >Lưu</button>
  <button class="cancel-button hidden" data-id="${product.idValue}" >Quay Lại</button>
  </td>`;
    tbNode.appendChild(trNode);

    //
    const deleteButtonNode = trNode.querySelector(".delete-button");
    deleteButtonNode.addEventListener("click", handleRemoveProduct);

    //
    const editButtonNode = trNode.querySelector(".edit-button");
    editButtonNode.addEventListener("click", handleEditProduct);

    const saveButtonNode = trNode.querySelector(".save-button");
    saveButtonNode.addEventListener("click", handleSaveProduct);

    const cancelButtonNode = trNode.querySelector(".cancel-button");
    cancelButtonNode.addEventListener("click", handleCancelProduct);
  });
};
const handleSubmit = () => {
  if (
    idInput.value === "" ||
    nameInput.value === "" ||
    priceInput.value === ""
  ) {
    alert("khong duoc de trong");
    return;
  }
  const checkId = productLists.find((id) => id.idValue === idInput.value);
  console.log(checkId);
  if (checkId) {
    alert("ma san pham da ton tai");
    return;
  }

  const product = {
    idValue: idInput.value,
    nameValue: nameInput.value,
    priceValue: priceInput.value,
  };
  productLists.push(product);

  alert("them san pham thanh cong");

  // save vao localStorage
  saveToLocalStorage();

  //

  const trNode = document.createElement("tr");
  trNode.innerHTML = `
  <td>${product.idValue}</td>
  <td> 
    <span class="name-label">${product.nameValue}</span>
    <input class="name-input hidden" value="${product.nameValue}"/>
  </td>
  
 <td> 
  <span class="price-label">${product.priceValue}</span>
  <input class="price-input hidden" value="${product.priceValue}"/>
</td>


  <td>
  <a class="action-button edit-button" href="#" >Edit</a>
  <a class="action-button delete-button" data-id="${product.idValue}" >Delete</a>
  <button class="save-button hidden" data-id="${product.idValue}"  >Lưu</button>
  <button class="cancel-button hidden" data-id="${product.idValue}" >Quay Lại</button>
  </td>`;
  tbNode.appendChild(trNode);

  const deleteButtonNode = trNode.querySelector(".delete-button");
  deleteButtonNode.addEventListener("click", handleRemoveProduct);

  const editButtonNode = trNode.querySelector(".edit-button");
  editButtonNode.addEventListener("click", handleEditProduct);

  const saveButtonNode = trNode.querySelector(".save-button");
  saveButtonNode.addEventListener("click", handleSaveProduct);

  const cancelButtonNode = trNode.querySelector(".cancel-button");
  cancelButtonNode.addEventListener("click", handleCancelProduct);
  // renderProductList
  // renderProductList();
};
submitInput.addEventListener("click", handleSubmit);

//onLoad
window.addEventListener("load", () => {
  // loadLocalStorage();
  renderProductList();
});
