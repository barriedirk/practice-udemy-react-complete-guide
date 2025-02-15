import React, { useState } from "react";

import "./ExpenseForm.css";

const ExpenseForm = (props) => {
    // useState('');

    const [enteredTitle, setEnteredTitle] = useState("");
    const [enteredAmount, setEnteredAmount] = useState("");
    const [enteredDate, setEnteredDate] = useState("");

    // const [userInput, setUserInput] = useState({
    //     enteredTitle: "",
    //     enteredAmount: "",
    //     enteredDate: "",
    // });

    // <input type="text" onChange={titleChangeHandler} />

    // two-way binding
    // <input type="text" value={enteredTitle} onChange={titleChangeHandler} />

    const titleChangeHandler = (event) => {
        // console.log(
        //     "[ titleChangeHandler event.target.value ] ::: ",
        //     event.target.value
        // );

        // console.log("[ titleChangeHandler enteredTitle ] ::: ", enteredTitle);
        setEnteredTitle(event.target.value);

        // don't use this style if you need to preserve correctly the previous state
        // setUserInput({
        //     ...userInput,
        //     enteredTitle: event.target.value,
        // });

        // this is the correct pattern to preserve the prevState
        // setUserInput((prevState) => {
        //     return { ...prevState, enteredTitle: event.target.value };
        // });
    };

    const amountChangeHandler = (event) => {
        setEnteredAmount(event.target.value);

        // don't use this style if you need to preserve correctly the previous state
        // setUserInput({
        //     ...userInput,
        //     enteredAmount: event.target.value,
        // });
    };

    const dateChangeHandler = (event) => {
        setEnteredDate(event.target.value);

        // don't use this style if you need to preserve correctly the previous state
        // setUserInput({
        //     ...userInput,
        //     enteredDate: event.target.value,
        // });
    };

    const submitHandler = (event) => {
        event.preventDefault();

        const expenseData = {
            title: enteredTitle,
            amount: +enteredAmount,
            date: new Date(enteredDate),
        };

        // console.log("[ submitHandler expenseData ] ::: ", expenseData);

        // "lifting the state up"
        props.onSaveExpenseData(expenseData);

        setEnteredTitle("");
        setEnteredAmount("");
        setEnteredDate("");
    };

    return (
        <form onSubmit={submitHandler}>
            <div className="new-expense__controls">
                <div className="new-expense__control">
                    <label>Title</label>
                    <input
                        type="text"
                        value={enteredTitle}
                        onChange={titleChangeHandler}
                    />
                </div>
                <div className="new-expense__control">
                    <label>Amount</label>
                    <input
                        type="number"
                        min="0.01"
                        step="0.01"
                        value={enteredAmount}
                        onChange={amountChangeHandler}
                    />
                </div>
                <div className="new-expense__control">
                    <label>Date</label>
                    <input
                        type="date"
                        min="2019-01-01"
                        max="2022-12-31"
                        value={enteredDate}
                        onChange={dateChangeHandler}
                    />
                </div>
            </div>
            <div className="new-expense__actions">
                <button type="button" onClick={props.onCancel}>Cancel</button>
                <button type="submit">Add Expense</button>
            </div>
        </form>
    );
};

export default ExpenseForm;
