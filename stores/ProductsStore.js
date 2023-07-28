import { defineStore } from 'pinia'
// import { useRouter } from 'vue-router'

// const router = useRouter();


export const useProductsStore = defineStore('productsStore', {
    state: () => ({
        products: [],
        product: {},
        cartItems: []
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
            const existingItem = this.cartItems.find(item => {
                return item.id === payload.product.id
            })

            if(existingItem) {
                let existingItemIndex = this.cartItems.findIndex(
                    item => item.id === existingItem.id
                )
                this.cartItems[existingItemIndex] = existingItem
                existingItem.quantity = existingItem.quantity + payload.number
            }else {
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
            this.cartItems = this.cartItems.filter(c => c.id !== id);
            // this.$router.push({ path: "/CartPage" })
            console.log("OPE O" + id)
        }
    },
    persist: true
})