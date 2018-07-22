export const state = () => ({
  activeIndex: 0,
  hoverIndex: null,
})

export const getters = {
  getActiveIndex(state) {
    return state.activeIndex
  },

  getHoverIndex(state) {
    return state.hoverIndex
  },
}

export const mutations = {
  setActiveIndex(state, index) {
    state.activeIndex = index
  },

  setHoverIndex(state, index) {
    state.hoverIndex = index
  },
}
