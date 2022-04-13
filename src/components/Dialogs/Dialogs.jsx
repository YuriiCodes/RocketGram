import classes from "./Dialogs.module.css";
import Message from "./Message/Message";
import Dialog from "./Dialog/Dialog";
import React from "react";
import NewMessageForm from "./NewMessageForm/NewMessageForm";

function Dialogs(props) {


// Arrays of messages and dialogs, we pass it to our <Dialog /> component via props
    let messagesElements = props.messages.map(message => <Message key={message.chatId} message={message.message}/>);
    let dialogsElements = props.contacts.map(contact => <Dialog key={contact.id} id={contact.id} name={contact.name}/>);


    return (<div className={classes.dialogs}>
            <div className={classes.contacts}>
                <ul>
                    {dialogsElements}
                </ul>

            </div>
            <div className={classes.chat}>
                <div className={classes.message}>
                    {messagesElements}
                </div>
            </div>
            <div className={classes.NewMessageForm}>
                <NewMessageForm  updateMessage={props.updateMessage} sendMessage={props.sendMessage} newMessageText={props.newMessageText} />
            </div>
        </div>)
};


export default Dialogs;