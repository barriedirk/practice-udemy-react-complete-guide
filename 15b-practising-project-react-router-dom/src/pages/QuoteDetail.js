import { useEffect } from "react";

import { Fragment } from "react";
import { useParams, Route, Link, useRouteMatch } from "react-router-dom";
import HighlightedQuote from "../components/quotes/HighlightedQuote";
import useHttp from "../hooks/use-http";
import { getSingleQuote } from "../lib/api";

import Comments from "../components/comments/Comments";
import LoadingSpinner from "../components/UI/LoadingSpinner";

// import { DUMMY_QUOTES } from "../shared/dummyQuotes";

const QuoteDetail = () => {
    const match = useRouteMatch();
    const params = useParams();

    const { quoteId } = params;

    const {
        sendRequest,
        status,
        data: loadedQuote,
        error,
    } = useHttp(getSingleQuote, true);

    // console.log('[ match ] ::: ', match);

    useEffect(() => {
        sendRequest(quoteId);
    }, [quoteId, sendRequest]);

    if (status === "pending") {
        return (
            <div className="centered">
                <LoadingSpinner />
            </div>
        );
    }

    if (error) {
        return <div className="centered">{error}</div>;
    }

    // if (!loadedQuote) {
    if (!loadedQuote.text) {
        return <p>No quote found!</p>;
    }

    // const quote = DUMMY_QUOTES.find((quote) => quote.id === params.quoteId);
    //
    // if (!quote) {
    //     return <p>No quote found!</p>;
    // }

    // note, since we're defining a route here, not a link, we can also set
    //   path='quotes/:quoteId/comments
    //
    // return (
    //     <Fragment>
    //         <HighlightedQuote text={quote.text} author={quote.author} />
    //         <div className="centered">
    //             <Link
    //                 className="btn--flat"
    //                 to={`/quotes/${params.quoteId}/comments`}
    //             >
    //                 {" "}
    //                 Load Comments
    //             </Link>
    //         </div>
    //         <Route path={`/quotes/${params.quoteId}/comments`}>
    //             <Comments />
    //         </Route>
    //     </Fragment>
    // );

    // return (
    //     <Fragment>
    //         <HighlightedQuote text={quote.text} author={quote.author} />
    //         <Route path={`/quotes/${params.quoteId}`} exact>
    //             <div className="centered">
    //                 <Link
    //                     className="btn--flat"
    //                     to={`/quotes/${params.quoteId}/comments`}
    //                 >
    //                     Load Comments
    //                 </Link>
    //             </div>
    //         </Route>
    //         <Route path={`/quotes/${params.quoteId}/comments`}>
    //             <Comments />
    //         </Route>
    //     </Fragment>
    // );

    // return (
    //     <Fragment>
    //         <HighlightedQuote text={quote.text} author={quote.author} />
    //         <Route path={`/quotes/${params.quoteId}`} exact>
    //             <div className="centered">
    //                 <Link className="btn--flat" to={`${match.url}/comments`}>
    //                     Load Comments
    //                 </Link>
    //             </div>
    //         </Route>
    //         <Route path={`${match.path}/comments`}>
    //             <Comments />
    //         </Route>
    //     </Fragment>
    // );

    return (
        <Fragment>
            <HighlightedQuote
                text={loadedQuote.text}
                author={loadedQuote.author}
            />
            <Route path={`/quotes/${params.quoteId}`} exact>
                <div className="centered">
                    <Link className="btn--flat" to={`${match.url}/comments`}>
                        Load Comments
                    </Link>
                </div>
            </Route>
            <Route path={`${match.path}/comments`}>
                <Comments />
            </Route>
        </Fragment>
    );
};

export default QuoteDetail;
