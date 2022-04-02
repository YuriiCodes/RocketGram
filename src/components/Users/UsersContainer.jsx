import {connect} from "react-redux";
import UsersAPIComponent from "./UsersAPIComponent/UsersAPIComponent";
import {
    followAC,
    setCurrentPageAC, setLastPaginationElementAC,
    setPaginationArrayAC,
    setTotalUsersCountAC,
    setUsersAC,
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
        }
    }
}
export default connect(mapStateToProps, mapDispatchToProps)(UsersAPIComponent);