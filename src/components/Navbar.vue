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

    <v-app-bar app dark class="bg" src="https://picsum.photos/1920/1080?random">
      <template v-slot:img="{ props }">
        <v-img
          v-bind="props"
          gradient="to right, rgba(100,115,201,.7), rgba(25,32,72,.7)"
        ></v-img>
      </template>
      <!-- drawer-icon -->
      <v-app-bar-nav-icon
        color="primary"
        @click="Toggledrawer"
      ></v-app-bar-nav-icon>
      <!-- title -->
      <v-toolbar-title class="text-uppercase grey--text">
        <span class="font-weight-light">颠覆</span>
        <span
          class="font-weight
        "
          >{{ username }}</span
        >
      </v-toolbar-title>
      <v-spacer></v-spacer>

      <!-- dropdown menu -->
      <v-menu open-on-hover bottom offset-y>
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
      </v-menu>
      <!-- logout -->
      <v-btn text color="grey" @click="exit"
        ><span>Sign out</span><v-icon right> mdi-exit-to-app </v-icon></v-btn
      >
    </v-app-bar>
    <!-- drawer -->
    <v-navigation-drawer
      v-model="drawer"
      app
      src="https://i.picsum.photos/id/354/1920/1080.jpg?hmac=38AfmYH3I1vOfmdGEaCBG9BB5RQFTzGoBas-GSEICrs"
    >
      <!-- user info -->
      <v-row justify="center" class="my-5">
        <v-avatar size="100" class="grey lighten-2">
          <img src="/avatar-2.png" />
        </v-avatar>
      </v-row>
      <v-row justify="center">
        <p class="white--text headline mt-1">{{ username }}</p>
      </v-row>
      <v-row justify="center" class="my-4">
        <Popup @projectAdded="snackbar = true" />
      </v-row>

      <!-- navigation -->
      <v-list dark rounded>
        <!-- <v-list-item-group v-model="selectedItem" color="primary">
          <v-list-item v-for="link in links" :key="link.id" :to="link.route">
            <v-list-item-action>
              <v-icon>{{ link.icon }}</v-icon>
            </v-list-item-action>
            <v-list-item-content>
              <v-list-item-title> {{ link.txt }}</v-list-item-title>
            </v-list-item-content>
        </v-list-item-group> -->

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
    </v-navigation-drawer>
  </nav>

  <!-- 
    <v-app-bar
      absolute
      color="#6A76AB"color="#43a047"
      dark
      shrink-on-scroll
      prominent
      src="https://picsum.photos/1920/1080?random"
      fade-img-on-scroll
      scroll-target="#scrolling-techniques-3"
    >
      <template v-slot:img="{ props }">
        <v-img
          v-bind="props"
          gradient="to top right, rgba(100,115,201,.7), rgba(25,32,72,.7)"
          gradient="to top right, rgba(55,236,186,.7), rgba(25,32,72,.7)"
        ></v-img>
      </template>

      <v-app-bar-nav-icon></v-app-bar-nav-icon>

      <v-toolbar-title>Title</v-toolbar-title>

      <v-spacer></v-spacer>

      <v-btn icon>
        <v-icon>mdi-magnify</v-icon>
      </v-btn>

      <v-btn icon>
        <v-icon>mdi-heart</v-icon>
      </v-btn>

      <v-btn icon>
        <v-icon>mdi-dots-vertical</v-icon>
      </v-btn>

      <template v-slot:extension>
        <v-tabs align-with-title>
          <v-tab>Tab 1</v-tab>
          <v-tab>Tab 2</v-tab>
          <v-tab>Tab 3</v-tab>
        </v-tabs>
      </template>
    </v-app-bar>
    <v-sheet
      id="scrolling-techniques-3"
      class="overflow-y-auto"
      max-height="600"
    >
      <v-container style="height: 1000px;"></v-container>
    </v-sheet> -->
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
      // {
      //   action: "mdi-ticket",
      //   // items: [{ title: "List Item" }],
      //   title: "Attractions",
      // },
      // {
      //   action: "mdi-silverware-fork-knife",
      //   active: true,
      //   items: [
      //     { title: "Breakfast & brunch" },
      //     { title: "New American" },
      //     { title: "Sushi" },
      //   ],
      //   title: "Dining",
      // },
      {
        action: "mdi-school",
        items: [{ title: "Data Structure", route: "/education/datastructure" }],
        title: "Education",
      },
      // {
      //   action: "mdi-run",
      //   items: [{ title: "List Item" }],
      //   title: "Family",
      // },
      {
        action: "mdi-music",
        items: [
          { title: "music store", route: "/explore" },
          { title: "shop cart", route: "/shopcart" },
        ],
        title: "Music",
      },
      // {
      //   action: "mdi-content-cut",
      //   items: [{ title: "List Item" }],
      //   title: "Office",
      // },
      // {
      //   action: "mdi-tag",
      //   items: [{ title: "List Item" }],
      //   title: "Promotions",
      // },
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
  },
};
</script>
