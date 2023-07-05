<template>
  <div class="">
    <section style="background-image: url(../asssets/hero.png);" class="border-4 border-red-900 w-[100%] h-[500px] bg-cover">
      <div class="border-2 border-green-700 w-[600px] h-[100%] float-right">
        <h1 class="text-6xl font-bold p-16">FURNITURE GALLERY</h1>
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
    components: { Choose, Trusted, Reviews, Featured }
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