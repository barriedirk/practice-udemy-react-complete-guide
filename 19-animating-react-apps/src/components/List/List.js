import React, { Component } from "react";
import TransitionGroup from "react-transition-group/TransitionGroup";
import CSSTransitionGroup from "react-transition-group/CSSTransition";

import "./List.css";

class List extends Component {
    state = {
        items: [1, 2, 3],
    };

    addItemHandler = () => {
        this.setState((prevState) => {
            return {
                items: prevState.items.concat(prevState.items.length + 1),
            };
        });
    };

    removeItemHandler = (selIndex) => {
        this.setState((prevState) => {
            return {
                items: prevState.items.filter(
                    (item, index) => index !== selIndex
                ),
            };
        });
    };

    render() {
        // const listItems = this.state.items.map((item, index) => (
        //     <li
        //         key={index}
        //         className="ListItem"
        //         onClick={() => this.removeItemHandler(index)}
        //     >
        //         {item}
        //     </li>
        // ));

        const listItems = this.state.items.map((item, index) => (
            <CSSTransitionGroup key={index} classNames="fade" timeout={300}>
                <li
                    className="ListItem"
                    onClick={() => this.removeItemHandler(index)}
                >
                    {item}
                </li>
            </CSSTransitionGroup>
        ));

        // return (
        //     <div>
        //         <button className="Button" onClick={this.addItemHandler}>
        //             Add Item
        //         </button>
        //         <p>Click Item to Remove.</p>
        //         <ul className="List">{listItems}</ul>
        //     </div>
        // );

        return (
            <div>
                <button className="Button" onClick={this.addItemHandler}>
                    Add Item
                </button>
                <p>Click Item to Remove.</p>
                <TransitionGroup component="ul" className="List">
                    {listItems}
                </TransitionGroup>
            </div>
        );
    }
}

export default List;
