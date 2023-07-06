<template>
  <div>

    <!-- LANDING SECTION -->

    <section style="background-image: url(../asssets/hero.png);" class="border-4 border-red-900 w-[100%] h-[500px] bg-cover">
      <div class="border-2 border-green-700 w-[650px] h-[100%] float-right pt-20 px-12 bg-blue-50">
        <h5 class="leading-10 font-bold">WELCOME TO OUR</h5>
        <h1 class="text-6xl font-bold leading-24">FURNITURE GALLERY</h1>
        <div class="border border-red-500 w-[200px] h-[0px] mt-6"></div>
        <h5 class="leading-10 font-bold mt-8">BROWSE OUR SELECTIONS</h5>
        <p>Featuring sleek designs and innovative materials that<br /> seamlessly blend form and function.</p>
      </div>
    </section>

    <!-- HANGING SECTION -->

    <section class="border-4 border-red-600 w-[100%] h-[700px]">
      <div class="w-[80%] h-[520px] border-2 border-blue-600 mx-[auto] my-28 flex justify-between">
        <div class="w-[280px] h-[100%] border-2 border-green-700 bg-red-50 flex flex-col justify-between px-4">
          <div class="w-[70%] h-[200px] border border-red-500" style="position: relative; left: 73px;"></div>
          <div class="w-[100%] h-[220px] border border-green-500 pt-4">
            <h4 class="font-bold">HANGING LIGHT</h4>
            <p class="mt-2">Upgrade your space with our modern hanging light, featuring sleek-lines, energy-efficient
              LED lighting, and adjustable height.
            </p>
            <br />
            <p>View more ></p>
          </div>
        </div>

        <div class="w-[600px] h-[100%] border-2 border-red-700 bg-green-100 flex flex-col justify-between text-center p-4">
          <div class="w-[60%] h-[200px] mx-[auto] border border-green-500">
            <h4 class="font-bold">DESIGNED SOFA</h4>
            <p class="mt-2">Introducing our newest sofa, the perfect combination of style and comfort, designed to elevate your living space and provide ultimate relaxation.</p>
            <br />
            <p>View more ></p>
          </div>
          <div class="w-[100%] h-[220px] border border-red-500"></div>
        </div>

        <div class="w-[280px] h-[100%] border-2 border-green-700 bg-red-50 flex flex-col justify-between px-4">
          <div class="w-[100%] h-[220px] border border-green-500 pt-4">
            <h4 class="font-bold">NOVA CHAIR</h4>
            <p class="mt-2">a stylish and comfortable addition to any room, with its sleek design and plush cushions creating the ultimate seating experience.</p>
            <br />
            <p>View more ></p>
          </div>
          <div class="w-[70%] h-[200px] border border-red-500 relative" style="position: relative; left: 73px;"></div>
        </div>
      </div>
    </section>
    <Reviews />
    <Trusted />
    <Featured />
    <Choose />
    <h1>WELCOME TO THIS APPLICATION.</h1>
    <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Nulla sunt, iste laborum maxime ad veritatis, autem tenetur eligendi corporis voluptas accusantium a impedit quibusdam 
      odio animi iure excepturi possimus. Minima tempore ipsa sequi quae quidem atque reprehenderit vitae nam mollitia rem! Quae amet, consequatur atque velit asperiores voluptatum inventore 
      beatae dolorum dolores quibusdam dolorem distinctio veritatis quo vero accusamus perferendis? In, sunt minus praesentium qui esse suscipit commodi aperiam ut cumque excepturi dolorem ea dicta
       expedita recusandae facilis laborum accusantium.</p>
  </div>
</template>

<script>
import Choose from '~/components/Choose'
import Trusted from '~/components/Trusted'
import Reviews from '~/components/Reviews'
import Featured from '~/components/Featured'

  export default {
    components: {
      Choose,
      Trusted,
      Reviews,
      Featured
    }
  }
</script>

<style>
* {
    box-sizing: border-box;
}
body, html {
    margin: 0px !important;
    padding: 0px !important;    
}
</style>