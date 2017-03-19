import {
    EMAIL_CHANGED,
    PASSWORD_CHANGED,
    LOGIN_USER_SUCCESS,
    LOGIN_USER_FAIL,
    LOGIN_USER
} from '../actions/types'

const INITIAL_STATE = {
    email: '',
    password: '',
    isLoading: false,
    error: '',
    user: null
};

export default (state = INITIAL_STATE, action) => {
    switch (action.type){
        case EMAIL_CHANGED:
            return { ...state, email: action.text};
        case PASSWORD_CHANGED:
            return { ...state, password: action.text};
        case LOGIN_USER:
            return {
                ...state,
                isLoading: true,
                error: ''
            };
        case LOGIN_USER_SUCCESS:
            return{
                ...state,
                ...INITIAL_STATE,
                user: action.user
            };
        case LOGIN_USER_FAIL:
            return {
                ...state,
                isLoading: false,
                error: 'Authentication Failed',
                password: ''
            };
        default:
            return state;
    }
}