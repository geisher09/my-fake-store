<template>
  <div class="dashboard-main">
    <div class="container h-100">
      <div class="h-100" :class="initializing ? 'loader-row' : ''">
        <Loader v-if="initializing"/>

        <div v-else>
          <div class="search-container d-flex justify-content-end align-items-center">
            <div class="search-wrapper">
              <input type="text" v-model="searchKeyword" placeholder="Search.." v-on:keyup="searchHandler"/>
              <i class="fa-solid fa-magnifying-glass"></i>
            </div>
          </div>

          <div class="button-container d-flex justify-content-between align-items-center">
            <h3>Products List</h3>
            <button type="button" class="btn btn-primary btn-lg" data-bs-toggle="modal" data-bs-target="#productModal" @click="toggleModal('add')">Add a Product</button>
          </div>

          <div v-if="filteredProducts.length" class="products-table-container">
            <div class="table-row">
              <div class="img-wrapper"></div>
              <div>
                Title
              </div>
              <div>
                Category
              </div>
              <div>
                Description
              </div>
              <div>
                Price
              </div>
              <div></div>
            </div>
            <div
              v-for="product in filteredProducts"
              :key="product"
              class="product-details-row table-row">
              <div class="img-wrapper">
                <img
                  :src="product.image"
                  :alt="product.title"
                  width="50"
                  height="50">
              </div>
              <div class="prod-title">
                <div>{{ product.title }}</div>
                <div class="img-wrapper">
                  <img
                    :src="product.image"
                    :alt="product.title"
                    width="80"
                    height="80">
                </div>
              </div>
              <div class="prod-category">
                <span>Category:</span>
                <div>{{ product.category }}</div>
              </div>
              <div class="prod-description">
                <span>Description:</span>
                <div>{{ product.description }}</div>
              </div>
              <div class="prod-price">
                <span>Price:</span>
                <div>${{ product.price }}</div>
              </div>
              <div class="prod-actions">
                <button type="button" class="btn btn-primary" data-bs-toggle="modal" data-bs-target="#productModal" @click="toggleModal('update', product.id)">
                  <i class="fa-solid fa-pen"></i>
                </button>
                <button type="button" class="btn btn-primary" @click="deleteProduct(product.id)">
                  <i class="fa-solid fa-trash"></i>
                </button>
              </div>
            </div>
          </div>

          <div v-else class="no-results">
            No results found.
          </div>
        </div>
      </div>
    </div>

    <div ref="alertEl" class="alert alert-success alert-dismissible fade show" role="alert">
      <p><i class="fa fa-check-circle"></i>{{ alertMessage }}</p>
    </div>

    <div class="modal fade" id="productModal" tabindex="-1" aria-labelledby="productModal" aria-hidden="true">
      <div class="modal-dialog">
        <div class="modal-content">
          <div class="modal-header">
            <h5 class="modal-title" id="addProductModalLabel">{{add ? "Add" : "Update"}} Product</h5>
            <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
          </div>
          <div class="modal-body">
            <form ref="productFormEl" novalidate>
              <div class="mb-2">
                <label class="form-label">Image Link</label>
                <input v-model="productData.image" type="text" class="form-control" placeholder="Image Link" required>
              </div>
              <div class="mb-2">
                <label class="form-label">Title</label>
                <input v-model="productData.title" type="text" class="form-control" placeholder="Title" required>
              </div>
              <div class="mb-2">
                <label class="form-label">Category</label>
                <select v-model="productData.category" class="form-select" required>
                  <option
                    v-for="(category, index) in categories"
                    :key="index" :value="category">
                    {{ category }}
                  </option>
                </select>
              </div>
              <div class="mb-2">
                <label class="form-label">Description</label>
                <textarea v-model="productData.description" class="form-control" placeholder="Description" rows="5" required/>
              </div>
              <div class="mb-2">
                <label class="form-label">Price</label>
                <input v-model="productData.price" type="number" min="0.00" step="0.1" class="form-control" placeholder="Price" required>
              </div>
            </form>
          </div>
          <div class="modal-footer">
            <button type="button" class="btn btn-secondary" data-bs-dismiss="modal" id="close-modal">Close</button>
            <button type="button" class="btn btn-primary" @click="saveHandler">Save changes</button>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup>
// vue utilities
import { onMounted, ref } from "vue";

// components
import Loader from '@/components/Loader/Loader';

//refs
const productFormEl = ref(null);
const alertEl = ref(null);

// data
const initializing = ref(true);
const searchKeyword = ref("");
const products = ref(null);
const filteredProducts = ref(null);
const categories = ref(null);
const add = ref(false);
const productData = ref({
  image: null,
  title: null,
  category: null,
  description: null,
  price: null,
});
const productModal = ref(null);
const alertMessage = ref("");
const selectedID = ref(null);


const init = async () => {
  const products_response = await fetch('https://fakestoreapi.com/products');
  products.value = await products_response.json();
  filteredProducts.value = products.value;

  const categories_response = await fetch('https://fakestoreapi.com/products/categories');
  categories.value = await categories_response.json();

  initializing.value = false;

  productModal.value = document.getElementById('productModal');
  productModal.value.addEventListener('hidden.bs.modal', function () {
    resetForm();
  })
};

const searchHandler = () => {
  filteredProducts.value = products.value.filter(product => {
    return product.title.toLowerCase().includes(searchKeyword.value.toLowerCase())
  });
};

const toggleModal = (type, id) => {
  add.value = type == "add" ? true : false;

  if(id) {
    productData.value = constructProductData(products.value.find(product => product.id === id));
    selectedID.value = id;
  }
};

const constructProductData = (item) => {
  const { image, title, category, description, price } = item || {};

  return {
    image: image,
    title: title,
    category: category,
    description: description,
    price: price
  };
};

const resetForm = () => {
  productData.value = {
    image: null,
    title: null,
    category: null,
    description: null,
    price: null,
  }
  if(productFormEl.value) productFormEl.value.classList.remove('was-validated');

  selectedID.value = null;
};

const saveHandler = async () => {
  //Validate
  productFormEl.value.classList.add('was-validated');
  if(productFormEl.value.checkValidity()) {

    const product_response_data = add.value ? 
      await fetch(
        'https://fakestoreapi.com/products',
        {
          method:"POST",
          body:JSON.stringify(
            productData.value
          )
        }
      ) :
      await fetch(
        `https://fakestoreapi.com/products/${selectedID.value}`,
        {
          method:"PUT",
          body:JSON.stringify(
            productData.value
          )
        }
      );

    const product_response = await product_response_data.json();

    if(product_response.id){
      alertMessage.value = `Product successfully ${add.value ? 'added': 'updated'}`;
      alertEl.value.classList.add("show-alert");

      document.getElementById('close-modal').click();

      setTimeout(function(){
        alertEl.value.classList.remove("show-alert");
      }, 2500);

      productData.value.id = product_response.id;

      if(add.value) {
        filteredProducts.value.push(productData.value)
      } else {
        const updatedProductIndex = filteredProducts.value.findIndex(product => product.id == product_response.id)
        filteredProducts.value[updatedProductIndex] = productData.value;
      }
      
    }
    
  }
};

const deleteProduct = async (id) => {
  const product_response_data =  await fetch(
    `https://fakestoreapi.com/products/${id}`,
    {
      method:"DELETE"
    }
  );

  const product_response = await product_response_data.json();

  if(product_response.id){
    alertMessage.value = `Product successfully deleted.`;
    alertEl.value.classList.add("show-alert");

    document.getElementById('close-modal').click();

    setTimeout(function(){
      alertEl.value.classList.remove("show-alert");
    }, 2000);

    const deletedProductIndex = filteredProducts.value.findIndex(product => product.id == product_response.id);
    filteredProducts.value.splice(deletedProductIndex, 1);
  }
};

onMounted(() => {
  init();
});
</script>

<style lang="sass" src="./Dashboard.sass"></style>