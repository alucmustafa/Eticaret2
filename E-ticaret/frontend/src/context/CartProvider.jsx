import { createContext, useEffect } from "react";
import { useState } from "react";

export const CartContext = createContext(); //yeni bir Contex oluşturduk. bu tüm sayfalara tanıtmak için önemli.

const CartProvider = ({ children }) => {

  const [cartItems, setCartItem] = useState( //Burada eğer başlangıç durumunu boş bırakırsak her seferinde LocalStorage boş dizi ye eşit olacak.
    localStorage.getItem("cartitems")?
    JSON.parse(localStorage.getItem("cartitems")):
    []
  );
  useEffect(() => {
    localStorage.setItem("cartitems", JSON.stringify(cartItems));
  }, [cartItems]);
  const addToCart = (cartItem) => {
    // setCartItem([...cartItems,productItem])1. yöntem
    setCartItem((prevItem) => [...prevItem, {
      ...cartItem,
      quantity:cartItem.quantity?cartItem.quantity:1,
    },]);
  };
  const removeFromCart=(itemId)=>{
    const filteredCartItem=cartItems.filter((cartItem)=>{
      return cartItem.id!==itemId;
    })
    setCartItem((filteredCartItem))
  }
  return (
    <CartContext.Provider
      value={{
        addToCart,
        cartItems,
        removeFromCart,
      }}
    >
      {children}
    </CartContext.Provider>
  );
};
export default CartProvider;
