import React from 'react'
import NavBar from '../Components/General_Components/NavBar'
import Footer from '../Components/General_Components/Footer'
import ReviewForm from '../Components/ProfileClient/ReviewsForm'
import ProfileClientContent from '../Components/ProfileClient/ProfileClientContent'
import AppointmentForm from '../Components/ProfileClient/AppointmentForm'

function ProfileClientPage() {
  return (
    <div>
      <NavBar />
      <ProfileClientContent />
      <AppointmentForm /><br /><br /><br /><br /><br />
      <ReviewForm />
      <Footer />
    </div>
  )
}

export default ProfileClientPage