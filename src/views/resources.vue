<template>
  <div>
    <v-container>
      <div v-for="(item,i) in items"
      :key="i" class="my-7">
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
          },
          {
            title: "Seminars on Security & Privacy in Machine Learning",
            link: "https://vsehwag.github.io/SPML_seminar/"
          },
        ]
      },
      {
        class: "Lectures",
        subitems: [
          
          {
            title: "(UVa) CS 387: Applied Cryptography",
            link: "https://www.udacity.com/course/cs387"
          },
          {
            title: "(Waterloo) CS 860: Algorithms for Private Data Analysis",
            link: "http://www.gautamkamath.com/CS860-fa2020.html"
          },
          {
            title: "(Columbia) TR's algorithm",
            link: "http://timroughgarden.org/videos.html"
          },
          {
            title: "(MOOC) Zero Knowledge Proofs",
            link: "https://zk-learning.org/"
          },
          {
            title: "(BU) Privacy in Statistics and Machine Learning",
            link: "https://dpcourse.github.io/index.html"
          },
          {
            title: "(Lille) Privacy Preserving Machine Learning",
            link: "http://researchers.lille.inria.fr/abellet/teaching/private_machine_learning_course.html"
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
            title: "(UVA) DEEP LEARNING COURSE (JAX)",
            link: "https://uvadlc.github.io/"
          },
          {
            title: "(UMD) CMSC 828W: Foundations of Deep Learning",
            link: "https://www.cs.umd.edu/class/fall2020/cmsc828W/"
          },

          {
            title: "(UoT) ECE1784H/CSC2559H: Trustworthy Machine Learning",
            link: "https://www.papernot.fr/teaching/f22-trustworthy-ml.html"
          },
          {
            title: "(Cagliari) Machine Learning Security",
            link: "https://unica-mlsec.github.io/mlsec/"
          },
          {
            title: "(Dan Hendrycks) ML Safety",
            link: "https://www.mlsafety.org/"
          },
          {
            title: "(Dan Hendrycks) Center for AI Safety",
            link: "https://safe.ai/"
          },
          {
            title: "(Harvard) CS197: AI Research Experiences",
            link: "https://www.cs197.seas.harvard.edu/"
          },

          {
            title: "(MIT) 6.S965: TinyML and Efficient Deep Learning",
            link: "https://efficientml.ai/"
          },
          {
            title: "(MIT) Missing Semester",
            link: "https://www.youtube.com/watch?v=Z56Jmr9Z34Q&list=PLyzOVJj3bHQuloKGG59rS43e29ro7I57J&index=1"
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
          {
            title: "Apple Security Research",
            link: "https://security.apple.com/"
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
      {
        class: "CTF",
        subitems: [
          {
            title: "CTF Wiki",
            link: "https://ctf-wiki.org/"
          },
          {
            title: "Adworld",
            link: "https://adworld.xctf.org.cn/home/index"
          },
          {
            title: "BUUCTF",
            link: "https://buuoj.cn/situation"
          },
          {
            title: "Jarvisoj",
            link: "https://www.jarvisoj.com/"
          },
          {
            title: "gmpy2, pycryptodome, SageMath",
            link: "https://ctf-wiki.org/"
          }
        ]
      },
      {
        class: "Groups",
        subitems: [
          {
            title: "MPI TCS",
            link: "https://www.mpi-inf.mpg.de/departments/algorithms-complexity"
          },
        ]
      },
      {
        class: "Blockchain",
        subitems: [
          {
            title: "ETHEREUM",
            link: "https://ethereum.org/en/developers/docs/"
          },
        ]
      },
      {
        class: "YouTube videos",
        subitems: [
          {
            title: "For personal development",
            link: "https://twitter.com/MakadiaHarsh/status/1584168092027871233"
          },
          {
            title: "Also for personal development",
            link: "https://twitter.com/stepanhlinka/status/1585617297514823680"
          },
        ]
      },
      {
        class: "Utility",
        subitems: [
          {
            title: "Comic creation",
            link: "https://app.pixton.com/"
          },
          {
            title: "Transfer files",
            link: "https://wetransfer.com/"
          },
          {
            title: "Browser automation",
            link: "https://axiom.ai/"
          },
          
        ]
      },
      
    ]
  })

}
</script>
