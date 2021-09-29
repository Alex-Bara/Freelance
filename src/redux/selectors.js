
export const isFetching = (state) => {
    return state.findWork.isFetching;
}

export const isLogined = (state) => {
    return state.auth.isLogined;
}
export const initialized = (state) => {
    return state.app.initialized;
}

