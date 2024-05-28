<template>
  <div class="home">
    <v-container>
      <!-- <h1 class="text-h2 black--text">Youlong DING</h1>  -->
      <!-- <v-img
      lazy-src="https://picsum.photos/id/11/10/6"
      max-height="150"
      max-width="250"
      src="signature.png"
    ></v-img> -->

    <v-row class="mx-5 mt-5 hidden-sm-and-down">

      <v-col sm="12" md="8" lg="8" class="px-lg-0 px-md-0">
        <div class="black--text body-1 mt-10 mb-5 font-weight-medium mx-0">I am Youlong DING <span class="font-weight-regular">['jǝuló:ŋ diŋ]</span>, currently a first-year CS MSc student at The Hebrew University of Jerusalem, advised by <a href="https://www.cs.huji.ac.il/~ilank/" class="black--text font-weight-bold" target=“_blank”>Ilan Komargodski</a>. I work on cryptography and privacy. </div>
        <!-- I am also a research intern in <a href="https://ai.webank.com/pages/en.html" class="black--text font-weight-bold" target=“_blank”>WeBank AI Group</a>, working on privacy-preserving machine learning.  -->
        <!-- <span class="font-weight-black">
        I am looking for Crypto graduate studies </span> -->

    <div class="mx-0">My <a href="https://drive.google.com/file/d/1U1w6wjkrcHU8t0cIE90f0KNDQjjbME_7/view?usp=sharing" class="black--text font-weight-bold" target=“_blank”>CV</a>.</div>

    <div class="black--text mt-10 mx-3">
      <p class="text-right font-italic">
      Nontrivial enough to be trivially scooped.
      </p>
    </div>
    </v-col>
      <!-- <v-col sm="12" md="8" lg="3" class="pl-10">
        <v-hover v-slot="{ isHovering}">
        <v-card elevation="5">
          <v-img
            lazy-src="https://picsum.photos/id/11/10/6"
            :src="!isHovering ? require('../../static/dylon.jpg'): require('../../static/dylon_old.jpeg')"
          ></v-img>
        </v-card>
        </v-hover>
        </v-col> -->
         <v-col sm="12" md="8" lg="2" class="pl-10">

        <v-card elevation="1">
          <v-img
            lazy-src="https://picsum.photos/id/11/10/6"
            :src="currentImage"
            @mouseover="currentImage = hoverImage"
            @mouseout="currentImage = defaultImage"
          ></v-img>
        </v-card>
        </v-col>
    </v-row>

    <img :src="hoverImage" alt="Preload" style="display: none;">


    <!-- mobile -->

    <div class="black--text body-1  dark my-10 hidden-md-and-up">
        <div class="mx-10 px-10 mt-5">
        <v-card elevation="1">
          <v-img
            lazy-src="https://picsum.photos/id/11/10/6"
            :src="require('../../static/dylon.jpg')"
          ></v-img>
        </v-card>
      </div>


      <div class="black--text body-1 mt-10 mb-5 font-weight-medium mx-5">I am Youlong DING <span class="font-weight-regular">['jǝuló:ŋ diŋ]</span>, currently a first-year CS MSc student at The Hebrew University of Jerusalem, advised by <a href="https://www.cs.huji.ac.il/~ilank/" class="black--text font-weight-bold" target=“_blank”>Ilan Komargodski</a>. I work on cryptography and privacy.</div>

      <div class="mx-0">My <a href="https://drive.google.com/file/d/1U1w6wjkrcHU8t0cIE90f0KNDQjjbME_7/view?usp=sharing" class="black--text font-weight-bold" target=“_blank”>CV</a>.</div>

      <div class="black--text mt-10 mx-5">
      <p class="text-right font-italic">
        Nontrivial enough to be trivially scooped.
      </p>
    </div>
    </div>



    <!-- <div class="black--text body-1 mt-10 mb-5 font-weight-medium mx-5">I am Youlong DING <span class="font-weight-regular">['jǝuló:ŋ diŋ]</span>, currently a fourth-year CS undergrad at Shenzhen University. I am also a research intern in <a href="https://ai.webank.com/pages/en.html" class="black--text font-weight-bold" target=“_blank”>WeBank AI Group</a>. My research interest is in privacy-preserving machine learning. <span class="font-weight-black">I am looking for the PhD postion in 23 Fall </span>(my <a href="https://drive.google.com/file/d/1o-M1Ar_d8M7sLXz5HwJzamGdpcqkEhAW/view?usp=sharing" class="black--text font-weight-bold" target=“_blank”>CV</a>).</div> -->
<!-- 
    <div class="black--text mt-0 mx-5">
      <p class="text-right font-italic">
      Attempting to achieve academic independence tends to be painstaking. The sooner, the better.
      </p>
    </div> -->

    <!-- <v-divider dark class="my-10"></v-divider> -->
    <v-divider class="my-10"></v-divider>

    <div class="black--text body-1 font-weight-medium mx-5">
      <div class="font-weight-bold text-h6">News:</div>
      <ul>
         <li>[May 27, 2024] My paper titled <a href="https://arxiv.org/abs/2305.17633" class="black--text font-weight-black" target=“_blank”>"Delving into Differentially Private Transformer"</a> has been accepted to ICML 2024. See you in Vienna!</li>
        <li>[Nov 11, 2022] My paper titled <a href="https://arxiv.org/abs/2211.01852" class="black--text font-weight-black" target=“_blank”>"Revisiting Hyperparameter Tuning with Differential Privacy"</a> has been accepted to 2022 NeurIPS ML Safety Workshop.</li>
        <li>I have won 2rd place in <a href="https://mlmac.io/" class="black--text font-weight-black" target=“_blank”>MLMAC 2022</a>. See you at <a href="https://satml.org/" class="black--text font-weight-black" target=“_blank”>SATML 2023</a> in February 2023, North Carolina.</li>
      </ul>
    </div>

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
    defaultImage: require('../../static/dylon_cam.jpg'),
    hoverImage: require('../../static/dylon_ch.jpg'), 
    currentImage: require('../../static/dylon_cam.jpg')

  }),
  
  
}
</script>
