<template>
  <div class="border-4 border-blue-900 w-[100%] h-[auto] py-28 px-8">
    <h1 class="text-3xl font-bold text-center">REVIEWS BY CUSTOMERS</h1>
    <h4 class="font-bold text-center leading-10">What our customers think about us.</h4>
    <div class="border-2 border-red-800 w-[90%] h-[auto] mx-[auto] my-12 p-4 overflow-auto">
      <div class="border-2 border-blue-900 w-[1000px] h-[auto] p-4 flex flex-row justify-between">
        <!-- <div class="border-2 border-green-500 w-[600px] h-[340px] text-center p-1">
          <div class="border border-red-800 w-[120px] h-[120px] mx-[auto] my-4 rounded-full"></div>
            <div class="border border-green-900 w-[250px] h-[30px] mx-[auto] my-2"></div>
            <p class="font-bold mt-4">Lorem ipsum dolor sit amet consectetur adipisicing elit. Sunt dignissimos incidunt inventore totam mollitia 
              consectetur, nihil est? Sapiente autem facere placeat esse, aut quis blanditiis aperiam corporis, laboriosam officia alias.</p>
            <p class="mt-4">- Larry Johnson -</p>
        </div> -->
        
        
        
        <div class="w-[40px] h-[40px] border-2 border-red-700" @click="next">P</div>

        <div class="border-4 border-blue-700 w-[auto] h-[auto]" v-for="i in [currentIndex]" :key="i">
          <div class="border-4 border-green-500 w-[600px] h-[340px] text-center p-1">
            <div class="border border-red-800 w-[120px] h-[120px] mx-[auto] my-4 rounded-full">{{ currentReview.customerImage }}</div>
            <div class="border border-green-900 w-[250px] h-[30px] mx-[auto] my-2">{{ currentReview.rating }}</div>
            <p class="font-bold mt-4">{{ currentReview.comment }}</p>
            <p class="mt-4">{{ currentReview.customerName }}</p>
          </div>    
        </div>

        <div class="w-[40px] h-[40px] border-2 border-red-700" @click="prev">N</div>



        <!-- <div class="border-2 border-green-500 w-[600px] h-[340px] text-center p-1">
          <div class="border border-red-800 w-[120px] h-[120px] mx-[auto] my-4 rounded-full"></div>
            <div class="border border-green-900 w-[250px] h-[30px] mx-[auto] my-2"></div>
            <p class="font-bold mt-4">Lorem ipsum dolor sit amet consectetur adipisicing elit. Sunt dignissimos incidunt inventore totam mollitia 
              consectetur, nihil est? Sapiente autem facere placeat esse, aut quis blanditiis aperiam corporis, laboriosam officia alias.</p>
            <p class="mt-4">- Larry Johnson -</p>
        </div>
        <div class="border-2 border-green-500 w-[600px] h-[340px] text-center p-1">
          <div class="border border-red-800 w-[120px] h-[120px] mx-[auto] my-4 rounded-full"></div>
            <div class="border border-green-900 w-[250px] h-[30px] mx-[auto] my-2"></div>
            <p class="font-bold mt-4">Lorem ipsum dolor sit amet consectetur adipisicing elit. Sunt dignissimos incidunt inventore totam mollitia 
              consectetur, nihil est? Sapiente autem facere placeat esse, aut quis blanditiis aperiam corporis, laboriosam officia alias.</p>
            <p class="mt-4">- Larry Johnson -</p>
        </div>
        <div class="border-2 border-green-500 w-[600px] h-[340px] text-center p-1">
          <div class="border border-red-800 w-[120px] h-[120px] mx-[auto] my-4 rounded-full"></div>
            <div class="border border-green-900 w-[250px] h-[30px] mx-[auto] my-2"></div>
            <p class="font-bold mt-4">Lorem ipsum dolor sit amet consectetur adipisicing elit. Sunt dignissimos incidunt inventore totam mollitia 
              consectetur, nihil est? Sapiente autem facere placeat esse, aut quis blanditiis aperiam corporis, laboriosam officia alias.</p>
            <p class="mt-4">- Larry Johnson -</p>
        </div> -->
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'Reviews',
  data() {
    return {
      reviews: [
        {
          customerName: "Larry Johnson",
          comment: "Lorem ipsum dolor sit amet consectetur adipisicing eli Lorem ipsum dolor sit amet consectetur adipisicing eli",
          rating: 4,
          customerImage: "jhjuh"
        },
        {
          customerName: "Larry2 Johnson",
          comment: "Lorem ipsum dolor sit amet consectetur adipisicing eli Lorem ipsum dolor sit amet consectetur adipisicing eli",
          rating: 4,
          customerImage: "jhjuh"
        },
        {
          customerName: "Larry3 Johnson",
          comment: "Lorem ipsum dolor sit amet consectetur adipisicing eli Lorem ipsum dolor sit amet consectetur adipisicing eli",
          rating: 4,
          customerImage: "jhjuh"
        },
        {
          customerName: "Larry4 Johnson",
          comment: "Lorem ipsum dolor sit amet consectetur adipisicing eli Lorem ipsum dolor sit amet consectetur adipisicing eli",
          rating: 4,
          customerImage: "jhjuh"
        }
      ],
      timer: null,
      currentIndex: 0
    }
  },
  methods: {
    startSlide() {
      this.timer = setInterval(this.nextTick, 4000);
    },
    next() {
      this.currentIndex += 1;
    },
    prev() {
      this.currentIndex -= 1;
    }
  },
  mounted() {
    this.startSlide();
  },
  computed: {
    currentReview() {
      return this.reviews[Math.abs(this.currentIndex) % this.reviews.length];
    }
  }
}
</script>

<style>

</style>