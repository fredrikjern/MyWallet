import { createSlice } from "@reduxjs/toolkit";

const cardsSlice = createSlice({
  name: "cards",
  initialState: { cards: [] }, //Måste vara tom array

  reducers: {
    addCard: (state, action) => {
      return {
        ...state,
        cards: [...state.cards, action.payload],
      };
    },
    reorderCards: (state, action) => {
      return {
        ...state,
        cards: action.payload,
      };
    },
  },
});

export default cardsSlice.reducer;
export const { addCard, reorderCards, deleteCard } = cardsSlice.actions;
