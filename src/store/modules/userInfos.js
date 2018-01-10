
const state = {
  loggedIn: false
}

const mutations = {
  login (state, payload) {
    console.log(payload)
  }
}

export default {
  state,
  mutations
}
