import React, { Component } from "react";
import { Transition } from "react-transition-group";

import "./App.css";
import Modal from "./components/Modal/Modal";
import Backdrop from "./components/Backdrop/Backdrop";
import List from "./components/List/List";

class App extends Component {
    state = {
        modalIsOpen: false,
        showBlock: false,
    };

    showModal = () => {
        this.setState({ modalIsOpen: true });
    };

    closeModal = () => {
        this.setState({ modalIsOpen: false });
    };

    // in this case the modal is there in the dom, wity opacity 0
    //
    // render() {
    //     return (
    //         <div className="App">
    //             <h1>React Animations</h1>
    //             <Modal show={this.state.modalIsOpen} closed={this.closeModal} />
    //             <Backdrop show={this.state.modalIsOpen} />
    //             <button className="Button" onClick={this.showModal}>
    //                 Open Modal
    //             </button>
    //             <h3>Animating Lists</h3>
    //             <List />
    //         </div>
    //     );
    // }

    // render() {
    //     return (
    //         <div className="App">
    //             <h1>React Animations</h1>
    //             {this.state.modalIsOpen ? (
    //                 <Modal
    //                     show={this.state.modalIsOpen}
    //                     closed={this.closeModal}
    //                 />
    //             ) : null}
    //             {this.state.modalIsOpen ? (
    //                 <Backdrop show={this.state.modalIsOpen} />
    //             ) : null}
    //             <button className="Button" onClick={this.showModal}>
    //                 Open Modal
    //             </button>
    //             <h3>Animating Lists</h3>
    //             <List />
    //         </div>
    //     );
    // }

    // render() {
    //     return (
    //         <div className="App">
    //             <h1>React Animations</h1>
    //             <button
    //                 className="Button"
    //                 onClick={() => {
    //                     this.setState((prevState) => ({
    //                         showBlock: !prevState.showBlock,
    //                     }));
    //                 }}
    //             >
    //                 Toggle
    //             </button>
    //             <br />
    //             {this.state.showBlock ? (
    //                 <div
    //                     style={{
    //                         backgroundColor: "red",
    //                         width: 100,
    //                         height: 100,
    //                         margin: "auto",
    //                     }}
    //                 ></div>
    //             ) : null}
    //             {this.state.modalIsOpen ? (
    //                 <Modal
    //                     show={this.state.modalIsOpen}
    //                     closed={this.closeModal}
    //                 />
    //             ) : null}
    //             {this.state.modalIsOpen ? (
    //                 <Backdrop show={this.state.modalIsOpen} />
    //             ) : null}
    //             <button className="Button" onClick={this.showModal}>
    //                 Open Modal
    //             </button>
    //             <h3>Animating Lists</h3>
    //             <List />
    //         </div>
    //     );

    // render() {
    //     return (
    //         <div className="App">
    //             <h1>React Animations</h1>
    //             <button className="Button" onClick={this.showModal}>
    //                 Open Modal
    //             </button>
    //             <button
    //                 className="Button"
    //                 onClick={() => {
    //                     this.setState((prevState) => ({
    //                         showBlock: !prevState.showBlock,
    //                     }));
    //                 }}
    //             >
    //                 Toggle
    //             </button>
    //             <hr />
    //             <Transition in={this.state.showBlock} timeout={300}>
    //                 {(state) => <p>{state}</p>}
    //             </Transition>
    //             <hr />
    //             {/* It is still on the DOM */}
    //             <Transition in={this.state.showBlock} timeout={300}>
    //                 {(state) => (
    //                     <div
    //                         style={{
    //                             backgroundColor: "red",
    //                             width: 100,
    //                             height: 100,
    //                             margin: "auto",
    //                             transition: "opacity 1s ease-out",
    //                             opacity: state === "exited" ? 0 : 1,
    //                         }}
    //                     ></div>
    //                 )}
    //             </Transition>
    //             <hr />
    //             {/* With mountOnEnter and unmountOnExit, the div will be remove from DOM */}
    //             <Transition
    //                 mountOnEnter
    //                 unmountOnExit
    //                 in={this.state.showBlock}
    //                 timeout={300}
    //             >
    //                 {(state) => (
    //                     <div
    //                         style={{
    //                             backgroundColor: "green",
    //                             width: 100,
    //                             height: 100,
    //                             margin: "auto",
    //                             transition: "opacity 1s ease-out",
    //                             opacity: state === "exited" ? 0 : 1,
    //                         }}
    //                     ></div>
    //                 )}
    //             </Transition>
    //             <hr />
    //             <hr />
    //             {/* With mountOnEnter and unmountOnExit, the div will be remove from DOM */}
    //             <Transition
    //                 mountOnEnter
    //                 unmountOnExit
    //                 in={this.state.showBlock}
    //                 timeout={300}
    //             >
    //                 {(state) => (
    //                     <div
    //                         style={{
    //                             backgroundColor: "blue",
    //                             width: 100,
    //                             height: 100,
    //                             margin: "auto",
    //                             transition: "opacity 1s ease-out",
    //                             opacity: state === "exiting" ? 0 : 1,
    //                         }}
    //                     ></div>
    //                 )}
    //             </Transition>
    //             <hr />
    //             <Transition
    //                 mountOnEnter
    //                 unmountOnExit
    //                 in={this.state.modalIsOpen}
    //                 timeout={300}
    //             >
    //                 {(state) => <Modal show={state} closed={this.closeModal} />}
    //             </Transition>

    //             {this.state.modalIsOpen ? <Backdrop show /> : null}

    //             <h3>Animating Lists</h3>
    //             <List />
    //         </div>
    //     );
    // }

    render() {
        return (
            <div className="App">
                <h1>React Animations</h1>
                <button className="Button" onClick={this.showModal}>
                    Open Modal
                </button>
                <button
                    className="Button"
                    onClick={() => {
                        this.setState((prevState) => ({
                            showBlock: !prevState.showBlock,
                        }));
                    }}
                >
                    Toggle
                </button>
                <hr />
                <Transition in={this.state.showBlock} timeout={300}>
                    {(state) => <p>{state}</p>}
                </Transition>
                <hr />
                {/* It is still on the DOM */}
                <Transition in={this.state.showBlock} timeout={300}>
                    {(state) => (
                        <div
                            style={{
                                backgroundColor: "red",
                                width: 100,
                                height: 100,
                                margin: "auto",
                                transition: "opacity 1s ease-out",
                                opacity: state === "exited" ? 0 : 1,
                            }}
                        ></div>
                    )}
                </Transition>
                <hr />
                {/* With mountOnEnter and unmountOnExit, the div will be remove from DOM */}
                <Transition
                    mountOnEnter
                    unmountOnExit
                    in={this.state.showBlock}
                    timeout={300}
                    onEnter={() => console.log('onEnter :::')}
                    onEntering={() => console.log('onEntering :::')}
                    onEntered={() => console.log('onEntered :::')}
                    onExit={() => console.log('onExit :::')}
                    onExiting={() => console.log('onExiting :::')}
                    onExited={() => console.log('onExited :::')}
                >
                    {(state) => (
                        <div
                            style={{
                                backgroundColor: "green",
                                width: 100,
                                height: 100,
                                margin: "auto",
                                transition: "opacity 1s ease-out",
                                opacity: state === "exited" ? 0 : 1,
                            }}
                        ></div>
                    )}
                </Transition>
                <hr />
                <hr />
                {/* With mountOnEnter and unmountOnExit, the div will be remove from DOM */}
                <Transition
                    mountOnEnter
                    unmountOnExit
                    in={this.state.showBlock}
                    timeout={300}
                >
                    {(state) => (
                        <div
                            style={{
                                backgroundColor: "blue",
                                width: 100,
                                height: 100,
                                margin: "auto",
                                transition: "opacity 1s ease-out",
                                opacity: state === "exiting" ? 0 : 1,
                            }}
                        ></div>
                    )}
                </Transition>
                <hr />
                {/* <Transition
                    mountOnEnter
                    unmountOnExit
                    in={this.state.modalIsOpen}
                    timeout={300}
                >
                    {(state) => <Modal show={state} closed={this.closeModal} />}
                </Transition> */}
                <Modal show={this.state.modalIsOpen} closed={this.closeModal} />
                {this.state.modalIsOpen ? <Backdrop show /> : null}
                <h3>Animating Lists</h3>
                <List />
            </div>
        );
    }
}

export default App;
