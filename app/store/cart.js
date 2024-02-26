import { create } from 'zustand'

export const cartStore = create((set) => ({
  cart: {
    products: [],
    productsIds: [],
  },
  addProduct: (prod) => set((state) => ({
    cart: {
      products: [...state.cart.products, prod],
      productsIds: [...state.cart.productsIds, prod.id],

    },
    removeProduct: (prod) => set((state) => ({
      cart: {
        products: state.cart.products.filter((p) => p.id !== prod.id),
        productsIds: state.cart.productsIds.filter((id) => id !== prod.id),
      }
    }))
  })),
  removeAllProducts: () => set({ cart: { products: [] } }),
}))  