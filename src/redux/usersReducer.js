const FOLLOW = 'FOLLOW';
const UNFOLLOW = 'UNFOLLOW';
const SET_USERS = 'SET-USERS';
const SET_CURRENT_PAGE = 'SET-CURRENT-PAGE';
const TOGGLE_PRELOADER = 'TOGGLE-PRELOADER';

export const onFollow = (userId) => ({ type: FOLLOW, userId })
export const onUnfollow = (userId) => ({ type: UNFOLLOW, userId })
export const setUsers = (users, totalCount) => ({ type: SET_USERS, users, totalCount })
export const setCurrentPage = (pageId) => ({ type: SET_CURRENT_PAGE, pageId })
export const togglePreloader = (isLoaded) => ({ type: TOGGLE_PRELOADER, isLoaded })



let initialState = {
    users: [],
    totalCount: 0,
    pageSize: 5,
    currentPage: 2,
    isLoaded: true
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
        case 'TOGGLE-PRELOADER':
            return {
                ...state,
                isLoaded: action.isLoaded
            }
        default:
            return state
    }

}

export default usersReducer;