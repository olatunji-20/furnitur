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
      <div class="border-2 border-blue-400 w-[40%] h-[400px] relative flex justify-center bg-gray-100">
        <div class="border-2 border-red-400 w-[150px] h-[100%] text-left pt-48">
          <div class="text-white bg-red-600 w-[50px] py-[3px] text-center text-sm mb-4">HOT</div>
          <h1 class="font-bold text-2xl">DISCOUNT 25% FOR NEW MEMBER</h1>
        </div>
        <div class="border-2 border-green-400 w-[200px] h-[100%]">
          <img src="../asssets/hang5.png" class="w-[100%] h-[100%]" alt="hanging light"/>
        </div>
      </div>
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