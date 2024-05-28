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

    <!-- <v-app-bar app :src="require('../../static/bg.png')" flat> -->
    <v-app-bar app flat>
      <!-- drawer-icon -->
      <v-app-bar-nav-icon
        color="black"
        @click="Toggledrawer"
      ></v-app-bar-nav-icon>

      <!-- title -->
      <v-spacer></v-spacer>
      <v-toolbar-title class="black--text title">
        <div  justify="center">
        <span class="font-weight">Youlong</span>
        <span class="font-weight-bold"> DING</span></div>
      </v-toolbar-title> 
      <v-spacer></v-spacer>

    </v-app-bar>

    <v-navigation-drawer
      v-model="drawer"
      app
      color="rgba(255, 255, 255, 0)"
    >

      <v-row justify="center" class="mt-15 mb-3 pt-10">
        <v-avatar size="100" class="grey lighten-2">
          <img :src="require('../../static/tintin.jpeg')" />
          <!-- <img :src="require('../../static/dylon.jpeg')" /> -->
        </v-avatar>
      </v-row>
      
      <v-row justify="center">
      <p class="black--text text-h5 mb-lg-5 mb-sm-1 mb-xs-1 font-weight-medium">Dylon</p>
      </v-row>
      <v-row justify="center">
      <p class="black--text mb-0 font-weight-medium">Jerusalem, Israel</p>
      </v-row>
      <v-row justify="center">
      <p class="black--text subtitle mb-lg-5 mb-sm-1 mb-xs-1 font-weight-regular">dingyoulon@gmail.com</p>
      </v-row>

      <v-row justify="center" class="mb-0">
      <v-btn text color="black" v-for="url in urls" :key="url.id"
         @click="openURL(url.to)" fab
        ><v-icon large> {{ url.icon }} </v-icon></v-btn>
      </v-row>

      <v-row justify="center">
      <!-- <v-list flat dark> -->
      <v-list flat>
      <!-- <v-subheader>REPORTS</v-subheader> -->
      <v-list-item-group
        v-model="selectedItem"
       
        color="black"
      >
        <v-list-item
          v-for="(item, i) in items"
          :key="i"
          :to="item.route"
        >
          <v-list-item-icon>
            <v-icon v-text="item.action"></v-icon>
          </v-list-item-icon>
          <v-list-item-content class="black--text font-weight-medium">
            <v-list-item-title v-text="item.title"></v-list-item-title>
          </v-list-item-content>
        </v-list-item>
      </v-list-item-group>
    </v-list>
      </v-row>
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
        action: "mdi-home",
        title: "HOME",
        route: "/"
      },
      {
        action: "mdi-trophy",
        title: "AWARDS",
        route: "/awards"
      },
      {
        action: "mdi-run-fast",
        title: "SPORTS CAREER",
        route: "/sports"
      },
      {
        action: "mdi-bookmark-box-multiple",
        title: "RESOURCES",
        route: "/resources"
      },
    ],

    urls: [
      { icon: "mdi-twitter", to: 'https://twitter.com/YoulongDING'},
      { icon: "mdi-linkedin", to: 'https://www.linkedin.com/in/Youlong-ding-2368701a6/'},
      // { icon: "mdi-github", to: 'https://github.com/YoulongDing'},
      { icon: "mdi-google", to: 'https://scholar.google.com/citations?user=pNn0l3oAAAAJ&hl=en&oi=ao'},

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
