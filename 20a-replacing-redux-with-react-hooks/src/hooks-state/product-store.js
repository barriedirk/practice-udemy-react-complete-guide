import { initStore } from "./store";
import { productListMockup } from "../shared/product-list-mockup";

const configureStore = () => {
    const actions = {
        TOGGLE_FAV: (curState, productId) => {
            console.log("[ curState, productId ] ::: ", curState, productId);

            const prodIndex = curState.products.findIndex(
                (p) => p.id === productId
            );
            const newFavStatus = !curState.products[prodIndex].isFavorite;
            const updatedProducts = [...curState.products];

            console.log('[ prodIndex, newFavStatus, updatedProducts ] ::: ', prodIndex, newFavStatus, updatedProducts);

            updatedProducts[prodIndex] = {
                ...curState.products[prodIndex],
                isFavorite: newFavStatus,
            };

            return {
                products: updatedProducts,
            };
        },
    };

    initStore(actions, { products: productListMockup });
};

export default configureStore;
