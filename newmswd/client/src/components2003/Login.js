import '../App.css'
import React from "react";
import axios from 'axios';

function Login(){
    function Handle(event){
        event.preventDefault();
        const data = new FormData(event.currentTarget);
        const un = data.get("t1");
        const pw = data.get("pw");
        console.log(un+" --- "+pw);



      axios.post("http://localhost:8081/insert1", {
      fn1: data.get('firstName'),
      password: data.get('password')
    }).then((response) => {
      console.log("Data successfully passed");
    })
      }

return      (<div className='App-body'>     
               <form onClick={Handle}>
                <center><h3 style={{border:"2px solid black"}}>LOGIN HERE</h3></center>
                Username:<input type="text" name="t1"/><br/>
                Password:<input typr="password" name="pw"/><br/>
                <center><input type="submit" value="login"/></center>
              </form>
              </div>
                
            )
}

export default Login;