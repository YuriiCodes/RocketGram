import React, {useEffect} from "react";
import axios from "axios";
import Users from "./UsersPresentationalComponent/Users";
import Preloader from "../../Common/Preloader/Preloader";
import usersAPI from "../../../api/api";
import {toggleIsFollowingInProgress} from "../../../data/usersReducer";


class UsersAPIComponent extends React.Component {
    componentDidMount() {
        this.getUsers(this.props.currentPage);
        this.props.toggleIsFetchig(true);
    }

    getUsers = (pageNumber) => {
        // axios.get(`https://social-network.samuraijs.com/api/1.0/users?page=${pageNumber}&count=${this.props.usersPerPage}`, {withCredentials: true}).then(res => {
        // axios.get(`https://social-network.samuraijs.com/api/1.0/users?page=${pageNumber}&count=${this.props.usersPerPage}`, {withCredentials: true}).then(res => {
            usersAPI.getUsers(pageNumber, this.props.usersPerPage).then(data => {
            this.props.toggleIsFetchig(false);
            this.props.setUsers(data.items);
            this.props.setTotalUsersCount(data.totalCount);
            let amountOfPages = Math.ceil(this.props.totalUsersCount / this.props.usersPerPage);
            this.props.setLastPaginationElement(amountOfPages - 1);
            console.log(data);
        })
    }
    setDefaultUsers = () => {
        this.props.toggleIsFetchig(false);
        this.props.setUsers([
            {
                id: 1,
                // photoUrl: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR4E_d2WpFzHjpmcjH_Fi4epAj6z4ul2c0BJQ&usqp=CAU",
                photoUrl: "",
                followed: true,
                name: "Igor V",
                status: "I am Igor!",
                location: {city: "Kyiv", country: "Ukraine"}
            },
            {
                id: 2,
                // photoUrl: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR4E_d2WpFzHjpmcjH_Fi4epAj6z4ul2c0BJQ&usqp=CAU",
                photoUrl: "",
                followed: false,
                name: "Ayn R",
                status: "I have shrugged!",
                location: {city: "Washinton", country: "USA"}
            },
        ])
    }
    updatePaginationList = (pageNumber, amountOfPages) => {
        if (pageNumber > 0 && pageNumber < amountOfPages) {
            if (pageNumber + 1 === amountOfPages) {
                this.props.setCurrentPaginationArray([pageNumber - 1, pageNumber]);
                this.getUsers(pageNumber);
                return;
            }
            this.props.setCurrentPaginationArray([pageNumber - 1, pageNumber, pageNumber + 1]);
            this.getUsers(pageNumber);
        }
    }
    onPageChange = (pageNumber, amountOfPages) => {
        this.props.toggleIsFetchig(true);
        this.props.changePage(pageNumber);
        this.updatePaginationList(pageNumber, amountOfPages);
        this.props.setLastPaginationElement(amountOfPages - 1);
    }


    render() {
        return (
            <>
                {this.props.isFetching ? <Preloader /> : null}
                <Users currentPaginationArray={this.props.currentPaginationArray}
                       currentPage={this.props.currentPage}
                       onPageChange={this.onPageChange}
                       lastPaginationElement={this.props.lastPaginationElement}
                       setDefaultUsers={this.setDefaultUsers}
                       users={this.props.users}
                       follow={this.props.follow}
                       unfollow={this.props.unfollow}
                       totalUsersCount={this.props.totalUsersCount}
                       usersPerPage={this.props.usersPerPage}
                       toggleIsFollowingInProgress={this.props.toggleIsFollowingInProgress}
                       followingInProgress={this.props.followingInProgress}
                />

            </>)
    }
}

export default UsersAPIComponent;