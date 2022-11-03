<template>
  <div>
  <v-container>
    
    <div class="mt-10 mb-5 mx-5 hidden-lg-and-up ">
      <v-card elevation="10">
        
        <v-carousel cycle :show-arrows="true" dark  height="250" hide-delimiters>
              <!-- <v-responsive :aspect-ratio="16/9"> -->
            <!-- hide-delimiters -->
            <v-carousel-item
              v-for="(item,i) in items_small"
              :key="i"
              :src="item.src"
              lazy-src="https://picsum.photos/id/11/10/6"
            ></v-carousel-item>
          </v-carousel>
      </v-card>
    </div>

    <v-row class="mt-10 mb-5 mx-5 hidden-md-and-down">
      <v-col lg="4" sm="12">
        <v-card elevation="10" class="mx-2">
          <v-carousel cycle :show-arrows="false" dark  hide-delimiters height="400">
            <v-carousel-item
              v-for="(item,i) in items_left"
              :key="i"
              :src="item.src"
              lazy-src="https://picsum.photos/id/11/10/6"
            ></v-carousel-item>
          </v-carousel>
        </v-card>
      </v-col>
      <v-col lg="8" sm="12">
        <v-card elevation="10" class="mx-2">
          <v-carousel cycle :show-arrows="false" dark height="400">
            <!-- hide-delimiters -->
            <v-carousel-item
              v-for="(item,i) in items_right"
              :key="i"
              :src="item.src"
              lazy-src="https://picsum.photos/id/11/10/6"
            ></v-carousel-item>
          </v-carousel>
        </v-card>
      </v-col>
    </v-row>

    <div class="white--text  body-1  dark my-7 mx-5 hidden-lg-and-up"
          v-for="(item,i) in careers"
          :key="i">
      <div class="font-weight-black">{{item.title}} </div>
      <div class="text-subtitle-1">{{item.heading}} </div>
      <div class="text-body-1">{{item.descrption}}
        <a href='https://mp.weixin.qq.com/s/H-d6C5EIm3Z2ZfqaCdmEwQ' class="white--text">{{item.link}}</a>
          {{item.descrption2}}
      </div>
    </div>

  </v-container>

  <!-- <v-container> -->
  <v-timeline class="mx-15 px-15 mt-0 mb-10 hidden-md-and-down">
    <v-timeline-item
      v-for="item in careers"
      :key="item.title"
    >
      <template v-slot:icon>
        <v-avatar>
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
        <v-card-text>
          {{item.descrption}}
          <a href='https://mp.weixin.qq.com/s/H-d6C5EIm3Z2ZfqaCdmEwQ'>{{item.link}}</a>
          {{item.descrption2}}
          </v-card-text>
      </v-card>
    </v-timeline-item>
  </v-timeline>

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
      items_left: [
      {
        src: require("../../static/photo6.jpg"),
      },
    ],
    items_right: [
      {
        src: require("../../static/photo5.jpg"),
      },
      {
        src: require("../../static/photo2.jpg"),
      },
      {
        src: require("../../static/photo3.jpg"),
      },
    ],
    items_small: [
      {
        src: require("../../static/photo6.jpg"),
      },
      {
        src: require("../../static/photo5.jpg"),
      },
      {
        src: require("../../static/photo2.jpg"),
      },
      {
        src: require("../../static/photo3.jpg"),
      },
    ],

    careers: [
      {
        title: "Midfielder, Soccer, 2014 -- 2018",
        icon: "mdi-soccer",
        heading: "Captain of school soccer team",
        descrption: "I transferred to soccer after watching Brazil World Cup. As the captain of the school soccer team, I helped our school win two runner-ups in the city game, and finally, we won the championship in 2018",
        link: "(the report I wrote)",
        descrption2: "I scored the penalty to equalize the score in the semi-final. In the final, I contributed an assist via my corner kick, which broke the deadlock of the contest. After that, we successfully maintained the 1:0 to the end. Congrats!"
      },
      {
        title: "Point Guard, Basketball, 2012 -- 2014",
        icon: "mdi-basketball",
        heading: "Member of school basketball team (if existed)",
        descrption: "It was the second year after LeBron came to Miami Heat when I started to play basketball. My favorite basketball player at that time was Chris Paul (as for now, Stephen Curry, for sure). I usually played basketball with senior middle school students (typically 2+ years older than me). I was good at defense, especially stealing. My best offensive weapon was the floater."
      },
      {
        title: "400m, Runner, 2009 -- 2012",
        icon: "mdi-run",
        heading: "Member of school team of track and field",
        descrption: "I won 1st place in  200m and 400m races in school games in 2009, far exceeding my original expectations. After that, I entered the school team of track and field. Through months of training, I finally won 6th place in the 400m race in the city games, with the time being 68s (U11)."
      },

    ],
  }),
}
</script>
