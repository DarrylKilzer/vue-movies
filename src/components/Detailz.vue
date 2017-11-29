<template>
  <div class="details">
    <h1>Movie Detailz</h1>
      <h3>{{title}}</h3>
      <div v-if="imageurl">
        <img :src="'https://image.tmdb.org/t/p/w500/'+ imageurl">
      </div>
  </div>
</template>


<script>
export default {
  name: 'details',
  props: ["title", "imageurl"],
  data(){
    return {}
  },
  computed:{},
  methods:{},
  components:{}
}
</script>


<style scoped>

</style>