<template>
    <div>
        <div class="border-4 border-green-800 py-8 pl-20 pr-32 flex justify-between">
            <NuxtLink to="/">
                <div class="w-[200px] h-[50px] border-2 border-red-900">
                    <img class="w-[100%] h-[100%]" src="../asssets/logo.png"/>
                </div>
            </NuxtLink>
            <div class="border-2 border-green-700 w-[600px] h-15 flex justify-center p-[2px]">
                <div v-if="showMenu" class="border-2 border-red-600 w-[62%] h-10 p-[5px]">
                    <ul class="flex">
                        <li class="mx-4">HOME</li>
                        <li class="mx-4">SHOP<i>©</i></li>
                        <li class="mx-4">BLOG</li>
                        <li class="mx-4">ABOUT US</li>
                    </ul>
                </div>
                <div v-if="showMenu" class="border-2 border-blue-600 w-[38%] h-10 p-[5px]">
                    <ul class="flex">
                        <li class="mx-4"><i>℗</i>LOVE</li>
                        <li class="mx-4"><NuxtLink to="/CartPage"><i>®</i>CART</NuxtLink></li>
                        <li class="mx-4 cursor-pointer" v-on:click="search"><i>Q</i></li>
                    </ul>
                </div>
                <div v-else class="w-[100%] h-10 border-2 border-yellow-400 flex justify-around">
                    <div class="border-2 border-red-400 w-[25px] h-[25px] rounded-full cursor-pointer mt-[5px]" v-on:click="menu"><i>x</i></div>
                    <div class="border-2 border-blue-400 w-[85%] h-[35px]">
                        <Search />
                    </div>
                </div>
            </div>
        </div>
        <!-- <div v-show="!showMenu" class="border-4 border-red-500 w-[100%] h-[300px] bg-pink-50 absolute"></div> -->
        <CartBoard />
    </div>
</template>

<script>
export default {
    name: 'Navbar',
    data() {
        return {
            showMenu: true
        }
        
    },
    methods: {
        search() {
            this.showMenu = false
        },
        menu() {
            this.showMenu = true
        }
    }
}
</script>