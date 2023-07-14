<template>
  <div>
    <div class="border-4 border-red-800">
      <!-- <p>{{ productsStore.product.productName }}</p> -->
      <ProductCard :product="productsStore.product"/>
    </div>
    <Reviews />
    <Best />
    <Trusted />
    <Frequent />
  </div>
</template>

<script>
import { useProductsStore } from '../../stores/ProductsStore'

export default {
    setup() {
      // const id = useRoute().params.id
      const productsStore = useProductsStore()

      // productsStore.getProduct(id)


        return { productsStore }
    },
    async mounted() {
      
      const id = useRoute().params.id

      const productsStore = useProductsStore()

      await productsStore.getProduct(id)
      console.log("www" + " " + id)
      console.log("wwwQQQ" + " " + JSON.stringify(productsStore.product))
    }


}
</script>

<style>

</style>