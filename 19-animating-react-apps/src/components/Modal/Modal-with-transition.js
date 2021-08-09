import React from "react";
import { Transition } from "react-transition-group";

import "./Modal.css";

// const modal = (props) => (
//     <div className="Modal">
//         <h1>A Modal</h1>
//         <button className="Button" onClick={props.closed}>
//             Dismiss
//         </button>
//     </div>
// );

// const modal = (props) => {
//     // props.show was boolean, we change the code to use <Transition>{State =>}
//
//     const cssClasses = ["Modal", props.show ? "ModalOpen" : "ModalClosed"];
//
//     return (
//         <div className={cssClasses.join(" ")}>
//             <h1>A Modal</h1>
//             <button className="Button" onClick={props.closed}>
//                 Dismiss
//             </button>
//         </div>
//     );
// };

// const modal = (props) => {
//     const cssClasses = [
//         "Modal",
//         props.show === "entering"
//             ? "ModalOpen"
//             : props.show === "exiting"
//             ? "ModalClosed"
//             : null,
//     ];

//     return (
//         <div className={cssClasses.join(" ")}>
//             <h1>A Modal</h1>
//             <button className="Button" onClick={props.closed}>
//                 Dismiss
//             </button>
//         </div>
//     );
// };

const animationTiming = {
    enter: 400,
    exit: 1000,
};

const modal = (props) => {
    console.log("[ props ] ::: ", props);

    return (
        <Transition mountOnEnter unmountOnExit in={props.show} timeout={animationTiming}>
            {(state) => {
                const cssClasses = [
                    "Modal",
                    state === "entering"
                        ? "ModalOpen"
                        : state === "exiting"
                        ? "ModalClosed"
                        : null,
                ];

                console.log("[ state ] ::: ", state);
                return (
                    <div className={cssClasses.join(" ")}>
                        <h1>A Modal</h1>
                        <button className="Button" onClick={props.closed}>
                            Dismiss
                        </button>
                    </div>
                );
            }}
        </Transition>
    );
};
export default modal;
