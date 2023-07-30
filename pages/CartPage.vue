<template>
  <div class="text-center pt-12">
    <h1 class="font-bold text-3xl">SHOPPING CART</h1>
    <p class="font-bold my-6">THIS IS YOUR CART BASED ON WHAT YOU WANTED TO BUY</p>
    <LineAnimate stage="stage1" />
    <div class="border-4 border-green-600 w-[100%] h-[auto] text-center py-20">
        <div class="border-2 border-red-700 w-[80%] h-[auto] mx-[auto]">
            <Cart :cartProducts="cart" :total="totalPrice()"/>
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
            total: 0,
            cart,
            starStyle: {
              fullStarColor: '#ed8a19',
              emptyStarColor: '#737373',
              starWidth: 15,
              starHeight: 15
            }
        }
    },
    methods: {
        totalPrice() {
           let total = 0;
            this.cart.forEach((item) => {
                total += item.price * item.quantity;
            });
            return total;
        },
    },
    computed: {
        // calcTotal() {
        //     return this.cart.reduce((current, next) =>
        //     current + next.price, 0); 
        //     // let total = 32;
        //     // this.cart.forEach((item) => {
        //     //     total += item.price * item.quantity;
        //     // });
        //     // return this.total = total;
        // }
    }
}
</script>

<style>

</style>