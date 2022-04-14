import usersAPI, {profileAPI} from "../api/api";

const ADD_POST = "ADD-POST";
const UPDATE_NEW_POST_TEXT = "UPDATE-NEW-POST-TEXT";
const SET_USER_PROFILE = "SET_USER_PROFILE";
const SET_STATUS = "SET_STATUS";

let initialState = {
    posts: [
        {id: 1, text: "Hello props!", likes: 93},
        {id: 2, text: "Hello props! SECOND COMPONENT!", likes: 18},
    ],
    newPostText: "",
    profile: null,
    status: "",
};

const profileReducer = (state = initialState, action) => {

    // We need to copy state, because reducer is a pure function, and pure function takes in some data and
    // outputs result, but cannot change imputed data. That property is called immutability
    switch (action.type) {
        case ADD_POST:
            let newPost = {
                id: 5,
                text: {...state}.newPostText,
                likes: 0
            }
            return {...state, posts: [...state.posts, newPost], newPostText: ""};
        case UPDATE_NEW_POST_TEXT:
            return {...state, newPostText: action.newPostText}
        case SET_USER_PROFILE:
            return {...state, profile: action.profile}
        case SET_STATUS:
            return {...state, status: action.status}
        default:
            return state;
    }
}

export default profileReducer;

export const setUserProfile = (profile) => ({type: SET_USER_PROFILE, profile});
export const addPostActionCreator = () => ({
    type: ADD_POST
});
export const postChangeActionCreator = (newPostText) => ({
    type: UPDATE_NEW_POST_TEXT,
    newPostText
});
export const setStatus = (status) => ({type: SET_STATUS, status});

export const getUserProfileThunkCreator = (profileId) => {
    return (dispatch) => {
        usersAPI.getProfileInfo(profileId).then(res => {
                dispatch(setUserProfile(res.data));
            }
        )
    }
}

export const setStatusThunkCreator = (status) => {
    return (dispatch) => {
        profileAPI.updateProfileStatus(status).then(res => {
            if (res.data.resultCode === 0) {
                dispatch(setStatus(status));
            }
        })
    }
}

export const getStatusThunkCreator = (profileId) => {
    return (dispatch) => {
        profileAPI.getProfileStatus(profileId).then(res => {
            debugger;
            if (res.status === 200) {
                dispatch(setStatus(res.data));
            }
        })
    }
}