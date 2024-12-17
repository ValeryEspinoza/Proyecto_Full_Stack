import React from "react";
import '../../Styles/Components_Styles/Articles_styles/ArticleColor.css';
import { Link } from 'react-router-dom';

const ArticleColor = () => {
    return (
      <div className="color-container">
        {/* Portada del artículo */}
        <header className="color-header">
          <h1 className="color-title">Explore color ideas <br /> for your spaces
          </h1>
        </header>
  
        {/* Introducción */}
        <section className="color-intro">
          <p className="color-desc">
          Color is a key tool in home design and decor. It can transform a room’s atmosphere, 
          making it feel larger, cozier, or more energized. Whether you’re redecorating an entire 
          house or just updating a single room, choosing the right colors is crucial to creating 
          a space that reflects your personality and meets your needs.
        Here, we’ll explore popular color ideas and tips for different spaces in your home 
         to inspire your next design project.
          </p>
          {/* Botón CTA - Comprar kit */}
          <div className="color-cta">
            <Link to="/store" className="color-btn">
              Buy remodeling kit!
            </Link>
          </div>
        </section><br />
  
        {/* Lista de áreas clave para mantenimiento preventivo */}
        <section className="color-content">

          <strong>1. Neutral tones for a calm, timeless look</strong>
          <p className="color-list">
          Neutral colors like whites, grays, and beige are timeless and versatile. 
          They create a calm and inviting environment, making them perfect for living rooms, 
          bedrooms, and even kitchens. Neutral tones are also ideal for smaller spaces as they 
          help to open up the room and create the illusion of more space. These shades pair well 
          with almost any accent color, allowing you to play with colorful accessories, furniture, 
          and artwork.
          </p>
          <p className="color-tip"><span className="highlight">Tip:</span> Use different shades of neutral 
          colors to add depth and interest. Light gray walls with white trim and warm beige furniture 
          can create a balanced, harmonious atmosphere.</p>

          <hr />

          <strong>2. Bold and vibrant hues for energy and creativity</strong>
          <p className="color-list">
          If you want to inject some energy and creativity into your space, consider using bold colors 
          like vibrant reds, electric blues, or even deep purples. These colors are perfect for home 
          offices, playrooms, or any space where you want to stimulate creativity and inspiration. 
          They can be paired with neutral colors to prevent the space from feeling too overwhelming.
          </p>
          <p className="color-tip"><span className="highlight">Tip:</span> Choose one focal wall to paint 
          in a bold color, while keeping the rest of the room in neutral tones. This helps create 
          a striking contrast without overpowering the space.
          </p>

          <hr />
          
          <strong>3. Soft pastels for a serene and elegant ambience</strong>
          <p className="color-list">
          Pastel colors such as soft pink, mint green, and light lavender bring a sense of calm and 
           to any space. These colors work well in bedrooms, bathrooms, and even living areas, giving 
           the space a soft, inviting look. Pastels can also add a touch of elegance, making them ideal 
           for creating a chic and relaxing environment.
          </p>
          <p className="color-tip"><span className="highlight">Tip:</span> Combine pastel colors with 
          natural wood furniture or metallic accents to create a balanced, sophisticated atmosphere.</p>
            
          <hr />
          
          <strong>4. Earthy tones for a cozy, natural feel</strong>
          <p className="color-list">
          Earthy colors like olive green, terracotta, and warm browns are perfect for creating a cozy, 
          inviting atmosphere. These shades work well in living rooms, dining rooms, and kitchens, where 
          you want to create a space that feels comfortable and connected to nature. Earthy tones are 
          particularly effective when paired with plants and natural materials like wood and stone.
          </p>
          <p className="color-tip"><span className="highlight">Tip:</span> Try using earthy colors in 
          combination with textured fabrics, like linen or wool, to enhance the natural, grounded feeling 
          of the room.</p>
          
          <hr />
            
          <strong>5. Monochromatic schemes for a sophisticated look</strong>
          <p className="color-list">
          A monochromatic color scheme involves using different shades and tones of the same color 
          throughout the space. This approach creates a cohesive, sophisticated look that is both 
          elegant and calming. A monochromatic palette can be applied to any color—whether it's a 
          rich navy blue, a deep forest green, or even a classic beige.
          </p>
          <p className="color-tip"><span className="highlight">Tip:</span> To avoid a flat look, vary 
          the intensity of the color across the room with different furniture, textiles, and wall treatments.</p>
        </section><br />
  
  
        {/* Llamada a la acción */}
        <section className="article-extra">
          <h2 className="color-cta-title">Experiment with these color ideas!</h2>
          <p className="color-cta-text">Whether you're planning a full home makeover or simply refreshing 
            a few rooms, let color guide your design journey. Experiment with these color ideas to find 
            the perfect shades for your spaces, and enjoy the transformation!</p>
          <div className="color-cta-button-container">
            <div className="color-cta">
              <Link to="/store" className="cta-button2">
              Buy remodeling kit!
              </Link>
            </div>
          </div>
        </section>
      </div>
    );
  };
  
  export default ArticleColor;
  