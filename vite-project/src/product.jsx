import "./product.css"
import Price from "./price";
function Product({ title, description, index, imgSrc }) {
  let oldPrices = ["$99", "$799", "$399"];
  let newPrices = ["$89", "$699", "$299"];
  return (
    <div className="product">
      <div className="product-details">
        <h3>{title}</h3>
        <h2>{description}</h2>
        <img src={imgSrc} alt={title} className="product-img" />
      </div>
      <div>
        <Price oldPrice={oldPrices[index]} newPrice={newPrices[index]} />
        <button>See Deal</button>
      </div>
    </div>
  );
}

export default Product;