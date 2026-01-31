import Hero from "../components/Hero";
import heroBImage from "../assets/hero_image2.png";
import { Link } from "react-router-dom"; 

function HomePage() {
  return (
    <Hero
      heroTitle="Welcome to Space"
      heroSlogan={
        <>
          This is the place where you will have experiences from another world!
          <section className="home-intro">
            <h2>Why Shop With Us?</h2>
            <p>
              Space Store offers once-in-a-lifetime interplanetary travel experiences.
              From lush jungle worlds to glowing gas giants, each destination is
              carefully curated for explorers, adventurers, and dreamers.
            </p>
            <p>
              Safe journeys, unforgettable views, and cosmic memories guaranteed 🚀
            </p>
          </section>
        </>
      }
      heroImage={heroBImage}
      heroButton={
        <Link to="/products" className="hero-button">
          Travel Now!
        </Link>
      }
    />
  );
}

export default HomePage;
