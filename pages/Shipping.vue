<template>
    <div class="text-center py-20">
      <h1 class="font-bold text-4xl">SHIPPING & PAYMENT</h1>
      <LineAnimate stage="stage2" />
      <div class="border-4 border-green-500 w-[100%] h-[auto] flex justify-around py-24 px-32">
        <div class="border-2 border-red-500 w-[60%] h-[400px]">
          <h1 class="text-left font-bold text-2xl">YOUR INFORMATION</h1>
          <ShippingForm />
        </div>
        <div class="border-2 border-blue-500 w-[35%] h-[auto]">
          <h2 class="text-left font-bold text-2xl">YOUR ORDER</h2>
          <div class="border-2 border-green-500 w-[100%] h-[auto] text-left mt-8">
            <p>Review all the products you want to buy.</p>
            <SecondCart />
          </div>
        </div>
      </div>
      <NuxtLink to="/Register">
          <h1 class="font-bold text-4xl py-40">TO REGISTER</h1>
      </NuxtLink>
      <h1 class="font-bold text-4xl">SHIPPING PAGE</h1>
      <Choose />
    </div>
  </template>
  
  <script>
  export default {
  
  }
  </script>
  
  <style>
  
  </style>