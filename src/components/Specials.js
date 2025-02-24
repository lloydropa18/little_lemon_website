import Product from "./Product";
const Specials = () => {
  return (
    <section className="specials_section">
      <div className="specials_top">
        <h1>This weeks specials!</h1>
        <a className="button" href="#">
          Online Menu
        </a>
      </div>

      <div className="specials_bottom">
        {/* Product */}
        <Product />
        <Product />
        <Product />
      </div>
    </section>
  );
};

export default Specials;
