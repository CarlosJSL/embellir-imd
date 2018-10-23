import * as authActions from '../actions/auth';

const initialState = {
    user: null,
}

const reducer = (state = initialState, action) => {
    switch (action.type) {
        case authActions.SET_USER:
            return {
                ...state,
                user: action.payload,
                allowed: action.payload !== null
            }
    
        default:
            return state;
    }

}

export default reducer;