import { createSlice } from "@reduxjs/toolkit";
import { createAsyncThunk } from "@reduxjs/toolkit";
import { addCard } from "../features/cardSlice";
import { useDispatch } from "react-redux";
import axios from "axios";

// Async thunk for fetching random user data
export const getRandomUser = createAsyncThunk(
  "user/getRandomUser",
  async () => {
    console.log("Fetching random user");
    let response = await axios.get("https://randomuser.me/api");
    console.log(response.data.results[0]);
    return response.data.results[0];
  }
);
const nameSlice = createSlice({
  name: "name",
  initialState: "",
  reducers: {},
  extraReducers: {
    [getRandomUser.fulfilled]: (state, action) => {
      const { title, first, last } = action.payload.name;
      state = `${title} ${first} ${last}`;
      return state;
    },
  },
});

export default nameSlice.reducer;
