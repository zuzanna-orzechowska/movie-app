<template>
  <div class="home">
    <form @submit.prevent="SearchMovies()" class="search-box">
      <input type="text" placeholder="Search for something to watch..." v-model="search">
      <input type="submit" value="Search">
    </form>

    <!--Here will be router link for detail page for movies/series-->

    <div class="movies-list">
      <div class="movie" v-for="movie in movies" :key="movie.imdbID">
        <!--{{ movie.Title }}-->
         <router-link :to="'/movie/' + movie.imdbID" class="movie-link">
          <div class="product-image">
            <img :src="movie.Poster" alt="Movie Poster" />
            <div class="type">{{ movie.Type }}</div> <!--{} allows to print variable on screen-->
          </div>
          <div class="detail">
            <p class="year">{{ movie.Year }}</p>
            <h3>{{ movie.Title }}</h3>
          </div>
         </router-link>
      </div>
    </div>
  </div>
</template>

<script>
// @ is an alias to /src
import env from '@/env.js';
import { ref } from 'vue';

export default {
  setup() {
    const search = ref(""); //refrence to search
    const movies = ref([]);

    const SearchMovies = () => {
      if(search.value != "") {
        //console.log(search.value); ITS WORKING!
        fetch(`https://www.omdbapi.com/?s=${search.value}&apikey=${env.apikey}`)
          .then(response => response.json())
          .then(data => {
            //console.log(data);
            movies.value = data.Search; //array of movies
            search.value = ""; //reseting what we type in the search box
            console.log(movies.value);
            
          });
      }
    }

    return {
      search,
      movies,
      SearchMovies
    }
  }
}
</script>
