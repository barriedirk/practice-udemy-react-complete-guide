import React, { useState } from "react";

import { uniqueId } from './common/Functions';

import NewExpense from "./components/NewExpense/NewExpense";
import Expenses from "./components/Expenses/Expenses";


// note: the id will use as key for react
// because it's a unique identification criteria for every element.
const DUMMY_EXPENSES = [
    {
        id: uniqueId(),
        title: "Toilet Paper",
        amount: 94.12,
        date: new Date(2020, 7, 14),
    },
    {
        id: uniqueId(),
        title: "New TV",
        amount: 799.49,
        date: new Date(2021, 2, 12),
    },
    {
        id: uniqueId(),
        title: "Car Insurance",
        amount: 294.67,
        date: new Date(2021, 2, 28),
    },
    {
        id: uniqueId(),
        title: "New Desk (Wooden)",
        amount: 450,
        date: new Date(2021, 5, 12),
    },
];

// console.log('[ DUMMY_EXPENSES ] ::: ', DUMMY_EXPENSES);

const App = () => {
    const [expenses, setExpenses] = useState(DUMMY_EXPENSES);

    const addExpenseHander = (expense) => {
        // console.log("[ addExpenseHander expense ] ::: ", expense);
        setExpenses((prevExpenses) => [expense, ...prevExpenses]);
    };

    // example of how internally React convert a jsx into javascript
    // return React.createElement(
    //     "div",
    //     {},
    //     React.createElement("h2", {}, "Let's get started!"),
    //     React.createElement(Expenses, { items: expenses })
    // );

    return (
        <div>
            <NewExpense onAddExpense={addExpenseHander} />
            <Expenses items={expenses} />
        </div>
    );
};

export default App;
