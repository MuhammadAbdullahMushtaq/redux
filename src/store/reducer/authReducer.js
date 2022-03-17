import ActionTypes from "../constants";

const INITIAL_STATE = {
    userEmail: "",
    userPassword: "",
};

const loginReducer = (state = INITIAL_STATE, action) =>{
    if (action.type === ActionTypes.USER_LOGIN) {
    return {
        ...state,
        userEmail: action.payload.email,
        userPassword: action.payload.password,
    };
    } else if (action.type === ActionTypes.USER_LOGOUT) {
        return{
            ...state,
            userEmail: "",
            userPassword: "",
        };
    } else{
        return state;
    }
};

export { loginReducer };