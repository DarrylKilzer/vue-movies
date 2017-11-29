import vue from 'vue'
import vuex from 'vuex'
import axios from 'axios'

vue.use(vuex)

let api = axios.create({
  baseURL: 'https://api.themoviedb.org/3/search/movie?api_key=606e6aee588b47993fffe6d9530d07a6&page=1&include_adult=false&query=',
  timeout: 2000
})

var store = new vuex.Store({
  state: {
    movies: [],
    activeMovie: {}
  },
  mutations: {
    setMovies(state, movies) {
      state.movies = movies
    },
    setActiveMovie(state, movie){
      state.activeMovie = movie
    }
  },
  actions: {
    search({ commit, dispatch }, query) {
      api(query)
        .then(res => {
          commit('setMovies', res.data.results)
        })
    },
    setActiveMovie({ commit, dispatch }, movie){
      commit('setActiveMovie', movie)
    }
  }
})

export default store