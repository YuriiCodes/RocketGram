import {connect} from "react-redux";
import UsersAPIComponent from "./UsersAPIComponent/UsersAPIComponent";
import {
    follow, followThunkCreator, getUsersThunkCreator,
    setCurrentPage, setLastPaginationElement,
    setPaginationArray,
    setTotalUsersCount,
    setUsers, toggleIsFetching, toggleIsFollowingInProgress,
    unfollow, unfollowThunkCreator
} from "../../data/usersReducer";
import {
    getCurrentPage,
    getCurrentPaginationArray, getFollowingInProgress, getIsAuth, getIsFetching, getLastPaginationElement,
    getTotalUsersCount,
    getUsers,
    getUsersPerPage
} from "../../data/usersSelectors";


let mapStateToProps = (state) => {
    return {
        users: getUsers(state),
        currentPage: getCurrentPage(state),
        usersPerPage: getUsersPerPage(state),
        totalUsersCount: getTotalUsersCount(state),
        currentPaginationArray: getCurrentPaginationArray(state),
        lastPaginationElement: getLastPaginationElement(state),
        isFetching: getIsFetching(state),
        followingInProgress: getFollowingInProgress(state),
        isAuth: getIsAuth(state)
    }
}
export default connect(mapStateToProps, {
    // Object with action creators
    follow,
    unfollow,
    setUsers,
    changePage: setCurrentPage,
    setTotalUsersCount,
    setCurrentPaginationArray: setPaginationArray,
    setLastPaginationElement,
    toggleIsFetchig: toggleIsFetching,
    toggleIsFollowingInProgress,
    getUsers: getUsersThunkCreator,
    followThunkCreator,
    unfollowThunkCreator

})(UsersAPIComponent);