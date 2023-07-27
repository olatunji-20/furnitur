<template>
  <div>
    <div class="w-100 h-[auto] flex flex-wrap justify-between">
      <!-- <form> -->
        <input class="border-b border-red-400 w-[48%] mt-4 text-sm py-3" placeholder="Your name" type="text" />
        <input class="border-b border-red-400 w-[48%] mt-4 text-sm py-3" placeholder="E-mail" type="email" />
        <input class="border-b border-red-400 w-[100%] mt-4 text-sm py-3" placeholder="Phone number" type="telephone" />
        <input class="border-b border-red-400 w-[48%] mt-4 text-sm py-3" placeholder="Password" type="text" />
        <input class="border-b border-red-400 w-[48%] mt-4 text-sm py-3" placeholder="Retype password" type="text" />
        <NuxtLink to="/Customer">
            <button class="px-20 py-2 mt-12 text-white bg-green-500">Create an account</button>
        </NuxtLink>
      <!-- </form> -->
    </div>
  </div>
</template>

<script>
export default {

}
</script>

<style>

</style>