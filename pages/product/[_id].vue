<template>
  <div class="border-4 border-red-800 p-48">
    <h1 class="text-3xl font-bold">Lorem, ipsum. {{ id }}</h1>
    <!-- <h1 class="text-3xl font-bold">jijijrf {{ productsStore.product.productName }}</h1> -->
  </div>
</template>

<script>
import { useProductsStore } from '../../stores/ProductsStore'

export default {
    setup() {
        const { _id: id } = useRoute().params._id
        // const productsStore = useProductsStore()
        // productsStore.getProduct(id)


        return { id }
    }


}
</script>

<style>

</style>