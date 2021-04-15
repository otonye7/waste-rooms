import UserActionTypes from './user.types';

const userReducer = (state= {name: 'Otonye', role: 'Programmer'}, action ) => {
    switch(action.type) {
        case UserActionTypes.LOGGED_IN_USER:
            return {
                ...state,
                ...action.payload
        };
        case UserActionTypes.LOGOUT:
            return action.payload;
        default:
            return state;
    }
}

export default userReducer;