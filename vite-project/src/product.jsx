import "./Product.css"

function Product({ title, price }) {
  return (
    <div className="product">
      <h2>{title}</h2>
      <p>{price}</p>
      {price > "$500" ? <p>5% Discount</p>:<a href="#">Get Discount</a>}
      {/* <button>Add to Cart</button> */}
    </div>
  );
}

export default Product;