import { useState, useEffect, useCallback } from "react";
import { useParams } from "react-router";

import classes from "./Comments.module.css";
import NewCommentForm from "./NewCommentForm";
import LoadingSpinner from "../UI/LoadingSpinner";
import CommentsList from "./CommentsList";
import useHttp from "../../hooks/use-http";
import { getAllComments } from "../../lib/api";

const Comments = () => {
    const [isAddingComment, setIsAddingComment] = useState(false);
    const params = useParams();
    const { quoteId } = params;
    const {
        sendRequest,
        status,
        data: loadedComments,
        error,
    } = useHttp(getAllComments);

    useEffect(() => {
        sendRequest(quoteId);
    }, [quoteId, sendRequest]);

    const startAddCommentHandler = () => {
        setIsAddingComment(true);
    };

    const addedCommentHandler = useCallback(() => {
        sendRequest(quoteId);
    }, [sendRequest, quoteId]);

    let comments;
    if (status === "pending") {
        comments = (
            <div className="centered">
                <LoadingSpinner />
            </div>
        );
    }

    // console.log("[ status ] ::: ", status, loadedComments);
    if (status === "completed" && loadedComments && loadedComments.length > 0) {
        comments = <CommentsList comments={loadedComments} />;
    }

    if (
        status === "complete" &&
        (!loadedComments || loadedComments.length === 0)
    ) {
        comments = <p className="centered">No comments were added yet!</p>;
    }

    return (
        <section className={classes.comments}>
            <h2>User Comments</h2>
            {!isAddingComment && (
                <button className="btn" onClick={startAddCommentHandler}>
                    Add a Comment
                </button>
            )}
            {isAddingComment && (
                <NewCommentForm
                    quoteId={quoteId}
                    onAddedComment={addedCommentHandler}
                />
            )}
            {comments}
        </section>
    );
};

export default Comments;
