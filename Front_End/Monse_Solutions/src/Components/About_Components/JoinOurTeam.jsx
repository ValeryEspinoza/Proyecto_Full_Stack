import React, { useState, useRef } from 'react';
import "../../Styles/Components_Styles/AboutUs_C_Styles/JoinOurTeam.css";
import team from '../../Img/Components_Img/icon_team-22.png';
import FormContact from './FormContact';



function JoinOurTeam() {


return (
<div className="join-our-team-container">
<div className="contentTeam">
    <div className='textTeam'>
        <h1 className='join'>Join Monse Solutions!</h1>
        <p className='parrafoJoin'>
            At Monse Solutions, we value innovation, quality and a passionate team.
            Share our vision of transforming spaces and creating unique experiences—join 
            us and make a difference!
        </p>
        
        <FormContact />
    </div>
</div>
<img src={team} alt="Team" className="team-image" />
</div>
);
}

export default JoinOurTeam;

