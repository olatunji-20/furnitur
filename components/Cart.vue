<template>
  <div>
    <div class="border-4 border-blue-500 w-[100%] h-[auto] flex justify-between wrap">
        <div class="border-4 border-green-300 w-[60%] min-h-[30px]">
            <div class="border-2 border-red-400 w-[100%] h-[200px] flex justify-between mb-4" v-for="c in cartProducts" :key="c.id">
                <div class="border border-red-500 w-[30%] h-[100%]">
                    <img class="w-[100%] h-[100%] object-cover" :src="c.image" :alt="c.productName" />
                </div>
                <div class="border border-blue-500 w-[64%] h-[100%] text-left pt-2">
                    <p class="font-bold text-xl inline">{{ c.productName }}</p>
                    <div v-on:click="prepModal(c.id)" class="border-2 border-blue-700 w-[30px] h-[30px] inline float-right mr-4">
                        <p>D</p>
                    </div>
                    <div class="border border-red-500 h-[25px] w-[150px] my-2">
                        <star-rating :rating="c.rating" :star-style="starStyle"></star-rating>
                    </div>
                    <p class="font-bold">${{ c.price }}</p>
                    <div class="border border-blue-400 mr-4 w-[150px] h-[40px] bg-gray-100 flex justify-around float-right rounded-md">
                        <span class="text-2xl font-bold mx-4 cursor-pointer" @click="c.quantity--">-</span>
                        <input v-model="c.quantity" class="inputer w-[50px] font-bold bg-gray-100 text-xl text-center" type="number" :placeholder="number"/>
                        <span class="text-2xl font-bold mx-4 cursor-pointer" @click="c.quantity++">+</span>
                    </div>
                    <br />
                    <br />
                    <p class="font-bold text-2xl float-right mr-10">${{ (c.price * c.quantity).toFixed(2) }}</p>
                </div>
            </div>
        </div>
        <div class="border-4 border-red-800 w-[35%] h-[100%] py-12">
            <div class="border border-blue-500 w-[80%] h-[auto] mx-[auto] text-left">
                <h1 class="font-bold text-2xl">ORDER SUMMARY</h1>
                <p class="mt-4 mb-12 text-sm">Apply your monthly voucher to get more discount!</p>
                <p class="py-4">Price: <span class="font-bold text-xl float-right">${{ total.toFixed(2) }}</span></p>
                <p class="py-4">Discount:  <span class="font-bold text-xl float-right">{{ discount }}%</span></p>
                <p class="py-4">Total Price:  <span class="font-bold text-xl float-right">${{ (total - ((discount/100) * total)).toFixed(2) }}</span></p>

                <NuxtLink to="/Shipping"><button class="bg-red-700 w-[100%] py-2 text-white mt-16">PROCEED TO CHECKOUT</button></NuxtLink>

            </div>
        </div>
    </div>
  </div>
</template>

<script>
import StarRating from 'vue-dynamic-star-rating'

export default {
    setup() {
        return {
            number: 1,
            starStyle: {
              fullStarColor: '#ed8a19',
              emptyStarColor: '#737373',
              starWidth: 18,
              starHeight: 18
            },
            discount: 10,
        }
    },
    props: {
        cartProducts: Array,
        total: Number
    },
    methods: {
        prepModal(id) {
            console.log("ffff ", id)
            this.$emit('show-modal', id)
        }
    },
    emits: ['show-modal'],
    components: { StarRating },
    watch: {
        number(val) {
        if (val <= 0) {
            this.number = 1;
        }
        }
    }

}
</script>

<style scoped>
input::-webkit-outer-spin-button,
input::-webkit-inner-spin-button {
    -webkit-appearance: none;
}

</style>