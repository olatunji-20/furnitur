<template>
  <div class="border-4 border-green-300 bg-gray-200 fixed top-0 right-0 bottom-0 left-0 z-50 flex justify-center items-center">
    <div class="border-2 border-red-400 w-[500px] h-[400px] rounded-md bg-blue-300 text-center pt-12">
        <h4>Do you want to remove this item from your cart?</h4>
        <div class="border-2 border-green-400 w-[400px] h-[50px] mx-auto my-40 flex justify-between">
            <div class="border-2 border-yellow-300 w-[150px] h-[45px] rounded-lg bg-red-500">
                <p>CANCEL</p>
            </div>
            <div class="border-2 border-yellow-300 w-[150px] h-[45px] rounded-lg">
                <RemoveCart />
            </div>
        </div>
    </div>

  </div>
</template>

<script>
export default {

}
</script>

<style scoped>

</style>