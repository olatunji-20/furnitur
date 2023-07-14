<template>
  <div class="border-4 border-blue-700 w-[100%] h-[auto] flex flex-wrap justify-around py-8">
    <div class="w-[50%] h-[600px] border-4 border-red-700 text-center">
        <h1 class="text-md font-bold">{{ product.productName }}</h1>
        <div class="w-[400px] h-[450px] border-2 border-blue-600 mx-[auto] my-12">
            <img class="w-[100%] h-[100%] object-cover" :src="product.productImage" :alt="product.productName" />
        </div>
    </div>
    <div class="w-[50%] h-[600px] border-2 border-green-300 py-28 px-12">
        <h1 class="font-bold text-2xl mb-6">{{ product.productName }}</h1>
        <div class="border border-green-500 w-[130px] h-[25px] inline-block">
            <star-rating :starStyle="starStyle" :rating="product.review"></star-rating>
            <!-- <star-rating :starStyle="starStyle" :rating="rating" ></star-rating> -->
        </div>
        <div class="bg-red-600 text-center w-[90px] py-[4px] inline-block ml-8"><p class="text-white">ON SALE</p></div>
        <p class="my-4">261 products sold .  3.1k products watched</p>
        <div class="border-2 border-blue-400 my-12 w-[200px] h-[50px] flex justify-around">
            <span class="text-2xl font-bold mx-4">-</span><p class="mt-2">Number: <span> 1 </span></p><span class="text-2xl font-bold mx-4">+</span>
        </div>
        <h1 class="font-bold text-3xl text-red-600">${{ product.productPrice }}</h1>
        <div class="border border-green-600 w-[70%] h-[50px] my-16 mx-[auto]"></div>
    </div>
  </div>
</template>

<script>
import StarRating from 'vue-dynamic-star-rating'

export default {
    setup() {
        return {
            // rating: 3,
            starStyle: {
              fullStarColor: '#ed8a19',
              emptyStarColor: '#737373',
              starWidth: 15,
              starHeight: 15
          }
        }
    },
    props: {
        product: Object
    },
    components: { StarRating }

}
</script>

<style>

</style>