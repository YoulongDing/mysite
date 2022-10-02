<template>
  <div class="explore">
    <Navbar />
    <v-parallax src="https://boheimg.com/i/2021/01/07/tyzmcw.png" height="300">
    </v-parallax>

    <!-- <Hotsong /> -->

    <v-container>
      <div align="center" class="my-10 text-h2">
        <span>HOT</span><v-icon right color="red" x-large>mdi-fire</v-icon>
      </div>

      <!-- <div class="text-h5 text-center mt-5"> -->
      <!-- <span>{{ song.name }}</span> -->
      <!-- </div> -->
      <v-divider></v-divider>
      <swiper class="swiper" :options="swiperOption">
        <swiper-slide v-for="song in songs" :key="song.id"
          ><v-card :loading="loading" class="ma-12" elevation="20">
            <template slot="progress">
              <v-progress-linear
                color="deep-purple"
                height="10"
                indeterminate
              ></v-progress-linear>
            </template>

            <v-img :src="`http://${song.cover}`"></v-img>
            <!-- <v-img src="http://127.0.0.1:8000/static/img.svg"></v-img> -->

            <v-card-title>{{ song.name }}</v-card-title>

            <v-card-text>
              <v-row align="center" class="mx-0">
                <v-rating
                  :value="4.5"
                  color="amber"
                  dense
                  half-increments
                  readonly
                  size="14"
                ></v-rating>

                <div class="grey--text ml-4">comments: {{ song.comments }}</div>
              </v-row>

              <div class="my-4 subtitle-1">
                <v-row justify="center">
                  <v-col>{{ song.singer }}</v-col>
                  <v-col class="text-center">{{ song.duration }}</v-col>
                </v-row>
              </div>
            </v-card-text>

            <v-divider class="mx-4"></v-divider>

            <v-card-actions>
              <!-- <v-btn color="deep-purple lighten-2" text @click="reserve">
                Reserve
              </v-btn> -->
            </v-card-actions>
          </v-card></swiper-slide
        >
        <div class="swiper-pagination" slot="pagination"></div>
        <div class="swiper-button-prev" slot="button-prev"></div>
        <div class="swiper-button-next" slot="button-next"></div>
      </swiper>
    </v-container>
    <v-divider></v-divider>
    <!-- Filter -->

    <!-- <v-row class="ma-5" justify="center">
      <v-col cols="12" sm="6" md="4" lg="3">{{ cat.name }} </v-col>
    </v-row> -->
    <Songlist />

    <!-- </v-container> -->
  </div>
</template>

<script>
import Navbar from "@/components/Navbar";
import Songlist from "@/components/Songlist/list";
import Hotsong from "@/components/Songlist/hotsong/hotsong";
import { getCategory } from "@/api/song";

import { Swiper, SwiperSlide } from 'vue-awesome-swiper';
import 'swiper/css/swiper.css';

export default {
  name: "explore",
  components: { Navbar, Songlist, Hotsong, Swiper,SwiperSlide, },
  data() {
    return {
      bgImg: {
        backgroundImage:
          "url(" +
          "https://i.picsum.photos/id/354/1920/1080.jpg?hmac=38AfmYH3I1vOfmdGEaCBG9BB5RQFTzGoBas-GSEICrs" +
          ")",
        height: "200px", //这里一定要设置高度 否则背景图无法显示
        backgroundRepeat: "no-repeat",
      },
      grd: "to bottom, rgba(0,0,0,.6), rgba(0,0,0,.1)",

      swiperOption: {
        slidesPerView: 4,
        spaceBetween: 30,
        pagination: {
          el: ".swiper-pagination",
          clickable: true,
        },
        autoplay: {
          delay: 3000,
          stopOnLastSlide: false,
          disableOnInteraction: false,
        },
        navigation: {
          nextEl: ".swiper-button-next",
          prevEl: ".swiper-button-prev",
        },
      },

      allMenuLabel: [],
      songs: [
        {
          name: "Fly Away",
          singer: "G.E.M. 邓紫棋",
          duration: "03:58",
          album: "摩天动物园",
          language: "Chinese",
          genre: "Pop",
          company: "G Nation",
          "public date": "2019-12-27",
          cover:
            "y.gtimg.cn/music/photo_new/T002R300x300M0000049MVh824D7bM_1.jpg?max_age=2592000",
          comments: "7091",
          lyrics:
            "FLY AWAY - G.E.M. 邓紫棋\n词：G.E.M.邓紫棋\n曲：G.E.M.邓紫棋\n制作人 Producer：G.E.M.邓紫棋/T-Ma 马敬恒\n编曲 Arranged by：陈令韬/欧智/Aichen\n和音 Bvox：G.E.M.邓紫棋\n混音 Mixed by：Richard Furch @ mixHaus studios, Los Angeles\n母带 Mastered by：Randy Merrill @ Sterling Sound\n活在璀璨的世界 说孤独\n通常不被谁理解\n心如刀割 还得笑着\n心痛不敢太直接 我不哭\n痛才纠成了死结\n不断搅合 成了沼泽\n人海里 眼泪注定被掩埋\n我独行 因为被推在局外\n于是热闹比寂寞难耐\n于是灯火越照越苍白\n折断的 那翅膀无处张开\n残喘着 点燃最后的火柴\n对世界我总不能坦白\n那就让我跟自己恋爱\nFLY AWAY FLY AWAY\n在天亮以前远走高飞\nFLY AWAY FLY AWAY\n到哪里才能远离伤悲 FLY AWAY\n我不需要被安慰\n只要找 找到听见的同类\n我的呼唤 微弱却不断\n但听说生活的智慧 是要笑\n笑着被命运支配\n才从孤单 变成无感\n我妒忌 甘于随风的树叶\n多随意 它从不过问世界\n随着季节它自生自灭\n到了时间就归根落叶\n其实我 真不想又生枝节\n所以我 努力地装作不屑\n对世界我总不能坦白\n那就让我跟自己恋爱\nFLY AWAY FLY AWAY\n在天亮以前远走高飞\nFLY AWAY FLY AWAY\n到哪里才能远离伤悲 FLY AWAY\n老天什么时候 才停雨呢\n为何我的伤口 还没愈合\n坚强得像石头 但我心还是难受\n为何愈沉默的舌头 愈感觉苦涩\n手放了吧 就算了吧 把过去当垃圾\n就算蚂蚁再用力爬 不曾被重视吧\n从来不被谁过问的问号\n该如何面对自己 此刻我只想要\nFly Away 让寂寞的我\nFly Away 往梦里面躲\n你的世界根本就不属于我\n我越多话欲说 就越显得愚拙\n就算此刻的我再狼狈\n我勒住自己不再淌泪\n根本就不属于我 就当作没遇过\nFLY AWAY FLY AWAY\n在天亮以前远走高飞\nFLY AWAY FLY AWAY\n到哪里才能远离伤悲 FLY AWAY",
        },
        {
          name: "24 Hours",
          singer: "Shawn Mendes",
          duration: "02:30",
          album: "Wonder (Deluxe)",
          language: "English",
          genre: "Pop",
          company: "Shawn Mendes LP4-5 PS/ Island",
          "public date": "2020-12-07",
          cover:
            "y.gtimg.cn/music/photo_new/T002R300x300M000002ix3Iw3yLTQK_1.jpg?max_age=2592000",
          comments: "18",
          lyrics:
            "24 Hours - Shawn Mendes (肖恩·蒙德兹)\nLyrics by：Shawn Mendes/Scott Harris/Nate Mercereau/Thomas Hull\nComposed by：Shawn Mendes/Scott Harris/Nate Mercereau/Thomas Hull\nAll it'd take is 24 hours\nSign the check and the place is ours\nIt's a little soon\nBut I want to come home to you\nI don't know how does it go\nI promise that I love you\nSo I'll bet it all on me and you\nI'll bet it all you're bulletproof\nLet's go away our back up plans\nAnd people might not understand\nAnd who cares about what they approve\nI'll face them all to be with you\nAll it'd take is 24 hours\nSign the check and the place is ours\nIt's a little soon\nBut I want to come home to you\nAll it'd take is 24 hours\nWe could dance you could throw the flowers\nIt's a little soon\nBut I want to come home to you\nI heard that once a wise man said\n\"Only fools go rushing in\"\nBut I'm not the type to overthink\nWhen something feels so right\nAnd I promise that we met for love\nI paint the world that you deserve\nEvery color you'd imagine\nI can't wait for it to happen 'cause\nAll it'd take is 24 hours\nSign the check and the place is ours\nIt's a little soon\nBut I want to come home to you\nAll it'd take is 24 hours\nWe could dance you could throw the flowers\nIt's a little soon\nBut I want to come home to you\nI heard that once a wise man said\n\"Only fools go rushing in\"\nBut I'm not the type\nI'm not the type\nTo overthink\nOverthink\nI'm not the type to overthink\nAll it'd take is 24 hours\nSign the check and the place is ours\nIt's a little soon\nBut I want to come home to you\nAll it'd take is 24 hours\nSign the check and the place is ours\nIt's a little soon\nBut I want to come home to you",
        },
        {
          category: "Rock of European and American",
          name: "Mouth of the River",
          singer: "Imagine Dragons",
          duration: "03:41",
          album: "Evolve",
          language: "English",
          genre: "Alternative",
          company: "UMG",
          "public date": "2017-06-23",
          cover:
            "y.gtimg.cn/music/photo_new/T002R300x300M0000019j13c2H7dWD_1.jpg?max_age=2592000",
          comments: "236",
          lyrics:
            "Mouth of the River - Imagine Dragons (梦龙)\nWritten by：Dan Reynolds/Wayne Sermon/Ben McKee/Daniel Platzman/Timothy Randolph Edgar\nOh the mouth of the river\nOh the mouth of the river\nOh the mouth of the river\nI wanna live a life like that\nLive the life of the faithful one\nWanna bow to the floor\nWith everybody else wanna be someone\nI wanna make some love\nI don't want no enemies\nOh it's the curse of the man\nAlways living life living life living just to please\nOh the mouth of the river\nAnd the wrath of the giver\nWith the hands of a sinner\nOh the mouth of the river woah\nOh the mouth of the river woah\nAnd the wrath of the giver woah\nWith the hands of a sinner woah\nOh the mouth of the river\nOh I'm alkaline\nI'm always keeping to the basics\nI'm overboard\nI'm self-destructive\nAnd self-important\nAnd I'm anxious\nOh I'm self-assured\nI'm nervous\nAnd I'm pacing oh I'm pacing\nOh the mouth of the river\nAnd the wrath of the giver\nWith the hands of a sinner\nOh the mouth of the river woah\nOh the mouth of the river woah\nAnd the wrath of the giver woah\nWith the hands of a sinner woah\nOh the mouth of the river\nOh the mouth of the river\nOh the mouth of the river\nAnd I am going under\nOh I am going under\nI am going under\nOh I am going under\nI am going under\nOh I\nOh the mouth of the river\nAnd the wrath of the giver\nWith the hands of a sinner\nOh the mouth of the river woah\nOh the mouth of the river woah\nAnd the wrath of the giver woah\nWith the hands of a sinner woah\nOh the mouth of the river\nOh the mouth of the river\nOh the mouth of the river",
        },
        {
          name: "Lover",
          singer: "Taylor Swift",
          duration: "03:41",
          album: "Lover",
          language: "English",
          genre: "Pop",
          company: "UMG",
          "public date": "2019-08-23",
          cover:
            "y.gtimg.cn/music/photo_new/T002R300x300M000002MRY88057AhY_1.jpg?max_age=2592000",
          comments: "11724",
          lyrics:
            "Lover - Taylor Swift (泰勒·斯威夫特)\nProduced by：Jack Antonoff/Taylor Swift\nWritten by：Taylor Swift\nWe can leave the Christmas lights up 'til January\nThis is our place we make the rules\nAnd there's a dazzling haze\nA mysterious way about you dear\nHave I known you 20 seconds or 20 years\nCan I go where you go\nCan we always be this close\nForever and ever\nAnd ah take me out\nAnd take me home\nYou're my my my my\nLover\nWe could let our friends crash in the living room\nThis is our place\nWe make the call\nAnd I'm highly suspicious that everyone who sees you wants you\nI've loved you 3 summers now honey\nBut I want them all\nCan I go where you go\nCan we always be this close\nForever and ever\nAnd ah take me out\nAnd take me home\nForever and ever\nYou're my my my my\nLover\nLadies and gentlemen will you please stand\nWith every guitar string scar on my hand\nI take this magnetic force of a man\nTo be my lover\nMy heart's been borrowed\nAnd yours has been blue\nAll's well that ends well to end up with you\nSwear to be over dramatic and true to my lover\nAnd you'll save all your dirtiest jokes for me\nAnd at every table I'll save you a seat\nLover\nCan I go where you go\nCan we always be this close\nForever and ever\nAnd ah take me out\nAnd take me home\nForever and ever\nYou're my my my my\nOh you're my my my my\nDarling you're my my my my\nLover",
        },
        {
          category: "Hip-hop of European and American",
          name: "Galway Girl",
          singer: "Ed Sheeran",
          duration: "02:50",
          album: "÷ (Deluxe)",
          language: "English",
          genre: "Pop",
          company: "Warner",
          "public date": "2017-03-03",
          cover:
            "y.gtimg.cn/music/photo_new/T002R300x300M000000chBQY44HBam_1.jpg?max_age=2592000",
          comments: "4375",
          lyrics:
            "Galway Girl - Ed Sheeran (艾德·希兰)\nWritten by：Amy Wadge/Damian McKee/Johnny McDaid/Eamon Murray/Foy Vance/Ed Sheeran/Sean Graham/Niam Dunne/Liam Bradley\nShe played the fiddle in an Irish band\nBut she fell in love with an English man\nKissed her on the neck and then I took her by the hand\nSaid baby I just wanna dance\nI met her on Grafton street right outside of the bar\nShe shared a cigarette with me while her brother played the guitar\nShe asked me what does it mean the Gaelic ink on your arm\nSaid it was one of my friend's songs do you want to drink on\nShe took Jamie as a chaser Jack for the fun\nShe got Arthur on the table with Johnny riding as shot gun\nChatted some more one more drink at the bar\nThen put Van on the jukebox got up to dance you know\nShe played the fiddle in an Irish band\nBut she fell in love with an English man\nKissed her on the neck and then I took her by the hand\nSaid baby I just wanna dance\nWith my pretty little Galway Girl\nYou're my pretty little Galway Girl\nHey\nYou know she beat me at darts and then she beat me at pool\nAnd then she kissed me like there was nobody else in the room\nAs last orders were called was when she stood on the stool\nAfter dancing the Ceili singing to trad tunes\nI never heard Carrickfergus ever sung so sweet\nAcapella in the bar using her feet for a beat\nOh I could have that voice playing on repeat for a week\nAnd in this packed out room swear she was singing to me\nYou know she played the fiddle in an Irish band\nBut she fell in love with an English man\nKissed her on the neck and then I took her by the hand\nSaid baby I just wanna dance\nMy pretty little Galway girl\nMy my my my my my my Galway girl\nMy my my my my my my Galway girl\nMy my my my my my my Galway girl\nNow we've outstayed our welcome and it's closing time\nI was holding her hand her hand was holding mine\nOur coats both smell of smoke whisky and wine\nAs we fill up our lungs with the cold air of the night\nI walked her home then she took me inside\nFinished some Doritos and another bottle of wine\nI swear I'm gonna put you in a song that I write\nAbout a Galway girl and a perfect night\nShe played the fiddle in an Irish band\nBut she fell in love with an English man\nKissed her on the neck and then I took her by the hand\nSaid baby I just wanna dance\nMy pretty little Galway girl\nMy my my my my my my Galway girl\nMy my my my my my my Galway girl\nMy my my my my my my Galway girl\nHey",
        },
        {
          name: "How Long",
          singer: "Charlie Puth",
          duration: "03:17",
          album: "Voicenotes",
          language: "English",
          genre: "Pop",
          company: "Warner",
          "public date": "2018-05-11",
          cover:
            "y.gtimg.cn/music/photo_new/T002R300x300M000001v3NMj3Pi45u_1.jpg?max_age=2592000",
          comments: "9004",
          lyrics:
            "How Long - Charlie Puth (查理·普斯)\nI'll admit I was wrong\nWhat else can I say girl\nCan't you blame my head and not my heart\nI was drunk I was gone\nThat don't make it right but\nPromise there were no feelings involved\nShe said boy tell me honestly\nWas it real or just for show\nShe said save your apologies\nBaby I just got to know\nHow long has this been goin' on\nYou've been creepin' round on me\nWhile you're calling me baby\nHow long has this been goin' on\nYou've been acting so shady\nI've been feeling it lately baby\nI'll admit it's my fault\nBut you gotta believe me\nWhen I say it only happened once\nI try and I try but you'll never see that\nYou're the only one I wanna love\nShe said boy tell me honestly\nWas it real or just for show\nShe said save your apologies\nBaby I just got to know\nHow long has this been goin' on\nYou've been creepin' round on me\nWhile you're calling me baby\nHow long has this been goin' on\nYou've been acting so shady\nI've been feeling it lately baby\nHow long has this been goin' on baby\nYou gonna go tell me now\nShe said boy tell me honestly\nWas it real or just for show\nShe said save your apologies\nBaby I just got to know\nHow long has this been goin' on\nYou've been creepin' round on me\nWhile you're calling me baby\nHow long has this been goin' on\nYou've been acting so shady\nI've been feeling it lately baby\nHow long has this been goin' on\nYou've been creepin' round on me\nHow long has this been goin' on baby\nHow long has this been goin' on\nYou gonna go tell me now\nYou've been acting so shady\nI've been feeling it lately baby",
        },
      ],
    };
  },

  methods: {
    getMenu() {
      //获取菜单
      getCategory({
        params: {},
      })
        .then((response) => {
          console.log(response);
          this.allMenuLabel = response.data;
        })
        .catch(function(error) {
          console.log(error);
        });
    },
  },
  created() {
    this.getMenu(); //获取菜单
    // this.getHotSearch()//获取热词
    // 更新store数据
    // this.$store.dispatch('setShopList');//获取购物车数据
  },
};
</script>
<style>
.project.complete {
  border-left: 4px solid #3cd1c2;
}
.project.ongoing {
  border-left: 4px solid orange;
}
.project.overdue {
  border-left: 4px solid tomato;
}
.v-chip.complete {
  background: #3cd1c2 !important;
}
.v-chip.ongoing {
  background: orange !important;
}
.v-chip.overdue {
  background: tomato !important;
}
.explore {
  background-color: white;
}
</style>
