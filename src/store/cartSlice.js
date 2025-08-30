import { createSlice, createSelector } from '@reduxjs/toolkit'

const initialState = {
  items: {} // { [id]: { id, name, price, image, quantity } }
}

const cartSlice = createSlice({
  name: 'cart',
  initialState,
  reducers: {
    addToCart: (state, action) => {
      const item = action.payload
      if (!state.items[item.id]) {
        state.items[item.id] = { ...item, quantity: 1 }
      }
    },
    increment: (state, action) => {
      const id = action.payload
      if (state.items[id]) state.items[id].quantity += 1
    },
    decrement: (state, action) => {
      const id = action.payload
      if (state.items[id]) {
        state.items[id].quantity -= 1
        if (state.items[id].quantity <= 0) delete state.items[id]
      }
    },
    removeItem: (state, action) => {
      const id = action.payload
      if (state.items[id]) delete state.items[id]
    },
    clearCart: (state) => {
      state.items = {}
    }
  }
})

export const { addToCart, increment, decrement, removeItem, clearCart } = cartSlice.actions
export default cartSlice.reducer

export const selectCartItems = (state) => Object.values(state.cart.items)
export const selectTotalItems = createSelector([selectCartItems], (items) =>
  items.reduce((sum, it) => sum + it.quantity, 0)
)
export const selectTotalCost = createSelector([selectCartItems], (items) =>
  items.reduce((sum, it) => sum + it.quantity * it.price, 0)
)
