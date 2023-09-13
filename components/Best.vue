<template>
  <div class="border-4 border-red-400 w-[100%] h-[auto] py-16 text-center">
    <h1 class="text-3xl font-bold">BEST COMBINED WITH:</h1>
    <p class="font-bold">THESE COMBINATION WILL MAKE YOUR HOME TONE-SUR-TONE</p>
    <div class="w-[85%] h-[auto] border-2 border-green-800 my-12 mx-[auto]">
      <Card :link="'/every-products/'" :products="bestProducts" :key="bestProducts"/>
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
    productsStore.getSales();
    productsStore.getSofa();
    productsStore.getHang();

    const allProducts = productsStore.products;
    const onSalesProducts = productsStore.prods;
    const sofaProducts = productsStore.sofaProds;
    const hangingLightProducts = productsStore.hangProds;

    const everyProducts = allProducts.concat(onSalesProducts, sofaProducts, hangingLightProducts);


    const best = everyProducts.sort(() => 0.5 - Math.random());
    let bestProducts = best.slice(0, 3);

    return {
      bestProducts
    };
  }
};
</script>

<style>
</style>