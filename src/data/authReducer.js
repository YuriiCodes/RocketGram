import usersAPI from "../api/api";

const SET_AUTH_DATA = "SET_AUTH_DATA";

let initialState = {
    id: null,
    login: null,
    email: null,
    isAuth: false,
};

const authReducer = (state = initialState, action) => {
    switch (action.type) {
        case SET_AUTH_DATA: {
            return {
                ...state,
                id: action.data.id,
                login: action.data.login,
                email: action.data.email,
                isAuth: true
            }
        }

        default: {
            return state;
        }
    }
};

export default authReducer;

export const setAuthData = (id, login, email) => ({
    type: SET_AUTH_DATA,
    data: {
        id: id,
        login: login,
        email: email
    }
});

export const authThunkCreator = () => {
    return (dispatch) => {
        usersAPI.auth().then(res => {
            if( res.data.resultCode === 0 ) {
                dispatch(setAuthData(res.data.data.id,res.data.data.login, res.data.data.email));
            }
        })
    }
}