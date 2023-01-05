

const products = {
    namespaced: true,
    state: {
        products: []
    },
    actions: {
        allPro({ commit }, data) {
            commit("allProducts", data);
        },
    },
    mutations: {
        allProducts(state, data) {
            state.products = data
        },
    },
}


export default products