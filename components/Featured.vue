<template>
    <div class="border-8 border-green-900 w-[100%] h-[auto] text-center p-16">
        <p class="font-bold text-3xl">FEATURED PRODUCTS</p>
        <ul class="border border-red-700 mt-6 mb-10">
            <ul class=" inline-block mx-4 font-bold border border-blue-700" v-on:click="showThisA = true">ALL</ul>
            <ul class=" inline-block mx-4 font-bold border border-blue-700">ON SALE</ul>
            <ul class=" inline-block mx-4 font-bold border border-blue-700">SOFA</ul>
            <ul class=" inline-block mx-4 font-bold border border-blue-700">HANGING LIGHT</ul>
        </ul>
        <div class="w-[75%] h-[700px] border-4 border-green-500 my-16 mx-[auto]">
            <All v-show="showThisA" />
            <OnSale v-show="showThisB" />
            <Sofa v-show="showThisC" />
            <HangingLight v-show="showThisD" />
        </div>
    </div>
</template>

<script>
import All from '~/components/All'
import OnSale from '~/components/OnSale'
import Sofa from '~/components/Sofa'
import HangingLight from '~/components/HangingLight'

export default {
    name: 'Featured',
    data() {
        return {
            showThisA: true,
            showThisB: false,
            showThisC: false,
            showThisD: false,
        }
    },
    components: {
        All,
        OnSale,
        Sofa,
        HangingLight
    }
}
</script>

<style>

</style>