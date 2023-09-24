<template>
  <div>
    <h1 class="announcement font-bold text-4xl my-16">THIS WEBPAGE CAN ONLY BE VIEWED ON LARGE SCREENS</h1>
    <div class="lll">      
          <!-- LANDING SECTION -->
      
          <section style="background-image: url(../assets/hero.png);" class="w-[100%] h-[28.125rem] bg-cover flex flex-row justify-end">
            
            <div class="w-[40.625rem] h-[100%] pt-20 px-12">
              <h5 class="leading-10 font-bold">WELCOME TO OUR</h5>
      
              <div class="w-[21.875rem] h-[8.125rem]">
                <vueTyperNext class="text-6xl font-bold leading-24" data="FURNITURE GALLERY" typeSpeed=150 handlerNum=40  />
                
              </div>
              
              <div class="border border-red-500 w-[12.5rem] h-[0px] mt-6"></div>
              <h5 class="leading-10 font-bold mt-8">BROWSE OUR SELECTIONS</h5>
              <p class=" text-gray-700">Featuring sleek designs and innovative materials that<br /> seamlessly blend form and function.</p>
            </div>
          </section>
      
          <!-- HANGING SECTION -->
      
          <section class="w-[100%] h-[auto] py-28">
            <div class="w-[80%] h-[32rem] mx-[auto] flex justify-between text-gray-700">
              <div class="w-[17.5rem] h-[100%] bg-gray-50 flex flex-col justify-between px-4">
                <div class="w-[70%] h-[12.5rem]" style="position: relative; left: 4.5625rem;">
                  <img src="../assets/d-hang.png"/>
                </div>
                <div class="w-[100%] h-[13.75rem] pt-4">
                  <h4 class="font-bold text-gray-950">HANGING LIGHT</h4>
                  <p class="mt-2 text-sm w-[85%]">Upgrade your space with our modern hanging light, featuring sleek-lines, energy-efficient
                    LED lighting, and adjustable height.
                  </p>
                  <br />
                  <p class="hover:underline"><a href="#feat">view more ></a></p>
                </div>
              </div>
      
              <div class="w-[37.5rem] h-[100%] bg-green-50 flex flex-col justify-between text-center p-4">
                <div class="w-[60%] h-[10rem] mx-[auto]">
                  <h4 class="font-bold text-gray-950">DESIGNED SOFA</h4>
                  <p class="mt-2 text-sm">Introducing our newest sofa, the perfect combination of style and comfort, designed to elevate your living space and provide ultimate relaxation.</p>
                  <br />
                  <p class="hover:underline"><a href="#feat">view more ></a></p>
                </div>
                <div class="w-[100%] h-[13.75rem]">
                  <img src="../assets/cushion.png"/>
                </div>
              </div>
      
              <div class="w-[17.5rem] h-[100%] bg-gray-50 flex flex-col justify-between px-4">
                <div class="w-[100%] h-[13.75rem] pt-4">
                  <h4 class="font-bold text-gray-950">NOVA CHAIR</h4>
                  <p class="mt-2 text-sm w-[85%]">a stylish and comfortable addition to any room, with its sleek design and plush cushions creating the ultimate seating experience.</p>
                  <br />
                  <p class="hover:underline"><a href="#feat">view more ></a></p>
                </div>
                <div class="w-[70%] h-[12.5rem] relative" style="position: relative; left: 4.5625rem;">
                  <img src="../assets/plstc.png"/>
                </div>
              </div>
            </div>
          </section>
          <Trusted />
          <Featured id="feat"/>
          <Choose />
      
          <!-- SPECIAL SECTION -->
      
          <section class="w-[100%] h-[auto] pt-28 pb-44">
            <div class="w-[85%] h-[18.75rem] mx-[auto] bg-gray-100 flex justify-between">
              <div class="w-[23.75rem] h-[100%] p-12">
                <div class="w-[auto] h-[5.625rem]">
                  <vueTyperNext class="text-3xl font-bold" data="MODERN BRONZE HANGING LIGHT" typeSpeed=120 handlerNum=80  />
                </div>
                <div class="w-[9.375rem] h-[1.5625rem] my-4"><star-rating :rating="rating" :star-style="starStyle"></star-rating></div>
                <p class="mt-8 line-through">$3252.41</p>
                <h5 class="font-bold text-2xl inline">$2352.41</h5>
                <p class="inline ml-6 py-1 px-2 rounded-sm text-white">-30%</p>
              </div>
              <div class="w-[15.625rem] h-[135%] bg-gray-100">
                <img src="../assets/hang5.png" class="w-[100%] h-[100%]" alt="hanging light"/>
              </div>
              <div class="w-[23.75rem] h-[100%] py-12 px-2 text-right">
                <p>Stunning lighting feature that combines contemporary style with timeless elegance. Featuring a sleek and
                  minimalist design, this hanging light is crafted from high-quality bronze and finished with a smooth and lustrous surface.
                </p>
                <div class="bg-gray-900 py-4 w-[13.125rem] text-center text-white mt-8 float-right duration-200 cursor-pointer hover:bg-red-700">BUY NOW</div>
              </div>
            </div>
          </section>
      
          <!-- END SPECIAL SECTION -->
      
          <Reviews />
          <Frequent />
    </div>
  </div>
</template>

<script>
import Choose from '~/components/Choose'
import Trusted from '~/components/Trusted'
import Reviews from '~/components/Reviews'
import Featured from '~/components/Featured'
import StarRating from 'vue-dynamic-star-rating';
import { vueTyperNext } from "vue-typer-next";

  export default {
    setup() {
      return {
        rating: 4.7,
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
      StarRating,
      vueTyperNext
    }
  }
</script>

<style>
* {
    box-sizing: border-box;
    font-family: 'Open Sans', sans-serif;
}
body, html {
    margin: 0px !important;
    padding: 0px !important;
    font-size: 16px;
    scroll-behavior: smooth;
}
.announcement {
  display: none;
}

@media screen and (max-width: 1100px) {
  .lll {
    display: none;
  }
  .announcement {
    display: inline-block;
  }
}
</style>