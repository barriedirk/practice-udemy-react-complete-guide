const redux = require("redux");

// reducer function
// receive inputs: old state + dispatched action
// and return a new state object
const counterReducer = (state = { counter: 0 }, action) => {
    if (action.type === "increment") {
        return {
            counter: state.counter + 1,
        };
    }

    if (action.type === "decrement") {
        return {
            counter: state.counter - 1,
        };
    }

    return state;
};

const store = redux.createStore(counterReducer);

console.log("[ store.getState() ] ::: ", store.getState());

const counterSubscriber = () => {
    const latestState = store.getState();

    console.log(latestState);
};

store.subscribe(counterSubscriber);

setTimeout(() => store.dispatch({ type: "increment" }), 1000);
setTimeout(() => store.dispatch({ type: "increment" }), 2000);
setTimeout(() => store.dispatch({ type: "decrement" }), 4000);
