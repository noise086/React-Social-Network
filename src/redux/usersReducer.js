const FOLLOW = 'FOLLOW';
const UNFOLLOW = 'UNFOLLOW';
const SET_USERS = 'SET-USERS'

export const followAC = (userId) => ({type: FOLLOW, userId })
export const unfollowAC = (userId) => ({type: UNFOLLOW, userId })
export const setUsersAC = (users) => ({type: SET_USERS, users })

let initialState = {
    users: [
        {id: 1, avatarUrl: 'https://tulatrud.ru/wp-content/uploads/modnye-avatarki-dlya-vk_3.jpg', name: 'Nikolay', followed: false, status: 'Im a learning React+Redux', location: {country: 'Russia', city: 'Ul\'yanovsk'}},
        {id: 2, avatarUrl: 'https://tulatrud.ru/wp-content/uploads/modnye-avatarki-dlya-vk_3.jpg', name: 'John', followed: true, status: 'Chill at the island', location: {country: 'USA', city: 'Miami'}},
        {id: 3, avatarUrl: 'https://tulatrud.ru/wp-content/uploads/modnye-avatarki-dlya-vk_3.jpg', name: 'Tod', followed: false, status: 'Im just man,  im just men', location: {country: 'Russia', city: 'Ulyanovsk'}}
    ]
};

const usersReducer = (state = initialState, action) => {

    switch (action.type) {
        case 'FOLLOW':
            return {
                ...state,
                users: state.users.map(u => {
                   if (u.id === action.userId) {
                       return {...u, followed: true}
                   }
                   return u
                })
            }
            
        case 'UNFOLLOW':
            return {
                ...state,
                users: state.users.map(u => {
                   if (u.id === action.userId) {
                       return {...u, followed: false}
                   }
                   return u
                })
            }

            case 'SET-USERS':
            return {
                ...state,
                users: [...state.users, ...action.users]
                
            }
        default: 
            return state
    }
    
}

export default usersReducer;