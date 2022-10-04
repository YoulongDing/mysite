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

      <div class="white--text  body-1  dark my-7 mx-5 text-justify"
          v-for="(item,i) in awards"
      :key="i">
      <span class="font-weight-black">{{item.title}}. </span>
      <span class="font-weight-medium text-caption">{{item.description}}</span>
      </div>

      <v-divider dark class="my-10"></v-divider>
      
      <!-- ICPC -->
      <v-row>
        <v-col cols="4" class="pl-8">
        <v-card elevation="20">
          <v-img
            lazy-src="https://picsum.photos/id/11/10/6"
            :src="require('../../static/icpc_photo.jpg')"
          ></v-img>
        </v-card>
        </v-col>
        <v-col cols="8" class="px-10">
          <div class="white--text font-weight mt-4 mb-10 text-justify">
            In my spare time, I participated ICPC, the most prestigious programming contest in the world. We were fortunate to win two silver medals in Season 2020 and 2021, respectively.
          </div>
          
          <div class="text-center white--text body-1  dark my-5"
            v-for="(item,i) in awards_icpc"
            :key="i">
            <v-chip
              color="white"
              outlined
            >
              <v-icon left>
                mdi-medal
              </v-icon>
              <span class="font-weight-black">{{item.title}}</span>
            </v-chip>
          </div>
          <!-- <div class="white--text body-1  dark my-5"
          v-for="(item,i) in awards_icpc"
          :key="i">
          <span class="font-weight-black">{{item.title}}. </span>
          <span class="font-weight-medium text-caption">{{item.description}}</span>
          </div> -->
        </v-col>
      </v-row>



      <v-divider dark class="my-10"></v-divider>

      <div class="white--text  body-1 my-5 font-weight mx-5 text-justify">
      When I was in high school, I participated in <span class="font-weight-black">Chinese Science Olympiads</span> in three different subjects: <span class="font-weight-black">Mathematics</span>, <a href="https://mp.weixin.qq.com/s/FYJYJpRLUmMEfLQ9kQboDw" class="white--text font-weight-black">Physics</a> and 
      <a href="https://mp.weixin.qq.com/s/O1bjpwdin5uIeekOxQTUeg" class="white--text font-weight-black">Informatics</a>
      (the other remaining two are Chemistry and Biology). I was honored to be the first person to simultaneously achieve at least second prizes in all these three competitions in the history of my school. Interestingly, my classmate also achieved it 2 months later than me, and up until now, we are still the only two. Then, I successfully gained entry to <span class="font-weight-black">Peking University's Summer Camp on Informatics</span> of 2018, at which I won the <span class="font-weight-black">Excellent Camper</span>. It turned out that I was the <a href="https://mp.weixin.qq.com/s/uOPIh92K0Dkrs0JF7upb4A" class="white--text font-weight-black">only one</a> in my city to achieve the Excellent Camper among all scientific summer camps held by Peking University that year.
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
      ],
      awards_icpc: [
        { 
          title: 'Silver Medal, ICPC Asia Regional Contest, Jinan site, 2021', 
          description: '', 
        },
        { 
          title: 'Silver Medal, ICPC Asia Regional Contest, Yinchuan site, 2020', 
          description: '', 
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