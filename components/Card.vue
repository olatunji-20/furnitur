<template>
  <div class="border-4 border-blue-800 w-[100%] h-[auto] flex flex-wrap justify-around">
    
    <div class="w-[300px] h-[480px] border-2 border-green-400 my-12" v-for="p in products" :key="p.id">
      <NuxtLink :to="`/product/${p.id}`">
        <div class="w-[100%] h-[75%] border border-red-700">
          <img class="w-[100%] h-[100%] object-cover" :src="p.productImage" :alt="p.productName + p.productPrice" >
        </div>
        <div class="w-[100%] h-[25%] border border-blue-700 pt-6">
          <p>{{ p.productName }}</p>
          <div class="border border-red-500 w-[150px] h-[25px] mx-[auto]">
            <p><star-rating :rating="p.review" :star-style="starStyle"></star-rating></p>
          </div>
          <p class="font-bold">${{ p.productPrice }}</p>
        </div>
      </NuxtLink>
    </div>

  </div>
</template>

<script>
import StarRating from 'vue-dynamic-star-rating'
export default {
    data() {
      return {
        // rating: 2,
          starStyle: {
              fullStarColor: '#ed8a19',
              emptyStarColor: '#737373',
              starWidth: 20,
              starHeight: 20
          }

      }
    },
    components: {
        StarRating
    },
    props: {products: Array}
}
</script>

<style>

</style>