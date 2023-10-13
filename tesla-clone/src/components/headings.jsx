import React from "react";

function Heading(props)
{
    return (
        <>
        <h1>{props.name}</h1>
        <h3>{props.price}</h3>
        <h4>{props.gas}</h4>
        </>
    );
}

export default Heading;