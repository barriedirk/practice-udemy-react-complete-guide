import React from "react";

import MyParagraph from "./MyParagraph";

const DemoOutput = (props) => {
    console.log("[ DemoOutput RUNNING ] ::: ");

    return <MyParagraph>{props.show ? "This is new!" : ""}</MyParagraph>;
};

/*
React. memo is a higher order component. 
If your component renders the same result given the same props, 
you can wrap it in a call to React. memo for a performance boost in 
some cases by memoizing the result. 
This means that React will skip rendering the component, 
and reuse the last rendered result.
*/

export default React.memo(DemoOutput);
