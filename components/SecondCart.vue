<template>
  <div>
    <div class="border-2 border-red-600 w-[100%] h-[auto] mt-8">
      <div class="border-2 border-green-400 mx-auto w-[95%] min-h-[100px] max-h-[400px] overflow-y-auto">
        <div class="border-2 border-red-400 w-[100%] h-[100px] flex justify-between mb-4" v-for="c in cart" :key="c.id">
                <div class="border border-red-500 w-[30%] h-[100%]">
                    <img class="w-[100%] h-[100%] object-cover" :src="c.image" :alt="c.productName" />
                </div>
                <div class="border border-blue-500 w-[68%] h-[100%] text-left pt-1 relative">
                    <p class="font-bold text-sm">{{ c.productName }}</p>
                    <div class="w-[100%] h-auto absolute bottom-0">
                      <div class="border border-red-500 h-[auto] w-[100px]">
                          <star-rating :rating="c.rating" :star-style="starStyle"></star-rating>
                      </div>
                      <p class="font-bold text-sm">${{ c.price }}</p>
                    </div>
                </div>
            </div>
      </div>
        <hr class="border-2 border-blue-800 w-[95%] mx-[auto]"/>
      <div class="border-2 border-green-400 mx-auto w-[95%] h-[auto] pt-6">
        <p class="leading-10 text-gray-500 inline">Subtotal <span class="inline float-right font-bold text-black pr-12">$1000</span></p>
        <p class="leading-10 text-gray-500">Shipping</p>
        <p class="leading-10 text-gray-500">Price</p>
        <p class="leading-10 text-gray-500">Discount 10%</p>
        <p class="leading-10 text-gray-500">Total Price</p>

        <button class="bg-red-900 w-[100%] py-2 text-white mt-16"><NuxtLink to="/Shipping">CONTINUE TO SHIPPING</NuxtLink></button>
      </div>
    </div>
  </div>
</template>

<script>
import { useProductsStore } from '../stores/ProductsStore'
import StarRating from 'vue-dynamic-star-rating'

export default {
  setup() {
        const productsStore = useProductsStore();

        const cart = productsStore.cartItems
        return {
            cart,
            starStyle: {
              fullStarColor: '#ed8a19',
              emptyStarColor: '#737373',
              starWidth: 12,
              starHeight: 12
            }
        }

  },
    components: { StarRating }
}
</script>

<style>

</style>