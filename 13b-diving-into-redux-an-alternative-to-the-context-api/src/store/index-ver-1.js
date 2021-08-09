import { createStore } from "redux";

const initialState = { counter: 0, showCounter: true };

// const counterReducer = (state = { counter: 0, showCounter: true }, action) => {
const counterReducer = (state = initialState, action) => {
    // note: the "return" will overwrite the object state

    // // BAD, must not do with REDUX
    // //  reference vs primitive values: https://academind.com/tutorials/reference-vs-primitive-values/
    // //
    // if (action.type === "increment") {
    //     state.counter++;
    //
    //     return state;
    // }
    // // BAD: other example
    // //
    // if (action.type === "increment") {
    //     state.counter++;
    //
    //     return {
    //         counter: state.counter,
    //         showCounter: state.showCounter,
    //     };
    // }

    if (action.type === "increment") {
        return {
            counter: state.counter + 1,
            showCounter: state.showCounter,
        };
    }

    if (action.type === "increase") {
        return {
            counter: state.counter + action.amount,
            showCounter: state.showCounter,
        };
    }

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
