import { useContext, useState } from "react";
import { CartContext } from "../../context/CartProvider";

const Cartitem = ({ cartItem }) => {
  const {removeFromCart}=useContext(CartContext)
  const [quantity, setqQuantity] = useState(3);
  return (
    <tr className="cart-item">
      <td></td>
      <td className="cart-image">
        <img src={cartItem.img.singleImage} alt="" />
        <i className="bi bi-x delete-cart"
        onClick={()=>removeFromCart(cartItem.id)}
        ></i>
      </td>
      <td>{cartItem.name}</td>
      <td>${cartItem.price.newPrice.toFixed(2)}</td>
      <td className="product-quantity">{cartItem.quantity}</td>
      <td className="product-subtotal">
        ${(cartItem.price.newPrice * cartItem.quantity).toFixed(2)}
      </td>
    </tr>
  );
};

export default Cartitem;


