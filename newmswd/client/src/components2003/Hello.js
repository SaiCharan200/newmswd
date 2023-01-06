import React, {Component} from "react";

export class Hello extends Component{
    render(props){
        return <h1>This is a Class Component of {this.props.name}</h1> 
    }

}
//  export default Hello; 