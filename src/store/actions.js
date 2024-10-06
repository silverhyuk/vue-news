import { fetchNewsList, fetchAskList, fetchJobsList, fetchUserInfo, fetchCommentItem } from '@/api/index.js'

export const actions = {
    FETCH_NEWS({ commit }) {
        fetchNewsList()
            .then(response => {
                commit('SET_NEWS', response.data)
                return response
            })
            .catch(error => console.log(error))
    },
    FETCH_ASK({ commit }) {
        fetchAskList()
            .then(response => {
                commit('SET_ASK', response.data)
                return response
            })
            .catch(error => console.log(error))
    },
    FETCH_JOBS({ commit }) {
        fetchJobsList()
            .then(response => {
                commit('SET_JOBS', response.data)
                return response
            })
            .catch(error => console.log(error))
    },
    FETCH_USER({ commit }, username) {
        fetchUserInfo(username)
            .then(response => commit('SET_USER', response.data))
            .catch(error => console.log(error))
    },
    FETCH_ITEM({ commit }, id) {
        fetchCommentItem(id)
            .then(response => commit('SET_ITEM', response.data))
            .catch(error => console.log(error))
    }
}