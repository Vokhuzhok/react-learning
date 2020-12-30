import { createSelector } from "reselect"

const getUsersSmall = (state) => {
   return state.usersPage.users
}

export const getUsers = createSelector(getUsersSmall, 
    (users) => {
        return users.filter (u => true)
}) //Усложнено для примера сложного селектора из библиотеки

export const getPageSize = (state) => {
    return state.usersPage.pageSize
}

export const getUsersCount = (state) => {
    return state.usersPage.usersCount
}

export const getCurrentPage = (state) => {
    return state.usersPage.currentPage
}

export const getIsFetching = (state) => {
    return state.usersPage.isFetching
}