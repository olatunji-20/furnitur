import { defineStore } from 'pinia'
import { useLocalStorage } from '@vueuse/core'


export const useProductsStore = defineStore('productsStore', {
    state: () => {
        return {
            cartItems: useLocalStorage('cartItems', []),
            products: [],
            prods: [],
            sofaProds: [],
            hangProds: [],
            product: {}
        }
    },

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

        async getSales() {
            const res = await fetch("http://localhost:5000/on-sales")
            const prods = await res.json()

            this.prods = prods
        },
        async getOnSalesProduct(id) {
            const res = await fetch("http://localhost:5000/on-sales/" + id)
            const product = await res.json()

            this.product = product
        },

        async getSofa() {
            const res = await fetch("http://localhost:5000/sofa")
            const sofa = await res.json()

            this.sofaProds = sofa
        },
        async getSofaProduct(id) {
            const res = await fetch("http://localhost:5000/sofa/" + id)
            const product = await res.json()

            this.product = product
        },

        async getHang() {
            const res = await fetch("http://localhost:5000/hanging")
            const hangs = await res.json()

            this.hangProds = hangs
        },
        async getHangingProduct(id) {
            const res = await fetch("http://localhost:5000/hanging/" + id)
            const product = await res.json()

            this.product = product
        },

        addToCart(payload) {
            const existingItem = this.cartItems.find(item => {
                return item.id === payload.product.id
            })

            if (existingItem) {
                let existingItemIndex = this.cartItems.findIndex(
                    item => item.id === existingItem.id
                )
                this.cartItems[existingItemIndex] = existingItem
                existingItem.quantity = existingItem.quantity + payload.number
            } else {
                this.cartItems.push({
                    id: payload.product.id,
                    productName: payload.product.productName,
                    price: payload.product.productPrice,
                    image: payload.product.productImage,
                    rating: payload.product.review,
                    quantity: payload.number
                })
            }

            console.log("EXISTTTT" + existingItem)
            console.log(existingItem)
            console.log("AAAAA" + this.cartItems)
            console.log(this.cartItems)
            console.log(payload.number)
            console.log(payload.product)
        },
        removeFromCart(id) {
            if (confirm("Are you sure you want to remove this item from your cart?")) {
                this.cartItems = this.cartItems.filter(c => c.id !== id);
                console.log("OPE O" + id)
            }
            return false
        }
    },
    // persist: true
})