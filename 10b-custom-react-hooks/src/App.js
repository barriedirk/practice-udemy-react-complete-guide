import React, { useEffect, useState, useCallback } from "react";

import Tasks from "./components/Tasks/Tasks";
import NewTask from "./components/NewTask/NewTask";
import useHttp from "./hooks/use-http";

function App() {
    // const [isLoading, setIsLoading] = useState(false);
    // const [error, setError] = useState(null);
    const [tasks, setTasks] = useState([]);

    // to avoid use useCallback, we can add the function inside of useEffects
    // const transformTasks = useCallback((tasksObj) => {
    //     const loadedTasks = [];
    //
    //     for (const taskKey in tasksObj) {
    //         loadedTasks.push({ id: taskKey, text: data[taskKey].text });
    //     }
    //
    //     setTasks(loadedTasks);
    // }, []);
    //
    // const {
    //     isLoading,
    //     error,
    //     sendRequest: fetchTasks,
    // } = useHttp(transformTasks);

    const { isLoading, error, sendRequest: fetchTasks } = useHttp();

    // const fetchTasks = async (taskText) => {
    //     setIsLoading(true);
    //     setError(null);
    //     try {
    //         const response = await fetch(
    //             "https://react-http-9332d-default-rtdb.firebaseio.com/tasks.json"
    //         );
    //
    //         if (!response.ok) {
    //             throw new Error("Request failed!");
    //         }
    //
    //         const data = await response.json();
    //
    //         const loadedTasks = [];
    //
    //         for (const taskKey in data) {
    //             loadedTasks.push({ id: taskKey, text: data[taskKey].text });
    //         }
    //
    //         setTasks(loadedTasks);
    //     } catch (err) {
    //         setError(err.message || "Something went wrong!");
    //     }
    //     setIsLoading(false);
    // };
    //
    // useEffect(() => {
    //     fetchTasks();
    // }, []);

    // this will create a infinite loop (because the useHttp will
    // rendered/recreate internally )
    // to avoid this, we need to use useCallback in useHttp
    useEffect(() => {
        const transformTasks = (tasksObj) => {
            // console.log("[ transformTasks ] ::: ", tasksObj);
            const loadedTasks = [];

            for (const taskKey in tasksObj) {
                loadedTasks.push({ id: taskKey, text: tasksObj[taskKey].text });
            }
            // console.log("[ loadedTasks ] ::: ", loadedTasks);

            setTasks(loadedTasks);
        };

        fetchTasks(
            {
                url: "https://react-http-9332d-default-rtdb.firebaseio.com/tasks.json",
            },
            transformTasks
        );
    }, [fetchTasks]);

    const taskAddHandler = (task) => {
        setTasks((prevTasks) => prevTasks.concat(task));
    };

    return (
        <React.Fragment>
            <NewTask onAddTask={taskAddHandler} />
            <Tasks
                items={tasks}
                loading={isLoading}
                error={error}
                onFetch={fetchTasks}
            />
        </React.Fragment>
    );
}

export default App;
