import { defineStore } from 'pinia'

export const useFavouritesStore = defineStore('favouritesStore', {

  state: () => ({
    favourites: [],
    favouritesOpen: false,
    maxItems: 6
  }),
  actions: {
    addToFavs(product) {
      console.log(product);
      const item = {
        id: product.id,
        title: product.title,
        img: product.img,
        price: product.price,
        size: product.size,
      };

      this.adjustQuantity(item)
    },
    toggleFavourites() {
      this.favouritesOpen = !this.favouritesOpen;
    },
    deleteFromFavs(id) {
      console.log(id);
      this.favourites = this.favourites.filter(i => i.id != id)
    },
    adjustQuantity(item) {
      if (this.favourites.length === this.maxItems) {
        this.favourites.shift();
      }
      this.favourites.push(item)
    }
  },
  getters: {
    getFavouritesQuantiity() {
      return this.favourites.length
    },
    hasFavourites() {
      return this.favourites.length > 0
    },
    getFavourites() {
      return this.favourites
    }
  }
})