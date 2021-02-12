import React, { useState } from 'react';


const useLocalStorage = (key, initialValue) => {
    //1. when initializing our state, see if our data exists in local storage
    //2. if data exists on local storage, make that our initial state value
    //3. if data not exist on local storage, make our state into initial state and save initial
    //state to local storage
    //4. when setting data, save data to state and save data to localStorage
    const [storedState, setStoredState] = useState(() => {
        if(localStorage.getItem(key)) {
            return JSON.parse(localStorage.getItem(key));
        } else {
            localStorage.setItem(key, initialValue);
            return initialValue;
        }
    });

    const setState = value => {
        setStoredState(value);
        localStorage.setItem(key, JSON.stringify(value))
    }





    return (
        [storedState, setState]
    );
}

export default useLocalStorage;