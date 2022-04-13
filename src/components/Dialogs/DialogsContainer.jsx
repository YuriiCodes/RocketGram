import React from "react";
import Dialogs from "./Dialogs";
import {messageChangeActionCreator, sendMessageActionCreator} from "../../data/dialogsReducer";
import {connect} from "react-redux";
import {WithAuthRedirect} from "../../hoc/WithAuthRedirect";
import {compose} from "redux";

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
// Double parentheses meaning that compose() returns a function, which is then executed immediately.


// connect function returns new container component.
export default compose(
    connect(mapStateToProps, mapDispatchToProps),
    WithAuthRedirect
)(Dialogs);