<template>
  <div class="text-center py-16">
    <h1 class="font-bold text-4xl">REGISTER TO FURNITUR</h1>
    <p class="font-bold">GET MONTHLY VOUCHER WITH JUST ONE CLICK!</p>
    <!-- <LineAnimate /> -->
    <div class="border-2 border-green-400 w-[85%] h-[auto] my-12 mx-auto flex justify-between">
      <div class="border-2 border-red-400 w-[54%] h-[auto] text-left">
        <h1 class="font-bold text-2xl">YOUR INFORMATION</h1>
        <p class="text-sm pt-4">You already have an account? <span class="underline">Sign in here</span></p>
        <div class="w-100 h-[auto] mt-12">
          <RegisterForm />
        </div>
      </div>
      <div class="border-2 border-blue-400 w-[42%] h-[400px]"></div>
    </div>
  </div>
  <Choose />
</template>

<script>
export default {

}
</script>

<style>

</style>