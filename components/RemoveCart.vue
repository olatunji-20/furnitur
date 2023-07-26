<template>
  <div @click="removeFromCart(id)" class="border border-red-300 cursor-pointer">
    <p>Xq</p>
  </div>
</template>

<script>
import { useProductsStore } from '../stores/ProductsStore'

export default {
    data() {
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
        this.cart = this.cart.filter(x => x.id !== id);
      
      // try {
      // }
      // catch(error) {
      //   console.log(error)
      // }
      console.log(this.cart.length)
      
    }
  }
}
</script>

<style>

</style>