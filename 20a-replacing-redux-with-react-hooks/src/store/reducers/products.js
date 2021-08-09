import { TOGGLE_FAV } from "../actions/products";
import { productListMockup } from "../../shared/product-list-mockup";

const initialState = {
    products: productListMockup,
};

const productReducer = (state = initialState, action) => {
    switch (action.type) {
        case TOGGLE_FAV:
            const prodIndex = state.products.findIndex(
                (p) => p.id === action.productId
            );
            const newFavStatus = !state.products[prodIndex].isFavorite;
            const updatedProducts = [...state.products];

            updatedProducts[prodIndex] = {
                ...state.products[prodIndex],
                isFavorite: newFavStatus,
            };
            return {
                ...state,
                products: updatedProducts,
            };
        default:
            return state;
    }
};

export default productReducer;
