import UserActionTypes from './user.types';
let userState;

if (window.localStorage.getItem('auth')) {
    userState = JSON.parse(window.localStorage.getItem('auth'))
} else {
    userState = null
}

const userReducer = (state= userState, action ) => {
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