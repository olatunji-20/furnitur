import { defineStore } from 'pinia'

export const useProductsStore = defineStore('productsStore', {
    state: () => ({
        products: [],
        product: {},
        cart: []
    }),

    actions: {
        async getProducts() {
            const res = await fetch("http://localhost:5000/products")
            const products = await res.json()

            this.products = products
        },
        async getProduct(id) {
            const res = await fetch("http://localhost:5000/products/" + id)
            const product = await res.json()

            this.product = product
        },
        addToCart(payload) {
            console.log(payload.number)
            console.log(payload.product)
        }
    }
})