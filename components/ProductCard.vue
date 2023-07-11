<template>
  <div class="border-4 border-blue-700 w-[100%] h-[auto] flex flex-wrap justify-around py-8">
    <div class="w-[50%] h-[600px] border-4 border-red-700 text-center">
        <h1 class="text-2xl font-bold">{{ product.productName }}</h1>
        <div class="w-[500px] h-[500px] border-2 border-blue-600 mx-[auto] my-12">
            <img class="w-[100%] h-[100%] object-cover" :src="product.productImage" :alt="product.productName" />
        </div>
    </div>
    <div class="w-[50%] h-[600px] border-2 border-green-300 p-8">
        <h1 class="font-bold text-2xl">{{ product.productName }}</h1>
        <h1 class="font-bold text-2xl">${{ product.productPrice }}</h1>
        <div class="border border-green-500 w-[150px] h-[20px]">
            <star-rating :rating="product.rating" :starStyle="starStyle"></star-rating>
        </div>
        <h1 class="font-bold text-2xl">{{ product.review }}</h1>
    </div>
  </div>
</template>

<script>
import StarRating from 'vue-dynamic-star-rating'
export default {
    setup() {
        return {         
          starStyle: {
              fullStarColor: '#ed8a19',
              emptyStarColor: '#737373',
              starWidth: 20,
              starHeight: 20
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