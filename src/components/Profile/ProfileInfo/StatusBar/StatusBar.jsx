import {useRef, useState} from "react";
import classes from "./StatusBar.module.css";
import NewPostForm from "../../PostsList/newPostForm/newPostForm";

const StatusBar = (props) => {
    const [editMode, setEditMode] = useState(false);
    const [status, setStatus] = useState(props.status);
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
                <form className={classes.form} onSubmit={handleSubmit}>
                    <label htmlFor="postInput">Add new post</label>
                    <input id="postInput" ref={newPostInput}
                           type="text"
                           value={status}
                           onChange={handleStatusChange}
                           className={classes.input}
                           name="postInput"/>
                    <button  className={NewPostForm.submit}>
                        Send
                    </button>
                </form>
                : <h5 onDoubleClick={toggleEditMode}> {status || "Please edit your status"} </h5>
            }
        </div>
    )
}

export default StatusBar;