import {createSelector} from "reselect";

const getUsersPage = state => state.usersPage;

export const getUsers = createSelector(getUsersPage, (usersPage) => {
    return usersPage.users;
});

export const getCurrentPage = state => state.usersPage.currentPage;

export const getUsersPerPage = state => state.usersPage.usersPerPage;

export const getTotalUsersCount = state => state.usersPage.totalUsersCount;

export const getCurrentPaginationArray = state => state.usersPage.currentPaginationArray;

export const getLastPaginationElement = state => state.usersPage.lastPaginationElement;

export const getIsFetching = state => state.usersPage.isFetching;

export const getFollowingInProgress = state => state.usersPage.followingInProgress;

export const getIsAuth = state => state.auth.isAuth;