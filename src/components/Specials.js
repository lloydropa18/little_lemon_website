import Product from "./Product";
import lemonDessert from "../images/lemon_dessert.jpg";
import bruchetta from "../images/bruchetta.svg";
import greekSalad from "../images/greek_salad.jpg";
const Specials = () => {
  return (
    <section className="specials_section">
      <div className="specials_top">
        <h1>This weeks specials!</h1>
      </div>

      <div className="specials_bottom">
        {/* Product */}
        <Product
          title="Greek Salad"
          price="$12.99"
          imgSrc={greekSalad}
          description="The famous greek salad of crispy lettuce, peppers, olives, and our Chicago style feta cheese, garmished with crunchy garlic and rosemary croutons"
        />
        <Product
          title="Brunchetta"
          price="$5.99"
          imgSrc={bruchetta}
          description="Our Bruschetta is made from grilled bread that has been smeared with garlic and seasoned with salt and olive oil."
        />
        <Product
          title="Lemon Dessert"
          price="$5.00"
          imgSrc={lemonDessert}
          description="This comes straight from grandma’s recipe book, every last ingredient has been sourced and is as authentic as can be imagined."
        />
      </div>
    </section>
  );
};

export default Specials;
