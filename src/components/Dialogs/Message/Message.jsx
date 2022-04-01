import  classes from "./Message.module.css";
function Message(props) {
    return (<div><p className={classes.singleMessage}>{props.message}</p></div>);

}

export default Message;