import { configureStore } from '@reduxjs/toolkit'
import cartReducer from '../features/cart/cartSlide'
import counterReducer from '../features/counter/counterSlide'

export const store = configureStore({
    reducer: {
        counter:counterReducer,
        cart:cartReducer
    },
  })