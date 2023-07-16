<template>
  <div>
    <button class="bg-green-700 w-[100%] py-3 text-white my-0" @click="productsStore.addToCart({ product, number })">Add To Cart</button>
  </div>
</template>

<script>
import { useProductsStore } from '../stores/ProductsStore'

export default {
  setup() {
    const productsStore = useProductsStore();

    return { productsStore }
  },
  props: {
    number: Number,
    product: Object
  }
}
</script>

<style>

</style>