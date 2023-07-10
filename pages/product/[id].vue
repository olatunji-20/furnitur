<template>
  <div>
    <div class="border-4 border-red-800 p-48">
      <h1 class="text-3xl font-bold">Lorem, ipsum. {{ id }}</h1>
      <h1 class="text-3xl font-bold">jijijrf {{ productsStore.product.productName }}</h1>
      <ProductCard :product="productsStore.product" />
    </div>
    <Reviews />
    <Trusted />
  </div>
</template>

<script>
import { useProductsStore } from '../../stores/ProductsStore'

export default {
    setup() {
      const id = useRoute().params.id
      const productsStore = useProductsStore()

      productsStore.getProduct(id)


        return { id, productsStore }
    }


}
</script>

<style>

</style>