<template>
  <div class="w-[100%] h-[100%] border-8 border-red-400 flex flex-wrap justify-around">
    <div class="w-[300px] h-[480px] border-2 border-green-400 my-12"  v-for="p in productsStore.products" :key="p._id">
      <NuxtLink to="/product/">
        <div class="w-[100%] h-[75%] border border-red-700">
          <img class="w-[100%] h-[100%] object-cover" :src="p.productImage" :alt="p.productName + p.productPrice" >
        </div>
        <div class="w-[100%] h-[25%] border border-blue-700 pt-6">
          <p>{{ p.productName }}</p>
          <p>{{ p.review }}</p>
          <p class="font-bold">${{ p.productPrice }}</p>
        </div>
      </NuxtLink>
    </div>
  </div>
</template>

<script>
import { useProductsStore } from '../stores/ProductsStore'

export default {
    name: 'All',
    setup() {
      const productsStore = useProductsStore()

      productsStore.getProducts()

      return { productsStore }
    }
}
</script>

<style>

</style>
<!-- ../stores/ProductsStore -->