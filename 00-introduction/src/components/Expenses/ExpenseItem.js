// import React, { useState } from "react";

import ExpenseDate from "./ExpenseDate";
import Card from "../UI/Card";
import "./ExpenseItem.css";

// Stateless component, presentational component or dumb component
const ExpenseItem = (props) => {
    // to allow update the component, use "useState()", once called, will rendered again the component
    // const [title, setTitle] = useState(props.title);
    //
    // only for demo purpouse
    // const clickHandler = () => {
    //     setTitle("Updated!");
    //     console.log("[ clicked ] ::: ", title);
    // };
    //
    // examples
    // <button onClick={() => console.log("clicked!")}>Change Title</button>
    // <button onClick={clickHandler}>Change Title</button>

    // console.log('[ ExpensiveItem evaluated by React ] ::: ');

    return (
        <li>
            <Card className="expense-item">
                <ExpenseDate date={props.date} />
                <div className="expense-item__description">
                    <h2>{props.title}</h2>
                    <div className="expense-item__price">${props.amount}</div>
                </div>
            </Card>
        </li>
    );
};

export default ExpenseItem;
