<template>
  <div class="border-4 border-blue-900 w-[100%] h-[auto] py-20 px-8">
    <h1 class="text-3xl font-bold text-center">REVIEWS BY CUSTOMERS</h1>
    <h4 class="font-bold text-center leading-10">What our customers think about us.</h4>
    <div class="border-2 border-red-800 w-[90%] h-[auto] mx-[auto] my-12 p-4 overflow-hidden">
      <div class="border-2 border-blue-900 w-[auto] h-[350px] flex flex-row justify-between overflow-hidden">   
        
        <div class="w-[50px] h-[50px] border-2 border-red-700 relative top-36 cursor-pointer rounded-full text-center pt-1" @click="next">P</div>

        <transition-group name="review" tag="div">
          <div class="border-4 border-blue-700 w-[auto] h-[auto] relative" v-for="i in [currentIndex]" :key="i">
            <div class="border-4 border-green-500 w-[600px] h-[340px] text-center p-1">
              <div class="border border-red-800 w-[120px] h-[120px] mx-[auto] my-4 rounded-full"><img class="w-[100%] h-[100%] object-cover rounded-full" :src="currentReview.customerImage" :alt="currentReview.customerName"/></div>
              <div class="border border-green-900 w-[150px] h-[30px] mx-[auto] my-2"><star-rating :rating="currentReview.rating" :star-style="starStyle"></star-rating></div>
              <p class="font-bold mt-4">{{ currentReview.comment }}</p>
              <p class="mt-4">- {{ currentReview.customerName }} -</p>
            </div>    
          </div>
        </transition-group>

        <div class="w-[50px] h-[50px] border-2 border-red-700 relative top-36 cursor-pointer rounded-full text-center pt-1" @click="prev">N</div>

      </div>
    </div>
  </div>
</template>

<script>
import StarRating from 'vue-dynamic-star-rating';

export default {
  name: 'Reviews',
  data() {
    return {
      reviews: [
        {
          customerName: "Falana Sheriff",
          comment: "Lorem ipsum dolor sit amet consectetur adipisicing eli Lorem ipsum dolor sit amet consectetur adipisicing eli",
          rating: 4,
          customerImage: "../assets/sheriff.png"
        },
        {
          customerName: "Larry Johnson",
          comment: "Lorem ipsum dolor sit amet consectetur adipisicing eli Lorohiogn;ngRem ipsum dolor sit amet consectetur adipisicing eli",
          rating: 5,
          customerImage: "../assets/larry.png"
        },
        {
          customerName: "Olatunji Phalana",
          comment: "Lorem ipsum dolor sit amet consectetur adipisicing eli eghirnagnr nrLorem ipsum dolor sit amet consectetur adipisicing eli",
          rating: 3,
          customerImage: "../assets/jenifer.png"
        },
        {
          customerName: "Larry4 Johnson",
          comment: "Lorem ipsum dolor sit amet consectetur adipisicing eli guergierioh iroehoie Lorem ipsum dolor sit amet consectetur adipisicing eli",
          rating: 4,
          customerImage: "../assets/chris.png"
        },
        {
          customerName: "Larry4 Johnson",
          comment: "Lorem ipsum dolor sit amet consectetur adipisicing eli guergierioh iroehoie Lorem ipsum dolor sit amet consectetur adipisicing eli",
          rating: 1,
          customerImage: "../assets/roqibah.png"
        }
      ],
      starStyle: {
              fullStarColor: '#ed8a19',
              emptyStarColor: '#737373',
              starWidth: 18,
              starHeight: 18
          },
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
  components: {
    StarRating
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
.review-enter-from {
  left: 200px;
}
.review-enter-to, .review-leave-from {
  left: 0px;
}
.review-enter-active {
  transition: all 1s ease;
}
.review-leave-to {
  left: 0px;
}
.review-leave-active {
  transition: all 0s ease;
}

</style>