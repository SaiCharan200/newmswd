import React from "react";

export function Greet(props){
    console.log(props.name);
    return <div><h1>Hello {props.name}</h1><p>KLU</p>{props.children}</div>

}
// export const Greet = (props) => <h1>Welcome To Instagram</h1>   
//  export default Greet;   