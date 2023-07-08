import { defineStore } from 'pinia'

export const useProductsStore = defineStore('productsStore', {
    state: () => ({
        products: [],
        product: {}
    }),
    
    actions: {
        async getProducts() {
            const res = await fetch("http://localhost:5000/products")
            const products = await res.json()

            this.products = products
        },
        async getProduct(_id) {
            const res = await fetch("http://localhost:5000/products/" + _id)
            const product = res.json()

            this.product = product
        }
    }
})