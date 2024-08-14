import { createSlice } from "@reduxjs/toolkit";
import toast from "react-hot-toast";

const initialCartState = {
  items: [],
  totalQuantity: 0,
  totalAmount: 0,
  changed: false,
};

const cartSlice = createSlice({
  name: "cart",
  initialState: initialCartState,
  reducers: {
    addToCart(state, action) {
      const newItem = action.payload;
      const existingItem = state.items.find((item) => item.id === newItem.id);

      state.totalQuantity++;
      state.totalAmount = state.totalAmount + Number(newItem.price);
      state.changed = true;

      if (!existingItem) {
        state.items.push({
          id: newItem.id,
          title: newItem.title,
          price: Number(newItem.price),
          quantity: 1,
          totalPrice: Number(newItem.price),
          description: newItem.description,
          image: newItem.image,
        });
        toast.success("Product added succesfully");
      } else {
        existingItem.quantity++;
        existingItem.totalPrice =
          existingItem.totalPrice + Number(existingItem.price);
        toast.success("Item quantity has been updated");
      }
    },

    removeFromCart(state, action) {
      const id = action.payload;
      const existingItem = state.items.find((item) => item.id === id);

      state.totalQuantity--;
      state.totalAmount = state.totalAmount + Number(existingItem.price);
      state.changed = true;

      if (existingItem.quantity === 1) {
        state.items = state.items.filter((item) => item.id !== existingItem.id);
        toast.success("Product was removed from cart succesfully");
      } else {
        existingItem.quantity--;
        existingItem.totalPrice = existingItem.totalPrice - existingItem.price;
        toast.success("Item quantity has been updated");
      }
    },

    removeItem(state, action) {
      const id = action.payload;
      const existingItem = state.items.find((item) => item.id === id);

      state.items = state.items.filter((item) => item.id !== existingItem.id);
      state.totalQuantity = state.totalQuantity - existingItem.quantity;
      state.totalAmount = state.totalAmount + existingItem.totalPrice;
      state.changed = true;
      toast.success("Product was removed from cart succesfully");
    },

    setCart(state, action) {
      state.items = action.payload.items || [];
      state.totalQuantity = action.payload.totalQuantity || 0;
      state.totalAmount = action.payload.totalAmount || 0;
      state.changed = action.payload.changed;
    },
    clearCart(state) {
      state.items = [];
      state.totalQuantity = 0;
      state.changed = false;
    },
  },
});

export const cartActions = cartSlice.actions;
export default cartSlice;
