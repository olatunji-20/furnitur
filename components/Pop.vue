<template>
  <div>
    <div v-show="showPop" class="border-2 border-red-400 w-[100%] h-[70px] absolute mx-[auto]">
        <div class="border-2 border-blue-300 bg-pink-50 text-center w-[60%] h-[70px] mx-[auto] ">
            <h1>ADDED TO YOUR CART</h1>

        </div>
    </div>
  </div>
</template>

<script>
export default {
  props: {
    showPop: Boolean
  }
    
}
</script>

<style>

</style>