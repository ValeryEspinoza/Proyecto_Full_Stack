import React, { useState, useRef } from 'react';
import "../../Styles/Components_Styles/AboutUs_C_Styles/JoinOurTeam.css";
import team from '../../Img/Components_Img/icon_team-22.png';
import emailjs from 'emailjs-com';
import Swal from 'sweetalert2';

function JoinOurTeam() {
    const [formData, setFormData] = useState({
        name: "",
        email: "",
        phone: "", 
        message: "",
    });

    const form = useRef();

    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData((prevState) => ({
            ...prevState,
            [name]: value,
        }));
    };

    const validateForm = () => {
        const { name, email, phone, message } = formData;

        //Validación de campos vacíos
        if (!name || !email || !phone || !message) {
            Swal.fire({
                title: "Error!",
                text: "All fields are required.",
                icon: "error",
            });
            return false;
        }

        //Validación de email
        const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        if (!emailRegex.test(email)) {
            Swal.fire({
                title: "Invalid email!",
                text: "Please enter a valid email address.",
                icon: "error",
            });
            return false;
        }

        // Validación de teléfono (solo números)
        const phoneRegex = /^[0-9]+$/;
        if (!phoneRegex.test(phone)) {
            Swal.fire({
                title: "Invalid phone!",
                text: "Phone number can only contain numbers.",
                icon: "error",
            });
            return false;
        }

        return true;
    };

    const handleSubmit = (e) => {
        e.preventDefault();

        if (!validateForm()) {
            return;
        }

        emailjs.sendForm('service_9of4zxx', 'template_vw6uh2k', form.current, 'ymYtdvW4jhBm2ACDK')
            .then(
                (response) => {
                    Swal.fire({
                        title: "Request sent!",
                        text: "We will review your request. Feel free to contact us with any questions.",
                        icon: "success"
                    });
                    setFormData({ name: "", email: "", phone: "", message: "" });
                },
                (error) => {
                    Swal.fire({
                        title: "There was an error!",
                        text: "Try again.",
                        icon: "error"
                    });
                    console.error(error);
                }
            );
    };

return (
<div className="join-our-team-container">
    <div className="contentTeam">
        <div className='textTeam'>
            <h1 className='join'>Join Monse Solutions</h1>
            <p className='parrafoJoin'>
                At Monse Solutions, we value innovation, quality and a passionate team.
                Share our vision of transforming spaces and creating unique experiences—join 
                us and make a difference!
            </p>
            <form ref={form} onSubmit={handleSubmit} className="join-form">
                <input className='inputFormTeam'
                    name="name"
                    value={formData.name}
                    onChange={handleChange}
                    placeholder="Your name"
                    required
                /> <br />
                <input
                    className='inputFormTeam'
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                    placeholder="Your email"
                    required
                /> <br />
                <input
                    className='inputFormTeam'
                    name="phone"
                    value={formData.phone}
                    onChange={handleChange}
                    placeholder="Your phone"
                    required
                /> <br />
                <textarea
                    className='textAreaForm'
                    name="message"
                    value={formData.message}
                    onChange={handleChange}
                    placeholder="About our company profile. What are your skills and abilities?"
                    required
                /> <br />
                <button className='btnJoinTeam' type="submit">Send</button>
            </form>
        </div>
    </div>
    <img src={team} alt="Team" className="team-image" />
</div>
);
}

export default JoinOurTeam;


