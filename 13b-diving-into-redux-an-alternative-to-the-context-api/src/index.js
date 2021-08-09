import React from "react";
import ReactDOM from "react-dom";
// need to provide the store (redux)
import { Provider } from "react-redux";

import "./index.css";
import App from "./App";
import store from "./store/index";

// ReactDOM.render(<App />, document.getElementById('root'));
ReactDOM.render(
    <Provider store={store}>
        <App />
    </Provider>,
    document.getElementById("root")
);
