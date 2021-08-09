import React, { useState } from "react";

import Card from "../UI/Card";
import ExpensesFilter from "./ExpensesFilter";
import ExpensesList from "./ExpensesList";
import ExpensesChart from "./ExpensesChart";
import "./Expenses.css";

// stateful or intelligent component
const Expenses = (props) => {
    const [filteredYear, setFilteredYear] = useState("2020");

    const filterChangeHandler = (selectedYear) => {
        // console.log("[ filterChangeHandler ] ::: ", selectedYear);
        setFilteredYear(selectedYear);
    };

    // console.log('[ props.items ] ::: ', props.items);
    const filteredExpenses = props.items.filter((expense) => {
        return expense.date.getFullYear().toString() === filteredYear;
    });

    return (
        <div>
            <Card className="expenses">
                <ExpensesFilter
                    selected={filteredYear}
                    onChangeFilter={filterChangeHandler}
                />
                <ExpensesChart expenses={filteredExpenses} />
                <ExpensesList items={filteredExpenses} />
            </Card>
        </div>
    );

    // Conditional Content
    //
    // {filteredExpenses.length === 0 && <p>No expenses found.</p>}
    // {filteredExpenses.length > 0 &&
    //     filteredExpenses.map((expense) => (
    //         <ExpenseItem
    //             key={expense.id}
    //             title={expense.title}
    //             amount={expense.amount}
    //             date={expense.date}
    //         />
    //     ))}

    // Conditional Content
    // ternary
    // {
    //     // Dynamic expression
    //     filteredExpenses.length === 0 ? (
    //         <p>No expenses found.</p>
    //     ) : (
    //         filteredExpenses.map((expense) => (
    //             <ExpenseItem
    //                 key={expense.id}
    //                 title={expense.title}
    //                 amount={expense.amount}
    //                 date={expense.date}
    //             />
    //         ))
    //     )
    // }

    // Examples
    //
    // 1:
    // {[<Card></Card>]}
    //
    // 2:
    // <ExpenseItem
    //     title={props.items[0].title}
    //     amount={props.items[0].amount}
    //     date={props.items[0].date}
    // ></ExpenseItem>
    // <ExpenseItem
    //     title={props.items[1].title}
    //     amount={props.items[1].amount}
    //     date={props.items[1].date}
    // ></ExpenseItem>
    // <ExpenseItem
    //     title={props.items[2].title}
    //     amount={props.items[2].amount}
    //     date={props.items[2].date}
    // ></ExpenseItem>
    // <ExpenseItem
    //     title={props.items[3].title}
    //     amount={props.items[3].amount}
    //     date={props.items[3].date}
    // ></ExpenseItem>
};

export default Expenses;
