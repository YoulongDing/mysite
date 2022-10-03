<template>
  <v-app>
    <v-main :style="bg">
      <Navbar />
       <router-view />
    </v-main>
  </v-app>
</template>

<script>
import Navbar from "@/components/Navbar";

export default {
  name: "App",

  components: {Navbar},

  data: () => ({
    bg: {
      backgroundImage: "url(" + require("../static/bg.png"),
      backgroundSize: "cover",
      backgroundRepeat: "no-repeat",
      backgroundPosition: "center",
      backgroundAttachment: "fixed",
    }
    //
  }),
};
</script>
