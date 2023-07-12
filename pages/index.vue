<template>
  <div>

    <!-- LANDING SECTION -->

    <section style="background-image: url(../asssets/hero.png);" class="border-4 border-red-900 w-[100%] h-[500px] bg-cover">
      <div class="border-2 border-green-700 w-[650px] h-[100%] float-right pt-20 px-12">
        <h5 class="leading-10 font-bold">WELCOME TO OUR</h5>
        <h1 class="text-6xl font-bold leading-24">FURNITURE GALLERY</h1>
        <div class="border border-red-500 w-[200px] h-[0px] mt-6"></div>
        <h5 class="leading-10 font-bold mt-8">BROWSE OUR SELECTIONS</h5>
        <p>Featuring sleek designs and innovative materials that<br /> seamlessly blend form and function.</p>
      </div>
    </section>

    <!-- HANGING SECTION -->

    <section class="border-4 border-red-600 w-[100%] h-[auto] py-28">
      <div class="w-[80%] h-[520px] border-2 border-blue-600 mx-[auto] flex justify-between">
        <div class="w-[280px] h-[100%] border-2 border-green-700 bg-red-50 flex flex-col justify-between px-4">
          <div class="w-[70%] h-[200px] border border-red-500" style="position: relative; left: 73px;">
            <img src="../asssets/d-hang.png"/>
          </div>
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
          <div class="w-[100%] h-[220px] border border-red-500">
            <img src="../asssets/cushion.png"/>
          </div>
        </div>

        <div class="w-[280px] h-[100%] border-2 border-green-700 bg-red-50 flex flex-col justify-between px-4">
          <div class="w-[100%] h-[220px] border border-green-500 pt-4">
            <h4 class="font-bold">NOVA CHAIR</h4>
            <p class="mt-2">a stylish and comfortable addition to any room, with its sleek design and plush cushions creating the ultimate seating experience.</p>
            <br />
            <p>View more ></p>
          </div>
          <div class="w-[70%] h-[200px] border border-red-500 relative" style="position: relative; left: 73px;">
            <img src="../asssets/plstc.png"/>
          </div>
        </div>
      </div>
    </section>
    <Trusted />
    <Featured />
    <Choose />

    <!-- SPECIAL SECTION -->

    <section class="border-8 border-red-800 w-[100%] h-[auto] pt-28 pb-44">
      <div class="border-2 border-green-800 w-[80%] h-[300px] mx-[auto] flex justify-between">
        <div class="w-[380px] h-[100%] border border-red-400 p-12">
          <h2 class="font-bold text-3xl">MODERN BRONZE HANGING LIGHT</h2>
          <div class="w-[150px] h-[25px] border border-blue-600 my-4"><p><star-rating :rating="rating" :star-style="starStyle"></star-rating></p></div>
          <p class="mt-8 line-through">$3252.41</p>
          <h5 class="font-bold text-2xl inline">$2352.41</h5>
          <p class="bg-red-600 inline ml-6 py-1 px-2 rounded-sm text-white">-30%</p>
        </div>
        <div class="w-[250px] h-[135%] border border-red-400">
          <img src="../asssets/hang5.png" class="w-[100%] h-[100%]" alt="hanging light"/>
        </div>
        <div class="w-[380px] h-[100%] border border-red-400 py-12 px-2 text-right">
          <p>Stunning lighting feature that combines contemporary style with timeless elegance. Featuring a sleek and
            minimalist design, this hanging light is crafted from high-quality bronze and finished with a smooth and lustrous surface.
          </p>
          <div class="bg-gray-900 py-4 w-[210px] text-center text-white mt-8 float-right">BUY NOW</div>
        </div>
      </div>
    </section>

    <!-- END SPECIAL SECTION -->

    <Reviews />
  </div>
</template>

<script>
import Choose from '~/components/Choose'
import Trusted from '~/components/Trusted'
import Reviews from '~/components/Reviews'
import Featured from '~/components/Featured'
import StarRating from 'vue-dynamic-star-rating'

  export default {
    setup() {
      return {
        rating: 5,
        starStyle: {
              fullStarColor: '#ed8a19',
              emptyStarColor: '#737373',
              starWidth: 20,
              starHeight: 20
          }
      }
    },
    components: {
      Choose,
      Trusted,
      Reviews,
      Featured,
      StarRating
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
    font-size: 16px;
}
</style>