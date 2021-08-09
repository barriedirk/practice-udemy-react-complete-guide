// it's like an redux implementation

import { useState, useEffect } from "react";

// share data
let globalState = {};
let listeners = [];
let actions = {};

// export const useStore = () => {
//
// to avoid rendenring all the components when there is a change in any react component with useStore
// and there is a change,in one of them
// we use shouldListen
export const useStore = (shouldListen = true) => {
    const setState = useState(globalState)[1];

    const dispatch = (actionIdentifier, payload) => {
        const newState = actions[actionIdentifier](globalState, payload);

        globalState = { ...globalState, ...newState };

        for (const listener of listeners) {
            listener(globalState);
        }
    };

    // useEffect(() => {
    //     // mount
    //     listeners.push(setState);

    //     // unmount
    //     return () => {
    //         listeners = listeners.filter((li) => li !== setState);
    //     };
    // }, [setState]);

    useEffect(() => {
        // mount
        if (shouldListen) {
            listeners.push(setState);
        }

        // unmount
        return () => {
            if (shouldListen) {
                listeners = listeners.filter((li) => li !== setState);
            }
        };
    }, [setState, shouldListen]);

    return [globalState, dispatch];
};

export const initStore = (userActions, initialState) => {
    if (initialState) {
        globalState = { ...globalState, ...initialState };
    }

    actions = { ...actions, ...userActions };
};
