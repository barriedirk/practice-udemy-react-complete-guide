import { useState, useCallback } from "react";

// const useHttp = (applyData) => {
const useHttp = () => {
    const [isLoading, setIsLoading] = useState(false);
    const [error, setError] = useState(null);

    // const sendRequest = async () => {
    //     setIsLoading(true);
    //     setError(null);

    //     try {
    //         const response = await fetch(requestConfig.url, {
    //             method: requestConfig.method ? requestConfig.method : "GET",
    //             headers: requestConfig.headers ? requestConfig.headers : {},
    //             body: requestConfig.body
    //                 ? JSON.stringify(requestConfig.body)
    //                 : null,
    //         });

    //         if (!response.ok) {
    //             throw new Error("Request failed!");
    //         }

    //         const data = await response.json();

    //         applyData(data);
    //     } catch (err) {
    //         setError(err.message || "Something went wrong!");
    //     }
    //     setIsLoading(false);
    // };

    const sendRequest = useCallback(
        async (requestConfig, applyData) => {
            setIsLoading(true);
            setError(null);

            // console.log('[ requestConfig, applyData ] ::: ', requestConfig, applyData);

            try {
                const response = await fetch(requestConfig.url, {
                    method: requestConfig.method ? requestConfig.method : "GET",
                    headers: requestConfig.headers ? requestConfig.headers : {},
                    body: requestConfig.body
                        ? JSON.stringify(requestConfig.body)
                        : null,
                });

                if (!response.ok) {
                    throw new Error("Request failed!");
                }

                const data = await response.json();

                console.log('[ data ] ::: ', data);
                applyData(data);
            } catch (err) {
                setError(err.message || "Something went wrong!");
            }
            setIsLoading(false);
        }, []
        //}, [applyData]
    );

    // return {
    //     isLoading: isLoading,
    //     error: error,
    //     sendRequest: sendRequest,
    // };

    return {
        isLoading,
        error,
        sendRequest,
    };
};

export default useHttp;
