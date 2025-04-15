<template>
  <div class="home" ref="topRef">
    <form @submit.prevent="SearchMovies()" class="search-box">
      <input type="text" placeholder="Search for inspiration for watching..." v-model="search">
      <button type="submit" class="search-button">
        <i class="fas fa-search"></i>
      </button>
    </form>

    <h1 v-if="searchedTitle"> Results for <span>{{ searchedTitle }}</span></h1> <!--if search value is a title for movie in OMDb-->
    <div class="movies-list" v-if="movies.length > 0"> <!--checking if any title was searched-->
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
      <div class="up-container">
        <button @click="scrollUp" class="up-icon" type="button"><span class="material-symbols-outlined">arrow_upward</span></button>
      </div>
    </div>
    <NotFound v-else-if="searchedTitle"></NotFound>
  </div>
</template>

<script>
// @ is an alias to /src
import env from '@/env.js';
import { ref } from 'vue';
import NotFound from '@/views/NotFound.vue';

export default {
  methods: {
    scrollUp() {
      this.$refs.topRef?.scrollIntoView({behavior:"smooth"}); //goes back to element with ref atribute / reactive reference to pointed element
    }
  },

  components: {
    NotFound
  },

  setup() {
    const search = ref(""); //refrence to search
    const searchedTitle = ref("") //stores searched title
    const movies = ref([]);

    const SearchMovies = () => {
      if(search.value != "") {
        searchedTitle.value = search.value;
        //console.log(search.value);
        fetch(`https://www.omdbapi.com/?s=${search.value}&apikey=${env.apikey}`)
          .then(response => response.json())
          .then(data => {
            //console.log(data);
            movies.value = data.Search || []; //array of movies (or empty array if there are no results)
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
      transition: 0.1s;
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

  h1, span {
    font-size: 1.8rem;
  }

  h1 {
    margin-top: 4%;
    text-align: center;

    span {
      text-decoration: underline;
    }
  }

  .movies-list {
    display: flex;
    flex-wrap: wrap;
    margin: 4% 8px;

    .movie {
      max-width: 50%;
      flex: 1 1 50%;
      padding: 16px 8px;
      
      .movie-link {
        display: flex;
        flex-direction: column;
        height: 100%;

        .product-image {
          position: relative;
          
          img {
            display: block;
            width: 50%;
            height: 600px;
            object-fit: cover;
            margin: 0 auto;
            border: 4px $dark-base solid;
            transition: 0.4s ease;
          }

          img:hover {
            transform: scale(1.1);
          }

          .type {
            position: absolute;
            padding: 4px 12px;
            background-color: $darker-base-color;
            bottom: 16px;
            left: 28%;
            transform: translateX(-50%);
            text-transform: uppercase;
            -webkit-box-shadow: 0px 8px 22px -2px rgba(46, 46, 46, 1);

          }
        }

        .detail {
          width: 50%;
          background-color: $contrast-color;
          margin: 0 auto;
          flex: 1 1 100%;
          padding: 12px 8px;
          border: 4px $dark-base solid;

          h3 {
            color: #fff2e2;
            font-size: 1rem;
          }

          p {
            color: $base-color;
            font-size: 0.5rem;
          }
        }
      }
    }

    .up-container {
      display: flex;
      justify-content: flex-end;
      margin-top: 2%;
      width: 100%;
      padding: 0px 4%;
      
      .up-icon {
        cursor: pointer;
        border: $dark-base 2px solid;
        border-radius: 50%;
        width: 80px;
        height: 80px;
        background-color: #91c496;
  
        span {
          font-size: 1.5rem;
          font-weight: bold;
          padding: 2px;
        }
      }
    }
  }

  @media (max-width: 435px) {
    body {
      margin-bottom: 30%;
    }

    .search-box {
      input[type="text"] {
      width: 80%;
      height: 40px;
      font-size: 0.6rem;
    }

    .search-button {
      i {
        font-size: 1.1rem;
        color: $contrast-color;
        -webkit-text-stroke: 3px $dark-base;
      }
      }
    }

    h1, span {
    font-size: 1.3rem;
  }

    .movies-list {
      //margin-bottom: 20%;
    .movie {
      .movie-link {
        .product-image {
          img {
            width: 100%;
            height: 275px;
          }
        }
        .detail {
          width: 100%;
        }
      }
    }

    .up-container {
      margin-top: 8%;
      justify-content: center;
    }
  }
  }

</style>