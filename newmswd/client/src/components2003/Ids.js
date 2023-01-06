import React from "react";
import '../App.css';
import logo from './images/logo.jpg';
import Sai from './images/Sai.jpg';

function Ids(){
    return <div className="ex1">
                <img src={logo} align="left" style={{width:"100px",height:"100px"}}/>
                <h5>KL Deemed to be University</h5>
                <h6>Vaddeswaram,AndhraPradesh-522502</h6>
                <hr color="black"/>
                <img src={Sai} align="center" style={{width:"500px",height:"500px"}}/>
                <div style={{color:"black",fontFamily:"cursive"}}>
                    <h5>CH.Sai Charan</h5>
                    <h5>2100031680</h5>
                    <h5>CSE-H</h5>
                </div>
           </div>
    
}

export default Ids;