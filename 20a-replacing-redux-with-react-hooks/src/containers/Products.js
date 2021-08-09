import React, { useContext } from "react";

import ProductItem from "../components/Products/ProductItem";
import "./Products.css";

// // USING Redux
//
// import { useSelector } from "react-redux";
//
// const Products = (props) => {
//     const productList = useSelector((state) => state.shop.products);
//     return (
//         <ul className="products-list">
//             {productList.map((prod) => (
//                 <ProductItem
//                     key={prod.id}
//                     id={prod.id}
//                     title={prod.title}
//                     description={prod.description}
//                     isFav={prod.isFavorite}
//                 />
//             ))}
//         </ul>
//     );
// };

// // Using Context API
// //
// import { ProductContext } from "../context/product-context";
//
// const Products = (props) => {
//     const productList = useContext(ProductContext).products;

//     return (
//         <ul className="products-list">
//             {productList.map((prod) => (
//                 <ProductItem
//                     key={prod.id}
//                     id={prod.id}
//                     title={prod.title}
//                     description={prod.description}
//                     isFav={prod.isFavorite}
//                 />
//             ))}
//         </ul>
//     );
// };

// Using hooks-state
//
import { useStore } from "../hooks-state/store";

const Products = (props) => {
    const state = useStore()[0];
    const productList = state.products;

    return (
        <ul className="products-list">
            {productList.map((prod) => (
                <ProductItem
                    key={prod.id}
                    id={prod.id}
                    title={prod.title}
                    description={prod.description}
                    isFav={prod.isFavorite}
                />
            ))}
        </ul>
    );
};

export default Products;
