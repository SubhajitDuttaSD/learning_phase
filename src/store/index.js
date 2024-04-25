// import { createStore } from "redux";
import { configureStore, createSlice } from "@reduxjs/toolkit";

const initialState = {
  counter: 0,
  showCounter: true,
};

const counterSlice = createSlice({
  name: "counter",
  initialState,
  reducers: {
    increment(state, action) {
      state.counter += action.payload;
    },
    decrement(state, action) {
      state.counter -= action.payload;
    },
    toggle(state) {
      state.showCounter = !state.showCounter;
    },
  },
});

//-----------------OLD CODE-----------------

// const counterReducer = (state = initialState, action) => {
//   const { type, amount } = action;
//   if (type === "increment") {
//     return { ...state, counter: state.counter + amount };
//   }

//   if (type === "decrement") {
//     return { ...state, counter: state.counter - amount };
//   }

//   if (type === "toggle") {
//     return {
//       ...state,
//       showCounter: !state.showCounter,
//     };
//   }

//   return state;
// };

// const store = createStore(counterReducer);

//-------------OLD CODE----------------------

const store = configureStore({
  reducer: counterSlice.reducer,
});

export const counterActions = counterSlice.actions;

export default store;
