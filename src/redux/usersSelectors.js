export const stateUsers = (state) => {
    return state.usersPage.users
}

export const stateUsersSuper = (stateUsers, (users) => {
    return users.filter(u => true)
})

export const stateTotalCount = (state) => {
    return state.usersPage.totalCount
}

export const statePageSize = (state) => {
    return state.usersPage.pageSize
}

export const stateCurrentPage = (state) => {
    return state.usersPage.currentPage
}

export const stateIsLoaded = (state) => {
    return state.usersPage.isLoaded
}

export const stateFollowingInProgress = (state) => {
    return state.usersPage.followingInProgress
}