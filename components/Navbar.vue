<template>
    <div>
        <div class="border-4 border-green-800 py-8 pl-12 pr-24 flex justify-between">
            <NuxtLink to="/">
                <div class="w-[200px] h-[50px] border-2 border-red-900">
                    <img class="w-[100%] h-[100%]" src="../assets/logo.png"/>
                </div>
            </NuxtLink>
            <div class="border-2 border-green-700 w-[auto] h-[auto] p-[0.125rem] flex flex-row">
                <div v-if="showMenu" class="border-2 border-red-600 w-[23.75rem] h-10 p-[0.3125rem]">
                    <ul class="flex">
                        <li class="mx-4">HOME</li>
                        <li class="mx-4">SHOP<i>©</i></li>
                        <li class="mx-4">BLOG</li>
                        <li class="mx-4">ABOUT US</li>
                    </ul>
                </div>
                <div v-if="showMenu" class="border-2 border-blue-600 w-[14.375rem] h-10 p-[0.3125rem]">
                    <ul class="flex">
                        <li class="mx-4"><i>℗</i>LOVE</li>
                        <li class="mx-4"><NuxtLink to="/CartPage"><i>®</i>CART</NuxtLink></li>
                        <li class="mx-4 cursor-pointer" v-on:click="search"><i>Q</i></li>
                    </ul>
                </div>
                <div v-else class="w-[100%] h-10 border-2 border-yellow-400 flex justify-around">
                    <div class="flex w-[100%] justify-around">
                        <div class="border-2 border-red-400 w-[1.5rem] h-[1.5rem] rounded-full cursor-pointer mt-[0.3125rem]" v-on:click="menu"><i>x</i></div>
                        <div class="border-2 border-blue-400 w-[28.125rem] h-[2.187rem] relative">
                            <input v-on:input="search" v-model="searchText" type="text" placeholder="search..." class="w-[100%] h-8 indent-4">
                        </div>
                    </div>
                </div>
            </div>
        </div>
        <div v-show="showSearch" class="border-2 border-red-500 w-[100%] h-[auto] p-4 z-50 bg-pink-50 absolute">
            <p v-for="product in filteredProducts" :key="product.id" v-on:click="searched" class="cursor-pointer leading-6"><NuxtLink :to="`/every-products/${product.id}`">{{ product.productName }}</NuxtLink></p>
            <p>{{ searchText }}</p>        
        </div>
        <CartBoard />
    </div>
</template>

<script>
import { useProductsStore } from '../stores/ProductsStore';

export default {
    name: 'Navbar',
    data() {
        const productsStore = useProductsStore();
        productsStore.getProducts();
        productsStore.getSales();
        productsStore.getSofa();
        productsStore.getHang();

        const allProducts = productsStore.products;
        const onSalesProducts = productsStore.prods;
        const sofaProducts = productsStore.sofaProds;
        const hangingLightProducts = productsStore.hangProds;

        const everyProducts = allProducts.concat(onSalesProducts, sofaProducts, hangingLightProducts);

        return {
            searchText: "",
            allProducts,
            everyProducts,
            showMenu: true,
            showSearch: false
        }
        
    },
    methods: {
        search() {
            this.showMenu = false;
            this.showSearch = true;
        },
        searched() {
            this.showSearch = false;
        },
        menu() {
            this.showMenu = true;
            this.showSearch = false;
        }
    },
    computed: {
        filteredProducts() {
            return this.everyProducts.filter(product => product.productName.toLowerCase().includes(this.searchText.toLowerCase()))
        }
    }
}
</script>