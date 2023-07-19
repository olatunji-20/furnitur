<template>
  <div>
    <div class="border-4 border-blue-500 w-[100%] h-[auto] flex justify-between wrap">
        <div class="border-4 border-green-300 w-[60%] min-h-[30px]">
            <div class="border-2 border-red-400 w-[100%] h-[200px] flex justify-between mb-4" v-for="c in cartProducts" :key="c.id">
                <div class="border border-red-500 w-[150px] h-[100%]">
                    <img class="w-[100%] h-[100%] object-cover" :src="c.image" :alt="c.productName" />
                </div>
                <div class="border border-blue-500 w-[500px] h-[100%] text-left">
                    <p class="font-bold text-xl">{{ c.productName }}</p>
                    <div class="border border-red-500 h-[25px] w-[150px] my-2">
                        <star-rating :rating="c.rating" :star-style="starStyle"></star-rating>
                    </div>
                    <div class="border-2 border-blue-400 my-2 w-[150px] h-[40px] flex justify-around">
                        <span class="text-2xl font-bold mx-4 cursor-pointer" @click="c.quantity--">-</span>
                        <input v-model="c.quantity" class="inputer w-[50px] font-bold text-xl text-center" type="number" :placeholder="number"/>
                        <span class="text-2xl font-bold mx-4 cursor-pointer" @click="c.quantity++">+</span>
                    </div>
                    <p class="font-bold text-3xl">${{ c.price }}</p>
                </div>
            </div>
        </div>
        <div class="border-4 border-red-800 w-[40%] h-[100%] py-12">
            <div class="border border-blue-500 w-[70%] h-[auto] mx-[auto] text-left">
                <h1 class="font-bold text-2xl">ORDER SUMMARY</h1>
                <p class="mt-4 mb-12 text-sm">Apply your monthly voucher to get more discount!</p>
                <p class="py-4">Price:</p>
                <p class="py-4">Discount: </p>
                <p class="py-4">Total Price:</p>

                <button class="bg-red-700 w-[100%] py-2 text-white mt-16"><NuxtLink to="/Customer">PROCEED TO CHECKOUT</NuxtLink></button>

            </div>
        </div>
    </div>
  </div>
</template>

<script>
import StarRating from 'vue-dynamic-star-rating'

export default {
    props: {
        cartProducts: Array
    },
    setup() {
        return {
            number: 1,
            starStyle: {
              fullStarColor: '#ed8a19',
              emptyStarColor: '#737373',
              starWidth: 18,
              starHeight: 18
          }
        }
    },
    components: { StarRating },
    // methods: {
    //     increment(qua) {
    //         qua++
    //     },
    //     decrement() {
    //         this.number--;
    //     }
    // },
    watch: {
        number(val) {
        if (val <= 0) {
            this.number = 1;
        }
        }
    }

}
</script>

<style>

</style>