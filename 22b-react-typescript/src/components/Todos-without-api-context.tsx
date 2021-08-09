import React from "react";

import TodoItem from "./TodoItem";
import Todo from "../models/todo";
import classes from "./Todos.module.css";
// the children must be explicit, to fix the type we use generic React.FC
// function Todos(props: {
//     items: string[], children: React.ReactNode
// }) {
//     return (
//         <ul>
//             {}
//         </ul>
//     );
// }

// const Todos: React.FC<{ items: string[] }> = (props) => {
//     /*
//     Note:
//     props: {
//         children?:
//         items:string[]
//     }
//     */

const Todos: React.FC<{ items: Todo[]; onRemoveTodo: (id: string) => void }> = (
    props
) => {
    /*
    Note:
    props: {
        children?: 
        items:string[]
    }
    */

    return (
        <ul className={classes.todos}>
            {props.items.map((item) => (
                <TodoItem
                    key={item.id}
                    text={item.text}
                    onRemoveTodo={props.onRemoveTodo.bind(null, item.id)}
                />
            ))}
        </ul>
    );
};

export default Todos;
