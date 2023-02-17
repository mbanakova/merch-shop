import { defineStore } from 'pinia'

export const useProductsStore = defineStore('productsStore', {

  state: () => ({
    products: [
      {
        id: "0",
        title: "T-shirt",
        description: "Your old sweaty homewear",
        img: 't-shirt',
        price: 4999,
        badge: 'NEW',
        size: ['S', 'XL'],
        amount: {
          S: 5,
          XL: 12
        },
        isActive: true
      },
      {
        id: "1",
        title: "Sweatshirt",
        description: "Keeps you warm on summer evening",
        img: 'sweatshirt',
        price: 9999,
        badge: 'NEW',
        size: ['S', 'M', 'XL'],
        amount: {
          S: 5,
          XL: 12
        },
        isActive: true
      },

      {
        id: "2",
        title: "Blazer",
        description: "For a heavy party",
        img: 'blazer',
        price: 11999,
        badge: 'NEW',
        size: ['S', 'XL'],
        amount: {
          S: 5,
          XL: 12
        },
        isActive: true
      },
    ]
  })
})