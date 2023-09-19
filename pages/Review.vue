<template>
  <div class="text-center py-20">
    <h1 class="font-bold text-4xl">REVIEW AND CONFIRMATION</h1>
    <LineAnimate stage="stage4" />
    <div class="border-4 border-red-500 w-[100%] h-[auto] py-20">
      <div
        class="border-4 border-blue-500 w-[85%] h-[auto] mx-auto flex justify-between"
      >
        <div class="border-2 border-yellow-500 w-[60%] h-[auto] text-left">
          <h1 class="font-bold text-2xl">SHIPPING INFORMATION</h1>
          <p>Please check before you finalize your order.</p>
          <hr class="border-4 border-green-400 my-12" />
          <h1 class="font-bold text-2xl">PAYMENT METHOD</h1>
          <p>Please check before you finalize your order.</p>
        </div>
        <div class="border-2 border-blue-500 w-[35%] h-[auto]">
          <h2 class="text-left font-bold text-2xl">YOUR ORDER</h2>
          <div
            class="border-2 border-green-500 w-[100%] h-[auto] text-left mt-8"
          >
            <p>Review all the products you want to buy.</p>
            <SecondCart
              link="/"
              linkText="CONFIRM MY ORDER"
              :showShip="false"
            />
          </div>
        </div>
      </div>
    </div>

    <Choose />
  </div>
</template>
  
  <script>
export default {};
</script>
  
  <style>
</style>