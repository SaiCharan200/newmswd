import {Link} from 'react-router-dom'

function Home(){
    return(
<div>
    
    <center>
        <Link to="cse"><button class="btn1">CSE</button></Link>
       
        <Link to="ece"><button class="btn2">ECE</button></Link>
    
        <Link to="me"><button class="btn3">ME</button></Link>
  
        <Link to="bt"><button class="btn4">BT</button></Link>

        </center>

</div>
    );
}

export default Home;