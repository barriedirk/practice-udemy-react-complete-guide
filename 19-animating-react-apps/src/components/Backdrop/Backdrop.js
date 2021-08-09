import React from "react";

import "./Backdrop.css";

// const Backdrop = (props) => (<div className="Backdrop"></div>);

const Backdrop = (props) => {
    const cssClasses = [
        "Backdrop",
        props.show ? "BackdropOpen" : "BackdropClosed",
    ];

    return <div className={cssClasses.join(" ")}></div>;
};

export default Backdrop;
