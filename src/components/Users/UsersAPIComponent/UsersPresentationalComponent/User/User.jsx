import classes from "./User.module.css";
import React from "react";
import {NavLink} from "react-router-dom";
import axios from "axios";
import usersAPI from "../../../../../api/api";

function User(props) {
    return (
        <div className={classes.user}>
            <div className={classes.photoAndSubscribe}>
                <div className={classes.avatar}></div>
                <span className={classes.photoUrl}>{props.photoUrl}</span>

                {props.followed ? <button disabled={props.followingInProgress.some(id => id === props.id)}
                                          onClick={() => {

                                              props.toggleIsFollowingInProgress(true, props.id);

                                              usersAPI.unfollow(props.id).then(data => {
                                                  if (data.resultCode === 0) {
                                                      props.unfollow(props.id);
                                                  }
                                                  props.toggleIsFollowingInProgress(false, props.id);

                                              });
                                          }}>Unfollow</button> :
                    <button disabled={props.followingInProgress.some(id => id === props.id)}
                            onClick={() => {
                                props.toggleIsFollowingInProgress(true, props.id);
                                usersAPI.follow(props.id).then(data => {
                                    if (data.resultCode === 0) {
                                        props.follow(props.id)
                                    }
                                    props.toggleIsFollowingInProgress(false, props.id);

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