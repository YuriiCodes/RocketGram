import profileReducer from "./profileReducer";
import sidebarReducer from "./sidebarReducer";
import dialogsReducer from "./dialogsReducer";

const ACTION_TYPES = {
    ADD_POST: "ADD-POST",
    UPDATE_NEW_POST_TEXT: "UPDATE-NEW-POST-TEXT",
    SEND_MESSAGE: "SEND-MESSAGE",
    UPDATE_NEW_MESSAGE_TEXT: "UPDATE-NEW-MESSAGE-TEXT",
}

// export const addPostActionCreator = () => ({
//     type: ACTION_TYPES.ADD_POST
// });
// export const postChangeActionCreator = (newPostText) => ({
//     type: ACTION_TYPES.UPDATE_NEW_POST_TEXT,
//     newPostText
// });


// export const sendMessageActionCreator = () => ({
//     type: ACTION_TYPES.SEND_MESSAGE
// });
//
// export const messageChangeActionCreator = (newMessageText) => ({
//     type: ACTION_TYPES.UPDATE_NEW_MESSAGE_TEXT,
//     newMessageText
// })


let store = {
    _state: {
        dialogsPage: {
            messages: [
                {chatId: 1, message: ["Hello"],},
                {chatId: 2, message: [" How's life, pal?"]}],
            contacts: [
                {id: 1, name: "🤠 Pevel Durov",},
                {id: 2, name: "🥶 Elon Musk"}],
            newMessageText: ""
        },
        profilePage: {
            posts: [
                {id: 1, text: "Hello props!", likes: 93},
                {id: 2, text: "Hello props! SECOND COMPONENT!", likes: 18},
            ],
            newPostText: ""
        },
        sidebar: {}
    },
    _callSubscriber() {
        console.log('State changed')
    },
    getState() {
        return this._state;
    },
    subscribe(observerFn) {
        this._callSubscriber = observerFn; //observer pattern
    },
    dispatch(action) {
        this._state.dialogsPage = dialogsReducer(this._state.dialogsPage, action);
        this._state.profilePage = profileReducer(this._state.profilePage, action);
        this._state.sidebar = sidebarReducer(this._state.sidebar, action);
        this._callSubscriber();
    },

}
window.store = store;
export default store;