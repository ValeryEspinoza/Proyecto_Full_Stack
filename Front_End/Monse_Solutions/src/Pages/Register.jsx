import React from 'react'
import RegisterForm from '../Components/Register_Components/RegisterForm'
import "../Styles/Pages_Styles/Register.css"
import AdminNavBar from '../Components/Admin_Components/AdminNavBar'

function Register() {
  return (
    <div className='ContenedorP'>
      <AdminNavBar />
    <RegisterForm />
    </div>
  )
}

export default Register