import { defineStore } from 'pinia'

export const useProductsStore = defineStore('productsStore', {
    state: () => ({
        name: "SHERIFF",
        products: []
    }),
    
    actions: {
        async getProducts() {
            const res = await fetch("http://localhost:5000/products")
            const products = await res.json()

            this.products = products
        }
    }
})