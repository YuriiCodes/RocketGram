import classes from "./Users.module.css";
import User from "./User/User";
import React from "react";

function Users(props) {
    let amountOfPages = Math.ceil(props.totalUsersCount / props.usersPerPage);
    return (
        <div className={classes.users}>
            <div className={classes.paginationMenu}>
                <div className={classes.pagination}>
                    {props.currentPaginationArray.map(p => <span
                        className={props.currentPage === p ? classes.active : ""}
                        onClick={() => props.onPageChange(p, amountOfPages)}> {p} </span>)}
                    <span>...</span>
                    <span
                        className={props.currentPage === props.lastPaginationElement ? classes.active : ""}
                        onClick={() => props.onPageChange(props.lastPaginationElement, amountOfPages)}>{props.lastPaginationElement}</span>
                </div>

                <button className={classes.loadUsers} onClick={props.setDefaultUsers}>Get users</button>
            </div>

            {
                props.users.map(u => <User id={u.id} photoUrl={u.photoUrl} followed={u.followed}
                                           fullName={u.name} status={u.status} follow={props.follow}
                                           unfollow={props.unfollow} city="Kyiv" country="Ukraine"
                                           toggleIsFollowingInProgress={props.toggleIsFollowingInProgress}
                                           followingInProgress={props.followingInProgress}
                />)
            }
        </div>
    );
}

export default Users;