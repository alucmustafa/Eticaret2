import { Categoryitem } from "./Categoryitem";
import "./Categories.css";

export const Categories = () => {
  return (
    <section className="categories">
      <div className="container">
        <div className="section-title">
          <h2>All Categories</h2>
          <p>Summer Collection New Morden Design</p>
        </div>
        <ul className="category-list">
          <Categoryitem />
          <Categoryitem />
          <Categoryitem />
          <Categoryitem />
          <Categoryitem />
      
        </ul>
      </div>
    </section>
  );
};
