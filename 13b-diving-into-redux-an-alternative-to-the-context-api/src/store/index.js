import { configureStore } from "@reduxjs/toolkit";

// import counterSlice from "./counter";
// import authSlice from "./auth";
//
// const store = configureStore({
//     reducer: {
//         counter: counterSlice.reducer,
//         auth: authSlice.reducer,
//     },
// });

import counterReducer from "./counter";
import authReducer from "./auth";

const store = configureStore({
    reducer: {
        counter: counterReducer,
        auth: authReducer,
    },
});

// export const counterActions = counterSlice.actions;
// export const authActions = authSlice.actions;
export default store;
