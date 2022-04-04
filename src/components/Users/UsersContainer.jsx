import {connect} from "react-redux";
import UsersAPIComponent from "./UsersAPIComponent/UsersAPIComponent";
import {
    follow,
    setCurrentPage, setLastPaginationElement,
    setPaginationArray,
    setTotalUsersCount,
    setUsers, toggleIsFetching, toggleIsFollowingInProgress,
    unfollow
} from "../../data/usersReducer";


let mapStateToProps = (state) => {
    return {
        users: state.usersPage.users,
        currentPage: state.usersPage.currentPage,
        usersPerPage: state.usersPage.usersPerPage,
        totalUsersCount: state.usersPage.totalUsersCount,
        currentPaginationArray: state.usersPage.currentPaginationArray,
        lastPaginationElement: state.usersPage.lastPaginationElement,
        isFetching: state.usersPage.isFetching,
        followingInProgress: state.usersPage.followingInProgress
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
    toggleIsFollowingInProgress
})(UsersAPIComponent);