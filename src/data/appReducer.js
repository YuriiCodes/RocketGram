import  {authAPI} from "../api/api";
import {authThunkCreator, setAuthData} from "./authReducer";

const SET_INITIALIZED = 'SET_INITIALIZED';

let initialState = {
   initialized: false
};

const appReducer = (state = initialState, action) => {
    switch (action.type) {
        case SET_INITIALIZED:
            return {
                ...state,
                initialized: true
            };

        default: {
            return state;
        }
    }
};

export default appReducer;


export const setInitialized = () => ({type: SET_INITIALIZED});



// initialize thunk creator :
export const initialize = () => {
    return (dispatch) => {
        let promise = dispatch(authThunkCreator());
        Promise.all([promise]).then(() => {
            dispatch(setInitialized());
        })
    }
}

