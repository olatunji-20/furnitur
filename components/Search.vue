<template>
  <div>
    <input v-model="searchText" type="text" placeholder="search..." class="w-[100%] h-8 indent-4">
    <p v-for="product in filteredProducts" :key="product.id">{{ product.productName }}</p>
    <p>kufef {{ searchText }}</p>
  </div>
</template>

<script>
import { useProductsStore } from '../stores/ProductsStore';

export default {
  name: "Search",
  data() {
    const productsStore = useProductsStore();
    productsStore.getProducts();
    productsStore.getSales();
    productsStore.getSofa();
    productsStore.getHang();

    // const searchText = "ligh";
    const allProducts = productsStore.products;
    const onSalesProducts = productsStore.prods;
    const sofaProducts = productsStore.sofaProds;
    const hangingLightProducts = productsStore.hangProds;

    const everyProducts = allProducts.concat(onSalesProducts, sofaProducts, hangingLightProducts);

    return {
      searchText: "",
      allProducts,
      everyProducts
    }
  },
  computed: {
    filteredProducts() {
      return this.everyProducts.filter(product => product.productName.toLowerCase().includes(this.searchText.toLowerCase()))
    }
  }
}
</script>

<style>

</style> 