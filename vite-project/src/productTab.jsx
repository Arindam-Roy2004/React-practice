import Product from "./product";
// import Price from "./price";
function ProductTab() {
  let styles = {
    display: "flex",
    flexWrap: "wrap",
    justifyContent: "center",
    alignItems: "stretch",
  };
  return (
    <div style={styles}>
      <Product title={"Logitech MX Master Keyboard"} description={"Wireless Keyboard"} index={0} imgSrc={"https://resource.logitech.com/w_386,ar_1.0,c_limit,f_auto,q_auto,dpr_2.0/d_transparent.gif/content/dam/logitech/en/products/keyboards/mx-keys-mini/gallery/us/mx-keys-mini-top-graphite-us.png?v=1"}/>
      <Product title={"Samsung Galaxy S21"} description={"Latest Smartphone"} index={1} imgSrc={"https://m.media-amazon.com/images/I/91-uC3gGWGL.jpg"}/>
      <Product title={"Apple Watch Series 6"} description={"Smartwatch"} index={2} imgSrc={"https://u-mercari-images.mercdn.net/photos/m54281243902_1.jpg"}/>
    </div>
  );
}

export default ProductTab;
