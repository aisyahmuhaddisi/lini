<template>
  <div class="row">
    <div
      id="sidebar-container"
      class="sidebar-expanded d-none d-md-block col-2"
    >
      <!-- d-* hiddens the Sidebar in smaller devices. Its itens can be kept on the Navbar 'Menu' -->
      <!-- Bootstrap List Group -->
      <ul class="list-group sticky-top sticky-offset">
        <!-- Separator with title -->
        <li
          class="list-group-item sidebar-separator-title text-muted d-flex align-items-center menu-collapsed"
        >
          <small>MENU</small>
        </li>
        <!-- /END Separator -->
        <!-- Menu with submenu -->
        <a
          href="#submenu1"
          data-toggle="collapse"
          aria-expanded="false"
          class="bg-light list-group-item list-group-item-action flex-column align-items-start"
        >
          <div class="d-flex w-100 justify-content-start align-items-center">
            <span class="fa fa-dashboard fa-fw mr-3"></span>
            <span class="menu-collapsed">Dashboard</span>
            <span class="submenu-icon ml-auto"></span>
          </div>
        </a>
        <!-- Submenu content -->
        <div id="submenu1" class="collapse sidebar-submenu">
          <a
            v-if="this.$store.getters.USER.isAdmin == true"
            href="#"
            class="list-group-item list-group-item-action bg-light text-white"
          >
            <router-link :to="{ name: 'Admin' }"
              ><span class="menu-collapsed">Pembicara</span></router-link
            >
          </a>
        </div>
        <!-- <a
          href="#submenu2"
          data-toggle="collapse"
          aria-expanded="false"
          class="bg-light list-group-item list-group-item-action flex-column align-items-start"
        >
          <div class="d-flex w-100 justify-content-start align-items-center">
            <span class="fa fa-user fa-fw mr-3"></span>
            <span class="menu-collapsed">Profile</span>
            <span class="submenu-icon ml-auto"></span>
          </div>
        </a> -->
        <!-- Submenu content -->
        <!-- <div id="submenu2" class="collapse sidebar-submenu">
          <a
            href="#"
            class="list-group-item list-group-item-action bg-light text-white"
          >
            <span class="menu-collapsed">Settings</span>
          </a>
          <a
            href="#"
            class="list-group-item list-group-item-action bg-light text-white"
          >
            <span class="menu-collapsed">Password</span>
          </a>
        </div> -->
        <!-- <a href="#" class="bg-light list-group-item list-group-item-action">
          <div class="d-flex w-100 justify-content-start align-items-center">
            <span class="fa fa-tasks fa-fw mr-3"></span>
            <span class="menu-collapsed">Tasks</span>
          </div>
        </a> -->
        <!-- Separator with title -->
      </ul>
      <!-- List Group END-->
    </div>
    <!-- sidebar-container END -->

    <!-- MAIN -->
    <div class="col py-3">
      <router-view></router-view>
    </div>
    <div class="mobile d-none mx-auto w-75">
      <button class="btn btn-primary w-100">Profil</button>
    </div>
  </div>
</template>
<script>
export default {
  mounted(){
    this.$store.commit("SET_HEADER", 5)
  }
}
</script>
<style scoped>
body {
  padding-top: 56px;
}

.sticky-offset {
  top: 0px;
}

.row {
  margin-top: 80px;
}
#body-row {
  margin-left: 0;
  margin-right: 0;
}
#sidebar-container {
  min-height: 100vh;
  background-color: white;
  padding: 0;
  margin-left: 15px;
}

/* Sidebar sizes when expanded and expanded */
.sidebar-expanded {
  width: 230px;
}
.sidebar-collapsed {
  width: 60px;
}

/* Menu item*/
#sidebar-container .list-group a {
  height: 50px;
  color: white;
}

/* Submenu item*/
#sidebar-container .list-group .sidebar-submenu a {
  height: 45px;
  padding-left: 30px;
}
.sidebar-submenu {
  font-size: 0.9rem;
}

/* Separators */
.sidebar-separator-title {
  background-color: white;
  height: 35px;
}
.sidebar-separator {
  background-color: white;
  height: 25px;
}
.logo-separator {
  background-color: white;
  height: 60px;
}

/* Closed submenu icon */
#sidebar-container
  .list-group
  .list-group-item[aria-expanded="false"]
  .submenu-icon::after {
  content: " \f0d7";
  font-family: FontAwesome;
  display: inline;
  text-align: right;
  padding-left: 10px;
}
/* Opened submenu icon */
#sidebar-container
  .list-group
  .list-group-item[aria-expanded="true"]
  .submenu-icon::after {
  content: " \f0da";
  font-family: FontAwesome;
  display: inline;
  text-align: right;
  padding-left: 10px;
}
@media only screen and (max-width: 700px) {
  #sidebar-container,
  .col {
    display: none;
  }
  .mobile {
    margin-top: 90px;
    display: block !important;
  }
  .btn-primary {
    background: teal;
    color: white;
  }
}
</style>