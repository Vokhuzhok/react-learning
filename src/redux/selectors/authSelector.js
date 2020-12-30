export const getLogin = (state) => {
    return state.auth.login
}

export const getAuthCheck = (state) => {
    return state.auth.auth
}

export const getAuth = (state) => {
    return state.auth
}

export const getInitialised = (state) => {
    return state.app.initialised
}