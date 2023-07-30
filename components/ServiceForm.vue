<template>
  <div>
    <div class="border-2 border-blue-600 w-[100%] h-[auto] mt-12">
        <div class="border-2 border-purple-500 w-[100%] h-[80px] flex justify-between my-2">
            <div class="border-2 border-green-300 w-[50px] h-[100%] text-center pt-[22px]">
                <input type="radio" />
            </div>
            <div class="border-2 border-yellow-500 w-[300px] h-[100%] pt-[12px]">
                <h2 class="font-bold">DHL Express</h2>
                <p class="text-sm">Estimated delivery time: July 20 - August 03</p>
            </div>
            <div class="border-2 border-red-300 w-[150px] h-[100%] text-center pt-[22px]">
                <p>Free shipping</p>
            </div>
        </div>
        <div class="border-2 border-purple-500 w-[100%] h-[80px] flex justify-between my-2">
            <div class="border-2 border-green-300 w-[50px] h-[100%] text-center pt-[22px]">
                <input type="radio" />
            </div>
            <div class="border-2 border-yellow-500 w-[300px] h-[100%] pt-[12px]">
                <h2 class="font-bold">FedEx</h2>
                <p class="text-sm">Estimated delivery time: July 20 - August 03</p>
            </div>
            <div class="border-2 border-red-300 w-[150px] h-[100%] text-center pt-[22px]">
                <p>$25</p>
            </div>
        </div>
        <div class="border-2 border-purple-500 w-[100%] h-[80px] flex justify-between my-2">
            <div class="border-2 border-green-300 w-[50px] h-[100%] text-center pt-[22px]">
                <input type="radio" />
            </div>
            <div class="border-2 border-yellow-500 w-[300px] h-[100%] pt-[12px]">
                <h2 class="font-bold">Express Expedition</h2>
                <p class="text-sm">Estimated delivery time: July 20 - August 03</p>
            </div>
            <div class="border-2 border-red-300 w-[150px] h-[100%] text-center pt-[22px]">
                <p>$35</p>
            </div>
        </div>
        <div class="border-2 border-purple-500 w-[100%] h-[80px] flex justify-between my-2">
            <div class="border-2 border-green-300 w-[50px] h-[100%] text-center pt-[22px]">
                <input type="radio" />
            </div>
            <div class="border-2 border-yellow-500 w-[300px] h-[100%] pt-[12px]">
                <h2 class="font-bold">JNE Express</h2>
                <p class="text-sm">Estimated delivery time: July 20 - August 03</p>
            </div>
            <div class="border-2 border-red-300 w-[150px] h-[100%] text-center pt-[22px]">
                <p>$30</p>
            </div>
        </div>
        <div class="border-2 border-purple-500 w-[100%] h-[80px] flex justify-between my-2">
            <div class="border-2 border-green-300 w-[50px] h-[100%] text-center pt-[22px]">
                <input type="radio" />
            </div>
            <div class="border-2 border-yellow-500 w-[300px] h-[100%] pt-[12px]">
                <h2 class="font-bold">POS Indonesia</h2>
                <p class="text-sm">Estimated delivery time: July 20 - August 03</p>
            </div>
            <div class="border-2 border-red-300 w-[150px] h-[100%] text-center pt-[22px]">
                <p>$35</p>
            </div>
        </div>
    </div>
    <hr class="border-2 border-green-700 w-[98%] my-8 mx-[auto]" />
    <div class="border-2 border-red-400 w-[100%] h-[auto]">
        <h1 class="font-bold text-2xl">PAYMENT METHOD</h1>
        <p class="text-sm mb-10">Choose what service you want for your transaction</p>
        <div class="border-2 border-green-400 w-[100%] h-[100px] flex justify-between">
            <div class="border border-red-300 w-[48%] h-[100%] flex justify-between">
                <div class="border-2 border-green-300 w-[10%] h-[100%] text-center pt-[30px]">
                    <input type="radio" />
                </div>
                <div class="border-2 border-yellow-500 w-[89%] h-[100%] pt-[5px]">
                    <h2 class="font-bold inline">Credit card</h2>
                    <div class="border border-red-300 w-[100px] h-[20px] inline float-right"></div>
                    <p class="text-sm">You can use all credit service. we can accept Visa and MasterCard.</p>
                </div>
            </div>
            <div class="border border-red-300 w-[45%] h-[100%] flex justify-between">
                <div class="border-2 border-green-300 w-[10%] h-[100%] text-center pt-[30px]">
                    <input type="radio" />
                </div>
                <div class="border-2 border-yellow-500 w-[89%] h-[100%] pt-[5px]">
                    <h2 class="font-bold inline">PayPal</h2>
                    <div class="border border-red-300 w-[30px] h-[20px] inline float-right"></div>
                    <p class="text-sm">Insert your account email of paypal, We will process your payment.</p>
                </div>
            </div>
        </div>
        <div class="border-2 border-purple-400 w-[100%] h-[180px] mt-12">
            <h5 class="text-xl font-bold">Provide your information</h5>
            <div class="w-100 h-[auto] flex flex-wrap justify-between">
            <!-- <form> -->
                <input class="border-b border-red-400 w-[48%] mt-4 text-sm py-3" placeholder="Your name" type="text" />
                <input class="border-b border-red-400 w-[48%] mt-4 text-sm py-3" placeholder="Card number" type="text" />
                <input class="border-b border-red-400 w-[31%] mt-4 text-sm py-3" placeholder="Month" type="text" />
                <input class="border-b border-red-400 w-[31%] mt-4 text-sm py-3" placeholder="Year" type="text" />
                <input class="border-b border-red-400 w-[31%] mt-4 text-sm py-3" placeholder="CVV" type="text" />
            <!-- </form> -->
            </div>
        </div>
    </div>
  </div>
</template>

<script>
export default {

}
</script>

<style>

</style>