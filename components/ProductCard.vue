<template>
  <div class="border-4 border-blue-700 w-[100%] h-[auto] flex flex-wrap justify-around">
    <Pop :showPop="showPop" :productName="product.productName" :number="number" />
    <div class="w-[50%] h-[550px] border-4 border-red-700 text-center">
        <h1 class="text-md font-bold text-green-600">{{ product.productName }}</h1>
        <div class="w-[400px] h-[450px] border-2 border-blue-600 mx-[auto] my-12">
            <img class="w-[100%] h-[100%] object-cover" :src="product.productImage" :alt="product.productName" />
        </div>
    </div>
    <div class="w-[50%] h-[550px] border-2 border-green-300 py-28 px-12">
        <h1 class="font-bold text-2xl mb-6">{{ product.productName }}</h1>
        <div class="border border-green-500 w-[130px] h-[25px] inline-block">
            <star-rating :rating="product.review" :key="product.id" :star-style="starStyle"></star-rating>
        </div>
        <div class="bg-red-600 text-center w-[90px] py-[4px] inline-block ml-8 rounded-sm"><p class="text-white">ON SALE</p></div>
        <p class="my-4">261 products sold .  3.1k products watched</p>

        <!-- NUMBER SECTION-->
        <div class="border-2 border-blue-400 my-12 w-[200px] h-[50px] flex justify-around rounded-md">
            <span class="text-2xl font-bold my-1 mx-4 cursor-pointer" @click="decrement">-</span>
            <input v-model="number" class="inputer w-[50px] font-bold text-xl text-center" type="number" :placeholder="number"/>
            <span class="text-2xl font-bold my-1 mx-4 cursor-pointer" @click="increment">+</span>
        </div>
        <!-- <Number :number="number" /> -->
        <!-- NUMBER SECTION-->
        <h1 class="font-bold text-4xl text-red-600">${{ product.productPrice }}</h1>
        <div class="border border-red-600 w-[70%] h-[50px] mt-8 mx-[auto]">
            <AddCart :number="number" :product="product" @show-pop="showIt"/>
        </div>
    </div>
  </div>
</template>

<script>
import StarRating from 'vue-dynamic-star-rating'

export default {
    data() {
        return {
            number: 1,
            starStyle: {
              fullStarColor: '#ed8a19',
              emptyStarColor: '#737373',
              starWidth: 15,
              starHeight: 15
          },
          showPop: false
        }
    },
    props: {
        product: Object
    },
    components: { StarRating },
    methods: {
        increment() {
            this.number++
        },
        decrement() {
            this.number--;
        },
        showIt() {
            this.showPop = true;
            setTimeout(() => {
                this.showPop = false
            }, 4000)
        }
    },
    watch: {
        number(val) {
        if (val <= 0) {
            this.number = 1;
        }
        },
    }

}
</script>

<style scoped>
input::-webkit-outer-spin-button,
input::-webkit-inner-spin-button {
    -webkit-appearance: none;
}

</style>