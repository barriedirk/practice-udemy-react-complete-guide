// import { useState, useEffect } from "react";

import Card from "./Card";
import useCounter from "../hooks/use-counter";

const BackwardCounter = () => {
    const counter = useCounter(false);

    // const [counter, setCounter] = useState(0);

    // useEffect(() => {
    //     const interval = setInterval(() => {
    //         setCounter((prevCounter) => prevCounter - 1);
    //     }, 1000);

    //     return () => clearInterval(interval);
    // }, []);

    return <Card>{counter}</Card>;
};

export default BackwardCounter;
