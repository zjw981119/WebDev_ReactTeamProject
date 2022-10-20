import React from "react";
import {useSelector} from "react-redux";

const HelloReduxExampleComponent = () => {
    // When the component loads, reducers pass their data in the function declared in useSelector.
    // retrieve the message from the hello sub state
    const message = useSelector((state) => state.hello.message);
    return(
        <h3>{message}</h3>
    );
};

export default HelloReduxExampleComponent;
