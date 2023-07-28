<template>
  <div class="border border-red-300 cursor-pointer text-red-600 font-bold text-md px-1">
    <i @click="productsStore.removeFromCart(id)">&#x2715;</i>
  </div>
</template>

<script>
import { useProductsStore } from '../stores/ProductsStore'

export default {
    data() {
        const productsStore = useProductsStore();

        return { productsStore }
    },
  props: {
    id: Number
  }
}
</script>

<style>

</style>