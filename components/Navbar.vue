<template>
    <div>
        <div class="border-4 border-green-800 py-5 pl-20 pr-40 flex justify-between">
            <div class="w-[180px] h-[50px] border-2 border-red-900">
                <img src="../asssets/logo.png"/>
            </div>
            <div class="border-2 border-green-700 w-[600px] h-15 flex justify-center p-[2px]">
                <div class="border-2 border-red-600 w-[62%] h-10 p-[5px]">
                    <ul class="flex">
                        <li class="mx-4">HOME</li>
                        <li class="mx-4">SHOP<i>©</i></li>
                        <li class="mx-4">BLOG</li>
                        <li class="mx-4">ABOUT US</li>
                    </ul>
                </div>
                <div class="border-2 border-blue-600 w-[38%] h-10 p-[5px]">
                    <ul class="flex">
                        <li class="mx-4"><i>℗</i>LOVE</li>
                        <li class="mx-4"><i>®</i>CART</li>
                        <li class="mx-4"><i>©</i></li>
                    </ul>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
export default {
    name: 'Navbar',
    setup() {
        
    },
}
</script>