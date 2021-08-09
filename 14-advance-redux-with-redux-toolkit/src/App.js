import { Fragment, useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";

import Cart from "./components/Cart/Cart";
import Layout from "./components/Layout/Layout";
import Products from "./components/Shop/Products";
import Notification from "./components/UI/Notification";
// import { uiActions } from "./store/ui-slice";
// import { sendCartData } from "./store/cart-slice";
import { fetchCartData, sendCartData } from "./store/cart-actions";

let isInitial = true;

function App() {
    const dispatch = useDispatch();
    const showCart = useSelector((state) => state.ui.cartIsVisible);
    const cart = useSelector((state) => state.cart);
    const notification = useSelector((state) => state.ui.notification);

    useEffect(() => {
        dispatch(fetchCartData());
    }, [dispatch]);

    // NEVER useEffect( async () => {
    useEffect(() => {
        if (isInitial) {
            isInitial = false;

            return;
        }

        if (cart.changed) {
            dispatch(sendCartData(cart));
        }

        // ovewrite cart
        //
        // const sendCartData = async () => {
        //     // dispatch(
        //     //     uiActions.showNotification({
        //     //         status: "pending",
        //     //         title: "Sending",
        //     //         message: "Sending cart data!",
        //     //     })
        //     // );

        //     // const sendCartData = await fetch(
        //     //     "https://react-http-9332d-default-rtdb.firebaseio.com/cart-redux.json",
        //     //     {
        //     //         method: "PUT",
        //     //         body: JSON.stringify(cart),
        //     //     }
        //     // );

        //     // if (!sendCartData.ok) {
        //     //     throw new Error("Sending cart data failed");
        //     // }

        //     // dispatch(
        //     //     uiActions.showNotification({
        //     //         status: "sucess",
        //     //         title: "Success!",
        //     //         message: "Sent cart data successfully!",
        //     //     })
        //     // );
        // };

        // if (isInitial) {
        //     isInitial = false;
        //     return;
        // }

        // sendCartData().catch((error) => {
        //     dispatch(
        //         uiActions.showNotification({
        //             status: "error",
        //             title: "Error!",
        //             message: error.message,
        //         })
        //     );
        // });
    }, [cart, dispatch]);

    return (
        <Fragment>
            {notification && (
                <Notification
                    status={notification.status}
                    title={notification.title}
                    message={notification.message}
                />
            )}
            <Layout>
                {showCart && <Cart />}
                <Products />
            </Layout>
        </Fragment>
    );
}

export default App;
