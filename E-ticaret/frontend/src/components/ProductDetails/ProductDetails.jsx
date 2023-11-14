import Bradcrumb from "./Bradcrumb/Bradcrumb";
import Info from "./Info/Info";
import "./ProductDetails.css";
import ProductGalery from "./ProductGalery/ProductGalery";
import Tabs from "./Tabs/Tabs";
const ProductDetails = () => {
  return (
    <section className="single-product">
      <div className="container">
        <div className="single-product-wrapper">
          <div className="single-topbar">
            <Bradcrumb />
          </div>

          <div className="single-content">
            <main className="site-main">
              <ProductGalery />
              <Info />
            </main>
          </div>
              <Tabs/>
         
        </div>
      </div>
    </section>
  );
};

export default ProductDetails;
