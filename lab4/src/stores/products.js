import { defineStore } from 'pinia'

export const useProductsStore = defineStore('products', {
  state: () => ({
    items: [
      { id: 1, title: 'Шоколад молочний Milka', price: 45.9 },
      { id: 2, title: 'Батончик Snickers', price: 28.5 },
      { id: 3, title: 'Печиво Oreo', price: 52.3 },
    ],
  }),
})
