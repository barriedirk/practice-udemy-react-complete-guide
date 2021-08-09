import { createStore } from "redux";


// we are going to use redux-toolkit
//
// export const INCREMENT = "increment";
// export const DECREMENT = "decrement";
// export const INCREASE = "increase";

const initialState = { counter: 0, showCounter: true };

// const counterReducer = (state = { counter: 0, showCounter: true }, action) => {
const counterReducer = (state = initialState, action) => {
    // note: the "return" will overwrite the object state

    // // BAD, must not do with REDUX
    // //  reference vs primitive values: https://academind.com/tutorials/reference-vs-primitive-values/
    // //
    // if (action.type === INCREMENT) {
    //     state.counter++;
    //
    //     return state;
    // }
    // // BAD: other example
    // //
    // if (action.type === INCREMENT) {
    //     state.counter++;
    //
    //     return {
    //         counter: state.counter,
    //         showCounter: state.showCounter,
    //     };
    // }

    // if (action.type === INCREMENT) {
    if (action.type === "increment") {
        return {
            counter: state.counter + 1,
            showCounter: state.showCounter,
        };
    }

    // if (action.type === INCREASE) {
    if (action.type === "increase") {
        return {
            counter: state.counter + action.amount,
            showCounter: state.showCounter,
        };
    }

    // if (action.type === DECREMENT) {
    if (action.type === "decrement") {
        return {
            counter: state.counter - 1,
            showCounter: state.showCounter,
        };
    }

    if (action.type === "toggle") {
        return {
            showCounter: !state.showCounter,
            counter: state.counter,
        };
    }

    return state;
};

const store = createStore(counterReducer);

export default store;
