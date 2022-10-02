<template>
  <nav>
    
    <v-row justify="center" class="my-5">
        <v-avatar size="100" class="grey lighten-2">
          <img src="/tintin.jpeg" />
        </v-avatar>
      </v-row>
      <!-- <v-row justify="center">
        <p class="white--text headline mt-1">{{ username }}</p>
      </v-row> -->
      <!-- <v-row justify="center" class="my-4">
        <Popup @projectAdded="snackbar = true" />
      </v-row> -->

      <v-list color="rgba(255,255,255,0)" rounded>
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
      </v-list>
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
        action: "mdi-school",
        items: [{ title: "Data Structure", route: "/education/datastructure" }],
        title: "Education",
      },
      {
        action: "mdi-music",
        items: [
          { title: "music store", route: "/explore" },
          { title: "shop cart", route: "/shopcart" },
        ],
        title: "Music",
      },
    ],

    urls: [
      { icon: "mdi-linkedin", to: 'https://www.linkedin.com/in/Youlong-ding-2368701a6/'},
      { icon: "mdi-github", to: 'https://github.com/YoulongDing'},
      { icon: "mdi-twitter", to: 'https://twitter.com/DylonTin'},
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
