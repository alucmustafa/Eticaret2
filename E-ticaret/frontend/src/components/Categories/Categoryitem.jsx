import "./Categoryitem.css";

export const Categoryitem = () => {
  return (
    <li className="category-item">
      <a href="#">
        <img
          src="/img/categories/categories1.png"
          alt=""
          className="category-image"
        />
        <span className="category-title">Smartphone</span>
      </a>
    </li>
  );
};
