import React from "react";
import '../../Styles/Components_Styles/Articles_styles/Article10Tips.css';
import { Link } from 'react-router-dom';

const Article1 = () => {
  return (
    <div className="article-container">
      {/* Portada del artículo */}
      <header className="article-header">
        <h1 className="article-title">10 Basic Maintenance tips<br />for your home</h1>
      </header>

      {/* Introducción */}
      <section className="article-intro">
        <p className="article-desc">
          Keeping your home in good condition not only enhances its appearance but also prevents costly issues in the future. With these 10 practical tips, you can keep your house functional, safe, and welcoming without major investments.
        </p>
        {/* Botón CTA - Comprar kit */}
        <div className="cta-container">
        <Link to="/store" className="cta-button">
         Buy home maintenance kit
        </Link>
        </div>
      </section><br />

      {/* Lista de consejos */}
      <section className="article-content">
        <h2 className="section-title">Tips for home maintenance</h2>
        <ol className="tips-list">
          <li><strong>Regularly Inspect Pipes:</strong> Check faucets, pipes, and connections for leaks or drips. A small leak can turn into a big problem if not addressed in time.</li>
          <li><strong>Clean Gutters:</strong> Leaves and debris can clog gutters, causing roof damage and leaks. Clean your gutters at least twice a year, especially in the fall.</li>
          <li><strong>Change Air Filters:</strong> Dirty filters reduce efficiency and can increase your energy bills. Replace air filters every three months or as recommended by the manufacturer.</li>
          <li><strong>Test Smoke and Carbon Monoxide Detectors:</strong> Ensure they are working correctly and replace the batteries at least once a year.</li>
          <li><strong>Seal Doors and Windows:</strong> Inspect frames for air leaks. Use caulk or weatherstripping to reduce energy consumption and maintain the right temperature indoors.</li>
          <li><strong>Unclog Drains:</strong> Use a plunger or natural solutions like baking soda and vinegar to prevent clogs and eliminate odors.</li>
          <li><strong>Maintain Your Lawn and Garden:</strong> Regularly trim trees and shrubs to enhance aesthetics and prevent roots from damaging underground pipes or structures.</li>
          <li><strong>Check Appliances:</strong> Clean and inspect major appliances like refrigerators, stoves, and washing machines to ensure they are in good condition and working efficiently.</li>
          <li><strong>Protect Your Home from Pests:</strong> Keep storage areas organized and dry. Seal cracks and gaps in walls to prevent insects or rodents from entering your home.</li>
          <li><strong>Paint and Repair Surfaces Regularly:</strong> Painting not only improves the look of your home but also protects surfaces from moisture and wear. Touch up walls and furniture as needed.</li>
        </ol>
      </section>
<br />
      {/* Extra tip */}
      <section className="article-extra">
        <h2 className="extra-tip-title">Extra Tip!</h2>
        <p className="extra-tip-text">
          Keep a maintenance calendar to organize tasks and ensure every part of your home gets regular attention. For more tips and helpful tools, check out the blog at Monse Solutions. Make home maintenance easy and effective!
        </p>
        {/* Botón CTA - Comprar kit */}
        <div className="cta-container">
        <Link to="/store" className="cta-button2">
         Buy home maintenance kit
        </Link>
        </div>
      </section>
    </div>
  );
};

export default Article1;

