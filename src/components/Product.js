const Product = () => {
  return (
    <div className="product" id="product">
      <div className="product_image">
        <img src="" alt="" />
        Image here
      </div>
      <div className="product_details">
        <div className="product_details_top">
          <h3 className="product_title">title</h3>
          <h3 className="product_price">price</h3>
        </div>
        <p>
          Lorem ipsum, dolor sit amet consectetur adipisicing elit. Mollitia
          consequatur animi vel temporibus iure accusamus aliquid nulla, fugiat,
          labore magni officia, recusandae dolores! Exercitationem, aliquam
          itaque delectus doloremque vero deleniti corrupti officia porro natus
          omnis? A ea voluptas excepturi suscipit.
        </p>
        <p>Order a delivery</p>
      </div>
    </div>
  );
};

export default Product;
