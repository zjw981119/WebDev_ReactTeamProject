import React from "react";
import ConditionalOutputIfElse
    from "./conditional-output-if-else";
import ConditionalOutputInline
    from "./conditional-output-inline";
const ConditionalOutput = () => {
    return(
        <div>
            <ConditionalOutputIfElse/>
            <ConditionalOutputInline/>
        </div>
    );
};
export default ConditionalOutput;
