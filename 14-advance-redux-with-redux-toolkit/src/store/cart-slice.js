import { createSlice } from "@reduxjs/toolkit";

import { uiActions } from "./ui-slice";

const cartSlice = createSlice({
    name: "cart",
    initialState: {
        items: [],
        totalQuantity: 0,
        totalAmount: 0,
        changed: false,
    },
    reducers: {
        replaceCart(state, action) {
            state.totalQuantity = action.payload.totalQuantity;
            state.items = action.payload.items;
        },
        addItemToCart(state, action) {
            const newItem = action.payload;
            const existingItem = state.items.find(
                (item) => item.id === newItem.id
            );

            state.totalQuantity++;
            // this change is locally, not safe in the backend
            state.changed = true;

            if (!existingItem) {
                state.items.push({
                    id: newItem.id,
                    price: newItem.price,
                    quantity: 1,
                    totalPrice: newItem.price,
                    name: newItem.title,
                });
            } else {
                existingItem.quantity++;
                existingItem.totalPrice =
                    existingItem.totalPrice + newItem.price;
            }
        },
        removeItemFromCart(state, action) {
            const id = action.payload;
            const existingItem = state.items.find((item) => item.id === id);

            state.totalQuantity--;
            // this change is locally, not safe in the backend
            state.changed = true;

            if (existingItem.quantity === 1) {
                state.items = state.items.filter((item) => item.id !== id);
            } else {
                existingItem.quantity--;
                existingItem.totalPrice =
                    existingItem.totalPrice - existingItem.price;
            }
        },
    },
});

// // example of thunk
// export const sendCartData = (cart) => {
//     return async (dispatch) => {
//         dispatch(
//             uiActions.showNotification({
//                 status: "pending",
//                 title: "Sending",
//                 message: "Sending cart data!",
//             })
//         );

//         const sendRequest = async () => {
//             const sendCartData = await fetch(
//                 "https://react-http-9332d-default-rtdb.firebaseio.com/cart-redux.json",
//                 {
//                     method: "PUT",
//                     body: JSON.stringify(cart),
//                 }
//             );

//             if (!sendCartData.ok) {
//                 throw new Error("Sending cart data failed");
//             }
//         };

//         try {
//             await sendRequest();

//             dispatch(
//                 uiActions.showNotification({
//                     status: "sucess",
//                     title: "Success!",
//                     message: "Sent cart data successfully!",
//                 })
//             );
//         } catch (error) {
//             sendCartData().catch((error) => {
//                 dispatch(
//                     uiActions.showNotification({
//                         status: "error",
//                         title: "Error!",
//                         message: error.message,
//                     })
//                 );
//             });
//         }
//     };
// };

export const cartActions = cartSlice.actions;

export default cartSlice;
