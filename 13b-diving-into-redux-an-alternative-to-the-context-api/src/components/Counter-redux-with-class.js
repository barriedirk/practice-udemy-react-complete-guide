import { Component } from "react";

// there are more react hooks to manage redux
import { useSelector, useDispatch, connect } from "react-redux";

import classes from "./Counter.module.css";

// const Counter = () => {
//     const dispatch = useDispatch();

//     // useSelector: internally create a subscription/ unsubscription for the component behihnd the scenes
//     const counter = useSelector((state) => state.counter);

//     const incrementHandler = () => {
//         dispatch({ type: "increment" });
//     };

//     const decrementHandler = () => {
//         dispatch({ type: "decrement" });
//     };

//     const toggleCounterHandler = () => {};

//     return (
//         <main className={classes.counter}>
//             <h1>Redux Counter</h1>
//             <div className={classes.value}>{counter}</div>
//             <div>
//                 <button onClick={incrementHandler}>Increment</button>
//                 <button onClick={decrementHandler}>Decrement</button>
//             </div>
//             <button onClick={toggleCounterHandler}>Toggle Counter</button>
//         </main>
//     );
// };
// export default Counter;

class Counter extends Component {
    incrementHandler() {
        this.props.increment();
    }

    decrementHandler() {
        this.props.decrement();
    }

    toggleCounterHandler() {}

    render() {
        return (
            <main className={classes.counter}>
                <h1>Redux Counter</h1>
                <div className={classes.value}>{this.props.counter}</div>
                <div>
                    <button onClick={this.incrementHandler.bind(this)}>
                        Increment
                    </button>
                    <button onClick={this.decrementHandler.bind(this)}>
                        Decrement
                    </button>
                </div>
                <button onClick={this.toggleCounterHandler}>
                    Toggle Counter
                </button>
            </main>
        );
    }
}

// similarity to useSelector
const mapStateToProps = (state) => {
    return {
        counter: state.counter,
    };
};

// similarity to dispatch
const mapDispatchToProps = (dispatch) => {
    return {
        increment: () => dispatch({ type: "increment" }),
        decrement: () => dispatch({ type: "decrement" }),
    };
};

// use connect for a class
export default connect(mapStateToProps, mapDispatchToProps)(Counter);
