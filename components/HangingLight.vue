<template>
  <div class="w-[100%] h-[100%] border-4 border-red-400 flex flex-wrap">
    <Card :products="productsStore.hangProds" :key="productsStore.hangProds"/>
  </div>
</template>

<script>
import { useProductsStore } from "../stores/ProductsStore";

export default {
  name: "HangingLight",
  setup() {
    const productsStore = useProductsStore();
    productsStore.getHang();

    return { productsStore };
  }
};
</script>

<style>
</style>