<template>
  <div>
    <div class="border-4 border-blue-500 w-[100%] h-[auto] flex justify-between wrap">
        <div class="border-4 border-green-300 w-[60%] h-[100%]">
            <div class="border-2 border-red-400 w-[100%] h-[120px]" v-for="c in cart" :key="c.id">
                <p>{{ c.productName }}</p>
            </div>
            <!-- <p> {{ cart.length }} </p> -->
        </div>
        <div class="border-4 border-red-800 w-[40%] h-[100%]">
            <p class="py-4">Lorem ipsum dolor sit amet.</p>
            <p class="py-4">Lorem ipsum dolor sit amet.</p>
            <p class="py-4">Lorem ipsum dolor sit amet.</p>
            <p class="py-4">Lorem ipsum dolor sit amet.</p>
            <p class="py-4">Lorem ipsum dolor sit amet.</p>
            <!-- NOTHING -->
            <!-- <p class="py-4">Lorem ipsum ddbsghbholor sit amet.</p>

            <p class="py-4">Lorem ipsum dolor sit amet.</p>
            <p class="py-4">Lorem ipsum dolor sit amet.</p>
            <p class="py-4">Lorem ipsum dolor sit amet.</p>
            <p class="py-4">Lorem ipsum dolor sit amet.</p>
            <p class="py-4">Lorem ipsum doloegwurgr sit amet.</p>
            <p class="py-4">Lorem ipsum dolor sit amet.</p>
            <p class="py-4">Lorem ipsum dolofsgr sit amet.</p>
            <p class="py-4">Lorem ipsum dolor sit amet.</p>
            <p class="py-4">Lorem ipsum dolor sit amet.</p>
            <p class="py-4">Lorem ipsum dolor sit amet.</p>
            <p class="py-4">Lorem ipsum dolor sit amet.</p>
            <p class="py-4">Lorem ipsum dolor sit amet.</p>
            <p class="py-4">Lorem ipsum dolor sit amet.</p>
            <p class="py-4">Lorem ipsum dolor sit amet.</p>
            <p class="py-4">Lorem ipsum dolor sit amet.</p>
            <p class="py-4">Lorem ipsum dolor sit amet.</p>
            <p class="py-4">Lorem ipsum dolor sit amet.</p>
            <p class="py-4">Lorem ipsum dolor sit amet.</p>
            <p class="py-4">Lorem ipsum dolor sit amet.</p>
            <p class="py-4">Lorem ipsum dolor sit amet.</p>
            <p class="py-4">Lorem ipsum dolor sit amet.</p>
            <p class="py-4">Lorem ipsum dolor sit amet.</p>
            <p class="py-4">Lorem ipsum dolor sit amet.</p>
            <p class="py-4">Lorem ipsum dolor sit amet.</p>
            <p class="py-4">Lorem ipsum dolor sit amet.</p>
            <p class="py-4">Lorem ipsum dolor sit amet.</p>
            <p class="py-4">Lorem ipsum dolor sit amet.</p>
            <p class="py-4">Lorem ipsum dolor sit amet.</p>
            <p class="py-4">Lorem ipsum dolor sit amet.</p>
            <p class="py-4">Lorem ipsum dolor sit amet.</p>
            <p class="py-4">Lorem ipsum dolor sit amet.</p>
            <p class="py-4">Lorem ipsum dolor sit amet.</p>
            <p class="py-4">Lorem ipsum dolor sit amet.</p> -->
            <!-- NOTHING -->
        </div>
    </div>
  </div>
</template>

<script>
import { useProductsStore } from '../stores/ProductsStore'
export default {
    setup() {
        const productsStore = useProductsStore();

        const cart = productsStore.cartItems
        return { cart }
    }

}
</script>

<style>

</style>