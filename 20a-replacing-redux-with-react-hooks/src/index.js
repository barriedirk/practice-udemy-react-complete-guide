import React from "react";
import ReactDOM from "react-dom";
import { BrowserRouter } from "react-router-dom";

import "./index.css";
import App from "./App";

import ProductsProvider from "./context/product-context";

// // NOTE this is using redux
//
// import { Provider } from "react-redux";
// import { combineReducers, createStore } from "redux";
// import productReducer from "./store/reducers/products";
//
// const rootReducer = combineReducers({
//     shop: productReducer,
// });
//
// const store = createStore(rootReducer);
//
// ReactDOM.render(
//     <Provider store={store}>
//         <BrowserRouter>
//             <App />
//         </BrowserRouter>
//     </Provider>,
//     document.getElementById("root")
// );

// // this is using Context API
// ReactDOM.render(
//     <ProductsProvider>
//         <BrowserRouter>
//             <App />
//         </BrowserRouter>
//     </ProductsProvider>,
//     document.getElementById("root")
// );

// remember, configureStore as default
import configureProductStore from "./hooks-state/product-store";


// initialize the store
configureProductStore();

// this is with custom hook state
ReactDOM.render(
    <BrowserRouter>
        <App />
    </BrowserRouter>,
    document.getElementById("root")
);
