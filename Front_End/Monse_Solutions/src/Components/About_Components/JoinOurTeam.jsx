import React, { useState, useRef } from 'react';
import "../../Styles/Components_Styles/AboutUs_C_Styles/JoinOurTeam.css";
import team from '../../Img/Components_Img/icon_team-22.png';
import FormContact from './FormContact';
import { useTranslation } from 'react-i18next'; // Importa el hook useTranslation
import '../../config/i18n'



function JoinOurTeam() {
    const { t, i18n } = useTranslation();

    const changeLanguage = (lang) => {
      i18n.changeLanguage(lang); // Cambia el idioma dinámicamente
    };

return (
<div className="join-our-team-container">
<div className="contentTeam">
    <div className='textTeam'>
        <h1 className='join'>{t('join')}</h1>
        <p className='parrafoJoin'>{t('parrafoJoin')}</p>
        
        <FormContact />
    </div>
</div>
<img src={team} alt="Team" className="team-image" />
</div>
);
}

export default JoinOurTeam;

