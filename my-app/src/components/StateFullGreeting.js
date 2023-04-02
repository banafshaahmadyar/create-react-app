import React from "react";

class StateFullGreeting extends React.Component{
    render (){
        return <h1>Hello {this.props.greeting} {this.props.name} {this.props.age}</h1>
    }

}

export default StateFullGreeting;       