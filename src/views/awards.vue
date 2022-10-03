<template>
  <div>
    <v-container>
      <!-- <v-card flat v-for="project in projects" :key="project.title">
        <v-layout row wrap :class="`pa-3 project ${project.status}`">
          <v-flex xs12 md6>
            <div class="caption grey--text">Project title</div>
            <div>{{ project.title }}</div>
          </v-flex>
          <v-flex xs6 sm4 md2>
            <div class="caption grey--text">Person</div>
            <div>{{ project.person }}</div>
          </v-flex>
          <v-flex xs6 sm4 md2>
            <div class="caption grey--text">Due by</div>
            <div>{{ project.due }}</div>
          </v-flex>
          <v-flex xs2 sm4 md2>
            <div class="caption grey--text">Status</div>
            <div>{{ project.status }}</div>
          </v-flex>
        </v-layout>
        <v-divider></v-divider>
      </v-card> -->

      <div class="white--text  body-1  dark my-5"
          v-for="(item,i) in awards"
      :key="i">
      <span class="font-weight-bold">{{item.title}}: </span>
      <span>{{item.description}}</span>
      <!-- <v-chip
      color="green"
      text-color="white"
      flat
    >
      Green Chip
    </v-chip> -->
      </div>

      <v-divider dark></v-divider>

      <div class="white--text  body-1 my-5">
      When I was in high school, I participated in <span class="font-weight-bold">Chinese Science Olympiads</span> in three different subjects: <span class="font-weight-bold">Mathematical, Physics </span> and <span class="font-weight-bold">Informatics</span> (the other remaining two are Chemistry and Biology). Interestingly, I was the first one in the history of our school to simultaneously achieve at least second prizes in all these three competitions. Therefore, I successfully gained entry to Peking University's Summer Camp on Informatics of 2018, at which I won the Excellent Camper. It turned out that I was the <a href="https://mp.weixin.qq.com/s/uOPIh92K0Dkrs0JF7upb4A" class="white--text">only one</a> in my city to achieve the Excellent Camper among scientific summer camps held by Peking University that year.
      </div>
      <!-- <div class="white--text  body-1"
          v-for="(item,i) in awards_high"
      :key="i">
      <span class="font-weight-bold">{{item.title}}: </span>
      <span>{{item.description}}</span>
      </div>    -->
    </v-container>
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
      awards: [
        { 
          title: 'National Scholarship in China, 2021', 
          description: 'The highest honor-level scholarship in China, with award rate of 0.2%.', 
        },
        { 
          title: 'Excellent Star of SZU Nomination, 2021', 
          description: 'The highest honor-level scholarship at SZU, with award rate of 0.05%.', 
        },
        { 
          title: 'Silver Medal, ICPC Asia Regional Contest, Jinan site, 2021', 
          description: 'The most prestigious international programming contest.', 
        },
        { 
          title: 'Silver Medal, ICPC Asia Regional Contest, Yinchuan site, 2020', 
          description: 'The most prestigious international programming contest.', 
        },
      ],
      awards_high: [
        { 
          title: "Peking University's Summer Camp on Informatics, Excellent Camper", 
          description: 'Top place in the comprehensive test on Mathematics & Physics basics and programming skills.', 
        },
        { 
          title: "Chinese Mathematical Olympiad, Second Prize (Jiangsu Province)", 
          description: 'As suggests by its name.', 
        },
        { 
          title: "Chinese Physics Olympiad, Second Prize (Jiangsu Province)", 
          description: 'As suggests by its name.', 
        },
        { 
          title: "Chinese Informatics Olympiad, Second Prize (Jiangsu Province)", 
          description: 'Typically known as NOIP.', 
        },
      ]
  })
}
</script>

<style>
.project.complete{
  border-left: 4px solid #3CD1C2;
}
.project.ongoing{
  border-left: 4px solid orange
}
.project.overdue{
  border-left: 4px solid tomato;
}
</style>