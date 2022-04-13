import React from 'react'
import {useNavigate} from 'react-router-dom';




function Home() {

    let navigate = useNavigate();
    return (

        <div className='form-inner'>



<h2>TeamPro</h2>
<button className='buton' onClick={() => {
    navigate("/Register");
    }}>
   {"Sign up"}  
    </button>

    <button className='buton' onClick={() => {
    navigate("/Login");
    }}>
   {"Sign in"}  
    </button>
        </div>




    );


}
export default Home;