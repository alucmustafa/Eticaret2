import { useContext, useState } from "react";
import { CartContext } from "../../context/CartProvider";

const CartTotals = () => {
  const { cartItems } = useContext(CartContext);
  const [fastCagoChecked, setFastCagoChecked] = useState(false);
  const fastCargoPrice = 15;

  const cartItemTotals = cartItems.map((item) => {
    const itemTotal = item.price.newPrice * item.quantity;
    return itemTotal;
  });
  const subTotals = cartItemTotals.reduce((previousValue, currentValue) => {
    //reduce genellikle toplama işlemleri için kullanılır.
    return previousValue + currentValue;
  }, 0);
  const cartTotalPrice = fastCagoChecked
    ? (subTotals + fastCargoPrice).toFixed(2)
    : subTotals.toFixed(2);
  return (
    <div className="cart-totals">
      <h2>Cart totals</h2>
      <table>
        <tbody>
          <tr className="cart-subtotal">
            <th>Subtotal</th>
            <td>
              <span id="subtotal">${subTotals}</span>
            </td>
          </tr>
          <tr>
            <th>Shipping</th>
            <td>
              <ul>
                <li>
                  <label>
                    Fast Cargo: $15.00
                    <input
                      type="checkbox"
                      id="fast-cargo"
                      checked={fastCagoChecked}
                      onChange={()=>setFastCagoChecked(!fastCagoChecked)}
                    />
                  </label>
                </li>
                <li>
                  <a href="#">Change Address</a>
                </li>
              </ul>
            </td>
          </tr>
          <tr>
            <th>Total</th>
            <td>
              <strong id="cart-total">${cartTotalPrice}</strong>
            </td>
          </tr>
        </tbody>
      </table>
      <div className="checkout">
        <button className="btn btn-lg">Proceed to checkout</button>
      </div>
    </div>
  );
};

export default CartTotals;
