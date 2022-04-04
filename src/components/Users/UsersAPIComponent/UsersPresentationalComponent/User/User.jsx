import classes from "./User.module.css";
import React from "react";
import {NavLink} from "react-router-dom";
import axios from "axios";

function User(props) {
    return (
        <div className={classes.user}>
            <div className={classes.photoAndSubscribe}>
                <div className={classes.avatar}></div>
                <span className={classes.photoUrl}>{props.photoUrl}</span>

                {props.followed ? <button onClick={() => {
                    axios.delete(`https://social-network.samuraijs.com/api/1.0/follow/${props.id}`,  {
                        withCredentials: true,
                        headers: {
                            "API-KEY": "f796bcd4-c5a2-4f86-88ad-961815cc5b76"
                        }
                    }).then(response => {
                        if (response.data.resultCode === 0) {
                            props.unfollow(props.id);
                        }
                    });
                    }}>Unfollow</button>:
                    <button onClick={() => {
                        axios.post(`https://social-network.samuraijs.com/api/1.0/follow/${props.id}`, {}, {
                            withCredentials: true,
                            headers: {
                                "API-KEY": "f796bcd4-c5a2-4f86-88ad-961815cc5b76"
                            }
                        }).then(response => {
                            if (response.data.resultCode === 0) {
                                props.follow(props.id)
                            }
                        })
                    }}>Follow</button>}


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
                        <span>{props.city}</span>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default User