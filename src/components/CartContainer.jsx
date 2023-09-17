import { useEffect } from 'react';
import { useContextAPI } from '../context/contextAPI.js';
import CartItem from './CartItem';

const CartContainer = () => {
  const {
    cartItems,
    cartCalculate,
    total,
    showModal,
    getCartItems,
  } = useContextAPI();

  useEffect(() => {
    cartCalculate();
  }, []);

  useEffect(() => {
    cartCalculate();
  }, [cartItems]);

  /////////////////////////////////////////////////////////
  if (cartItems.length < 1) {
    return (
      <section className="cart">
        <header>
          <h2>your bag</h2>
          <h4 className="empty-cart">is currently empty</h4>
        </header>
      </section>
    );
  }
  return (
    <section className="cart">
      <header>
        <h2>your bag</h2>
        <div>
          {cartItems.map((cart) => {
            return <CartItem key={cart.id} {...cart} />;
          })}
        </div>
      </header>
      <footer>
        <hr />
        <div className="cart-total">
          <h4>
            total
            <span>${total}</span>
          </h4>
        </div>
        <button
          type="button"
          className="btn clear-btn"
          onClick={() => showModal()}
        >
          clear btn
        </button>
      </footer>
    </section>
  );
};

export default CartContainer;
