<template>
  <div>
    <div class="border-4 border-green-600 w-[100%] h-[auto] text-center py-28">
        <h1 class="font-bold text-3xl">SHOPPING CART</h1>
        <p class="font-bold my-6">THIS IS YOUR CART BASED ON WHAT YOU WANTED TO BUY</p>
        <div class="border-2 border-red-700 w-[80%] h-[auto] mx-[auto]">
            <Cart :cartProducts="cart"/>
        </div>
    </div>
    <Choose />
    <Best />
  </div>
</template>

<script>
import { useProductsStore } from '../stores/ProductsStore'

export default {
    setup() {
        const productsStore = useProductsStore();

        const cart = productsStore.cartItems
        return {
            cart,
            starStyle: {
              fullStarColor: '#ed8a19',
              emptyStarColor: '#737373',
              starWidth: 15,
              starHeight: 15
          }
        }
    },
}
</script>

<style>

</style>