import React from 'react'
import "../../Styles/Components_Styles/AboutUs_C_Styles/AboutUsForm.css"

function AboutUsForm() {
  return (
    <div className="about-us-container">

    <h1>About Us</h1>

    <section className="story-section">
        <h2>Our Story</h2>
        <p>Your About Us page is one of the first supporting pages you’ll likely design when building your website, regardless of the industry you’re in.</p>
        <p>It may go by different labels—About, Story, Mission—but these types of pages serve the same key purpose: to be the page for a brand to say, “This is who we are.”</p>
        <p>When a visitor wants to learn more about you or your business, the About page is what they’ll look for. Learn how to craft the perfect page for your business, with About Us page examples from successful brands to inspire you.</p>
    </section>

    <div className="main-container">
        <div className="column-one">
            <img className="image" src="src/Img/Components_Img/graphic-designers-meeting.jpg" alt="Design Meeting" />
        </div>

        <div className="column-two">
            <div className="mission-vision">
                <h2>Mission</h2>
                <p>Talk about why your brand exists, what makes you different, and the challenges you solve – beyond the obvious solution you sell.</p>
            </div>
            <div className="mission-vision">
                <h2>Vision</h2>
                <p>This is key for attracting talent, as well as prospective buyers who align with your objectives and value goals.</p>
            </div>
        </div>
    </div>

    <section className="comment-section">
        <h2>Comments</h2>
        <textarea className="comment-box" placeholder="Leave a comment..."></textarea>
        <button className="submit-comment">Submit</button>
    </section>

</div>
  )
}

export default AboutUsForm