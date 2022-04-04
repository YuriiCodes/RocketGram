const FOLLOW = "FOLLOW";
const UNFOLLOW = "UNFOLLOW";
const SET_USERS = "SET_USERS";
const CHANGE_PAGE = "CHANGE_PAGE";
const SET_TOTAL_USERS_COUNT = "SET_TOTAL_USERS_COUNT";
const SET_PAGINATION_ARRAY = "SET_PAGINATION_ARRAY";
const SET_LAST_PAGINATION_ELEMENT = "SET_LAST_PAGINATION_ELEMENT";
const TOGGLE_IS_FETCHING = "TOGGLE_IS_FETCHING";
const TOGGLE_IS_FOLLOWING_IN_PROGRESS = "TOGGLE_IS_FOLLOWING_IN_PROGRESS";
let initialState = {
    users: [],
    currentPage: 1,
    usersPerPage: 5,
    totalUsersCount: 16,
    currentPaginationArray: [1, 2, 3],
    lastPaginationElement: 0,
    isFetching: false,
    followingInProgress: [23261, 23260]
};


const usersReducer = (state = initialState, action) => {
    switch (action.type) {
        case FOLLOW:
            return {
                ...state,
                users: state.users.map(u => {
                    if (u.id === action.userId) {
                        return {...u, followed: true};
                    }
                    return u;
                })
            };
        case UNFOLLOW:
            return {
                ...state,
                users: state.users.map(u => {
                    if (u.id === action.userId) {
                        return {...u, followed: false};
                    }
                    return u;
                })
            };
        case SET_USERS:
            return {...state, users: [...action.users]}
        case CHANGE_PAGE:
            return {...state, currentPage: action.currentPage}
        case SET_TOTAL_USERS_COUNT:
            return {...state, totalUsersCount: action.totalUsersCount}
        case SET_PAGINATION_ARRAY:
            return {...state, currentPaginationArray: [...action.currentPaginationArray]}
        case SET_LAST_PAGINATION_ELEMENT:
            return {...state, lastPaginationElement: action.lastPaginationElement}
        case TOGGLE_IS_FETCHING:
            return {...state, isFetching: action.isFetching}
        case TOGGLE_IS_FOLLOWING_IN_PROGRESS:
            return {
                ...state,
                followingInProgress: action.isFollowing
                    ? [...state.followingInProgress, action.userId]
                    : state.followingInProgress.filter(id => id !== action.userId)
            }
        default:
            return state;
    }
}

// Action Creators
export const setLastPaginationElement = (lastPaginationElement) => ({
    type: SET_LAST_PAGINATION_ELEMENT,
    lastPaginationElement
})
export const follow = (userId) => ({type: FOLLOW, userId});
export const unfollow = (userId) => ({type: UNFOLLOW, userId});
export const setUsers = (users) => ({type: SET_USERS, users});
export const setCurrentPage = (page) => ({type: CHANGE_PAGE, currentPage: page});
export const setTotalUsersCount = (totalUsersCount) => ({type: SET_TOTAL_USERS_COUNT, totalUsersCount});
export const setPaginationArray = (paginationArray) => ({
    type: SET_PAGINATION_ARRAY,
    currentPaginationArray: paginationArray
});
export const toggleIsFetching = (isFetching) => ({type: TOGGLE_IS_FETCHING, isFetching});
export const toggleIsFollowingInProgress = (isFollowing, userId) => ({type: TOGGLE_IS_FOLLOWING_IN_PROGRESS, isFollowing, userId});
export default usersReducer;
