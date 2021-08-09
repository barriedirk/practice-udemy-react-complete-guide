import React, { useState } from "react";

import { uniqueId } from "../../common/Functions";

import ExpenseForm from "./ExpenseForm";
import "./NewExpense.css";

const NewExpenses = (props) => {
    const [isEditing, setIsEditing] = useState(false);

    const saveExpenseDataHandler = (enteredExpenseData) => {
        const expenseData = {
            ...enteredExpenseData,
            // only for demo
            // id: Math.random().toString(),
            id: uniqueId(),
        };

        // console.log("[ expenseData ] ::: ", expenseData);
        // "lifting the state up"
        props.onAddExpense(expenseData);
        setIsEditing(false);
    };

    const startEditingHandler = () => {
        setIsEditing(true);
    };

    const stopEditingHandler = () => {
        setIsEditing(false);
    };

    return (
        <div className="new-expense">
            {!isEditing && (
                <button onClick={startEditingHandler}>Add New Expense</button>
            )}
            {isEditing && (
                <ExpenseForm
                    onSaveExpenseData={saveExpenseDataHandler}
                    onCancel={stopEditingHandler}
                />
            )}
        </div>
    );
};

export default NewExpenses;
