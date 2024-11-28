import React from 'react'
import '../../Styles/Components_Styles/Home_C_Styles/Connect_with_us.css'
import { Link } from 'react-router-dom';

function Connect_with_us() {
  return (
    <div className='Información'>
      <br /><br /><br /><br />
      <h1 className='TextoPrincipal'>Connect Whith Us</h1>
      <h4 className='Texto'> And unlock a personalized journey to the perfect solution for you!</h4> 
      <Link to="/Contact"><button className='BotonContactenos' >Contact</button></Link> 

      <br /><br /><br /><br />
    </div>
  )
}

export default Connect_with_us