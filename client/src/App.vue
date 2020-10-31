<template>
  <!-- <div id="app" data-spy="scroll" data-target=".site-navbar-target" data-offset="300"> -->
  <div id="app">
    <div class="wrapper">
      <!-- <div id="overlayer"></div>
    <div class="loader">
      <div class="spinner-border text-primary" role="status">
        <span class="sr-only">Loading...</span>
      </div>
      </div>-->

      <div>
        <Header />
      </div>
      <router-view />
    </div>
  </div>
</template>

<script>
import Header from "./components/Header.vue";
export default {
  components: {
    Header,
  },
  created() {
    
  },
};
</script>
<style>
body {
  background-color: white;
  font-family: "Nunito", Arial, Helvetica, sans-serif;
  overflow-x: hidden !important;
  margin: 0px !important;
  padding: 0px !important;
}
* {
  text-decoration: none !important;
  color: rgb(46, 56, 49);
}
.nav-custom {
  position: fixed;
  z-index: 1000;
  top: 0;
  right: 0;
  left: 0;
  height: 80px;
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
  padding: 0 25px 0 25px;
  background-color: white;
  box-shadow: 0 19px 38px rgba(0, 0, 0, 0.1);
  border-bottom-left-radius: 10px;
  border-bottom-right-radius: 10px;
}
.nav-custom .link a {
  margin-right: 25px;
  font-size: 16px;
  font-weight: 600;
  color: lightslategray;
}
.nav-custom .link .minilink {
  color: teal;
}
.nav-custom h4 {
  font-size: 22px;
  color: teal;
  font-weight: bold;
  margin-left: 25px;
}

.landing {
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
  padding: 0 10px 0 10px;
  height: 100vh;
  margin: 40px;
}
.landing-image .illustration {
  width: 600px;
  height: 600px;
}
.landing-text h1 {
  font-size: 6vw;
  margin: 0 !important;
}
.landing-text h3 {
  font-size: 20px;
  margin: 6px !important;
  opacity: 0.3;
  line-height: 30px;
}
.landing-text .btn {
  width: 200px;
  margin-top: 30px;
  font-size: 1.2vw;
  padding: 14px 20px 14px 20px;
  color: white;
  background-color: teal;
  border-radius: 45px;
  text-align: center;
}
.landing-text .btn a {
  font-size: 1.2vw;
  color: white;
}

.about {
  height: 600px;
  padding: 50px;
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
}
.about-text {
  position: relative;
  left: 110px;
}
ol {
  list-style: none;
}
ol li {
  font-size: 34px;
  position: relative;
  margin-bottom: 20px;
  border-bottom: 1px solid lightgrey;
}
li p {
  font-size: 16px;
  padding-left: 60px;
  line-height: 30px;
  opacity: 0.6;
}
.about-text .illustration {
  width: 500px;
  height: 600px;
}

.info-section {
  height: 600px;
}
.info-header {
  text-align: center;
  margin-bottom: 40px;
}
.t,
img {
  position: relative;
  border-radius: 50%;
  object-fit: cover;
}
.card {
  margin: auto;
  margin-bottom: 140px;
  padding: 10px;
  width: 350px;
  height: 300px;
  background-color: white;
  box-shadow: 0 1rem 3rem rgba(0, 0, 0, 0.175);
  border-radius: 25px;
}
.paragarph-center {
  text-align: center;
}
.circle-photo {
  box-shadow: 0 1rem 3rem rgba(0, 0, 0, 0.175) !important;
  margin: -100px 0px 0px 75px;
  width: 184px;
  height: 184px;
  border-radius: 100%;
  border: 2px solid white;
  position: relative;
}
.title {
  margin-top: 20px;
}
.ps {
  margin: 100px;
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;
}
.control-ps {
  position: relative;
}
.footer {
  background-color: teal;
  margin-top: 400px;
  height: 100px;
  display: flex;
  flex-direction: column;
  align-items: center;
  padding-bottom: 20px;
}
.footer-link a {
  margin: 20px;
  font-size: 16px;
  font-weight: 600;
  color: white;
}

@media only screen and (max-width: 700px) {
  .nav-custom {
    flex-direction: column;
    justify-content: space-around;
    padding: 30px;
    height: auto;
    overflow-y: hidden;
  }

  .nav-custom h4 {
    font-size: 6vw;
    margin-top: 10px;
    margin-bottom: 14px;
    margin-left: 0;
  }

  .nav-custom .link a {
    margin: 10px;
    font-size: 12px;
    font-weight: 600;
  }

  .landing {
    flex-direction: column-reverse;
    height: 880px;
    align-items: center;
    justify-content: center;
    margin: 20px;
  }
  .landing-text {
    margin: 0;
  }
  .landing-text h1 {
    font-size: 6vw;
    margin: 0 !important;
  }
  .landing-text h3 {
    font-size: 16px;
  }
  .landing-text .btn {
    float: left;
    margin: 0 auto;
    width: 100px;
  }
  .landing-text .btn a {
    font-size: 3vw;
  }
  .landing-image .illustration {
    width: 60vw;
    height: 250px;
  }

  .about {
    height: auto;
    padding: 0px;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
  }
  .about-text {
    left: 0px;
  }
  .about-text h1 {
    font-size: 5vw;
  }
  .about-text .illustration {
    width: 55vw;
    top: 10px;
    left: -30px;
    position: absolute;
  }
  ol li {
    font-size: 26px;
  }
  li p {
    font-size: 14px;
  }
  .info-section {
    height: auto;
  }
  .footer {
    padding-bottom: 40px;
    margin: 0;
  }
  .footer-link a {
    margin: 5px;
    font-size: 14px;
  }
  .card {
    width: 250px;
  }
  .circle-photo {
    margin: -100px 0px 0px 24px;
  }
  .ps {
    margin: 120px 0 0 0;
  }
}
</style>
