import React, { Component } from 'react'

 class Message extends Component {
    constructor(props){
    super(props);
    this.state={
        message: 'HOME PAGE'
    }
}

loginMessage(){
    this.setState({
        message: 'Welcome to CODE BUDDIES'
    })
}

logoutMessage(){
    this.setState({
        message: 'Thanks for visiting my channel,Happy Coding!'
    })
}


  render() {
    return (
      <div>
        <h1>{this.state.message}</h1>
      <button onClick={() => this.loginMessage()}>LOGIN</button>
      <button onClick={() => this.logoutMessage()}>LOGOUT</button>
      </div>
    )
  }
}

export default Message