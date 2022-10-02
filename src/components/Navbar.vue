<template>
  <nav>
    <!-- snackbar -->
    <v-snackbar v-model="snackbar" top color="success" outlined>
      <v-icon color="success">mdi-check</v-icon>
      Awesome! You added a new project.

      <template v-slot:action="{ attrs }">
        <v-btn color="grey" text v-bind="attrs" @click="snackbar = false">
          <span>Close</span>
        </v-btn>
      </template>
    </v-snackbar>

    <!-- <v-app-bar app dark class="bg" src="https://picsum.photos/1920/1080?random">
      <template v-slot:img="{ props }">
        <v-img
          v-bind="props"
          gradient="to right, rgba(100,115,201,.7), rgba(25,32,72,.7)"
        ></v-img>
      </template> -->
    <v-app-bar app src="bg.png" flat>
      <!-- drawer-icon -->
      <v-app-bar-nav-icon
        color="white"
        @click="Toggledrawer"
      ></v-app-bar-nav-icon>

      <!-- title -->
      <v-spacer></v-spacer>
      <v-toolbar-title class="white--text title">
        <div  justify="center">
        <span class="font-weight">Youlong</span>
        <span class="font-weight-bold"> DING</span></div>
      </v-toolbar-title> 
      <v-spacer></v-spacer>

      <!-- dropdown menu -->
      <!-- <v-menu open-on-hover bottom offset-y>
        <template v-slot:activator="{ on, attrs }">
          <v-btn color="grey" dark text v-bind="attrs" v-on="on">
            <span>Menu</span>
            <v-icon medium>mdi-menu-down</v-icon>
          </v-btn>
        </template>
        <v-list>
          <v-list-item v-for="link in links" :key="link.id" :to="link.route">
            <v-list-item-title>{{ link.txt }}</v-list-item-title>
          </v-list-item>
        </v-list>
      </v-menu> -->
      <!-- logout -->
      <!-- <v-btn text color="grey" @click="exit"
        ><span>Sign out</span><v-icon right> mdi-exit-to-app </v-icon></v-btn
      > -->
      <!-- <v-btn text color="white" v-for="url in urls" :key="url.id"
         @click="openURL(url.to)" fab
        ><v-icon large> {{ url.icon }} </v-icon></v-btn
      > -->
    </v-app-bar>
    
    <!-- <v-row justify="center" class="my-5">
        <v-avatar size="100" class="grey lighten-2">
          <img src="/tintin.jpeg" />
        </v-avatar>
      </v-row>
      <v-row justify="center">
        <p class="white--text headline mt-1">{{ username }}</p>
      </v-row>
      <v-row justify="center" class="my-4">
        <Popup @projectAdded="snackbar = true" />
      </v-row>

      <v-list dark rounded>
        <v-list-group
          v-for="item in items"
          :key="item.title"
          v-model="item.active"
          :prepend-icon="item.action"
          no-action
          color="primary"
        >
          <template v-slot:activator>
            <v-list-item-content>
              <v-list-item-title v-text="item.title"></v-list-item-title>
            </v-list-item-content>
          </template>

          <v-list-item
            v-for="link in item.items"
            :key="link.id"
            :to="link.route"
          >
            <v-list-item-content>
              <v-list-item-title> {{ link.title }}</v-list-item-title>
            </v-list-item-content>
          </v-list-item>
        </v-list-group>
      </v-list> -->


    <v-navigation-drawer
      v-model="drawer"
      app
      color="rgba(255, 255, 255, 0)"
    >

      <v-row justify="center" class="mt-15 mb-3">
        <v-avatar size="100" class="grey lighten-2">
          <img src="/tintin.jpeg" />
        </v-avatar>
      </v-row>
      
      <v-row justify="center">
      <p class="white--text title mt-0">Dylon</p>
      </v-row>
      <v-row justify="center">
      <p class="white--text subtitle mt-1">dingyoulon@gmail.com</p>
      </v-row>

      <v-row justify="center">
      <v-btn text color="white" v-for="url in urls" :key="url.id"
         @click="openURL(url.to)" fab
        ><v-icon large> {{ url.icon }} </v-icon></v-btn>
      </v-row>
      <!-- <v-row justify="center">
        <p class="white--text headline mt-1">{{ username }}</p>
      </v-row>
      <v-row justify="center" class="my-4">
        <Popup @projectAdded="snackbar = true" />
      </v-row> -->

      <v-list flat dark>
      <!-- <v-subheader>REPORTS</v-subheader> -->
      <v-list-item-group
        v-model="selectedItem"
        color="primary"
      >
        <v-list-item
          v-for="(item, i) in items"
          :key="i"
          :to="item.route"
        >
          <v-list-item-icon>
            <v-icon v-text="item.action"></v-icon>
          </v-list-item-icon>
          <v-list-item-content class="white--text">
            <v-list-item-title v-text="item.title"></v-list-item-title>
          </v-list-item-content>
        </v-list-item>
      </v-list-item-group>
    </v-list>
      <!-- <v-list dark rounded>
        <v-list-group
          v-for="item in items"
          :key="item.title"
          v-model="item.active"
          :prepend-icon="item.action"
          no-action
          color="primary"
        >
          <template v-slot:activator>
            <v-list-item-content>
              <v-list-item-title v-text="item.title"></v-list-item-title>
            </v-list-item-content>
          </template>

          <v-list-item
            v-for="link in item.items"
            :key="link.id"
            :to="link.route"
          >
            <v-list-item-content>
              <v-list-item-title> {{ link.title }}</v-list-item-title>
            </v-list-item-content>
          </v-list-item>
        </v-list-group>
      </v-list> -->
    </v-navigation-drawer>
  </nav>

</template>
<script>
import Popup from "@/components/Popup.vue";
export default {
  components: { Popup },
  computed: {
    drawer() {
      return this.$store.state.app.drawer;
    },
    username() {
      return this.$store.state.app.username;
    },
  },
  data: () => ({
    selectedItem: 1,

    items: [
      {
        action: "mdi-music",
        title: "Home",
        route: "/"
      },
      {
        action: "mdi-music",
        title: "Awards",
        route: "/awards"
      },
      {
        action: "mdi-music",
        title: "Sports Career",
        route: "/sports"
      },
      {
        action: "mdi-music",
        title: "Resources",
        route: "/resources"
      },
    ],

    urls: [
      { icon: "mdi-twitter", to: 'https://twitter.com/DylonTin'},
      { icon: "mdi-linkedin", to: 'https://www.linkedin.com/in/Youlong-ding-2368701a6/'},
      { icon: "mdi-github", to: 'https://github.com/YoulongDing'},

    ],

    links: [
      { icon: "mdi-view-dashboard", txt: "Dashboard", route: "/dashboard" },
      { icon: "mdi-folder", txt: "My Projects", route: "/projects" },
      { icon: "mdi-account", txt: "Explore", route: "/explore" },
      { icon: "mdi-account", txt: "Team", route: "/team" },
    ],

    snackbar: false,
  }),
  methods: {
    test() {
      // console.log("tesetetet");
    },
    Toggledrawer() {
      // this.xxxxx({ content: "fff", fn: this.test });
      this.$store.commit("app/SET_drawer");
    },
    exit() {
      this.$store.dispatch("app/exit").then(() => {
        this.$router.push({ name: "Home" });
      });
    },
    openURL(url) {
      window.open(url, "_blank");
      //window.location.href = url : 当前页面重定向
    },
  },
};
</script>
