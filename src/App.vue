<template>
  <header>
    <router-link to="/">
      <div class="wrapper">
        <img src="./assets/MovieNest.png" alt="MovieNest logo">
        <span>MovieNest</span>
      </div>
    </router-link>
  </header>
  <main>
    <router-view />
  </main>
  <footer></footer>
</template>

<style lang="scss">
$base-color: #fff2e2;
$darker-base-color: #e5caac;
$dark-base: #2e2e2e;
$contrast-color: #638666;

  * {
    box-sizing: border-box;
    margin: 0;
    padding: 0;
    font-family: 'Winky Sans', sans-serif;
    color: #2e2e2e;
    font-size: 30px;

    body {
      background-color: $base-color;
    }

    a {
      text-decoration: none;
    }
  
    header{
      position: relative;
      background: linear-gradient(to right, #59795c, #4f6b52, $contrast-color, #739275, #829e85);

      .wrapper {
        display: flex;
        gap: 10px;
        justify-content: center;
        align-items: center;
        padding: 3% 0px;

        img {
          width: 10%;
        }

        span {
          font-size: 2.2rem;
          font-weight: 800;
          color: #fff2e2;
          -webkit-text-stroke: 4px black;
        }
      }
    }

    header::before, header::after {
      content: '';
      position: absolute;
      width: 100%;
      height: 20px;
      -webkit-mask-image: url("./assets/background_triangle.svg");
      -webkit-mask-size: 50px 20px;
      background: $base-color;
    }

    header::after {
      transform: rotate(.5turn);
      bottom:0;
    }


    /*h1 {
      position: relative;
      top: 30px;
    }*/
  
  
    /*header {
      display: flex;
      justify-content: center;
      align-items: center;
      text-align: center;
  
    }*/
  }


</style>
