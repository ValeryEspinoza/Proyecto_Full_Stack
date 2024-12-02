import React from "react";
import '../../Styles/Components_Styles/Articles_styles/ArticlePreventive.css';
import { Link } from 'react-router-dom';

const ArticlePreventive = () => {
  return (
<div className="home-maintenance-container">
  {/* Portada del artículo */}
  <header className="maintenance-header">
    <h1 className="maintenance-title">Preventive home maintenance: <br />An essential guide</h1>
  </header>

  {/* Introducción */}
  <section className="maintenance-intro">
    <p className="maintenance-desc">
      Preventive maintenance in the home not only helps extend the life of your home’s components, but it also prevents unexpected expenses and keeps your space safe and functional. In this article, we share practical tips for effectively caring for your home, ensuring it’s always in top condition.
    </p>
          {/* Botón CTA - Comprar kit */}
          <div className="cta-container">
        <Link to="/store" className="cta-button">
         Buy basic home repair kit!
        </Link>
        </div>
  </section><br />

  {/* Sección sobre qué es el mantenimiento preventivo */}
  <section className="maintenance-what-is">
    <h2 className="maintenance-subtitle">What is preventive home maintenance?</h2>
    <p className="maintenance-text">
      Preventive maintenance involves conducting regular inspections and upkeep to prevent major issues in the future. It’s a way of anticipating structural damage, electrical failures, plumbing issues, and other inconveniences that may arise.
      By dedicating time to these tasks, you not only improve the functionality of your home but also increase its long-term value.
    </p>
  </section>

  {/* Lista de áreas clave para mantenimiento preventivo */}
  <section className="maintenance-key-areas">
    <h2 className="maintenance-subtitle2">Key areas for preventive maintenance</h2>
    <section className="article-content">
      </section>
<strong>1. Electrical Systems:</strong>
        <ul className="sub-list">
          <li>Regular Inspections: Check outlets and wires for any visible damage or wear.</li>
          <li>Panel Cleaning: Make sure the electrical panel is clean and free from dust.</li>
          <li>Safety Check: Use a voltage tester to ensure there are no overloads in your system.</li>
        </ul>
        <p className="maintenance-tip"><span className="highlight">Pro Tip:</span> 
        Hire a professional electrician for a full system check-up once a year.</p>

<strong>2. Plumbing:</strong>
        <ul className="sub-list">
          <li>Periodic Checks: Inspect pipes and faucets for leaks or corrosion.</li>
          <li>Drain Maintenance: Clean drains regularly with non-corrosive products to avoid blockages.</li>
          <li>Water Heater Care: Drain your tank every six months to remove accumulated sediment.</li>
        </ul>
        <p className="maintenance-tip"><span className="highlight">Pro Tip:</span> 
        Keep a basic plumbing repair kit in your home for minor fixes.</p>

<strong>3. Walls and Paint:</strong>
        <ul className="sub-list">
          <li>Wall Cleaning: Regularly dust and clean walls to maintain their condition.</li>
          <li>Crack Inspection: Fill small cracks with putty before they turn into bigger structural issues.</li>
          <li>Painting: Apply a fresh coat of paint every 3-5 years to protect surfaces and keep them looking new.</li>
        </ul>
        <p className="maintenance-tip"><span className="highlight">Pro Tip:</span> 
        Use moisture-resistant paints in areas prone to leaks.</p>

<strong>4. Ventilation and HVAC Systems:</strong>
        <ul className="sub-list">
          <li>Clean Filters: Change air conditioning and heating filters every 2-3 months.</li>
          <li>System Maintenance: Schedule a professional inspection at least once a year.</li>
          <li>Fan Cleaning: Keep fans and exhausts free from dust to avoid overheating.</li>
        </ul>
        <p className="maintenance-tip"><span className="highlight">Pro Tip:</span> 
        Use a humidifier to maintain optimal air quality in dry climates.</p>
        
<strong>5. Roofs and Leaks:</strong>
        <ul className="sub-list">
          <li>Visual Inspection: Check your roof twice a year, especially after heavy rain.</li>
          <li>Sealing: Apply waterproofing products to prevent leaks.</li>
          <li>Gutter Cleaning: Remove leaves and debris from gutters to prevent water buildup.</li>
        </ul>
        <p className="maintenance-tip"><span className="highlight">Pro Tip:</span> During inspections, pay attention to loose or worn tiles as they can cause significant damage if not addressed.</p>
  </section><br />

  {/* Beneficios del mantenimiento preventivo */}
  <section className="maintenance-benefits">
    <h2 className="maintenance-subtitle">Benefits of Preventive Maintenance</h2>
    <ul className="benefits-list">
      <li><strong>Cost Savings:</strong> Detecting and fixing issues early reduces major repair costs.</li>
      <li><strong>Safety:</strong> A well-maintained home minimizes risks such as electrical fires or floods.</li>
      <li><strong>Increased Property Value:</strong> Homes with proper maintenance retain their value and are more attractive for resale.</li>
      <li><strong>Comfort and Well-being:</strong> Living in a clean, functional home improves quality of life.</li>
    </ul>
  </section>

  {/* Llamada a la acción */}
  <section className="maintenance-cta">
    <h2 className="cta-title">Keep your home safe and functional!</h2>
    <p className="cta-text">Preventive maintenance is the key to protecting your home and its value. Start today to ensure the longevity of your investment.</p>
    <div className="cta-button-container">
        {/* Botón CTA - Comprar kit */}
        <div className="cta-container">
        <Link to="/store" className="cta-button2">
        Buy basic home repair kit!
        </Link>
        </div>
    </div>
  </section>
</div>

  );
};

export default ArticlePreventive;