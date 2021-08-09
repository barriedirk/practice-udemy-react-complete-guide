import { createSlice } from "@reduxjs/toolkit";

const initialCounterState = { counter: 0, showCounter: true };

const counterSlice = createSlice({
    name: "counter",
    initialState: initialCounterState,
    reducers: {
        increment(state) {
            // internally, reduxtoolkit detect the change and clone the state object
            state.counter++;
        },
        decrement(state) {
            // internally, reduxtoolkit detect the change and clone the state object
            state.counter--;
        },
        increase(state, action) {
            // internally, reduxtoolkit detect the change and clone the state object

            // note: it is not action.amount in this case, always be action.payload
            //       wrong state.counter = state.counter + action.amount;
            state.counter = state.counter + action.payload;
        },
        toggleCounter(state) {
            // internally, reduxtoolkit detect the change and clone the state object
            state.showCounter = !state.showCounter;
        },
    },
});

export const counterActions = counterSlice.actions;

// export default counterSlice;
export default counterSlice.reducer;