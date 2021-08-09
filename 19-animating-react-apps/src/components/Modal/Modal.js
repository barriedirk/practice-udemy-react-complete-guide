import React from "react";
import CSSTransition from "react-transition-group/CSSTransition";

import "./Modal.css";

const animationTiming = {
    enter: 400,
    exit: 1000,
};

// const modal = (props) => {
//     console.log("[ props ] ::: ", props);

//     // fade-slider =>
//     //    fade-slider-enter => fade-slider-enter-active
//     //    fade-slider-exit => fade-slider-exit-active
//     return (
//         <CSSTransition
//             mountOnEnter
//             unmountOnExit
//             in={props.show}
//             timeout={animationTiming}
//             classNames="fade-slider"
//         >
//             <div className="Modal">
//                 <h1>A Modal</h1>
//                 <button className="Button" onClick={props.closed}>
//                     Dismiss
//                 </button>
//             </div>
//         </CSSTransition>
//     );
// };

const modal = (props) => {
    console.log("[ props ] ::: ", props);

    return (
        <CSSTransition
            mountOnEnter
            unmountOnExit
            in={props.show}
            timeout={animationTiming}
            classNames={{
                enter: "",
                enterActive: "ModalOpen",
                exit: "",
                exitActive: "ModalClose",
                appear: "",
                appearActive: "",
            }}
        >
            <div className="Modal">
                <h1>A Modal</h1>
                <button className="Button" onClick={props.closed}>
                    Dismiss
                </button>
            </div>
        </CSSTransition>
    );
};
export default modal;
