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
      className="cart-modal-overlay fixed inset-0 bg-black bg-opacity-30 z-10 "
      onClick={handleOverlayClick}
    >
      <div className="cart-modal w-11/12 bg-white p-4 absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 rounded-lg">
        <div className="flex justify-end">
          <button className="text-red-500 hover:text-red-700" onClick={onClose}>
            x
          </button>
        </div>

        <div>
          <div className="flex justify-between">
            <h1 className="uppercase font-extrabold">
              cart ({cart ? cart.length : 0})
            </h1>
            <button onClick={onRemoveAll} className="text-sm text-gray-400">
              Remove All
            </button>
          </div>

          <div>
            {cart &&
              Array.isArray(cart) &&
              cart.map((item, index) => (
                <div key={index} className="flex items-center gap-2 mb-5 py-5">
                  <div>
                    <img
                      src={item.image.mobile}
                      alt=""
                      className="w-20 h-16 rounded-md"
                    />
                  </div>
                  <div>
                    <h1 className="text-sm font-extrabold">{item.name}</h1>
                    <p className="text-sm font-extrabold text-gray-400">
                      $ {item.price}
                    </p>
                  </div>

                  <div className="w-24 h-10  bg-gray-200 border border-transparent rounded-sm  text-sm text-center">
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
                      className=" w-12 px-2 py-2 text-center text-sm bg-gray-200"
                    />
                    <button
                      onClick={() =>
                        handleQuantityChange(item.id, quantities[item.id] + 1)
                      }
                    >
                      +
                    </button>
                  </div>
                  <div className="w-5 flex items-center ">
                    <button
                      onClick={() => onRemoveItem(item.id)}
                      className="text-sm flex items-center "
                    >
                      x
                    </button>
                  </div>
                </div>
              ))}
          </div>
          <div className="flex justify-between">
            <p className="uppercase text-gray-400">Total </p>
            <p className="font-extrabold">
              $ {getTotalPrice().toLocaleString()}
            </p>
          </div>
          <div className="w-full mx-auto flex items-center justify-center">
            <button
              onClick={onCheckout}
              className="bg-orange-400 text-white w-full px-4 py-2"
            >
              Checkout
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CartModal;
