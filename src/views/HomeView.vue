<template>
  <div class="home">
    <form @submit.prevent="SearchMovies()" class="search-box">
      <input type="text" placeholder="Search for something to watch..." v-model="search">
      <button type="submit" class="search-button">
        <i class="fas fa-search"></i>
      </button>
    </form>

    <!--Here will be router link for detail page for movies/series-->

    <h1 v-if="searchedTitle"> Results for {{ searchedTitle }}</h1>
    <div class="movies-list">
      <div class="movie" v-for="movie in movies" :key="movie.imdbID">
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
    const searchedTitle = ref("") //stores searched title
    const movies = ref([]);

    const SearchMovies = () => {
      if(search.value != "") {
        searchedTitle.value = search.value;
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
      searchedTitle,
      SearchMovies
    }
  }
}
</script>

<style lang="scss">
$base-color: #fff2e2;
$darker-base-color: #e5caac;
$dark-base: #2e2e2e;
$contrast-color: #638666;

  .search-box {
    display: flex;
    justify-content: center;
    align-items: center;
    gap: 2%;
    margin-top: 4%;

    input[type="text"] {
      display: block;
      border: none;
      background: $dark-base;
      color: white;
      width: 40%;
      height: 50px;
      padding: 1.5%;
      font-size: 0.8rem;
    }

    ::placeholder {
      color: $base-color;
    }

    input[type="text"]:focus {
      box-shadow: 0px 3px 6px rgba(125, 55, 55, 0.2);
      border: 3px solid black;
    }

    .search-button {
      background: none;
      border: none;
      cursor: pointer;

      i {
        font-size: 1.3rem;
        color: $contrast-color;
        -webkit-text-stroke: 3px $dark-base;
      }
    }
  }

</style>