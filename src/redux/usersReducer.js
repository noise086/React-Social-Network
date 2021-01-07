import { usersAPI } from "../api/api";
import { updateObjInArray } from "../utils/helper";

const FOLLOW = 'FOLLOW';
const UNFOLLOW = 'UNFOLLOW';
const SET_USERS = 'SET-USERS';
const SET_CURRENT_PAGE = 'SET-CURRENT-PAGE';
const TOGGLE_PRELOADER = 'TOGGLE-PRELOADER';
const TOGGLE_FOLLOWING_IN_PROGRESS = 'TOGGLE-FOLLOWING-IN-PROGRESS';

export const onFollow = (userId) => ({ type: FOLLOW, userId })
export const onUnfollow = (userId) => ({ type: UNFOLLOW, userId })
export const setUsers = (users, totalCount) => ({ type: SET_USERS, users, totalCount })
export const setCurrentPage = (pageId) => ({ type: SET_CURRENT_PAGE, pageId })
export const togglePreloader = (isLoaded) => ({ type: TOGGLE_PRELOADER, isLoaded })
export const toggleFollowingInProgress = (inProgress, userId) => ({ type: TOGGLE_FOLLOWING_IN_PROGRESS, inProgress, userId })



let initialState = {
    users: [],
    totalCount: 0,
    pageSize: 50,
    currentPage: 6,
    isLoaded: false,
    inProgress: false,
    followingInProgress: []
};

const usersReducer = (state = initialState, action) => {

    switch (action.type) {
        case 'FOLLOW':
            return {
                ...state,
                users: updateObjInArray(state.users, action.userId, 'id', {followed: true})
            }

        case 'UNFOLLOW':
            return {
                ...state,
                users: updateObjInArray(state.users, action.userId, 'id', {followed: false})
            }

        case 'SET-USERS':
            return {
                ...state,
                users: [...action.users],
                totalCount: action.totalCount

            }
        case 'SET-CURRENT-PAGE':
            return {
                ...state,
                currentPage: action.pageId
            }
        case 'TOGGLE-PRELOADER':
            return {
                ...state,
                isLoaded: action.isLoaded
            }
        case 'TOGGLE-FOLLOWING-IN-PROGRESS':
            return {
                ...state,
                followingInProgress: action.inProgress
                    ? [...state.followingInProgress, action.userId]
                    : state.followingInProgress.filter(id => id !== action.userId)
            }
        default:
            return state
    }

}



export const getUsersTC = (currentPage, pageSize) => async (dispatch) => {
    dispatch(togglePreloader(true));
    let data = await usersAPI.getUsers(currentPage, pageSize)
    dispatch(setUsers(data.items, data.totalCount));
    dispatch(togglePreloader(false));
}

export const setToggleUnFollow = (id) => async (dispatch) => {
    followUnfollow(dispatch, id, usersAPI.setUnFollow, onUnfollow)

}


export const setToggleFollow = (id) => async (dispatch) => {
    followUnfollow(dispatch, id, usersAPI.setFollow, onFollow)
}


const followUnfollow = async (dispatch, id, methodAPI, actionCreator) => {
    dispatch(toggleFollowingInProgress(true, id))
    let data = await methodAPI(id)
    if (data.resultCode === 0) {
        dispatch(actionCreator(id))
        dispatch(toggleFollowingInProgress(false, id))
    }
}

export default usersReducer;