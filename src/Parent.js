import React from "react";
import Child from "./Child";

const Parent = () => {

    const data = "Parent: John";
    return (

        <div>
            <h1>Parent Component</h1>
            <Child data={data} />
        </div>
    );

    }

    export default Parent;