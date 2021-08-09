import React, { useRef } from "react";

import classes from "./NewTodo.module.css";

const NewTodo: React.FC<{ onAddTodo: (text: string) => void }> = (props) => {
    const todoTextInputRef = useRef<HTMLInputElement>(null);

    const submitHandler = (event: React.FormEvent) => {
        event.preventDefault();

        // ?. the value can be not set
        // const enteredText = todoTextInputRef.current?.value; // string or undefined
        const enteredText = todoTextInputRef.current!.value; // only string

        if (enteredText.trim().length === 0) {
            // throw an error
            return;
        }

        props.onAddTodo(enteredText);
    };

    return (
        <form onSubmit={submitHandler} className={classes.form}>
            <label htmlFor="text">Todo text</label>
            <input ref={todoTextInputRef} type="text" id="text" />
            <button>Add Todo</button>
        </form>
    );
};

export default NewTodo;
