<template>
  <div class="w-[100%] h-[100%] border-4 border-red-400 flex flex-wrap">
    <Card link="product" :products="productsStore.products" :key="productsStore.products"/>
  </div>
</template>

<script>
import { useProductsStore } from "../stores/ProductsStore";

export default {
  name: "All",
  setup() {
    const productsStore = useProductsStore();
    productsStore.getProducts();

    return { productsStore };
  }
};
</script>

<style>
</style>