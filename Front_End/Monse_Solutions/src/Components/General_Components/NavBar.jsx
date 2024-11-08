import React from 'react'
import "../../Styles/Components_Styles/Genaral_C_Styles/NavBar.css"
import { Link } from 'react-router-dom'

export default function NavBar() {
  return (
<div className='bodyNavBar'>
    <nav className='ContenedorNav'>
        <img className='logoNavBar' src="src\Img\Components_Img\Logo_negro.png" alt="" />
        <div className='ItemsContent'>
              <Link to="/About"><p className='itemLinkNav'>About</p></Link>
            <Link to="/Contact"><p className='itemLinkNav'>Contact</p></Link>
            <Link to="/"><p className='itemLinkNav'>Home</p></Link>
            <Link to="/Login"><p className='itemLinkNav'>LogIn</p></Link>
        </div>
    </nav>
</div>
  )
}
