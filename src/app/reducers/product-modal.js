

export const cartInitialState = {
    show: false,
}

export const PRODUCT_MODAL_ACTION_TYPES = {
    TOGGLE_MODAL: 'TOGGLE_MODAL',
}

const UPDATE_STATE_BY_ACTION = {
    [PRODUCT_MODAL_ACTION_TYPES.TOGGLE_MODAL]: (state, action) => {

        const newState = {
            show: !state.show,
        }

        return newState
    },
}

export const productModalReducer = (state, action) => {
    const { type: actionType } = action
    const updateState = UPDATE_STATE_BY_ACTION[actionType]
    return updateState ? updateState(state, action) : state
}
