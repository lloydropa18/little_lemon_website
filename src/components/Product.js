const Product = ({ title, price, description, imgSrc }) => {
  return (
    <div className="product" id="product">
      <div className="product_image">
        <img src={imgSrc} alt="" />
      </div>
      <div className="product_details">
        <div className="product_details_top">
          <h3 className="product_title">{title}</h3>
          <h3 className="product_price">{price}</h3>
        </div>
        <p>{description}</p>
        <p>Order a delivery 🚲</p>
      </div>
    </div>
  );
};

export default Product;
