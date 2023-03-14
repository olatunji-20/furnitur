<template>
  <div v-if="cart.length">
    <div class="border-4 border-red-700 w-[60px] h-[60px] absolute right-8 top-8 rounded-full p-4">
        <NuxtLink to="/CartPage">
            <p class="inline">@</p>
            <h5 class="inline font-bold text-2xl">{{ cart.length }}</h5>
        </NuxtLink>
    </div>
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

    }
}
</script>

<style>

</style>