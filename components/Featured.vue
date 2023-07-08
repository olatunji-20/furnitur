<template>
    <div class="border-8 border-green-900 w-[100%] h-[auto] text-center p-28">
        <p class="font-bold text-3xl">FEATURED PRODUCTS</p>
        <ul class="border border-red-700 mt-6 mb-10">
            <ul class="inline-block mx-4 font-bold border border-blue-700 cursor-pointer" :class="showA? 'active' : 'non-active'" v-on:click="all">ALL</ul>
            <ul class="inline-block mx-4 font-bold border border-blue-700 cursor-pointer" :class="showB? 'active' : 'non-active'" v-on:click="onSale">ON SALE</ul>
            <ul class="inline-block mx-4 font-bold border border-blue-700 cursor-pointer" :class="showC? 'active' : 'non-active'" v-on:click="onSofa">SOFA</ul>
            <ul class="inline-block mx-4 font-bold border border-blue-700 cursor-pointer" :class="showD? 'active' : 'non-active'" v-on:click="onHang">HANGING LIGHT</ul>
        </ul>
        <div class="w-[85%] h-[auto] border-4 border-green-500 my-16 mx-[auto] overflow-hidden">
            <All v-show="showA" />
            <OnSale v-show="showB" />
            <Sofa v-show="showC" />
            <HangingLight v-show="showD" />
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
            showA: true,
            showB: false,
            showC: false,
            showD: false,
            active: "active"
        }
    },
    methods: {
        all() {
            this.showA = true;
            this.showB = false;
            this.showC = false;
            this.showD = false;
        },
        onSale() {
            this.showA = false;
            this.showB = true;
            this.showC = false;
            this.showD = false;
        },
        onSofa() {
            this.showA = false;
            this.showB = false;
            this.showC = true;
            this.showD = false;
        },
        onHang() {
            this.showA = false;
            this.showB = false;
            this.showC = false;
            this.showD = true;
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
.active {
    border-bottom: 4px solid red;
}
.non-active {
    border-top: 2px solid blue;
}



</style>