const ADD_POST = "ADD-POST";
const UPDATE_NEW_POST_TEXT = "UPDATE-NEW-POST-TEXT";


let initialState = {
    posts: [
        {id: 1, text: "Hello props!", likes: 93},
        {id: 2, text: "Hello props! SECOND COMPONENT!", likes: 18},
    ],
    newPostText: ""
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
        default:
            return state;
    }
}

export default profileReducer;

export const addPostActionCreator = () => ({
    type: ADD_POST
});
export const postChangeActionCreator = (newPostText) => ({
    type: UPDATE_NEW_POST_TEXT,
    newPostText
});