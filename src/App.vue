<template>
  <!-- <v-app
    style="
  background: #3A1C71;
  background: -webkit-linear-gradient(to right, #FFAF7B, #D76D77, #3A1C71);
  background: linear-gradient(to left, #FFAF7B, #D76D77, #3A1C71);
"
  > -->
  <v-app>
    <v-main :style="bg">
      <Navbar />
       <router-view />
      <!-- <v-row>
      <v-col cols="2">
        <Navigation />
      </v-col>
      <v-col cols="10">
        <router-view />
      </v-col>
      </v-row> -->
    </v-main>
  </v-app>
</template>

<script>
import Navbar from "@/components/Navbar";
import Navigation from "@/components/Navigation";

export default {
  name: "App",

  components: {Navbar, Navigation},

  data: () => ({
    bg: {
      // background: "url(" + require("/Users/mac/Downloads/bg.png") + ") no-repeat fixed center",
      // height: "100vh",
      // backgroundSize: "cover"

      backgroundImage: "url(" + require("/Users/mac/Downloads/bg.png"),
      backgroundSize: "cover",
      backgroundRepeat: "no-repeat",
      backgroundPosition: "center",
      backgroundAttachment: "fixed",
    }
    //
  }),
};
</script>

<style>
.page-box{

/* background-image: linear-gradient(to right, #f78ca0 0%, #f9748f 19%, #fd868c 60%, #fe9a8b 100%); */
/* background-image: linear-gradient(-60deg, #ff5858 0%, #f09819 40%, #ff5858 80%, #f09819 100%); */
/* background: url('https://i.picsum.photos/id/377/1920/1080.jpg?hmac=QSqCTgRp4aFg8enHBcJvT1qxiAThtGVmq8UL3DaLDuU'); */
/* background: "url(" + require("/Users/mac/Downloads/bg.png") + ")",; */
background-image: "url(" + require("/Users/mac/Downloads/bg.png") + ")",;
background-attachment: "fixed";
min-height: 100%;
background-repeat: "no-repeat";
background-position: center;
background-size: cover;
/* background-image: linear-gradient(60deg, rgba(255,88,88,0.8) 0%, rgba(240,152,25,0.8) 40%, rgba(255,88,88,0.8) 80%, rgba(240,152,25,0.8) 100%); */

/* height: 100vh; */
/* filter: blur(20px); */
/* opacity: 0.8; */
}
</style>