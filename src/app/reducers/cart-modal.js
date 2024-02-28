export const cartInitialState = {
  show: false,
};

export const CART_MODAL_ACTION_TYPES = {
  TOGGLE_MODAL: "TOGGLE_MODAL",
};

const UPDATE_STATE_BY_ACTION = {
  [CART_MODAL_ACTION_TYPES.TOGGLE_MODAL]: (state) => {
    const newState = {
      show: !state.show,
    };

    return newState;
  },
};

export const cartModalReducer = (state, action) => {
  const { type: actionType } = action;
  const updateState = UPDATE_STATE_BY_ACTION[actionType];
  return updateState ? updateState(state, action) : state;
};
