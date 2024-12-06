import { createStore } from 'vuex'

export default createStore({
  state: {
    trains: [
      { id: 1, name: 'Argo Bromo', class: 'eksekutif' },
      { id: 2, name: 'Gajayana', class: 'luxury' },
      { id: 3, name: 'Matarmaja', class: 'ekonomi' },
      { id: 4, name: 'Taksaka', class: 'bisnis' },
      { id: 5, name: 'Bima', class: 'eksekutif' },
    ],
    selectedClasses: [],
  },
  mutations: {
    setSelectedClasses(state, classes) {
      state.selectedClasses = classes
    },
  },
  getters: {
    filteredTrains(state) {
      if (state.selectedClasses.length === 0) return state.trains
      return state.trains.filter((train) => state.selectedClasses.includes(train.class))
    },
  },
})
