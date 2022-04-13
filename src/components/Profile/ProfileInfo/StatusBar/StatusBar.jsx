import {useState} from "react";
import classes from "./StatusBar.module.css";

const StatusBar = (props) => {
    const [editMode, setEditMode] = useState(false);
    const [status, setStatus] = useState("Please enter your status");
    const toggleEditMode = () => {
        setEditMode(!editMode);
    };
    return (
        <div>
            {editMode
                ?<input className={classes.input} onDoubleClick={toggleEditMode} autoFocus={true} onChange={e => setStatus(e.target.value)} value={status} />
                : <h5 onDoubleClick={toggleEditMode}> {status} </h5>
            }

        </div>
    )
}

export default StatusBar;