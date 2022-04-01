const SEND_MESSAGE = "SEND-MESSAGE";
const UPDATE_NEW_MESSAGE_TEXT = "UPDATE-NEW-MESSAGE-TEXT";


let initialState = {
    messages: [{chatId: 1, message: ["Hello"],}, {chatId: 2, message: [" How's life, pal?"]}],
    contacts: [{id: 1, name: "🤠 Pevel Durov",}, {id: 2, name: "🥶 Elon Musk"}],
    newMessageText: ""
};
const dialogsReducer = (state = initialState, action) => {
    switch (action.type) {
        case UPDATE_NEW_MESSAGE_TEXT: {
            return  {...state, newMessageText: action.newMessageText}
        }

        case SEND_MESSAGE: {
            let newMessage = {chatId: 1, message: [state.newMessageText]};
            return  {...state, messages: [...state.messages, newMessage], newMessageText: ""};

            // Same results as above!
            // stateCopy.messages = [...state.messages];
            // stateCopy.newMessageText = "";
            // stateCopy.messages.push(newMessage);
        }
        default: {
            return state;
        }
    }
};

export default dialogsReducer;

export const sendMessageActionCreator = () => ({
    type: SEND_MESSAGE
});

export const messageChangeActionCreator = (newMessageText) => ({
    type: UPDATE_NEW_MESSAGE_TEXT, newMessageText
})
