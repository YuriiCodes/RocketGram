import usersAPI, {authAPI} from "../api/api";

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
                isAuth: action.data.isAuth
            }
        }

        default: {
            return state;
        }
    }
};

export default authReducer;

export const setAuthData = (id, login, email, isAuth) => ({
    type: SET_AUTH_DATA,
    data: {
        id: id,
        login: login,
        email: email,
        isAuth: isAuth
    }
});

export const authThunkCreator = () => {
    return (dispatch) => {
        authAPI.me().then(res => {
            if (res.data.resultCode === 0) {
                dispatch(setAuthData(res.data.data.id, res.data.data.login, res.data.data.email, true));
            }
        })
    }
}

export const loginThunkCreator = (email, password, rememberMe, setStatus) => {
    return (dispatch) => {
        authAPI.login(email, password, rememberMe).then(res => {
            if (res.data.resultCode === 0) {
                dispatch(authThunkCreator());
            } else {
                setStatus({error: res.data.messages});
            }
        })
    }
}

export const logoutThunkCreator = () => {
    return (dispatch) => {
        authAPI.logout().then(res => {
            if (res.data.resultCode === 0) {
                dispatch(setAuthData(null, null, null, false));
            }
        })
    }
}