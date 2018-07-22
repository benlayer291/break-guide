export const state = () => ({
  inView: false,
})

export const getters = {
  getInView(state) {
    return state.inView
  },
}

export const mutations = {
  setInView(state, inView) {
    state.inView = inView
  },
}
