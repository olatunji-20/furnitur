import { defineStore } from 'pinia'

export const useProductsStore = defineStore('productsStore', {
    state: () => ({
        name: "SHERIFF"
    })
})