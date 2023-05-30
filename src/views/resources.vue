<template>
  <div>
    <v-container>
      <div v-for="(item,i) in items"
      :key="i" class="my-7">
        <h1 class="text-h4 white--text text-center my-3">{{item.class}}</h1> 
        <div v-for="(subitem,i) in item.subitems"
        :key="i" class="my-3 text-left">
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
        class: "TCS",
        subitems: [
          {
            title: "(CMU) 15751: TCS Toolkit",
            link: "https://www.diderot.one/courses/28"
          },
        ]
      },
      
      {
        class: "Crypto",
        subitems: [
          {
            title: "(UVa) CS 387: Applied Cryptography",
            link: "https://www.udacity.com/course/cs387"
          },
          {
            title: "(MIT) 6.875: Cryptography",
            link: "https://www.youtube.com/watch?v=jDsfV2ohFPs&list=PL6ogFv-ieghe8MOIcpD6UDtdK-UMHG8oH&index=1"
          },
          {
            title: "(TU Graz) CRYPTANALYSIS",
            link: "https://www.iaik.tugraz.at/course/cryptanalysis-705068-sommersemester-2023/"
          },
          {
            title: "a16z crypto",
            link: "https://www.youtube.com/@a16zcrypto/featured"
          },
          {
            title: "(MOOC) Zero Knowledge Proofs",
            link: "https://zk-learning.org/"
          },
          {
            title: "(MOOC) Decentralized Finance",
            link: "https://defi-learning.org/f22"
          },
          { 
            title: "(Bristol) 52 Things Every PhD Student Should Know to do Cryptography",
            link: "http://bristolcrypto.blogspot.com/2014/10/52-things-number-1-different-types-of.html"
          },
          {
            title: "(Wollongong) Journal of WoCrypt",
            link: "https://documents.uow.edu.au/~fuchun/jow.html"
          },
          {
            title: "Understanding Cryptography",
            link: "https://www.crypto-textbook.com/index.php"
          },
          {
            title: "(Waterloo) CrySP Speaker Series on Privacy",
            link: "https://www.youtube.com/playlist?list=PLZbR2QOQNK9EjUXYDUJ0rGfxfP7n_nfmP"
          },
          {
            title: "(BIU) The 13th BIU Winter School on cryptography",
            link: "https://cyber.biu.ac.il/event/the-13th-biu-winter-school-on-cryptography/"
          },
          {
            title: "ETHEREUM Docs",
            link: "https://ethereum.org/en/developers/docs/"
          },
          {
            title: "a16z Crypto Startup School",
            link: "https://www.youtube.com/watch?v=jVehCoqJgYQ&list=PLM4u6XbiXf5oDP6DFeEoNP5K_Epy1RAx4&index=1"
          },
          {
            title: "ZK Podcast",
            link: "https://zeroknowledge.fm/"
          },
          {
            title: "Zama",
            link: "https://www.zama.ai/"
          },
          {
            title: "Awesome-cryptography",
            link: "https://github.com/sobolevn/awesome-cryptography"
          }
        ]
      },
      {
        class: "Privacy",
        subitems: [
          {
            title: "(Waterloo) CS 860: Algorithms for Private Data Analysis",
            link: "http://www.gautamkamath.com/CS860-fa2020.html"
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
            title: "(Katrina Ligett) Differential Privacy and Learning: The Tools, The Results, and The Frontier",
            link: "https://www.youtube.com/watch?v=hoEyvHCRRc8"
          },
          {
            title: "DifferentialPrivacy.org",
            link: "https://differentialprivacy.org/"
          },
        ]
      },
      {
        class: "Machine Learning",
        subitems: [
          {
            title: "Privacy and Security in ML Seminars",
            link: "https://prisec-ml.github.io/"
          },
          {
            title: "Seminars on Security & Privacy in Machine Learning",
            link: "https://vsehwag.github.io/SPML_seminar/"
          },
          {
            title: "TRUSTWORTHY ML INITIATIVE",
            link: "https://www.trustworthyml.org/home"
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
            title: "Learning Bayesian Statistics",
            link: "https://nicholas.carlini.com/writing"
          }
        ]
      },
      {
        class: "Biology",
        subitems: [
          {
            title: "(MIT) 7.00x: Introduction to Biology - The Secret of Life",
            link: "https://learning.edx.org/course/course-v1:MITx+7.00x+3T2022/home"
          },
        
        ]
      },
      {
        class: "Lectures",
        subitems: [
          {
            title: "(Columbia) TR's algorithm",
            link: "http://timroughgarden.org/videos.html"
          },
          {
            title: "(UCSD) DSC 291: Coding Theory",
            link: "https://sites.google.com/ucsd.edu/coding-theory"
          },
          {
            title: "(MIT) Missing Semester",
            link: "https://www.youtube.com/watch?v=Z56Jmr9Z34Q&list=PLyzOVJj3bHQuloKGG59rS43e29ro7I57J&index=1"
          },
          {
            title: "(UCB) CS 287: Advanced Robotics",
            link: "https://people.eecs.berkeley.edu/~pabbeel/cs287-fa19/"
          },
          {
            title: "(MIT) 6.874: Deep Learning in Life Sciences",
            link: "https://www.youtube.com/playlist?list=PLypiXJdtIca5ElZMWHl4HMeyle2AzUgVB"
          },
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
