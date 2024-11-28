import React from "react";
import '../../Styles/Components_Styles/Articles_styles/ArticleGarden.css';
import { Link } from 'react-router-dom';


const ArticleGarden = () => {
  return (
    <div className="garden-container">
      {/* Portada del artículo */}
      <header className="garden-header">
        <h1 className="garden-title">Learn how to plan a<br />seasonal garden</h1>
      </header>

      {/* Introducción */}
      <section className="garden-intro">
        <p className="garden-desc">
          Creating a seasonal garden is a wonderful way to enjoy fresh blooms, 
          vibrant colors, and homegrown produce year-round. Follow these steps to 
          plan and maintain your perfect seasonal garden, no matter the weather.
        </p>
                {/* Botón CTA - Comprar kit */}
                <div className="cta-container">
        <Link to="/store" className="cta-button">
         Buy garden care kit!
        </Link>
        </div>
      </section><br />

      {/* Lista de pasos */}
      <section className="garden-content">
  <h2 className="garden-section-title">Steps to plan your seasonal garden</h2>
  <ol className="tips-listGarden">
    <li>
      <strong>Understand your local climate:</strong> Research your area's planting zone to determine the best plants for each season and the optimal times for sowing or transplanting.
    </li>
    <li>
      <strong>Choose the right plants for each season:</strong>
      <ul>
        <li><strong>Spring:</strong> Cool-weather crops like lettuce, spinach, and peas; flowers like tulips and daffodils.</li>
        <li><strong>Summer:</strong> Heat-loving plants such as tomatoes, peppers, and sunflowers.</li>
        <li><strong>Fall:</strong> Hardy vegetables like broccoli, kale, and carrots; blooms like chrysanthemums.</li>
        <li><strong>Winter:</strong> Depending on your region, consider evergreens or use the season to prepare soil and plant bulbs for spring.</li>
      </ul>
    </li>
    <li>
      <strong>Create a seasonal maintenance schedule:</strong>
      <ul>
        <li><strong>Spring:</strong> Clear debris, fertilize, and plant early crops.</li>
        <li><strong>Summer:</strong> Water regularly, mulch, and monitor for pests.</li>
        <li><strong>Fall:</strong> Harvest, remove spent plants, and add compost.</li>
        <li><strong>Winter:</strong> Prune trees and shrubs; prepare for spring planting.</li>
      </ul>
    </li>
    <li>
      <strong>Plan your garden layout:</strong> Design your garden with the changing seasons in mind. Allocate space for seasonal plants and group plants with similar needs together for easier care.
    </li>
    <li>
      <strong>Prepare your soil:</strong> Test your soil’s pH and nutrient levels, and amend it with compost or organic matter to ensure it’s ready to support new growth each season.
    </li>
    <li>
      <strong>Incorporate perennials for year-round interest:</strong> Add plants like lavender, hostas, or ornamental grasses for a lush appearance.
    </li>
    <li>
      <strong>Use seasonal decorations:</strong> Add trellises, outdoor lighting, or themed pots to enhance your garden’s visual appeal.
    </li>
    <li>
      <strong>Keep a garden journal:</strong> Track planting dates, weather conditions, and plant success to refine future garden plans.
    </li>
  </ol>
</section>

<br />
      {/* Extra tip */}
      <section className="garden-extra">
        <h2 className="garden-extra-tip-title">Expert Tip!</h2>
        <p className="garden-extra-tip-text">
          Rotate crops annually to prevent soil depletion and reduce pests. For example, follow leafy greens with root vegetables, then legumes. For more gardening tips and tools, explore our blog at Monse Solutions. Let’s bring your garden to life!
        </p>
        {/* Botón CTA - Comprar kit */}
        <div className="cta-container">
        <Link to="/store" className="cta-button2">
        Buy garden care kit!
        </Link>
        </div>
      </section>
    </div>
  );
};

export default ArticleGarden;

