<template>
  <div>
    <listnav
      :currentCategoryName="currentCategoryName"
      :cateMenu="cateMenu"
      :proNum="proNum"
      :isObject="isObject"
      @on-change="changeMenu"
    ></listnav>
    <v-form ref="form" v-model="valid" lazy-validation>
      <v-container class="ma-5">
        <v-row class="ma-5" justify="center">
          <v-col cols="12" md="2">
            <!-- <v-select
              v-model="Tree"
              :items="Ttreeitems"
              :rules="[(v) => !!v || 'Item is required']"
              :menu-props="{ bottom: true, offsetY: true }"
              label="Tree"
              required
              placeholder="Choose a tree"
            ></v-select>
          </v-col>
          <v-col cols="12" md="2">
            <v-select
              v-model="select"
              :items="items"
              :rules="[(v) => !!v || 'Item is required']"
              :menu-props="{ bottom: true, offsetY: true }"
              label="Type"
              required
              placeholder="Type of operation"
            ></v-select> -->
          </v-col>
          <v-col cols="12" md="4">
            <v-text-field
              v-model="searchWord"
              label="Seach"
              required
              placeholder="Keywords"
            ></v-text-field>
          </v-col>
          <v-col cols="12" md="2">
            <v-text-field
              v-model="pricemin"
              label="minprice"
              required
              placeholder="minprice"
            ></v-text-field>
          </v-col>
          <v-col cols="12" md="2">
            <v-text-field
              v-model="pricemax"
              label="maxprice"
              required
              placeholder="maxprice"
            ></v-text-field>
          </v-col>
          <v-col>
            <v-btn
              class="primary mx-4"
              :loading="loading"
              @click="searchSubmit"
            >
              Go
            </v-btn>
          </v-col>
        </v-row>
        <v-row class="mb-3" v-show="isSearch" justify="center">
          <v-tooltip top>
            <template v-slot:activator="{ on }">
              <v-btn
                small
                raised
                text
                rounded
                color="primary"
                @click="changeSort('price')"
                v-on="on"
              >
                <v-icon left large>mdi-currency-usd</v-icon>
                <span class="caption text-lowercase">Sort by Price</span>
              </v-btn>
            </template>
            <span class="text-h5">Sorts songs by price</span>
          </v-tooltip>

          <v-tooltip top>
            <template v-slot:activator="{ on }">
              <v-btn
                small
                raised
                text
                rounded
                color="primary"
                @click="changeSort('-click_num')"
                v-on="on"
              >
                <v-icon left large>mdi-cursor-default-click</v-icon>
                <span class="caption text-lowercase">By clicks</span>
              </v-btn>
            </template>
            <span class="text-h5">Sorts songs by click numbers</span>
          </v-tooltip>
        </v-row>
      </v-container>
    </v-form>
    <listsong :listData="listData"></listsong>
    <div class="text-center">
      <v-pagination
        v-model="curPage"
        :length="totalPage"
        :total-visible="7"
        circle
        v-show="isSearch"
      ></v-pagination>
    </div>
    <v-row class="ma-5" justify="center" v-if="false">
      <v-col
        cols="12"
        sm="6"
        md="4"
        lg="3"
        v-for="song in songs"
        :key="song.id"
      >
        <v-container>
          <v-card
            :loading="loading"
            class="my-12"
            elevation="20"
            swiperto="/team"
            to="/dashboard"
          >
            <template slot="progress">
              <v-progress-linear
                color="deep-purple"
                height="10"
                indeterminate
              ></v-progress-linear>
            </template>

            <v-img :src="`http://${song.cover}`" :gradient="grd"></v-img>

            <!-- <v-card-title class="text-h5 text-center">{{
              song.name
            }}</v-card-title> -->
            <div class="text-h5 text-center mt-5">
              <span>{{ song.name }}</span>
              <!-- <v-icon right color="red">mdi-fire</v-icon> -->
            </div>
            <v-card-text class="text-center">
              <!-- <div class="text-h5">{{ song.name }}</div> -->
              <div class="subtitle-1">
                {{ song.singer }}
              </div>
              <!-- <div class="grey--text ml-4 body-1">
                comments: {{ song.comments }}
              </div> -->
              <!-- <v-row class="mx-0">
                <v-rating
                  :value="4.5"
                  color="amber"
                  dense
                  half-increments
                  readonly
                  size="14"
                ></v-rating>

                <div class="grey--text ml-4 body-1">
                  comments: {{ song.comments }}
                </div>
              </v-row> -->
            </v-card-text>

            <v-divider class="mx-4"></v-divider>
            <div class="subtitle-1 text-center mt-5">
              <span>{{ song.price }}</span>
              <!-- <v-icon right color="red">mdi-fire</v-icon> -->
            </div>
            <v-card-actions>
              <v-spacer></v-spacer>

              <v-btn icon>
                <v-icon>mdi-heart</v-icon>
              </v-btn>

              <v-btn icon>
                <v-icon>mdi-bookmark</v-icon>
              </v-btn>

              <v-btn icon>
                <v-icon>mdi-share-variant</v-icon>
              </v-btn>
            </v-card-actions>
          </v-card>
        </v-container>
      </v-col>
    </v-row>
  </div>
</template>
<script>
import listnav from "@/components/Songlist/list-nav/list-nav";
import listsong from "@/components/Songlist/song-list/songlist";

import { getCategory, getSong } from "@/api/song";
export default {
  data() {
    // let self = this;
    return {
      curPage: 1, // 页码
      top_category: "", // 商品种类
      listData: [],
      cateMenu: {}, //菜单列表
      isObject: true,
      ordering: "-name",
      proNum: 0, //商品数量
      curLoc: [], //当前位置
      priceRange: [], //价格区间
      pricemin: "", //价格最低
      pricemax: "", //价格最高
      pageType: "list",
      searchWord: "",
      currentCategoryName: "",
      isSearch: false,
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
          name: "One Million Bullets",
          singer: "Sia",
          duration: "04:10",
          album: "This Is Acting",
          language: "English",
          genre: "Pop",
          company: "Sony Music",
          "public date": "2016-01-29",
          cover:
            "y.gtimg.cn/music/photo_new/T002R300x300M000001AI4X719lsax_1.jpg?max_age=2592000",
          comments: "36",
          lyrics:
            "One Million Bullets - Sia (希雅)\nWritten by：Sia Furler \nUnder the moonlight\nWeathering with your warm embrace\nOh-oh-oh-oh-oh\nI feel so safe here\nBaby we're worth the wait\nOh-oh-oh-oh-oh\nYeah I picked the wrong kind\nTime after time\nI drank from the poisoned wine\nYeah I picked the wrong kind\nBut baby you're alright\nYeah baby I seen the light\nOh-oh-oh-oh-oh\nI got a feeling I got a feeling\nDanger is coming a danger is coming\nA danger is coming oh-oh-oh-oh-oh\nOh-oh-oh-oh-oh\nI got a feeling I got a feeling\nThe war has been won here the war has been won here\nHe-he-he-he-he he-he-he-he-he\nOh-oh-oh-oh-oh\nUnder the moonlight under your moonlit gaze\nOh-oh-oh-oh-oh\nI know that I'd take one million bullets babe\nYeah one million bullets can come my way\nOh-oh-oh-oh-oh\nBut I want you to know that I'd take a million babe\nHow many will you take\nHow many will you take\nHow many will you take\nHow many will you take\nCause I'd take one million bullets babe\nIf you were a poet and I was a faultless muse\nOh-oh-oh-oh-oh\nIf you were the hero yeah I'd take a bullet for you\nOh-oh-oh-oh-oh\nSo take me in your arms take me for all I have\nOh-oh-oh-oh-oh\nCause I'd give my life for one of your belly laughs\nI got a feeling I got a feeling\nDanger is coming a danger is coming\nA danger is coming oh-oh-oh-oh-oh\nOh-oh-oh-oh-oh\nI got a feeling I got a feeling\nThe war has been won here the war has been won here\nHe-he-he-he-he he-he-he-he-he\nOh-oh-oh-oh-oh\nUnder the moonlight under your moonlit gaze\nOh-oh-oh-oh-oh\nI know that I'd take one million bullets babe\nYeah one million bullets should come my way\nOh-oh-oh-oh-oh\nBut I want you to know that I'd take a million babe\nHow many will you take\nHow many will you take\nHow many will you take\nHow many will you take\nCause I'd take one million bullets babe",
        },
        {
          name: "不为谁而作的歌",
          singer: "林俊杰",
          duration: "04:25",
          album: "和自己对话 From M.E. To Myself",
          language: "Chinese",
          genre: "Pop",
          company: "Warner",
          "public date": "2015-12-25",
          cover:
            "y.gtimg.cn/music/photo_new/T002R300x300M000004Tvu0F207cps_1.jpg?max_age=2592000",
          comments: "4902",
          lyrics:
            "不为谁而作的歌 (Twilight) - 林俊杰 (JJ Lin)\n词：林秋离\n曲：林俊杰\n原谅我这一首\n不为谁而作的歌\n感觉上仿佛窗外的夜色\n曾经有那一刻\n回头竟然认不得\n需要从记忆再摸索的人\n和他们关心的 的地方\n和那些走过的请等一等\n梦为努力浇了水\n爱在背后往前推\n当我抬起头才发觉\n我是不是忘了谁\n累到整夜不能睡\n夜色哪里都是美\n一定有个人\n她躲过避过闪过瞒过\n她是谁\n她是谁\n原谅我这一首\n不为谁而作的歌\n感觉上仿佛窗外的夜色\n曾经有那一刻回头\n竟然认不得\n需要从记忆再摸索的人\n和他们关心的 的地方\n和那些走过的\n梦为努力浇了水\n爱在背后往前推\n当我抬起头才发觉\n我是不是忘了谁\n累到整夜不能睡\n夜色哪里都是美\n一定有个人她\n躲过避过闪过瞒过\n她是谁\n她是谁\n也许在真实面对自己才不顾一切\n去探究当初我害怕面对\n梦为努力浇了水\n爱在背后往前推\n当我抬起头才发觉\n我是不是忘了谁\n累到整夜不能睡\n夜色哪里都是美\n一定有个她\n躲过避过闪过瞒过\n她是谁\n她是谁\n她是谁",
        },
      ],
    };
  },
  components: { listnav, listsong },
  computed: {
    totalPage() {
      return Math.ceil(this.proNum / 8);
    },
  },
  methods: {
    getAllData() {
      // console.log(this.$route.params);
      if (this.$route.params.id) {
        this.top_category = this.$route.params.id;
        this.getMenu(this.top_category); // 获取左侧菜单列表
      } else {
        this.getMenu(null); // 获取左侧菜单列表
        this.pageType = "search";
        this.searchWord = this.$route.params.keyword;
      }

      this.getCurLoc(); // 获取当前位置
      this.getListData(); //获取产品列表
      this.getPriceRange(); // 获取价格区间
    },
    getListData() {
      if (this.pageType == "search") {
        getSong({
          search: this.searchWord, //搜索关键词
        })
          .then((response) => {
            this.listData = response.data.results;
            this.proNum = response.data.count;
          })
          .catch(function(error) {
            console.log(error);
          });
      } else {
        getSong({
          p: this.curPage, //当前页码
          top_category: this.top_category, //商品类型
          ordering: this.ordering, //排序类型
          pricemin: this.pricemin, //价格最低 默认为‘’ 即为不选价格区间
          pricemax: this.pricemax, // 价格最高 默认为‘’
        })
          .then((response) => {
            this.listData = response.data.results;
            this.proNum = response.data.count;
          })
          .catch(function(error) {
            console.log(error);
          });
      }
    },
    getMenu(id) {
      if (id != null) {
        getCategory({
          id: this.$route.params.id,
        })
          .then((response) => {
            this.cateMenu = response.data.sub_cat;
            this.currentCategoryName = response.data.name;
          })
          .catch(function(error) {
            console.log(error);
          });
      } else {
        getCategory({})
          .then((response) => {
            this.cateMenu = response.data;
            this.isObject = false;
          })
          .catch(function(error) {
            console.log(error);
          });
      }
    },

    getCurLoc() {
      // 当前位置
      this.$http
        .post("/currentLoc", {
          params: {
            proType: this.type, //商品类型
          },
        })
        .then((response) => {
          this.curLoc = response.data;
        })
        .catch(function(error) {
          console.log(error);
        });
    },
    getPriceRange() {
      this.$http
        .post("/priceRange", {
          params: {
            proType: this.type, //商品类型
          },
        })
        .then((response) => {
          this.priceRange = response.data;
        })
        .catch(function(error) {
          console.log(error);
        });
    },
    changeSort(type) {
      this.ordering = type;
      this.searchSubmit();
    },
    changePrice(data) {
      this.pricemin = data.min;
      this.pricemax = data.max;
      this.getListData();
    },
    changeMenu(id) {
      // this.top_category = id; //重新获取
      // this.getCurLoc();
      console.log(id);
      // this.getMenu(id);
      // this.getListData();
    },
    pagefn(value) {
      //点击分页
      this.curPage = value.page;
      this.getListData();
    },
    searchSubmit() {
      getSong({
        search: this.searchWord, //搜索关键词
        p: this.curPage, //当前页码
        // top_category: this.top_category, //商品类型
        ordering: this.ordering, //排序类型
        pricemin: this.pricemin, //价格最低 默认为‘’ 即为不选价格区间
        pricemax: this.pricemax, // 价格最高 默认为‘’
      })
        .then((response) => {
          this.listData = response.data.results;
          // console.log(this.listData);
          this.proNum = response.data.count;
          this.isSearch = true;
        })
        .catch(function(error) {
          console.log(error);
        });
      // if (this.searchWord) {
      //   //跳转到登录
      //   this.$router.push({
      //     name: "search",
      //     params: { keyword: this.searchWord },
      //   });
      // }
    },
  },
  created() {
    this.getAllData();
  },
  watch: {
    curPage(val) {
      console.log(this.curPage);
      console.log(this.totalPage);
      this.searchSubmit();
    },
  },
};
</script>
