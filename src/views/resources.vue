<template>
  <div>
    <v-container>
      <div v-for="(item,i) in items"
      :key="i" class="my-10">
        <h1 class="text-h4 white--text text-center my-3">{{item.class}}</h1> 
        <div v-for="(subitem,i) in item.subitems"
        :key="i" class="my-3 text-center">
        <a class="white--text font-weight-medium body-1" target=“_blank” :href=subitem.link>{{subitem.title}}</a>
        </div>
      </div>
      <!-- <v-img
      lazy-src="https://picsum.photos/id/11/10/6"
      max-height="150"
      max-width="250"
      src="signature.png"
    ></v-img> -->

    </v-container>
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
    items:[
      {
        class: "Seminars",
        subitems: [
          {
            title: "Privacy and Security in ML Seminars",
            link: "https://prisec-ml.github.io/"
          }
        ]
      },
      {
        class: "Lectures",
        subitems: [
          
          {
            title: "(UVa) cs387: Applied Cryptography",
            link: "https://www.udacity.com/course/cs387"
          },
          {
            title: "(Waterloo) CS 860: Algorithms for Private Data Analysis",
            link: "http://www.gautamkamath.com/CS860-fa2020.html"
          },
          {
            title: "(BU) Privacy in Statistics and Machine Learning",
            link: "https://dpcourse.github.io/index.html"
          },
          {
            title: "(BIU) The 12th BIU Winter School on Cryptography Advances in Secure Computation",
            link: "https://cyber.biu.ac.il/event/the-12th-biu-winter-school-on-cryptography/"
          },
          {
            title: "(CMU) 10-414/714: Deep Learning Systems",
            link: "https://dlsyscourse.org/"
          },
          {
            title: "(HELSINKI) ProbAI-2022",
            link: "https://www.youtube.com/channel/UCcMwNzhpePJE3xzOP_3pqsw"
          },
          {
            title: "(UMD) CMSC 828W: Foundations of Deep Learning",
            link: "https://www.cs.umd.edu/class/fall2020/cmsc828W/"
          },
          {
            title: "(MIT) 6.S965: TinyML and Efficient Deep Learning",
            link: "https://efficientml.ai/"
          },
        ]
      },
      {
        class: "Talks",
        subitems: [
          {
            title: "(Katrina Ligett) Differential Privacy and Learning: The Tools, The Results, and The Frontier",
            link: "https://www.youtube.com/watch?v=hoEyvHCRRc8"
          }
        ]
      },
      {
        class: "Benchmark Libs",
        subitems: [
          {
            title: "Pythae: VAEs implementation",
            link: "https://github.com/clementchadebec/benchmark_VAE"
          },
          {
            title: "Transformers Tutorials (HuggingFace)",
            link: "https://github.com/NielsRogge/Transformers-Tutorials"
          },
        ]
      },
      {
        class: "Frameworks",
        subitems: [
          {
            title: "CrypTen: a framework for Privacy Preserving Machine Learning built on PyTorch",
            link: "https://github.com/facebookresearch/CrypTen"
          },
          {
            title: "ART: a Python library for Machine Learning Security, i.e., defense and attack",
            link: "https://github.com/Trusted-AI/adversarial-robustness-toolbox"
          },
        ]
      },
      {
        class: "Toolkit",
        subitems: [
          {
            title: "OpenDP",
            link: "https://opendp.org/"
          },
          {
            title: "ART: a Python library for Machine Learning Security, i.e., defense and attack",
            link: "https://github.com/Trusted-AI/adversarial-robustness-toolbox"
          },
        ]
      },
      {
        class: "Blog",
        subitems: [
          {
            title: "Nicholas Carlini",
            link: "https://nicholas.carlini.com/writing"
          },
          {
            title: "DifferentialPrivacy.org",
            link: "https://differentialprivacy.org/"
          },
          {
            title: "BIU",
            link: "http://cyber.biu.ac.il/"
          },
          {
            title: "Machine Learning Research Blog",
            link: "https://francisbach.com/"
          },
        ]
      },
      {
        class: "Podcast",
        subitems: [
          {
            title: "Learning Bayesian Statistics",
            link: "https://nicholas.carlini.com/writing"
          }
        ]
      },
    ]
  })

}
</script>
