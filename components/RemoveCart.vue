<template>
  <div class="border border-red-300 cursor-pointer text-red-600 font-bold text-md px-1">
    <!-- <i @click="productsStore.removeFromCart(id), move()">&#x2715;</i> -->
    <i @click="productsStore.removeFromCart(id), move()"><p>Delete</p></i>
  </div>
</template>

<script>
import { useProductsStore } from '../stores/ProductsStore'

export default {
  setup() {
        const router = useRouter();
        const productsStore = useProductsStore();

        return { productsStore, router }
    },
  props: {
    id: Number
  },
  methods: {
    move() {
      this.$router.go("/CartPage")
    }
  }
}
</script>

<style>

</style>