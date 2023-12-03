/* eslint-disable react/prop-types */
import { useState } from "react";

const CartModal = ({
  cart,
  onClose,
  onRemoveAll,
  onRemoveItem,
  onCheckout,
}) => {
  const [quantities, setQuantities] = useState(
    cart.reduce((acc, item) => ({ ...acc, [item.id]: item.quantity }), {})
  );

  const getTotalPrice = () => {
    if (!cart || !Array.isArray(cart) || cart.length === 0) {
      return 0;
    }
    return cart.reduce(
      (total, item) => total + item.price * quantities[item.id],
      0
    );
  };

  const handleOverlayClick = (e) => {
    if (onClose && e.target.classList.contains("cart-modal-overlay")) {
      onClose();
    }
  };

  const handleQuantityChange = (itemId, newQuantity) => {
    const updatedQuantity = Math.max(1, newQuantity);
    setQuantities((prevQuantities) => ({
      ...prevQuantities,
      [itemId]: updatedQuantity,
    }));
  };

  return (
    <div
      className="cart-modal-overlay fixed inset-0 bg-black bg-opacity-50 z-10"
      onClick={handleOverlayClick}
    >
      <div className="cart-modal w-10/12 bg-white p-4 absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2">
        <div className="flex justify-end">
          <button className="text-red-500 hover:text-red-700" onClick={onClose}>
            Close
          </button>
        </div>
        <h2 className="text-black text-2xl mb-4">Your Cart</h2>

        <div>
          <p>Number of items in the cart: {cart ? cart.length : 0}</p>

          <button onClick={onRemoveAll}>Remove All</button>
          <ul>
            {cart &&
              Array.isArray(cart) &&
              cart.map((item, index) => (
                <li key={index}>
                  <img src={item.image.mobile} alt="" />
                  {item.name} - Quantity: {quantities[item.id]}
                  <p>$ {item.price}</p>
                  <div className="w-32 border border-transparent bg-gray-200 pl-3">
                    <button
                      onClick={() =>
                        handleQuantityChange(item.id, quantities[item.id] - 1)
                      }
                    >
                      -
                    </button>
                    <input
                      type="number"
                      id="quantity"
                      name="quantity"
                      min="1"
                      value={quantities[item.id]}
                      onChange={(e) =>
                        handleQuantityChange(
                          item.id,
                          parseInt(e.target.value, 10)
                        )
                      }
                      className=" w-20 px-2 py-2 text-center text-sm bg-gray-200"
                    />
                    <button
                      onClick={() =>
                        handleQuantityChange(item.id, quantities[item.id] + 1)
                      }
                    >
                      +
                    </button>
                  </div>
                  <button onClick={() => onRemoveItem(item.id)}>Remove</button>
                </li>
              ))}
          </ul>
          <p>Total Price: ${getTotalPrice().toLocaleString()}</p>
          <button onClick={onCheckout}>Checkout</button>
        </div>
      </div>
    </div>
  );
};

export default CartModal;
