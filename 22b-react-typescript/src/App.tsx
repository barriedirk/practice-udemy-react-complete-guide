import { useState } from "react";

import "./App.css";

import Todos from "./components/Todos";
import NewTodo from "./components/NewTodo";

// import Todo from "./models/todo";

// function App() {
//     // const todos = [new Todo("Learn React"), new Todo("Learn TypeScript")];

//     // const [todos, setTodos] = useState([
//     //     new Todo("Learn React"),
//     //     new Todo("Learn TypeScript"),
//     // ]);

//     const [todos, setTodos] = useState<Todo[]>([]);

//     // return (
//     //     <div>
//     //         <Todos items={["Learn React", "Learn TypeScript"]} />
//     //     </div>
//     // );

//     const addTodoHandler = (todoText: string) => {
//         const newTodo = new Todo(todoText);

//         setTodos((preTodos) => {
//             return preTodos.concat(newTodo);
//         });
//     };

//     const removeTodoHandler = (todoId: string) => {
//         setTodos((preTodos) => {
//             return preTodos.filter((item) => item.id !== todoId);
//         });
//     };

//     return (
//         <div>
//             <NewTodo onAddTodo={addTodoHandler} />
//             <Todos items={todos} onRemoveTodo={removeTodoHandler} />
//         </div>
//     );
// }

// this version will use API Context ( store/todos-context.tsx )
import TodosContextProvider from "./store/todos-context";

function App() {
    return (
        <TodosContextProvider>
            <NewTodo />
            <Todos />
        </TodosContextProvider>
    );
}

export default App;
