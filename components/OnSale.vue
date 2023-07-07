<template>
    <transition name="ddd">
        <div class="w-[100%] h-[100%] border-2 border-red-400 p-32 relative">
          <h1 class="font-bold text-4xl">ON-SALE COMPONENT</h1>
          <h1 class="font-bold text-4xl">ON-SALE COMPONENT</h1>
          <h1 class="font-bold text-4xl">ON-SALE COMPONENT</h1>
          <h1 class="font-bold text-4xl">ON-SALE COMPONENT</h1>
        </div>
    </transition>
</template>
  
<script>
  export default {
      name: 'OnSale'
  }
</script>
  
<style>
.ddd-enter-from {
    left: 100%;
}
.ddd-enter-to {
    left: 0%;
}
.ddd-enter-active {
    transition: left .4s ease;
}
.ddd-leave-from {
    left: 0%;
}
.ddd-leave-to {
    left: 100%;
}  
.ddd-leave-active {
    transition: left .4s ease;
}

  </style>