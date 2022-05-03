import  {authAPI} from "../api/api";
import {setAuthData} from "./authReducer";

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

export const authThunkCreator = () => {
    return (dispatch) => {
        authAPI.me().then(res => {
            if (res.data.resultCode === 0) {
                dispatch(setAuthData(res.data.data.id, res.data.data.login, res.data.data.email, true));
            }
        })
    }
}


// initialize thunk creator :
export const initialize = () => {
    return (dispatch) => {
        let promise = dispatch(authThunkCreator());
        Promise.all([promise]).then(() => {
            dispatch(setInitialized());
        })
    }
}

