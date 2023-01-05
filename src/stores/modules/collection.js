

const collection = {
    namespaced: true,
    state: {
        collections: []
    },
    actions: {
        allColl({ commit }, data) {
            commit("allCollections", data);
        },
    },
    mutations: {
        allCollections(state, data) {
            state.collections = data
        },
    },
}


export default collection