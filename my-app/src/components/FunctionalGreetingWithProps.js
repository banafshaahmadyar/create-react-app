import React from "react";
// arrow function
const FunctionalGreetingWithProps =(props)=> {
    console.log(props);
    return <h1>Hello,{props.greeting} {props.name} {props.age}</h1>
}

export default FunctionalGreetingWithProps;