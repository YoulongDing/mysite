<template>
  <!-- <v-app
    style="
  background: #3A1C71;
  background: -webkit-linear-gradient(to right, #FFAF7B, #D76D77, #3A1C71);
  background: linear-gradient(to left, #FFAF7B, #D76D77, #3A1C71);
"
  > -->
  <v-app>
    <v-main>
      <router-view />
    </v-main>
  </v-app>
</template>

<script>
export default {
  name: "App",

  components: {},

  data: () => ({
    //
  }),
};
</script>
