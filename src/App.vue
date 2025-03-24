<template>
  <header>
    <router-link to="/">
      <h1>Welcome to <span>MovieNest</span></h1>
      <hr>
      <img src="./assets/MovieNest.png" alt="MovieNest logo">
    </router-link>
  </header>
  <main>
    <router-view />
  </main>
  <footer></footer>
</template>

<style lang="scss">
  * {
    box-sizing: border-box;
    margin: 0;
    padding: 0;
    font-family: 'Winky Sans', sans-serif;
    background-color: #f6f2ec;
    color: #2e2e2e;
    font-size: 30px;
  }

  a {
    text-decoration: none;
  }

  h1 {
    position: relative;
    top: 30px;
  }

  hr {
    position: relative;
    top: 40px;
    width: 80%;
    border: #2e2e2e 3px solid;
    border-radius: 6px;
    margin: 0 auto;
  }

  span {
    font-size: 1.1rem;
    font-weight: 800;
    color: #638666;
    -webkit-text-stroke: 2px black;
  }

  img {
    width: 80%;

  }

  header {
    display: flex;
    justify-content: center;
    align-items: center;
    text-align: center;

  }

</style>
