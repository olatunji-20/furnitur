<template>
  <div class="">
    <Reviews />
    <Trusted />
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
  export default {
    components: { Choose, Trusted, Reviews }
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