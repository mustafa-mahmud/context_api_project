import { createContext, useContext, useReducer } from 'react';
import reducer from './reducer';
import axios from 'axios';
import {
  CLEAR_CART,
  REMOVE_CART_BY_ID,
  INCREASE_CART_BY_ID,
  DECREASE_CART_BY_ID,
  CART_CALCULATE,
  SHOW_MODAL,
  HIDE_MODAL,
  GET_CART_ITEMS_BEGIN,
  GET_CART_ITEMS_SUCCESS,
  GET_CART_ITEMS_ERROR,
} from './actions';

const url = 'https://course-api.com/react-useReducer-cart-project';
const CreateContextAPI = createContext();

const initialState = {
  /* cart */
  cartItems: [],
  amount: 0,
  total: 0,
  isLoading: false,
  errMsg: '',
  /* modal */
  isOpen: false,
};

const ContextProvider = ({ children }) => {
  const [state, dispatch] = useReducer(reducer, initialState);

  const clearCart = () => {
    dispatch({ type: CLEAR_CART });
  };

  const removeCartByID = (id) => {
    dispatch({ type: REMOVE_CART_BY_ID, payload: { id } });
  };

  const increaseCartByID = (id) => {
    dispatch({ type: INCREASE_CART_BY_ID, payload: { id } });
  };

  const decreaseCartWithID = (id) => {
    dispatch({ type: DECREASE_CART_BY_ID, payload: { id } });
  };

  const cartCalculate = () => {
    dispatch({ type: CART_CALCULATE });
  };

  const showModal = () => {
    dispatch({ type: SHOW_MODAL });
  };

  const hideModal = () => {
    dispatch({ type: HIDE_MODAL });
  };

  const getCartItems = async () => {
    dispatch({ type: GET_CART_ITEMS_BEGIN });

    try {
      const { data: cartItems } = await axios(url);

      dispatch({ type: GET_CART_ITEMS_SUCCESS, payload: { cartItems } });
    } catch (error) {
      console.log(error);

      dispatch({
        type: GET_CART_ITEMS_ERROR,
        payload: { msg: error.response.data.msg },
      });
    }
  };
  /////////////////////////////////////////////////////////////////
  return (
    <CreateContextAPI.Provider
      value={{
        ...state,
        clearCart,
        removeCartByID,
        increaseCartByID,
        decreaseCartWithID,
        cartCalculate,
        showModal,
        hideModal,
        getCartItems,
      }}
    >
      {children}
    </CreateContextAPI.Provider>
  );
};

export const useContextAPI = () => {
  return useContext(CreateContextAPI);
};

export default ContextProvider;
