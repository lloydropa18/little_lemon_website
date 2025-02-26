import heroImage from "../images/restauranfood.jpg";
const Hero = () => {
  return (
    <section className="hero_section">
      <div className="hero_details">
        <h1 className="website_heading">Little Lemon</h1>
        <h2 className="website_subheading">Chicago</h2>
        <p className="website_description">
          We are family owned Mediterranean restaurant, focused on traditional
          recipes served with a modern twist.
        </p>
        <a className="button" href="#">
          Reserve a Table
        </a>
      </div>

      <div className="hero_image">
        <img src={heroImage} alt="Hero image of the website" />
      </div>
    </section>
  );
};

export default Hero;
