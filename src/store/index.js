import Vuex from 'vuex'
import { mutations } from './mutations.js'
import { actions } from './actions.js'
import { state } from './state.js'
import { getters } from './getters.js'
const store = new Vuex.Store({
  state,
  actions,
  mutations,
  getters,
});

export default store;