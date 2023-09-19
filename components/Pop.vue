<template>
  <div>
    <transition name="popup">
      <div v-show="showPop" class="w-[90%] h-[4.375rem] absolute mx-[auto]">
          <div class="border-2 border-blue-300 bg-pink-50 text-center py-8 w-[60%] h-[auto] mx-[auto] ">
              <h1>{{ number }} {{ productName }} has been added to your cart</h1>
          </div>
      </div>
    </transition>
  </div>
</template>

<script>
export default {
  props: {
    showPop: Boolean,
    productName: String,
    number: Number
  }
    
}
</script>

<style>
.popup-enter-from, .popup-leave-to{
  opacity: 0;
}
.popup-enter-to, .popup-leave-from{
  opacity: 1;
}
.popup-enter-active, .popup-leave-active{
  transition: all .5s linear;
}
</style>