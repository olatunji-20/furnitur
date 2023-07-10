<template>
  <div class="border-4 border-blue-700 w-[100%] h-[400px]">
    <h1 class="font-bold text-2xl">Lorem ipsum dolor sit amet, consectetur adipisicing elit. Voluptatibus, ut? {{ product.productName }}</h1>
  </div>
</template>

<script>
export default {
    setup() {
        // const { product } = defineProps({product: Object})
        // return { product }
    },
    props: {
        product: Object
    }

}
</script>

<style>

</style>