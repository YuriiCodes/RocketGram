import {connect} from "react-redux";
import UsersAPIComponent from "./UsersAPIComponent/UsersAPIComponent";
import {
    followAC,
    setCurrentPageAC, setLastPaginationElementAC,
    setPaginationArrayAC,
    setTotalUsersCountAC,
    setUsersAC, toggleIsFetchingAC,
    unfollowAC
} from "../../data/usersReducer";


let mapStateToProps = (state) => {
    return{
        users: state.usersPage.users,
        currentPage: state.usersPage.currentPage,
        usersPerPage: state.usersPage.usersPerPage,
        totalUsersCount: state.usersPage.totalUsersCount,
        currentPaginationArray: state.usersPage.currentPaginationArray,
        lastPaginationElement: state.usersPage.lastPaginationElement,
        isFetching: state.usersPage.isFetching,
    }
}

let mapDispatchToProps = (dispatch) => {
    return {
        follow: (userId) => {
            dispatch(followAC(userId))
        },
        unfollow: (userId) => {
            dispatch(unfollowAC(userId))
        },
        setUsers: (users) => {
            dispatch(setUsersAC(users))
        },
        changePage: (pageNumber) => {
            dispatch(setCurrentPageAC(pageNumber))
        },
        setTotalUsersCount: (totalUsersCount) => {
            dispatch(setTotalUsersCountAC(totalUsersCount))
        },
        setCurrentPaginationArray: (currentPaginationArray) => {
            dispatch(setPaginationArrayAC(currentPaginationArray))
        },
        setLastPaginationElement: (lastPaginationElement) => {
            dispatch(setLastPaginationElementAC(lastPaginationElement))
        },
        toggleIsFetchig: (isFetching) => {
            dispatch(toggleIsFetchingAC(isFetching))
        }
    }
}
export default connect(mapStateToProps, mapDispatchToProps)(UsersAPIComponent);