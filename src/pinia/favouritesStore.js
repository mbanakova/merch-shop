import { defineStore } from 'pinia'

export const useFavouritesStore = defineStore('favouritesStore', {

  state: () => ({
    favourites: [

    ]
  }),
  actions: {
    addToFavs(product) {
      const item = {
        id: product.id,
        title: product.title,
        price: product.price,
        size: product.size,
      };

      this.favourites.push(item)
    }
  }
})