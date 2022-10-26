<template>
  <div>
    <v-container>

      <div class="white--text  body-1  dark my-7 mx-5"
          v-for="(item,i) in awards"
      :key="i">
      <span class="font-weight-black">{{item.title}}. </span>
      <span class="font-weight-medium text-caption">{{item.description}}</span>
      </div>

      <v-divider dark class="my-10"></v-divider>
      
      <!-- lazy-src="https://picsum.photos/id/11/10/6" -->
      <!-- :src="require('../../static/icpc_photo.jpg')" -->
      <!-- ICPC -->
      <v-row class="mx-5 hidden-sm-and-down">
        <v-col sm="12" md="12" lg="4" class="pl-md-8">
        <v-card elevation="20">
          <v-img
            lazy-src="https://picsum.photos/id/11/10/6"
            :src="require('../../static/icpc_photo.jpg')"
          ></v-img>
        </v-card>
        </v-col>
        <v-col  sm="12" md="12" lg="8" class="px-lg-10 px-md-1">
          <div class="white--text font-weight mt-4 mb-10">
            In my spare time, I participated in <a href="https://icpc.global/" class="white--text font-weight-black" target=“_blank”>ICPC</a>, which is the most prestigious programming contest in the world. We were fortunate to win two silver medals in Season 2020 and 2021, respectively.
          </div>
          

          <div class="text-center white--text body-1  dark my-5"
            v-for="(item,i) in awards_icpc"
            :key="i">
            <v-chip
              color="white"
              outlined>
              <v-icon left>
                mdi-medal
              </v-icon>
              <span class="font-weight-black">{{item.title}}</span>
            </v-chip>
          </div>
        </v-col>
      </v-row>


      <div class="white--text body-1 mx-5  dark my-5 hidden-md-and-up">
        <v-card elevation="20">
          <v-img
            lazy-src="https://picsum.photos/id/11/10/6"
            :src="require('../../static/icpc_photo.jpg')"
          ></v-img>
        </v-card>
        <div class="white--text font-weight mt-6 mb-3">
            In my spare time, I participated in <a href="https://icpc.global/" class="white--text font-weight-black" target=“_blank”>ICPC</a>, which is the most prestigious programming contest in the world. We were fortunate to win two silver medals in Season 2020 and 2021, respectively.
        </div>
        <div
          v-for="(item,i) in awards_icpc"
          :key="i" class=" my-2">
            <span class="font-weight-black">{{item.title}}. </span>
            <span class="font-weight-medium text-caption">{{item.description}}</span>
          </div>
      </div>
      
      <v-divider dark class="my-10"></v-divider>

      <div class="white--text  body-1 my-5 font-weight mx-5">
      When I was in high school, I participated in three <span class="font-weight-black">Chinese Science Olympiads</span>: <span class="font-weight-black">Mathematics</span>, <a href="https://mp.weixin.qq.com/s/FYJYJpRLUmMEfLQ9kQboDw" class="white--text font-weight-black" target=“_blank”>Physics</a> and 
      <a href="https://mp.weixin.qq.com/s/O1bjpwdin5uIeekOxQTUeg" class="white--text font-weight-black" target=“_blank”>Informatics</a>
      (the other remaining two I did not participate in are Chemistry and Biology). I was honored to be the first person in the history of my school to simultaneously achieve at least second prizes in these three competitions. Interestingly, my classmate also unlocked this achievement 2 months later than me, and up until now, we are still the only two. Then, I successfully gained entry to <span class="font-weight-black">Peking University's Summer Camp on Informatics</span> of 2018, at which I won the <span class="font-weight-black">Excellent Camper</span>. It turned out that I was the <a href="https://mp.weixin.qq.com/s/uOPIh92K0Dkrs0JF7upb4A" class="white--text font-weight-black" target=“_blank”>only one</a> in my city to achieve that among all scientific summer camps held by Peking University that year.
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