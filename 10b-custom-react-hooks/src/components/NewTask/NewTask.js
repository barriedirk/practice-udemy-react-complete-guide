// import { useState } from "react";

import Section from "../UI/Section";
import TaskForm from "./TaskForm";
import useHttp from "../../hooks/use-http";

const NewTask = (props) => {
    const { isLoading, error, sendRequest: sendTaskRequest } = useHttp();
    // const [isLoading, setIsLoading] = useState(false);
    // const [error, setError] = useState(null);
    //
    // const enterTaskHandler = async (taskText) => {
    //     setIsLoading(true);
    //     setError(null);
    //     try {
    //         const response = await fetch(
    //             "https://react-http-9332d-default-rtdb.firebaseio.com/tasks.json",
    //             {
    //                 method: "POST",
    //                 body: JSON.stringify({ text: taskText }),
    //                 headers: {
    //                     "Content-Type": "application/json",
    //                 },
    //             }
    //         );

    //         if (!response.ok) {
    //             throw new Error("Request failed!");
    //         }

    //         const data = await response.json();

    //         const generatedId = data.name; // firebase-specific => "name" contains generated id
    //         const createdTask = { id: generatedId, text: taskText };

    //         props.onAddTask(createdTask);
    //     } catch (err) {
    //         setError(err.message || "Something went wrong!");
    //     }
    //     setIsLoading(false);
    // };

    // using bind
    //
    const createTask = (taskText, taskData) => {
        const generatedId = taskData.name; // firebase-specific => "name" contains generated id
        const createdTask = { id: generatedId, text: taskText };

        props.onAddTask(createdTask);
    };

    const enterTaskHandler = async (taskText) => {
        // for scope taskText or use bind()
        //     see : https://academind.com/tutorials/function-bind-event-execution/
        //
        // const createTask = (taskData) => {
        //     const generatedId = taskData.name; // firebase-specific => "name" contains generated id
        //     const createdTask = { id: generatedId, text: taskText };
        //
        //     props.onAddTask(createdTask);
        // };
        //
        // sendTaskRequest(
        //     {
        //         url: "https://react-http-9332d-default-rtdb.firebaseio.com/tasks.json",
        //         method: "PUT",
        //         headers: {
        //             "Content-Type": "application/json",
        //         },
        //         body: { text: taskText },
        //     },
        //     createTask
        // );

        sendTaskRequest(
            {
                url: "https://react-http-9332d-default-rtdb.firebaseio.com/tasks.json",
                method: "PUT",
                headers: {
                    "Content-Type": "application/json",
                },
                body: { text: taskText },
            },
            createTask.bind(null, taskText)
        );
    };

    return (
        <Section>
            <TaskForm onEnterTask={enterTaskHandler} loading={isLoading} />
            {error && <p>{error}</p>}
        </Section>
    );
};

export default NewTask;
