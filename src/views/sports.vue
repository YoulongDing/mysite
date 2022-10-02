<template>
  <div>
    <!-- <v-container> -->
      <v-timeline class="mx-15 px-15">
        <v-timeline-item
          v-for="item in items"
          :key="item.title"
        >
          <template v-slot:icon>
            <v-avatar>
              <!-- <img src="https://i.pravatar.cc/64"> -->
              <v-icon color="white">{{item.icon}}</v-icon>
            </v-avatar>
          </template>
          <template v-slot:opposite>
            <span class="white--text font-weight-bold">{{item.title}}</span>
          </template>

          <v-card class="elevation-2">
            <v-card-title class="text-h5">
              {{item.heading}}
            </v-card-title>
            <v-card-text>{{item.descrption}}</v-card-text>
          </v-card>
        </v-timeline-item>
      </v-timeline>
      
    <!-- </v-container> -->
    <!-- <v-btn to="/About">gggg</v-btn>
    <v-btn to="/projects">ppp</v-btn>
    <v-btn to="/explore">qqq</v-btn> -->
    <!-- <img alt="Vue logo" src="../assets/logo.png"> -->
    <!-- <HelloWorld msg="Welcome to Your Vue.js App"/> -->
  </div>
</template>

<script>
// @ is an alias to /src
// import HelloWorld from '@/components/HelloWorld.vue'


export default {
  name: 'Home',
  components: {
    // Navbar
  },
  data: () => ({
    items: [
      {
        title: "Midfielder, Soccer (2014 -- 2018)",
        icon: "mdi-soccer",
        heading: "Captain of school soccer team",
        descrption: "I started to play soccer after Brazil World Cup, which developed my strong interest in soccer. As the captain of school soccer team, I helped our school won two runner-ups in the city game, and finally, we won the championship in 2018. I scored the penalty to equalize the score in the semi-final. In the final, I contributed an assist via my corner kick, which broke the deadlock of the contest. After that, we successfully maintained the 1:0 to the end. Congrats!"
      },
      {
        title: "Point Guard, Basketball (2012 -- 2014)",
        icon: "mdi-basketball",
        heading: "Member of school basketball team (if existed)",
        descrption: "It was the second year after LeBron came to Miami Heat when I started to play basketball. My best baksetball player at that time was Chris Paul (As for now, Stephen Curry, for sure). I usually played basketball with senior middle school students (typically 2+ years older than me). I was good at defense, especially stealing. My best best offensive weapon was floater."
      },
      {
        title: "400m Runner (2009 -- 2012)",
        icon: "mdi-run",
        heading: "Member of school team of track and field",
        descrption: "I won the 1st place in both 200m and 400m races in school games in 2009, far exceeding my original expectations. After that, I entered the school team of track and field. Through months of training, I finally won the 6th place in the 400m race in the city games, with the time being 68s (U11)."
      },

    ],
  }),
}
</script>
