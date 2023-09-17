import { useContextAPI } from '../context/contextAPI.js';

const Modal = () => {
  const { clearCart, hideModal } = useContextAPI();
  ///////////////////////////////////////////////////////////
  return (
    <aside className="modal-container">
      <div className="modal">
        <h4>remove all items from cart?</h4>
        <div className="btn-container">
          <button
            type="button"
            className="btn confirm-btn"
            onClick={() => {
              clearCart();
              hideModal();
            }}
          >
            confirm
          </button>
          <button
            type="button"
            className="btn clear-btn"
            onClick={() => hideModal()}
          >
            cancel
          </button>
        </div>
      </div>
    </aside>
  );
};

export default Modal;
