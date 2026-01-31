// Hero.jsx
import './Hero.css';

function Hero({ heroImage, heroTitle, heroSlogan, heroButton }) {
  return (
    <section className="hero">
      <img className="hero-bg" src={heroImage} alt="Hero Background Image" />

      <div className="hero-content">
        <h1>{heroTitle}</h1>
        <p>{heroSlogan}</p>
        {heroButton && heroButton}
      </div>
    </section>
  );
}

export default Hero;
