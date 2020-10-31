<template>
  <div>
    <div class="nav-custom">
      <div class="logo">
        <h4>Lini Academy</h4>
      </div>
      <div class="link">
        <a
          href="/#landing"
          @click="changeSelected(1)"
          :class="{ active: selected == 1 }"
          >Beranda</a
        >
        <a
          href="/#about"
          @click="changeSelected(2)"
          :class="{ active: selected == 2 }"
          >Layanan</a
        >
        <a
          href="/#info"
          @click="changeSelected(3)"
          :class="{ active: selected == 3 }"
          >Tentang</a
        >
        <a
          href="/pembicara"
          @click="changeSelected(4)"
          :class="{ active: selected == 4 }"
          >Pembicara</a
        >
        <a v-if="!user" href="#" style="margin:0">
          <button
            class="btn btn-primary mx-auto"
            data-toggle="modal"
            data-target="#loginModal"
          >
            Login
          </button>
        </a>
        <div class="dropdown" v-if="user != null">
          <router-link to="/profile"
          :class="{ active: selected == 5 }"
            >Hi, <span style="color: teal">{{ user.name }}</span></router-link
          >
          <div class="dropdown-content">
            <a @click="logout()">Logout</a>
          </div>
        </div>
        <!-- <a v-else-if="user" href="">Hi, <span style="color: teal">{{user.name}}</span></a> -->
      </div>
    </div>
    <!-- <div class="site-mobile-menu site-navbar-target">
      <div class="site-mobile-menu-header">
        <div class="site-mobile-menu-close mt-3">
          <span class="icon-close2 js-menu-toggle"></span>
        </div>
      </div>
      <div class="site-mobile-menu-body"></div>
    </div>

    <header class="site-navbar py-4 js-sticky-header site-navbar-target" role="banner">
      <div class="container">
        <div class="row align-items-center">
          <div class="col-6 col-md-3 col-xl-4 d-block">
            <h1 class="mb-0 site-logo">
              <a href="index.html" class="text-black h2 mb-0">
                Lini Academy
                <span class="text-primary"></span>
              </a>
            </h1>
          </div>

          <div class="col-12 col-md-9 col-xl-8 main-menu">
            <nav class="site-navigation position-relative text-right" role="navigation">
              <ul class="site-menu main-menu js-clone-nav mr-auto d-none d-lg-block ml-0 pl-0">
                <li>
                  <a href="#home-section" class="nav-link">Home</a>
                </li>
                <li>
                  <a href="#features-section" class="nav-link">Features</a>
                </li>
                <li class="has-children">
                  <a href="#about-section" class="nav-link">About Us</a>
                  <ul class="dropdown arrow-top">
                    <li>
                      <a href="#" target="_blank" class="nav-link">
                        <span class="text-primary">More Free Templates</span>
                      </a>
                    </li>
                    <li>
                      <a href="#our-team-section" class="nav-link">Our Team</a>
                    </li>
                    <li class="has-children">
                      <a href="#">More Links</a>
                      <ul class="dropdown">
                        <li>
                          <a href="#">Menu One</a>
                        </li>
                        <li>
                          <a href="#">Menu Two</a>
                        </li>
                        <li>
                          <a href="#">Menu Three</a>
                        </li>
                      </ul>
                    </li>
                  </ul>
                </li>
                <li>
                  <a href="#testimonials-section" class="nav-link">Testimonials</a>
                </li>
                <li>
                  <a href="#blog-section" class="nav-link">Blog</a>
                </li>
                <li>
                  <a href="#contact-section" class="nav-link">Contact</a>
                </li>
              </ul>
            </nav>
          </div>

          <div class="col-6 col-md-9 d-inline-block d-lg-none ml-md-0">
            <a href="#" class="site-menu-toggle js-menu-toggle text-black float-right">
              <span class="icon-menu h3"></span>
            </a>
          </div>
        </div>
      </div>
    </header>-->
    <!-- LOGIN MODAL -->
    <div
      class="modal fade"
      id="loginModal"
      tabindex="-1"
      aria-labelledby="exampleModalLabel"
      aria-hidden="true"
    >
      <div class="modal-dialog modal-dialog-centered p-3">
        <div class="modal-content">
          <div class="modal-header">
            <h5 class="modal-title mx-auto" id="exampleModalLabel">Login</h5>
            <button
              type="button"
              class="close m-0 p-0"
              data-dismiss="modal"
              aria-label="Close"
            >
              <span aria-hidden="true">&times;</span>
            </button>
          </div>
          <div class="modal-body">
            <div>
              <div class="d-flex flex-column">
                <form>
                  <div class="form-group">
                    <label for="email">Email</label>
                    <input
                      type="email"
                      class="form-control"
                      id="email"
                      placeholder="Email"
                      v-model="email"
                    />
                  </div>
                  <div class="form-group">
                    <label for="password">Password</label>
                    <input
                      type="password"
                      class="form-control"
                      id="password"
                      placeholder="Password"
                      v-model="password"
                    />
                  </div>
                  <button
                    class="btn w-100 btn-primary"
                    @click="login()"
                    data-dismiss="modal"
                    data-backdrop="false"
                  >
                    Masuk
                  </button>
                </form>

                <div class="text-register text-center text-muted delimiter m-2">
                  Belum punya akun?
                  <a
                    data-toggle="modal"
                    data-target="#registerModal"
                    @click="closeModal()"
                    >Daftar</a
                  >
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
    <!-- REGISTER MODAL -->
    <div
      class="modal fade"
      id="registerModal"
      tabindex="-1"
      aria-labelledby="exampleModalLabel"
      aria-hidden="true"
    >
      <div class="modal-dialog modal-dialog-centered p-3">
        <div class="modal-content">
          <div class="modal-header">
            <h5 class="modal-title mx-auto" id="exampleModalLabel">Daftar</h5>
            <button
              type="button"
              class="close m-0 p-0"
              data-dismiss="modal"
              aria-label="Close"
              @click="close()"
            >
              <span aria-hidden="true">&times;</span>
            </button>
          </div>
          <div class="modal-body">
            <div>
              <div class="d-flex flex-column">
                <form>
                  <div class="form-group">
                    <label for="name">Nama</label>
                    <input
                      type="text"
                      class="form-control"
                      id="name"
                      placeholder="Nama"
                      v-model="name"
                    />
                  </div>
                  <div class="form-group">
                    <label for="email">Email</label>
                    <input
                      type="email"
                      class="form-control"
                      id="email2"
                      placeholder="Email"
                      v-model="email"
                    />
                  </div>
                  <div class="form-group">
                    <label for="passowrd">Password</label>
                    <input
                      type="password"
                      class="form-control"
                      id="password2"
                      placeholder="Password"
                      v-model="password"
                    />
                  </div>
                  <button
                    class="btn w-100 btn-primary mb-3"
                    data-dismiss="modal"
                    data-backdrop="false"
                    @click="signup()"
                  >
                    Daftar
                  </button>
                </form>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>
<script>
export default {
  data() {
    return {
      name: null,
      email: null,
      password: null,
    };
  },
  computed: {
    user() {
      return this.$store.getters.USER;
    },
    selected() {
      return this.$store.getters.HEADER
    }
  },
  methods: {
    close(){
      location.reload()
    },
    closeModal() {
      const $ = window.$;
      $("#loginModal").hide();
    },
    login() {
      this.$store.dispatch("LOGIN", {
        email: this.email,
        password: this.password,
      });
    },
    signup() {
      this.$store.dispatch("SIGNUP", {
        name: this.name,
        email: this.email,
        password: this.password,
      });
    },
    logout() {
      this.$store.commit("SET_USER", null)
      location.reload()
    },
    changeSelected(i){
      this.$store.commit("SET_HEADER", i)
    }
  },
};
</script>
<style scoped>
label {
  text-align: left;
}
.btn-primary {
  background: teal;
  border-color: teal;
}
.btn-primary:hover {
  background-color: white;
  border-color: teal;
  color: teal;
}
.modal-content {
  border-radius: 20px;
}
.text-register a {
  color: teal;
}
.active {
  color: teal !important;
}
/* dropdown */
.dropdown {
  position: relative;
  display: inline-block;
}

/* Dropdown Content (Hidden by Default) */
.dropdown-content {
  display: none;
  position: absolute;
  background-color: #f1f1f1;
  min-width: 160px;
  box-shadow: 0px 8px 16px 0px rgba(0, 0, 0, 0.2);
  z-index: 1;
  right: 0;
}

/* Links inside the dropdown */
.dropdown-content a {
  color: black;
  padding: 12px 16px;
  text-decoration: none;
  display: block;
}

/* Change color of dropdown links on hover */
.dropdown-content a:hover {
  background-color: #ddd;
}

/* Show the dropdown menu on hover */
.dropdown:hover .dropdown-content {
  display: block;
}

/* Change the background color of the dropdown button when the dropdown content is shown */
@media only screen and (max-width: 700px) {
  .dropdown:hover .dropdown-content {
    height: 28px;
  }
  .dropdown-content a {
  color: black;
  padding: 5px 5px;
  text-decoration: none;
  display: block;
  margin: 0 !important
}
}
</style>