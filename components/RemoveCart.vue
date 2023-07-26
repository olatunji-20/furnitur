<template>
  <div class="border border-red-300">
    <p @click="removeFromCart(id)">de</p>
  </div>
</template>

<script>
import { useProductsStore } from '../stores/ProductsStore'

export default {
    setup() {
        const productsStore = useProductsStore();

        const cart = productsStore.cartItems
        return {
            cart
        }
    },
  props: {
    id: Number
  },
  methods: {
    removeFromCart(id) {
      console.log(this.cart.length)
      this.cart = this.cart.filter(x => x.id !== id);
    }
  }
}
</script>

<style>

</style>