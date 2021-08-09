import { createSlice, configureStore } from "@reduxjs/toolkit";

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

const initialAuthState = {
    isAuthenticated: false,
};

const authSlice = createSlice({
    name: "authentication",
    initialState: initialAuthState,
    reducers: {
        login(state) {
            state.isAuthenticated = true;
        },
        logout(state) {
            state.isAuthenticated = false;
        },
    },
});

// note: counterSlice.actions.toggleCounter() returns an action object
//       of this shape: {type: 'some auto-genated-unique-identifier'}
// counterSlice.actions.toggleCounter()

// const store = createStore(counterSlice.reducer);
const store = configureStore({
    // with only one reducer
    //
    // reducer: counterSlice.reducer,

    // with more than one reducer
    //
    reducer: {
        counter: counterSlice.reducer,
        auth: authSlice.reducer,
    },
});

export const counterActions = counterSlice.actions;
export const authActions = authSlice.actions;
export default store;

// import { createStore } from "redux";
//
// const initialState = { counter: 0, showCounter: true };
//
// const counterReducer = (state = initialState, action) => {
//     if (action.type === "increment") {
//         return {
//             counter: state.counter + 1,
//             showCounter: state.showCounter,
//         };
//     }
//
//     if (action.type === "increase") {
//         return {
//             counter: state.counter + action.amount,
//             showCounter: state.showCounter,
//         };
//     }
//
//     if (action.type === "decrement") {
//         return {
//             counter: state.counter - 1,
//             showCounter: state.showCounter,
//         };
//     }
//
//     if (action.type === "toggle") {
//         return {
//             showCounter: !state.showCounter,
//             counter: state.counter,
//         };
//     }
//
//     return state;
// };
//
// const store = createStore(counterReducer);
//
// export default store;
