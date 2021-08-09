import { uiActions } from "./ui-slice";
import { cartActions } from "./cart-slice";

export const fetchCartData = () => {
    return async (dispatch) => {
        const fetchData = async () => {
            const response = await fetch(
                "https://react-http-9332d-default-rtdb.firebaseio.com/cart-redux.json"
            );

            if (!response.ok) {
                throw new Error("Could not fetch cart data!");
            }

            const data = await response.json();

            return data;
        };

        try {
            const cartData = await fetchData();

            dispatch(
                cartActions.replaceCart({
                    items: cartData.items || [],
                    totalQuantity: cartData.totalQuantity || 0,
                    totalAmount: cartData.totalAmount || 0,
                })
            );
        } catch (error) {
            dispatch(
                uiActions.showNotification({
                    status: "error",
                    title: "Error!",
                    message: "Fetching cart data failed!",
                })
            );
        }
    };
};

// example of thunk
//
// Note: 
// From: https://daveceddia.com/what-is-a-thunk/
//       The only thing I left out of that little code snippet is that Redux will pass two arguments 
//       to thunk functions: dispatch, so that they can dispatch new actions 
//       if they need to; and getState, so they can access the current state
  
export const sendCartData = (cart) => {
    return async (dispatch) => {
        dispatch(
            uiActions.showNotification({
                status: "pending",
                title: "Sending",
                message: "Sending cart data!",
            })
        );

        const sendRequest = async () => {
            const sendCartData = await fetch(
                "https://react-http-9332d-default-rtdb.firebaseio.com/cart-redux.json",
                {
                    method: "PUT",
                    body: JSON.stringify({
                        items: cart.items,
                        totalQuantity: cart.totalQuantity,
                        totalAmount: cart.ErrortotalAmount,
                    }),
                }
            );

            if (!sendCartData.ok) {
                throw new Error("Sending cart data failed");
            }
        };

        try {
            await sendRequest();

            dispatch(
                uiActions.showNotification({
                    status: "sucess",
                    title: "Success!",
                    message: "Sent cart data successfully!",
                })
            );
        } catch (error) {
            sendCartData().catch((error) => {
                dispatch(
                    uiActions.showNotification({
                        status: "error",
                        title: "Error!",
                        message: error.message,
                    })
                );
            });
        }
    };
};
