import classes from "./NewMessageForm.module.css"
import {messageChangeActionCreator, sendMessageActionCreator} from "../../../data/dialogsReducer";


function NewMessageForm(props) {

    let onSendMessage = (e) => {
        e.preventDefault();
        props.sendMessage();
    }

    let onMessageChange = (e) => {
        props.updateMessage(e.target.value);

    }
    return (
        <form className={classes.form} onSubmit={onSendMessage}>
            <input  type="text" onChange={onMessageChange} value={props.newMessageText}
                   className={classes.input}/>
            <button onClick={onSendMessage} className={classes.submit}>
                Send
            </button>
        </form>
    )
}

export default NewMessageForm;