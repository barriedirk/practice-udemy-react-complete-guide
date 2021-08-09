import { useState, useEffect } from "react";

// need start to "use..." for react to understand that it's a
// react custom hook
// remember, it's a function
// const useCounter = (counterUpdateFn) => {
const useCounter = (forwards = true) => {
    const [counter, setCounter] = useState(0);

    useEffect(() => {
        const interval = setInterval(() => {
            // setCounter((prevCounter) => prevCounter + 1);
            // setCounter((prevCounter) => counterUpdateFn());
            if (forwards) {
                setCounter((prevCounter) => prevCounter + 1);
            } else {
                setCounter((prevCounter) => prevCounter - 1);
            }
        }, 1000);

        return () => clearInterval(interval);
    }, [forwards]);

    // any value you need to return
    return counter;
};

export default useCounter;
