import { fetchUserInfo, fetchCommentItem, fetchList } from '@/api/index.js'

export const actions = {
    FETCH_USER({ commit }, username) {
        fetchUserInfo(username)
            .then(response => commit('SET_USER', response.data))
            .catch(error => console.log(error))
    },
    FETCH_ITEM({ commit }, id) {
        fetchCommentItem(id)
            .then(response => commit('SET_ITEM', response.data))
            .catch(error => console.log(error))
    },
    async FETCH_LIST({ commit }, pageName) {
        const response = await fetchList(pageName)

        commit('SET_LIST', response.data)
        return response
    }
}