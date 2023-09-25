<template>
  <div>
    <div class="border-4 border-gray-200 w-[100%] max-h-[20rem] overflow-auto mt-12">
        <div v-for="service in shipping" :key="service.id" class="shadow-md border bg-gray-100 w-[100%] h-[5rem] flex justify-between my-2">
            <div class="w-[3.125rem] h-[100%] text-center pt-[1.375rem]">
                <input type="radio" />
            </div>
            <div class="border border-gray-200 shadow-md w-[18.75rem] h-[100%] pt-[0.75rem]">
                <h2 class="font-bold">{{ service.serviceName }}</h2>
                <p class="text-sm text-gray-700">{{ service.serviceDelivery }}3</p>
            </div>
            <div class="w-[9.375rem] h-[100%] text-center pt-[1.375rem] font-bold text-red-500">
                <p>${{ service.servicePrice }}</p>
            </div>
        </div>
    </div>
    <hr class="border-2 border-red-600 w-[98%] my-8 mx-[auto]" />
    <div class="border-2 border-red-400 w-[100%] h-[auto]">
        <h1 class="font-bold text-2xl">PAYMENT METHOD</h1>
        <p class="text-sm mb-10">Choose what service you want for your transaction</p>
        <div class="border-2 border-green-400 w-[100%] h-[6.25rem] flex justify-between">
            <div class="border border-red-300 w-[48%] h-[100%] flex justify-between">
                <div class="border-2 border-green-300 w-[10%] h-[100%] text-center pt-[1.875rem]">
                    <input type="radio" />
                </div>
                <div class="border-2 border-yellow-500 w-[89%] h-[100%] pt-[0.3125rem]">
                    <h2 class="font-bold inline">Credit card</h2>
                    <div class="border border-red-300 w-[6.25rem] h-[1.25rem] inline float-right"></div>
                    <p class="text-sm">You can use all credit service. we can accept Visa and MasterCard.</p>
                </div>
            </div>
            <div class="border border-red-300 w-[45%] h-[100%] flex justify-between">
                <div class="border-2 border-green-300 w-[10%] h-[100%] text-center pt-[1.875rem]">
                    <input type="radio" />
                </div>
                <div class="border-2 border-yellow-500 w-[89%] h-[100%] pt-[0.3125rem]">
                    <h2 class="font-bold inline">PayPal</h2>
                    <div class="border border-red-300 w-[1.875rem] h-[1.25rem] inline float-right"></div>
                    <p class="text-sm">Insert your account email of paypal, We will process your payment.</p>
                </div>
            </div>
        </div>
        <div class="border-2 border-purple-400 w-[100%] h-[11.25rem] mt-12">
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
    data() {
        return {
            shipping: []
        }
    },
    methods: {
        async getServices() {
            const res = await fetch("https://my-json-server.typicode.com/olatunji-20/furnitur-api/shipping-services")
            const services = await res.json()

            this.shipping = services
        }
    },
    mounted() {
        this.getServices();
    }
}
</script>

<style>

</style>