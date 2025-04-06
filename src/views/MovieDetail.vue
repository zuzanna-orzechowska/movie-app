<template>
    <div class="movie-detail">
      <div class="left-details">
          <h2>{{ movie.Title }}</h2>
          <p>{{ movie.Year }}</p>
          <img :src="movie.Poster" alt="Movie Poster" class="featured-img">
          <div class="wrapper">
              <div class="bottom-details">
                  <p>{{ movie.Runtime }}</p>
                  <p>{{ movie. Released}}</p>
                  <p>{{ movie.imdbRating }} <span class="material-symbols-outlined">star</span></p>
              </div>
          </div>
      </div>
      <div class="right-details">
          <p class="plot">{{  movie.Plot }}</p>
          <div class="genre-actors-details">
              <p>Cast: {{ movie.Actors }}</p>
              <p class="genre">{{ movie.Genre}}</p>
          </div>
      </div>
    </div>
  </template>
  
  <script>
  import { ref, onBeforeMount } from 'vue';
  import { useRoute} from 'vue-router';
  import env from '@/env.js';
  
  export default {
      setup () {
          const movie = ref({});
          const route = useRoute();
  
          onBeforeMount (() => {
              fetch(`http://www.omdbapi.com/?apikey=${env.apikey}&i=${route.params.id}&plot=full`)
              .then(response => response.json())
              .then(data => {
                  movie.value = data;
              });
          });
  
          return {
              movie
          }
      }
  }
  </script>
  
  <style lang="scss">
  $base-color: #fff2e2;
  $darker-base-color: #e5caac;
  $dark-base: #2e2e2e;
  $contrast-color: #638666;
  
      .movie-detail {
          margin: 4% 2% 4%;
          display: flex;
          flex-wrap: wrap;
          //justify-content: center;
          align-items: center;
          gap: 4%;
          
          .left-details {
             // background-color: plum;
              width: 25%;
              //background-color: pink;
              h2 {
                  font-size: 1.5rem;
              }
          
              p{
                  font-size: 0.8rem;
                  margin-bottom: 4%;
              }
  
              img {
                  width: 100%;
                  -webkit-box-shadow: 0px 8px 22px -2px rgba(46, 46, 46, 1);
              }
          }
  
          .right-details {
             // background-color: aqua;
              background-color: rgba(229, 202, 172,0.6);
              border: solid 2px black;
              width: 60%;
              display: flex;
              align-items: center;
              height: 80%;
              //position: relative;
              flex-wrap: wrap;
             // margin: 0 auto;
              //height: 100vh;
              //right: 30px;
              //margin-top: 12%;
  
              .plot {
                 // margin-top: 16%;
                  //border: solid 2px black;
                  padding: 0px 2%;
                  margin-top: 2%;
                  //background-color: rgba(229, 202, 172,0.6);
                  text-align: justify;
              }
  
              p {
                  font-size: 0.8rem;
              }
  
              .genre-actors-details {
                 // background-color: aquamarine;
                  display: flex;
                  flex-direction: column;
                  gap: 40px;
                  padding-left: 2%;
                  margin-top: 4%;
                  margin-bottom: 2%;
      
                  p {
                      font-size: 0.8rem;
                  }
      
                  .genre {
                      font-size: 0.8rem;
                      font-weight: bold;
                      text-decoration: underline;
                  }
              }
          }
  
  
          .wrapper {
              display: flex;
              flex-direction: column;
              align-items: center;
             // background-color: rebeccapurple;
              .bottom-details {
                  //background-color: pink;
                  display: flex;
                  justify-content: center;
                  gap: 40px;
                  width: 100%;
                  flex-wrap: wrap;
                  margin-top: 4%;
      
                  p,span {
                      font-size: 0.8rem;
                      font-weight: 400;
                      color: #6f6e6e;
                  }
  
                  span {
                      position: relative;
                      top: 4px;
                      left: 2px;
                      font-weight: bold;
                      -webkit-text-stroke: 4px #6f6e6e;
                  }
              }
  
          }
      }
      
  </style>