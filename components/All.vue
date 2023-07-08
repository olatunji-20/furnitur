<template>
  <div class="w-[100%] h-[100%] border-2 border-red-400 p-32">
    <h1 class="font-bold text-4xl">ALL COMPONENT</h1>
    <h1 class="font-bold text-8xl">{{ productsStore.name }}</h1>
    <h1 class="font-bold text-4xl">ALL COMPONENT</h1>
    <h1 class="font-bold text-4xl">ALL COMPONENT</h1>
    <h1 class="font-bold text-4xl">ALL COMPONENT</h1>
  </div>
</template>

<script>
import useProductsStore from '../stores/ProductsStore.js'

export default {
    name: 'All',
    setup() {
      const productsStore = useProductsStore()

      return { productsStore }
    }
}
</script>

<style>

</style>
<!-- ../stores/ProductsStore -->