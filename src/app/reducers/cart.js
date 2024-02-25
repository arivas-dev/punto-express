import {updateLocalStorage} from '../utils/handleLocalStorage'

export const cartInitialState = JSON.parse(window.localStorage.getItem('cart')) || []

export const CART_ACTION_TYPES = {
    ADD_TO_CART: 'ADD_TO_CART',
    REMOVE_FROM_CART: 'REMOVE_FROM_CART',
    CLEAR_CART: 'CLEAR_CART'
}

const UPDATE_STATE_BY_ACTION = {
    [CART_ACTION_TYPES.ADD_TO_CART]: (state, action) => {
      const { id } = action.payload
      
      const newState = [
        ...state,
        {
          ...action.payload
        }
      ]
  
      updateLocalStorage('cart',newState)
      return newState
    },
    [CART_ACTION_TYPES.REMOVE_FROM_CART]: (state, action) => {
      const { id } = action.payload
      const newState = state.filter(item => item.id !== id)
      updateLocalStorage('cart',newState)
      return newState
    },
    [CART_ACTION_TYPES.CLEAR_CART]: () => {
      updateLocalStorage([])
      return []
    }
  }
  
  export const cartReducer = (state, action) => {
    const { type: actionType } = action
    const updateState = UPDATE_STATE_BY_ACTION[actionType]
    return updateState ? updateState(state, action) : state
  }
