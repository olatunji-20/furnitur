<template>
  <transition name="ddd">
    <div class="w-[100%] h-[100%] border-4 border-red-800 flex flex-wrap">
      <Card :products="onSale" :key="onSale.products"
      />
    </div>
  </transition>
</template>
  
  <script>
import { useProductsStore } from "../stores/ProductsStore";

export default {
  data() {
        return {
            onSale: []
        }
    },
    methods: {
        async getSales() {
            const res = await fetch("http://localhost:5000/on-sales")
            const sales = await res.json()

            this.onSale = sales
        }
    },
    created() {
        this.getSales();
    }
};
</script>
  
  
<style>
.ddd-enter-from {
  left: 100%;
  opacity: 0;
}
.ddd-enter-to {
  left: 0%;
  opacity: 1;
}
.ddd-enter-active {
  transition: all 2s ease;
}
.ddd-leave-from {
  left: 0%;
}
.ddd-leave-to {
  left: 100%;
}
.ddd-leave-active {
  transition: left 0.4s ease;
}
</style>