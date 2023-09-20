<template>
  <div>
    <div class="border-4 border-blue-500 w-[100%] h-[auto] pt-8">
        <div class="w-[70%] h-[0.625rem] mx-[auto] flex justify-between relative top-[0.375rem]">
            <div class="border-2 border-blue-500 w-[0.75rem] h-[0.75rem] rounded-full bg-blue-600"></div>
            <div class="border-2 border-blue-500 w-[0.75rem] h-[0.75rem] rounded-full bg-blue-600"></div>
            <div class="border-2 border-blue-500 w-[0.75rem] h-[0.75rem] rounded-full bg-blue-600"></div>
            <div class="border-2 border-blue-500 w-[0.75rem] h-[0.75rem] rounded-full bg-blue-600"></div>
        </div>

        <div class="line">
            <div :class="stage"></div>
        </div>

        <div class="border-2 border-red-500 w-[80%] h-[auto] mx-[auto] flex justify-between">
            <div class="border-2 border-blue-500 w-[12.5rem] h-[7.5rem] font-bold text-3xl">
                <div class="border border-blue-900 w-[2.5rem] h-[2.5rem] mx-[auto] my-[0.3125rem] rounded-full">
                    <Icon name="ic:sharp-shopping-cart" color="black" />
                    <!-- <img src="../assets/call.png" alt="" class="w-[100%] h-[100%] object-cover" /> -->
                </div>
                <p class="text-sm">CART</p>
                <p class="text-sm font-normal">Review all your product and edit the number.</p>
            </div>
            <div class="border-2 border-blue-500 w-[12.5rem] h-[7.5rem] font-bold text-3xl">
                <div class="border border-blue-900 w-[2.5rem] h-[2.5rem] mx-[auto] my-[0.3125rem] rounded-full">
                    <Icon name="ic:outline-co-present" color="black" />
                    <!-- <img src="../assets/email.png" alt="" class="w-[100%] h-[100%] object-cover" /> -->
                </div>
                <p class="text-sm">CUSTOMER INFORMATION</p>
                <p class="text-sm font-normal">Add your name, phone number and address.</p>
            </div>
            <div class="border-2 border-blue-500 w-[12.5rem] h-[7.5rem] font-bold text-3xl">
                <div class="border border-blue-900 w-[2.5rem] h-[2.5rem] mx-[auto] my-[0.3125rem] rounded-full">
                    <Icon name="ic:sharp-emoji-transportation" color="black" />
                    <!-- <img src="../assets/badge.png" alt="" class="w-[100%] h-[100%] object-cover" /> -->
                </div>
                <p class="text-sm">SHIPPING & PAYMENT</p>
                <p class="text-sm font-normal">With many payment methods, include yours.</p>
            </div>
            <div class="border-2 border-blue-500 w-[12.5rem] h-[7.5rem] font-bold text-3xl">
                <div class="border border-blue-900 w-[2.5rem] h-[2.5rem] mx-[auto] my-[0.3125rem] rounded-full">
                    <Icon name="ic:round-content-paste-search" color="black" />
                    <!-- <img src="../assets/call.png" alt="" class="w-[100%] h-[100%] object-cover" /> -->
                </div>
                <p class="text-sm">REVIEW</p>
                <p class="text-sm font-normal">View all your information before confirmation.</p>
            </div>
        </div>
    </div>
  </div>
</template>

<script>
export default {
    props: {
        stage: String
    }
}
</script>

<style>
.line {
    background: red;
    width: 70%;
    height: 0.25rem;
    margin: 0px auto 1rem;
}
.stage1 {
    width: 25%;
    height: 0.25rem;
    background: blue;
    animation: animate1 1s ease-in;
}
.stage2 {
    width: 50%;
    height: 0.25rem;
    background: blue;
    animation: animate2 1s ease-in;
}
.stage3 {
    width: 75%;
    height: 0.25rem;
    background: blue;
    animation: animate3 1s ease-in;
}
.stage4 {
    width: 100%;
    height: 0.25rem;
    background: blue;
    animation: animate4 1s ease-in;
}
@keyframes animate1 {
    0% {
        width: 0%
    }
    100% {
        width: 25%;
    }
}
@keyframes animate2 {
    0% {
        width: 25%
    }
    100% {
        width: 50%;
    }
}
@keyframes animate3 {
    0% {
        width: 50%
    }
    100% {
        width: 75%;
    }
}
@keyframes animate4 {
    0% {
        width: 75%
    }
    100% {
        width: 100%;
    }
}
</style>