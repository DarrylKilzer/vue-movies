<template>
  <div class="hello">
    <div class="row">
      <div class="col-xs-12">
        <form @submit.prevent="search">
          <input type="text" v-model="query">
          <button type="submit">Search</button>
        </form>
      </div>
      <div class="col-xs-6">
        <h1>Results</h1>
        <div v-for="movie in movies">
          <a @click="setActiveMovie(movie)">{{ movie.title }}</a>
        </div>
      </div>
      <div class="col-xs-6">
        <detailz :title="activeMovie.title" :imageurl="activeMovie.poster_path"></detailz>
        {{activeMovie.title}}
      </div>
    </div>
  </div>
</template>

<script>
  import detailz from './detailz'
  export default {
    name: 'HelloWorld',
    data() {
      return {
        query: ''
      }
    },
    methods: {
      search() {
        this.$store.dispatch('search', this.query)
      },
      setActiveMovie(movie){
        this.$store.dispatch('setActiveMovie', movie)
      }
    },
    computed: {
      movies() {
        return this.$store.state.movies
      },
      activeMovie(){
        return this.$store.state.activeMovie
      }
    },
    components:{
      detailz
    }
  }
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
  h1,
  h2 {
    font-weight: normal;
  }

  ul {
    list-style-type: none;
    padding: 0;
  }

  li {
    display: inline-block;
    margin: 0 10px;
  }

  a {
    color: #42b983;
  }
</style>