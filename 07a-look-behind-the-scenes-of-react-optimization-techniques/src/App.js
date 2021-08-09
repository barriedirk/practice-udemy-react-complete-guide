import React, { useState, useCallback } from "react";
import Button from "./components/UI/Button/Button";
import DemoOutput from "./components/Demo/DemoOutput";
import "./App.css";

// note, App() is a normal function, is not called by React
// for that reason, always rendered the button althoug we
// use "React.memo(Button);", see comment about toggleParagraphHandler
function App() {
    const [showParagraph, setShowParagraph] = useState(false);
    const [allowToggle, setAllowToggle] = useState(false);

    console.log("[ App RUNNING ] ::: ");

    // toggleParagraphHandler function is always is created in App() and for that
    // reason the Button is rendered
    // to fix this, we use useCallBack
    // const toggleParagraphHandler = (event) => {
    //     // setshowParagraph(!showParagraph);
    //
    //     setshowParagraph((prevShowParagraph) => !prevShowParagraph);
    // };

    const toggleParagraphHandler = useCallback(
        (event) => {
            // setshowParagraph(!showParagraph);

            // if we don't use dependencies with allowToggle, the allowToggle will not be recreated and
            // only contains the first value when the function is created ( see closures)
            // https://developer.mozilla.org/en-US/docs/Web/JavaScript/Closures
            if (allowToggle) {
                setShowParagraph((prevShowParagraph) => !prevShowParagraph);
            }
        },
        [allowToggle]
    );

    const allowToggleHandler = () => {
        setAllowToggle(true);
    };

    // return (
    //     <div className="app">
    //         <h1>Hi there!</h1>
    //         {showParagraph && <p>This is new!</p>}
    //         <Button onClick={toggleParagraphHandler}>Toggle Paragraph!</Button>
    //     </div>
    // );

    // return (
    //     <div className="app">
    //         <h1>Hi there!</h1>
    //         <DemoOutput show={false} />
    //         <Button onClick={toggleParagraphHandler}>Toggle Paragraph!</Button>
    //     </div>
    // );

    return (
        <div className="app">
            <h1>Hi there!</h1>
            <DemoOutput show={showParagraph} />
            <Button onClick={allowToggleHandler}>Allow Toggling</Button>
            <Button onClick={toggleParagraphHandler}>Toggle Paragraph!</Button>
        </div>
    );
}

export default App;
