<template>
  <div>
    <button class="bg-green-700 w-[100%] py-3 text-white my-0" @click="loud(number, product)">Add To Cart</button>
  </div>
</template>

<script>
export default {
    props: {
      number: Number,
      product: Object
    },
    methods: {
        loud(number, product) {
            console.log("RECEIVED" + " " + number )
            console.log(product)
        }
    }
}
</script>

<style>

</style>