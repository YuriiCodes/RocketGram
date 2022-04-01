import React from "react";
import Dialogs from "./Dialogs";
import {messageChangeActionCreator, sendMessageActionCreator} from "../../data/dialogsReducer";
// import StoreContext from "../../StoreContext";
import {connect} from "react-redux";

//
// function DialogsContainer(props) {
//     return (<StoreContext.Consumer>
//             {(store) => {
//                 let state = store.getState();
//                 let messages = state.dialogsPage.messages;
//                 let contacts = state.dialogsPage.contacts;
//                 let newMessageText = state.dialogsPage.newMessageText;
//
//
//                 let sendMessage = () => {
//                     store.dispatch(sendMessageActionCreator());
//                 };
//                 let updateMessage = (newMessage) => {
//                     store.dispatch(messageChangeActionCreator(newMessage));
//                 }
//                 return (<Dialogs store={store} messages={messages} contacts={contacts} newMessageText={newMessageText}
//                                  sendMessage={sendMessage} updateMessage={updateMessage}
//                     />)
//             }}
//         </StoreContext.Consumer>);
//
// };

// mapStateToProps and mapDispatchToProps are functions that return objects that are later passed via props.


// mapStateToProps returns data
let mapStateToProps = (state) => ({
    contacts: state.dialogsPage.contacts,
    messages: state.dialogsPage.messages,
    newMessageText:  state.dialogsPage.newMessageText,
})

// mapDispatchToProps returns callbacks
let mapDispatchToProps = (dispatch) => ({
    sendMessage: () => {
        dispatch(sendMessageActionCreator());
    },
    updateMessage: (newMessage) => {
        dispatch(messageChangeActionCreator(newMessage));
    }
})
// Double parentheses meaning that connect() returns a function, which is then executed immediately.
// connect function returns new container component.
const DialogsContainer = connect(mapStateToProps, mapDispatchToProps)(Dialogs);
export default DialogsContainer;