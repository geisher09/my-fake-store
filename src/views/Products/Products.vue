<template>
  <div class="products-list-main">
    <Banner />
    <div class="container h-100">
      <Background />
      <div class="row h-100" :class="initializing ? 'loader-row' : ''">
        <Loader v-if="initializing"/>

        <div v-else class="products-list-wrapper container">
          <div class="d-flex justify-content-between main-logo align-items-center">
            <h1 class="fw-bold">MyFakeStore</h1>
            <div class="search-wrapper">
              <input type="text" v-model="searchKeyword" placeholder="Search.." v-on:keyup="searchHandler"/>
              <i class="fa-solid fa-magnifying-glass"></i>
            </div>
          </div>

          <div class="categories-wrapper">
            <div
              v-for="(category, index) in categories"
              :key="index"
              v-on:click="categorySelectHandler($event, index)"
              class="category"
              v-bind:class="{ active: categoryActive == index }">
              {{ category }}
            </div>
          </div>
          
          <div v-if="filteredProducts.length" class="row gy-5 products-row">
            <div
              v-for="product in filteredProducts"
              :key="product"
              class="col-xl-3 col-lg-4 col-md-6 col-sm-12">
              <div class="product-details-wrapper">
                <img
                  class="mb-3"
                  :src="product.image"
                  :alt="product.title"
                  width="90">
                <div class="product-info">
                  <div class="product-title mb-2">
                    {{ product.title }}
                  </div>
                  <div class="product-description mb-3">
                    {{ product.description }}
                  </div>

                  <div class="product-price mb-1">
                    ${{ product.price }}
                  </div>

                  <div class="ratings-container">
                      <div class="empty-stars-wrapper">
                          <span v-for="empty_star in 5" :key="empty_star" class="fa-regular fa-star"></span>
                      </div>
                      <div class="filled-stars-wrapper" :style="`width: ${(product.rating.rate / 5) * 100}%`">
                          <span v-for="filled_star in 5" :key="filled_star" class="fa-solid fa-star"></span>
                      </div>
                  </div>
                  <div class="rate-count">
                    {{ product.rating.count }} Reviews
                  </div>
                </div>
              </div>
            </div>
          </div>

          <div v-else class="no-results">
            No results found.
          </div>

          <!-- <paginate
            :page-count="2"
            :click-handler="paginationHandler"
            :prev-text="'Prev'"
            :next-text="'Next'"
            :container-class="'products-pagination'">
          </paginate> -->
          <!-- <HelloWorld msg="Welcome to Your Vue.js App"/> -->
        </div>
      </div>
    </div>
    <Footer/>
  </div>
</template>

<script setup>
// vue utilities
import { onMounted, ref } from "vue";

//plugins
// import Paginate from "vuejs-paginate-next";

// components
import Loader from '@/components/Loader/Loader';
import Banner from '@/components/Banner/Banner';
import Footer from '@/components/Footer/Footer';
import Background from '@/components/Background/Background';
// import HelloWorld from '@/components/HelloWorld.vue'

//refs

// data
// const page = ref(1);
// const size = ref(10);
const initializing = ref(true);
const searchKeyword = ref("");
const selectedCategory = ref("");
const categoryActive = ref(null);
const products = ref(null);
const filteredProducts = ref(null);
const categories = ref(null);

// watch(
//   searchKeyword,
//   () => {
//     filteredProducts.value = products.value.filter(product => {
//       return product.title.toLowerCase().includes(searchKeyword.value.toLowerCase()) && product.category == selectedCategory.value
//     });
//   },
//   { deep: true }
// )

const init = async () => {
  const products_response = await fetch('https://fakestoreapi.com/products');
  products.value = await products_response.json();
  filteredProducts.value = products.value;

  const categories_ = await fetch('https://fakestoreapi.com/products/categories');
  categories.value = await categories_.json();

  initializing.value = false;
};

// const paginationHandler = (page) => {
//   console.log(page)
// };

const searchHandler = () => {
  if(selectedCategory.value) {
    filteredProducts.value = products.value.filter(product => {
      return product.category == selectedCategory.value && product.title.toLowerCase().includes(searchKeyword.value.toLowerCase())
    });
  }else{
    filteredProducts.value = products.value.filter(product => {
      return product.title.toLowerCase().includes(searchKeyword.value.toLowerCase())
    });
  }
};

const categorySelectHandler = (e, index) => {
  const category = e.currentTarget.innerHTML;
  categoryActive.value = categoryActive.value === index ?  null : index;

  if(categoryActive.value == null) {
    filteredProducts.value = products.value.filter(product => {
      return product.title.toLowerCase().includes(searchKeyword.value.toLowerCase())
    });
    selectedCategory.value = null;
    return;
  }

  selectedCategory.value = category;
  filteredProducts.value = products.value.filter(product => {
    return product.category == category && product.title.toLowerCase().includes(searchKeyword.value.toLowerCase())
  });
};

onMounted(() => {
  init();
});
</script>

<style lang="sass" src="./Products.sass"></style>