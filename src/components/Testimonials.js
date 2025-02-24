import Ratings from "./Ratings";
const Testimonials = () => {
  return (
    <section className="testimonials_section">
      <h2>Testimonials</h2>
      <div className="ratings">
        <Ratings />
        <Ratings />
        <Ratings />
        <Ratings />
      </div>
    </section>
  );
};

export default Testimonials;
