import { Component } from "react";

// there are more react hooks to manage redux
import { useSelector, useDispatch, connect } from "react-redux";

// import { INCREMENT } from "../store/index";

// import { counterActions } from "../store/index";
import { counterActions } from "../store/counter";

import classes from "./Counter.module.css";

const Counter = () => {
    const dispatch = useDispatch();

    // useSelector: internally create a subscription/ unsubscription for the component behihnd the scenes
    //
    // With only one counterSlice
    //
    // const counter = useSelector((state) => state.counter);
    // const show = useSelector((state) => state.showCounter);

    // With more than one counterSlice, to use counter
    //
    // initialCounterState = { counter: 0, showCounter: true };
    //
    //
    //   reducer: {
    //     counter: counterSlice.reducer,
    //     auth: authSlice.reducer,
    //   },
    //
    const counter = useSelector((state) => state.counter.counter);

    const show = useSelector((state) => state.counter.showCounter);

    const incrementHandler = () => {
        // dispatch({ type: INCREMENT });
        // dispatch({ type: "increment" });

        // with redux toolkit
        dispatch(counterActions.increment());
    };

    const increaseHandler = () => {
        // dispatch({ type: "increase", amount: 10 });

        /// with redux toolkit
        dispatch(counterActions.increase(10)); // { type: SOME_UNIQUE_IDENTIFIER, payload: 10}
    };

    const decrementHandler = () => {
        // dispatch({ type: "decrement" });

        /// with redux toolkit
        dispatch(counterActions.decrement());
    };

    const toggleCounterHandler = () => {
        // dispatch({ type: "toggle" });

        /// with redux toolkit
        dispatch(counterActions.toggleCounter());
    };

    return (
        <main className={classes.counter}>
            <h1>Redux Counter</h1>
            {show && <div className={classes.value}>{counter}</div>}
            <div>
                <button onClick={incrementHandler}>Increment</button>
                <button onClick={increaseHandler}>Increase by 10</button>
                <button onClick={decrementHandler}>Decrement</button>
            </div>
            <button onClick={toggleCounterHandler}>Toggle Counter</button>
        </main>
    );
};
export default Counter;

// class Counter extends Component {
//     incrementHandler() {
//         this.props.increment();
//     }

//     decrementHandler() {
//         this.props.decrement();
//     }

//     toggleCounterHandler() {}

//     render() {
//         return (
//             <main className={classes.counter}>
//                 <h1>Redux Counter</h1>
//                 <div className={classes.value}>{this.props.counter}</div>
//                 <div>
//                     <button onClick={this.incrementHandler.bind(this)}>
//                         Increment
//                     </button>
//                     <button onClick={this.decrementHandler.bind(this)}>
//                         Decrement
//                     </button>
//                 </div>
//                 <button onClick={this.toggleCounterHandler}>
//                     Toggle Counter
//                 </button>
//             </main>
//         );
//     }
// }

// // similarity to useSelector
// const mapStateToProps = (state) => {
//     return {
//         counter: state.counter,
//     };
// };

// // similarity to dispatch
// const mapDispatchToProps = (dispatch) => {
//     return {
//         increment: () => dispatch({ type: "increment" }),
//         decrement: () => dispatch({ type: "decrement" }),
//     };
// };

// // use connect for a class
// export default connect(mapStateToProps, mapDispatchToProps)(Counter);
