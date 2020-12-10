const FOLLOW = 'FOLLOW';
const UNFOLLOW = 'UNFOLLOW';
const SET_USERS = 'SET-USERS';
const SET_CURRENT_PAGE = 'SET-CURRENT-PAGE'

export const followAC = (userId) => ({ type: FOLLOW, userId })
export const unfollowAC = (userId) => ({ type: UNFOLLOW, userId })
export const setUsersAC = (users, totalCount) => ({ type: SET_USERS, users, totalCount })
export const setCurrentPageAC = (pageId) => ({ type: SET_CURRENT_PAGE, pageId })


let initialState = {
    users: [],
    totalCount: 0,
    pageSize: 5,
    currentPage: 2
};

const usersReducer = (state = initialState, action) => {

    switch (action.type) {
        case 'FOLLOW':
            return {
                ...state,
                users: state.users.map(u => {
                    if (u.id === action.userId) {
                        return { ...u, followed: true }
                    }
                    return u
                })
            }

        case 'UNFOLLOW':
            return {
                ...state,
                users: state.users.map(u => {
                    if (u.id === action.userId) {
                        return { ...u, followed: false }
                    }
                    return u
                })
            }

        case 'SET-USERS':
            return {
                ...state,
                users: [ ...action.users ],
                totalCount: action.totalCount

            }
        case 'SET-CURRENT-PAGE':
            return {
                ...state,
                currentPage: action.pageId
            }
        default:
            return state
    }

}

export default usersReducer;