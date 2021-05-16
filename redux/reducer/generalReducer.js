import { combineReducers } from 'redux';

const INITIAL_STATE = {
    current: [],
    token: "",
    possible: [],
};

const generalReducer = (state = INITIAL_STATE, action) => {
    let {
        current,
        possible
    } = state;

    let newState

    switch (action.type) {
        case 'ADD_TOKEN':
            token = action.payload
            newState = { current, possible, token };
            return newState;
        case 'ADD_EXPENSES':
            current.push(action.payload);
            newState = { current, possible, token };
            return newState;

        case 'REMOVE_EXPENSES':
            current.pop(action.payload);
            newState = { current, possible, token };
            return newState;

        default:
            return state
    }
};

export default combineReducers({
    expenses: generalReducer
});