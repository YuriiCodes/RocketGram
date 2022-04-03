import classes from "./User.module.css";
import React from "react";
import {NavLink} from "react-router-dom";
function User(props) {
    return (
        <div className={classes.user}>
            <div className={classes.photoAndSubscribe}>
                <div className={classes.avatar}></div>
                <span className={classes.photoUrl}>{props.photoUrl}</span>

                {props.followed ? <button onClick={() => props.unfollow(props.id)}>Unfollow</button> :
                    <button onClick={() => props.follow(props.id)}>Follow</button>}


            </div>

            <div className={classes.userInfo}>
                <div className={classes.userPersonalInfo}>
                    <div>
                        <NavLink to={'/profile/' + props.id}>
                            <span className={classes.name}>{props.fullName}</span>
                        </NavLink>
                    </div>
                    <div>
                        <span className={classes.status}>{props.status}</span>
                    </div>

                </div>
                <div className={classes.userLocation}>
                    <div className={classes.country}>
                        <span>{props.country},</span>

                    </div>
                    <div className={classes.city}>
                        <span >{props.city}</span>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default User