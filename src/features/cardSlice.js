import { createSlice } from "@reduxjs/toolkit";


// Create a slice for the 'Cards' state
const cardsSlice = createSlice({
  name: "cards",
  initialState: { cards:[]} //Måste vara tom array
    
  ,
  reducers: {
    addCard: (state, action) => {
      console.log("add card");
      console.log(state, " state");
      //state.push(action.payload);
      console.log(action.payload, "addCard kördes");
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
//     deleteCard: (state, action) => {
// console.log(action.payload);
//       return {
//         // ...state,
//         // cards: action.payload,
//       };
//     },
  },
  // extraReducers: {
  //   [getRandomUser.fulfilled]: (state, action) => {
  //     state.debitCards.push(action.payload);
  //   },
  // },
});

export default cardsSlice.reducer;
export const { addCard,reorderCards,deleteCard } = cardsSlice.actions;

