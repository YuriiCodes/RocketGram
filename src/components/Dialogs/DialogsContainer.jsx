import React from "react";
import Dialogs from "./Dialogs";
import {messageChangeActionCreator, sendMessageActionCreator} from "../../data/dialogsReducer";
import {connect} from "react-redux";
import {WithAuthRedirect} from "../../hoc/WithAuthRedirect";

// mapStateToProps and mapDispatchToProps are functions that return objects that are later passed via props.


// mapStateToProps returns data
let mapStateToProps = (state) => ({
    contacts: state.dialogsPage.contacts,
    messages: state.dialogsPage.messages,
    newMessageText:  state.dialogsPage.newMessageText,
    isAuth: state.auth.isAuth
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
const DialogsContainerWithRedirect = WithAuthRedirect(DialogsContainer);
export default DialogsContainerWithRedirect;