<template>
  <div class="border-4 border-red-400 w-[100%] h-[auto] py-16 text-center">
    <h1 class="text-3xl font-bold">BEST COMBINED WITH:</h1>
    <p class="font-bold">THESE COMBINATION WILL MAKE YOUR HOME TONE-SUR-TONE</p>
    <div class="w-[85%] h-[auto] border-2 border-green-800 my-12 mx-[auto]">
      <Card :link="'/all-products/'" :products="bestProduct" />
    </div>
  </div>
</template>

<script>
import { useProductsStore } from "../stores/ProductsStore";

export default {
  name: "Best",
  setup() {
    const productsStore = useProductsStore();
    productsStore.getProducts();

    const best = productsStore.products;
    const bestProduct = best.splice(3);

    return { bestProduct };
  }
};
</script>

<style>
</style>