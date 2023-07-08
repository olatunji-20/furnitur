<template>
  <div class="w-[100%] h-[100%] border-2 border-red-400 p-32">
    <h1 class="font-bold text-4xl">ALL COMPONENT</h1>
    <h1 class="font-bold text-8xl">{{ productsStore.name }}</h1>
    <h1 class="font-bold text-4xl">ALL COMPONENT</h1>
    <h1 class="font-bold text-4xl">ALL COMPONENT</h1>
    <h1 class="font-bold text-4xl">ALL COMPONENT</h1>
    <div class="border-2 border-green-400 my-12">
      <p class="text-2xl" v-for="p in productsStore.products" :key="p._id">{{ p.productName }}</p>
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