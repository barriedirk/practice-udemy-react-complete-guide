import React, { useContext } from "react";

import Card from "../UI/Card";
import "./ProductItem.css";

// // NOTE using redux
//
// import { toggleFav } from "../../store/actions/products";
// import { useDispatch } from "react-redux";
//
// const ProductItem = (props) => {
//     const dispatch = useDispatch();
//
//     const toggleFavHandler = () => {
//         dispatch(toggleFav(props.id));
//     };
//
//     return (
//         <Card style={{ marginBottom: "1rem" }}>
//             <div className="product-item">
//                 <h2 className={props.isFav ? "is-fav" : ""}>{props.title}</h2>
//                 <p>{props.description}</p>
//                 <button
//                     className={!props.isFav ? "button-outline" : ""}
//                     onClick={toggleFavHandler}
//                 >
//                     {props.isFav ? "Un-Favorite" : "Favorite"}
//                 </button>
//             </div>
//         </Card>
//     );
// };

// // Note: using Context API
// //
// //
// import { ProductContext } from "../../context/product-context";

// const ProductItem = (props) => {
//     const toggleFav = useContext(ProductContext).toggleFav;

//     const toggleFavHandler = () => {
//         toggleFav(props.id);
//     };

//     return (
//         <Card style={{ marginBottom: "1rem" }}>
//             <div className="product-item">
//                 <h2 className={props.isFav ? "is-fav" : ""}>{props.title}</h2>
//                 <p>{props.description}</p>
//                 <button
//                     className={!props.isFav ? "button-outline" : ""}
//                     onClick={toggleFavHandler}
//                 >
//                     {props.isFav ? "Un-Favorite" : "Favorite"}
//                 </button>
//             </div>
//         </Card>
//     );
// };

// Note: using custom hook
//

import { useStore } from "../../hooks-state/store";

// with React.memo and useStore(False) avoid rendenring all the list
const ProductItem = React.memo((props) => {
    console.log("[ ProductItem RENDERING ] ::: ");
    const dispatch = useStore(false)[1];

    const toggleFavHandler = () => {
        dispatch("TOGGLE_FAV", props.id);
    };

    return (
        <Card style={{ marginBottom: "1rem" }}>
            <div className="product-item">
                <h2 className={props.isFav ? "is-fav" : ""}>{props.title}</h2>
                <p>{props.description}</p>
                <button
                    className={!props.isFav ? "button-outline" : ""}
                    onClick={toggleFavHandler}
                >
                    {props.isFav ? "Un-Favorite" : "Favorite"}
                </button>
            </div>
        </Card>
    );
});

export default ProductItem;
