<template>
  <div>
    <div class="border-4 border-red-800">
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