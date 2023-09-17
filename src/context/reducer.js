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

const reducer = (state, action) => {
  if (action.type === CLEAR_CART) {
    return {
      ...state,
      cartItems: [],
    };
  }

  if (action.type === REMOVE_CART_BY_ID) {
    const cartItems = state.cartItems.filter(
      (item) => item.id !== action.payload.id
    );

    return {
      ...state,
      cartItems: cartItems,
    };
  }

  if (action.type === INCREASE_CART_BY_ID) {
    const cartItems = state.cartItems.map((item) => {
      if (item.id === action.payload.id) item.amount = item.amount + 1;
      return item;
    });

    return {
      ...state,
      cartItems,
    };
  }

  if (action.type === DECREASE_CART_BY_ID) {
    const cartItems = state.cartItems.map((item) => {
      if (item.id === action.payload.id) item.amount = item.amount - 1;
      return item;
    });

    return {
      ...state,
      cartItems,
    };
  }

  if (action.type === CART_CALCULATE) {
    let amount = 0;
    let total = 0;

    state.cartItems.forEach((cart) => {
      amount = amount + cart.amount;
      total = total + cart.amount * cart.price;
    });

    return {
      ...state,
      amount,
      total: total.toFixed(2),
    };
  }

  if (action.type === SHOW_MODAL) {
    return {
      ...state,
      isOpen: true,
    };
  }

  if (action.type === HIDE_MODAL) {
    return {
      ...state,
      isOpen: false,
    };
  }

  if (action.type === GET_CART_ITEMS_BEGIN) {
    return {
      ...state,
      isLoading: true,
    };
  }

  if (action.type === GET_CART_ITEMS_SUCCESS) {
    return {
      ...state,
      isLoading: false,
      cartItems: action.payload.cartItems,
    };
  }

  if (action.type === GET_CART_ITEMS_ERROR) {
    return {
      ...state,
      isLoading: false,
      errMsg: action.payload.msg,
    };
  }

  ///////////////////////////////////////////////////////////////
  throw new Error(`Action ${action.type} does not match with any type...`);
};

export default reducer;
