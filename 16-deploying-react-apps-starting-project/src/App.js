import React, { Suspense } from "react";

import { Route, Switch, Redirect } from "react-router-dom";

// import AllQuotes from "./pages/AllQuotes";
// import QuoteDetail from "./pages/QuoteDetail";
// import NewQuote from "./pages/NewQuote";
// import NotFound from "./pages/NotFound";
import Layout from "./components/layout/Layout";
import LoadingSpinner from "./components/UI/LoadingSpinner";

// implementing lazy loading ( using a chunk code )
//  this generate a internal error
//     TypeError: __webpack_require__.e is not a function
//   because of the delay loading of the component ( some miliseconds )
//   and for that reason, we need Suspense as wrapper with a fallback
//
const NewQuote = React.lazy(() => import("./pages/NewQuote"));
const QuoteDetail = React.lazy(() => import("./pages/QuoteDetail"));
const NotFound = React.lazy(() => import("./pages/NotFound"));
const AllQuotes = React.lazy(() => import("./pages/AllQuotes"));

function App() {
    return (
        <Layout>
            <Suspense
                fallback={
                    <div className="centered">
                        <LoadingSpinner />
                    </div>
                }
            >
                <Switch>
                    <Route path="/" exact>
                        <Redirect to="/quotes" />
                    </Route>
                    <Route path="/quotes" exact>
                        <AllQuotes />
                    </Route>
                    <Route path="/quotes/:quoteId">
                        <QuoteDetail />
                    </Route>
                    <Route path="/new-quote">
                        <NewQuote />
                    </Route>
                    <Route path="*">
                        <NotFound />
                    </Route>
                </Switch>
            </Suspense>
        </Layout>
    );
}

export default App;
