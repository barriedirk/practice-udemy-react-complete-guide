import { Route, Switch, Redirect } from "react-router-dom";

import Welcome from "./pages/Welcome";
import Products from "./pages/Products";
import ProductDetail from "./pages/ProductDetails";
import MainHeader from "./components/MainHeader";

function App() {
    // with differents routes
    //
    // return (
    //     <div>
    //         <MainHeader />
    //         <main>
    //             <Route path="/welcome">
    //                 <Welcome />
    //             </Route>
    //             <Route path="/products">
    //                 <Products />
    //             </Route>
    //             <Route path="/product-detail/:productId">
    //                 <ProductDetail />
    //             </Route>
    //         </main>
    //     </div>
    // );

    // notices that with /products and /products/:productId show at the same time
    // if url as the following /products/p1
    //
    // return (
    //     <div>
    //         <MainHeader />
    //         <main>
    //             <Route path="/welcome">
    //                 <Welcome />
    //             </Route>
    //             <Route path="/products">
    //                 <Products />
    //             </Route>
    //             <Route path="/products/:productId">
    //                 <ProductDetail />
    //             </Route>
    //         </main>
    //     </div>
    // );

    // with Switch, show the first case, for that reason we change the order
    //  or use exact attribute
    //
    // return (
    //     <div>
    //         <MainHeader />
    //         <main>
    //             <Switch>
    //                 <Route path="/welcome">
    //                     <Welcome />
    //                 </Route>
    //                 <Route path="/products/:productId">
    //                     <ProductDetail />
    //                 </Route>
    //                 <Route path="/products">
    //                     <Products />
    //                 </Route>
    //             </Switch>
    //         </main>
    //     </div>
    // );

    // with Switch with exact attribute
    //
    return (
        <div>
            <MainHeader />
            <main>
                <Switch>
                    <Route path="/" exact>
                        <Redirect to="/welcome" />
                    </Route>
                    <Route path="/welcome">
                        <Welcome />
                    </Route>
                    <Route path="/products" exact>
                        <Products />
                    </Route>
                    <Route path="/products/:productId">
                        <ProductDetail />
                    </Route>
                </Switch>
            </main>
        </div>
    );
}

export default App;
