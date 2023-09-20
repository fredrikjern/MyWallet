import { configureStore } from "@reduxjs/toolkit";
import cardSlice from "../features/cardSlice";
import nameSlice from "../redux/nameSlice";
const store = configureStore({
  reducer: {
    
    name: nameSlice,
    cards: cardSlice,
  },
});

export default store;
