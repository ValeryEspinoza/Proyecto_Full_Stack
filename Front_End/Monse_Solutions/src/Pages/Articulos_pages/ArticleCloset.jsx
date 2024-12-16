import React from 'react'
import NavBar from '../../Components/General_Components/NavBar'
import Footer from '../../Components/General_Components/Footer'
import ArticleCloset from '../../Components/Articles_Components/ArticleCloset'

function ArticleClosetPage() {
  return (
    <div>
      <NavBar />
      <ArticleCloset />
      <Footer />
    </div>
  )
}

export default ArticleClosetPage