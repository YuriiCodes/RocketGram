import {useRef, useState, useEffect} from "react";
import classes from "./StatusBar.module.css";

const StatusBar = (props) => {
    const [editMode, setEditMode] = useState(false);
    const [status, setStatus] = useState(props.status);
    const mountedRef = useRef(false);
   
    const toggleEditMode = () => {
        setEditMode(!editMode);
    };
    const handleStatusChange = (e) => {
        setStatus(e.target.value);
    }
    const handleSubmit = (e) => {
        e.preventDefault();
        props.setStatus(status);
        setEditMode(false);
    }
    const newPostInput = useRef(null);
    window.setStatus = props.setStatus;
    return (
        <div>
            {editMode
                // <input className={classes.input} ref={ref} onDoubleClick={toggleEditMode} autoFocus={true} onChange={handleStatusChange} value={status || " "} />
                ?
                <form className={classes.form} onSubmit={handleSubmit} onDoubleClick={handleSubmit} >
                    <input id="postInput" ref={newPostInput}
                           type="text"
                           value={status}
                           onChange={handleStatusChange}
                           className={classes.input}
                           name="postInput"/>
                    <button  className={classes.submit}>
                        Send
                    </button>
                </form>
                : <p onDoubleClick={toggleEditMode}><b>Your status: </b> {status || "Please edit your status"} </p>
            }
        </div>
    )
}

export default StatusBar;