<!--main component - it contains elements that are visible in all components-->
<template>
  <header>
    <router-link to="/"> <!--link to HomeView component-->
      <div class="wrapper">
        <img src="./assets/MovieNest.png" alt="MovieNest logo">
        <span>MovieNest</span>
      </div>
    </router-link>
  </header>
  <main>
    <router-view></router-view> <!--indicates where main component should be shown-->
  </main>
  <footer>
    <h1 class="footerTxt">Made with ❤️ by <a href="https://github.com/zuzanna-orzechowska">Zuza</a> and <a href="https://github.com/krlpopiel">Adrian</a></h1>
  </footer>
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
        flex-direction: row;
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
  }

  @media (max-width: 435px) {
    header::before, header::after {
      height: 15px;
      -webkit-mask-size: 80px 15px;
    }

    header {
      .wrapper {
        span {
          font-size: 1.2rem;
          -webkit-text-stroke: 2px black;
        }

        img{
          width: 12%;
        }
      }
    }
  }

  footer {
    position: relative;
    background: linear-gradient(to right, #59795c, #4f6b52, $contrast-color, #739275, #829e85);
    height: 100px;

    .footerTxt{
      font-size: 0.7rem;
      position: relative;
      top: 36px;
      color: $base-color;
      -webkit-text-stroke: 1.5px black;
    }

    a{
      font-size: 0.8rem;
      color: $darker-base-color;
    }
  }

  footer::before, footer::after {
      content: '';
      position: absolute;
      width: 100%;
      height: 20px;
      -webkit-mask-image: url("./assets/background_triangle.svg");
      -webkit-mask-size: 50px 20px;
      background: $base-color;
    }

  footer::after {
      transform: rotate(.5turn);
      bottom:0;
    }

@media (max-width: 435px) {
  footer {
    .footerTxt{
      top: 34px;
    }

    margin-bottom: -40px;
  }

  footer::before, footer::after {
      height: 15px;
      -webkit-mask-size: 50px 15px;
    }
}

</style>
