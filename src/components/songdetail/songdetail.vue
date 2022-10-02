<template>
  <v-dialog
    max-width="600px"
    v-model="dialog"
    transition="dialog-bottom-transition"
    fullscreen
  >
    <v-snackbar v-model="snackbar" :timeout="4000" top color="success" outlined>
      <v-icon color="success">mdi-check</v-icon>
      Awesome! You added a song in your like list.

      <template v-slot:action="{ attrs }">
        <v-btn color="grey" text v-bind="attrs" @click="snackbar = false">
          <span>Close</span>
        </v-btn>
      </template>
    </v-snackbar>
    <v-snackbar
      v-model="snackbar2"
      :timeout="4000"
      top
      color="success"
      outlined
    >
      <v-icon color="success">mdi-check</v-icon>
      Awesome! You added a song in your shopping cart

      <template v-slot:action="{ attrs }">
        <v-btn color="grey" text v-bind="attrs" @click="snackbar = false">
          <span>Close</span>
        </v-btn>
      </template>
    </v-snackbar>
    <v-card class="grey lighten-4">
      <!-- <v-app-bar
      absolute
      color="#6A76AB"
      dark
      shrink-on-scroll
      prominent
      
      fade-img-on-scroll
      scroll-target="#scrolling-techniques-3"
    >
      <template v-slot:img="{ props }">
        <v-img
          v-bind="props"
          gradient="to top right, rgba(100,115,201,.7), rgba(25,32,72,.7)"
        ></v-img>
      </template> -->

      <v-toolbar color="bg" :src="`http://${song.cover}`">
        <template v-slot:img="{ props }">
          <v-img
            v-bind="props"
            gradient="to right, rgba(0,0,0,0.7), rgba(255,255,255,.1)"
          ></v-img>
        </template>
        <v-btn icon dark @click="close">
          <v-icon>mdi-close</v-icon>
        </v-btn>
        <v-toolbar-title class="white--text">{{ song.name }}</v-toolbar-title>
        <v-spacer></v-spacer>
        <v-toolbar-items>
          <v-btn dark text @click="dialog = false">
            Save
          </v-btn>
        </v-toolbar-items>
      </v-toolbar>

      <v-row class="ma-15">
        <v-col cols="12" md="4">
          <v-img :src="`http://${song.cover}`" :gradient="grd"></v-img>
        </v-col>
        <v-col>
          <v-row class="mt-16 ml-10">
            <v-col>
              <div class="text-h2">
                <!-- <v-icon left large color="red">mdi-music</v-icon> -->
                <span>{{ song.name }}</span>
              </div>
            </v-col>
            <v-col> </v-col>
          </v-row>
          <v-row class="ma-10">
            <v-icon left color="red">mdi-account</v-icon>
            <div class="text-h4 grey--text text--darken-3">
              {{ song.singer }}
            </div>
          </v-row>
          <v-divider></v-divider>
          <v-row>
            <v-col cols="12" md="12">
              <v-row class="ml-10 mt-10">
                <!-- <v-icon left color="primary">mdi-account</v-icon> -->

                <v-col cols="6"
                  ><div class="text-h5 grey--text text--darken-1">
                    Album: {{ song.album }}
                  </div></v-col
                >
                <v-col cols="4"
                  ><div class="text-h5 grey--text text--darken-1">
                    Language: {{ song.language }}
                  </div></v-col
                >
              </v-row>
              <v-row class="ml-10">
                <!-- <v-icon left color="primary">mdi-account</v-icon> -->
                <v-col cols="6"
                  ><div class="text-h5 grey--text text--darken-1">
                    Genre: {{ song.genre }}
                  </div></v-col
                >
                <v-col cols="4"
                  ><div class="text-h5 grey--text text--darken-1">
                    Company: {{ song.company }}
                  </div></v-col
                >
              </v-row>
              <v-row class="ml-10">
                <!-- <v-icon left color="primary">mdi-account</v-icon> -->
                <v-col cols="6"
                  ><div class="text-h5 grey--text text--darken-1">
                    Release Date: {{ song.release_date }}
                  </div></v-col
                >
                <!-- <v-col cols="4"
              ><div class="text-h5 grey--text text--darken-1">
                Company: {{ song.company }}
              </div></v-col
            > -->
              </v-row>
              <v-row class="ml-10 mt-10" justify="center">
                <!-- <v-icon left color="primary">mdi-account</v-icon> -->
                <v-col cols="6"
                  ><v-btn
                    class="mx-4"
                    color="red"
                    dark
                    x-large
                    @click="addLike"
                    v-if="!hasFav"
                  >
                    <v-icon left color="white">mdi-heart</v-icon>
                    <span>like</span>
                  </v-btn>
                  <v-btn
                    class="mx-4"
                    color="grey"
                    dark
                    x-large
                    @click="cancelLike"
                    v-if="hasFav"
                  >
                    <v-icon left color="white">mdi-heart</v-icon>
                    <span>Cancel</span>
                  </v-btn>
                  <v-btn
                    class="mx-4"
                    color="primary"
                    dark
                    x-large
                    @click="addShoppingCart"
                  >
                    <v-icon left color="white">mdi-cart-plus</v-icon>
                    <span>Add into shopping cart</span>
                  </v-btn></v-col
                >
                <!-- <v-col cols="6"></v-col> -->
                <v-col cols="6"> </v-col>
                <!-- <v-col cols="4"
              ><div class="text-h5 grey--text text--darken-1">
                Company: {{ song.company }}
              </div></v-col
            > -->
              </v-row>
            </v-col>
            <!-- <v-col cols="12" md="5">
              <v-card
                v-scroll.self="onScroll"
                class="overflow-y-auto grey lighten-4"
                max-height="400"
              >
                <v-banner
                  class="justify-center headline font-weight-light"
                  sticky
                  align="center"
                >
                  Lyrics
                </v-banner>

                <v-card-text>
                  <div class="mb-4">
                    <pre class="text-body-1 grey--text">{{ song.lyrics }}</pre>
                  </div>
                </v-card-text>
              </v-card>
            </v-col> -->
          </v-row>
        </v-col>
      </v-row>
      <v-divider></v-divider>

      <v-container class="ma-15">
        <div class="text-h3 mb-10">Popular Trend</div>
        <v-card class="mx-auto" color="grey lighten-4" max-width="600">
          <v-card-title>
            <v-icon
              :color="checking ? 'red lighten-2' : 'indigo'"
              class="mr-12"
              size="64"
              @click="takePulse"
            >
              mdi-cursor-default-click
            </v-icon>
            <v-row align="start">
              <div class="caption grey--text text-uppercase">
                Click Times
              </div>
              <div>
                <span
                  class="display-2 font-weight-black"
                  v-text="avg || '—'"
                ></span>
                <strong v-if="avg">TIMES</strong>
              </div>
            </v-row>

            <v-spacer></v-spacer>

            <v-btn icon class="align-self-start" size="28">
              <v-icon>mdi-arrow-right-thick</v-icon>
            </v-btn>
          </v-card-title>

          <v-sheet color="transparent">
            <v-sparkline
              :key="String(avg)"
              :smooth="16"
              :gradient="['#f72047', '#ffd200', '#1feaea']"
              :line-width="3"
              :value="heartbeats"
              auto-draw
              stroke-linecap="round"
            ></v-sparkline>
          </v-sheet>
        </v-card>
        <div class="text-h3 my-15">Lyrics</div>
        <div align="center">
          <pre class="text-body-1 grey--text">{{ song.lyrics }}</pre>
        </div>
      </v-container>

      <!-- <v-list three-line subheader>
        <v-subheader>User Controls</v-subheader>
        <v-list-item>
          <v-list-item-content>
            <v-list-item-title>Content filtering</v-list-item-title>
            <v-list-item-subtitle
              >Set the content filtering level to restrict apps that can be
              downloaded</v-list-item-subtitle
            >
          </v-list-item-content>
        </v-list-item>
        <v-list-item>
          <v-list-item-content>
            <v-list-item-title>Password</v-list-item-title>
            <v-list-item-subtitle
              >Require password for purchase or use password to restrict
              purchase</v-list-item-subtitle
            >
          </v-list-item-content>
        </v-list-item>
      </v-list>
      <v-divider></v-divider>
      <v-list three-line subheader>
        <v-subheader>General</v-subheader>
        <v-list-item>
          <v-list-item-action>
            <v-checkbox v-model="notifications"></v-checkbox>
          </v-list-item-action>
          <v-list-item-content>
            <v-list-item-title>Notifications</v-list-item-title>
            <v-list-item-subtitle
              >Notify me about updates to apps or games that I
              downloaded</v-list-item-subtitle
            >
          </v-list-item-content>
        </v-list-item>
        <v-list-item>
          <v-list-item-action>
            <v-checkbox v-model="sound"></v-checkbox>
          </v-list-item-action>
          <v-list-item-content>
            <v-list-item-title>Sound</v-list-item-title>
            <v-list-item-subtitle
              >Auto-update apps at any time. Data charges may
              apply</v-list-item-subtitle
            >
          </v-list-item-content>
        </v-list-item>
        <v-list-item>
          <v-list-item-action>
            <v-checkbox v-model="widgets"></v-checkbox>
          </v-list-item-action>
          <v-list-item-content>
            <v-list-item-title>Auto-add widgets</v-list-item-title>
            <v-list-item-subtitle
              >Automatically add home screen widgets</v-list-item-subtitle
            >
          </v-list-item-content>
        </v-list-item>
      </v-list> -->
    </v-card>
    <!-- <template v-slot:activator="{ on, attrs }">
      <v-btn color="primary" dark v-bind="attrs" v-on="on" block>
        Sign up
      </v-btn>
    </template> -->
    <!-- <div>{{ song.name }}</div> -->
    <!-- <v-card
      :loading="loading"
      class="my-12"
      elevation="20"
      swiperto="/team"
      @click="songdetail(song.id)"
    >
      <template slot="progress">
        <v-progress-linear
          color="deep-purple"
          height="10"
          indeterminate
        ></v-progress-linear>
      </template>

      <v-img :src="`http://${song.cover}`" :gradient="grd"></v-img>

      <v-card-title class="text-h5 text-center">{{ song.name }}</v-card-title>
      <div class="text-h5 text-center mt-5">
        <span>{{ song.name }}</span>
        <v-icon right color="red">mdi-fire</v-icon>
      </div>
      <v-card-text class="text-center">
        <div class="text-h5">{{ song.name }}</div>
        <div class="subtitle-1">
          {{ song.singer }}
        </div>
        <v-row class="mx-0">
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
        </v-row>
      </v-card-text>

      <v-divider class="mx-4"></v-divider>
      <div class="subtitle-1 text-center mt-5">
        <span>{{ song.price }}</span>
        <v-icon right color="red">mdi-fire</v-icon>
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
    </v-card> -->
    <!-- <v-card class="bg">
      <v-card-title class="headline bg lighten-1">
        Create your account
      </v-card-title>

      <v-card-text>
        <v-form class="px-3" ref="form" v-model="valid" lazy-validation>

          <v-text-field
            v-model="username"
            :rules="nameRules"
            label="Username"
            required
            background-color="bg2"
            dark
            color="primary"
            prepend-icon="mdi-account"
            validate-on-blur
          ></v-text-field>

          <v-text-field
            v-model="password"
            :type="'password'"
            :rules="passwordRules"
            label="Password"
            required
            dark
            prepend-icon="mdi-key"
            validate-on-blur
          ></v-text-field>
          <v-text-field
            v-model="password2"
            :type="'password'"
            :rules="password2Rules"
            label="Reapeat password"
            required
            dark
            prepend-icon="mdi-key"
            validate-on-blur
          ></v-text-field>
          <v-row justify="center" class="mt-3">
            <v-btn class="primary" :loading="loading" @click="Sumbit">
              Sign Up
            </v-btn>
          </v-row>
        </v-form>
      </v-card-text>

      <v-divider></v-divider>

      <v-card-actions>
        <v-spacer></v-spacer>
        <v-btn color="primary" text @click="close">
          cancel
        </v-btn>
      </v-card-actions>
    </v-card> -->
  </v-dialog>
</template>
<script>
import { getFav, addFav, delFav } from "@/api/song";
import { addShopCart } from "@/api/shopcart";
const gradients = [
  ["#222"],
  ["#42b3f4"],
  ["red", "orange", "yellow"],
  ["purple", "violet"],
  ["#00c6ff", "#F0F", "#FF0"],
  ["#f72047", "#ffd200", "#1feaea"],
];
const exhale = (ms) => new Promise((resolve) => setTimeout(resolve, ms));
export default {
  data() {
    let self = this;
    return {
      snackbar2: false,
      valid: false,
      loading: false,
      hasFav: false,
      snackbar: false,
      checking: false,
      heartbeats: [],
    };
  },
  props: {
    dialog: {
      type: Boolean,
      default: false,
    },
    song: {
      object: {
        type: Object,
        default: () => {},
      },
    },
  },
  computed: {
    avg() {
      return this.song.click_num;
      //   const sum = this.heartbeats.reduce((acc, cur) => acc + cur, 0);
      //   const length = this.heartbeats.length;

      //   if (!sum && !length) return 0;

      //   return Math.ceil(sum / length);
    },
  },
  watch: {
    dialog(val) {
      if (val == true) {
        console.log("Here");
        console.log(this.song.id);
        getFav(this.song.id)
          .then((response) => {
            console.log("yes");
            this.hasFav = true;
          })
          .catch(function(error) {
            console.log(error);
          });
      }
    },
  },
  methods: {
    Sumbit() {
      //   this.$emit("projectAdded");
    },
    close() {
      this.dialog = false;
      this.$emit("update:dialog", false);
    },
    addLike() {
      //加入收藏
      addFav({
        song: this.song.id,
      })
        .then((response) => {
          //   console.log(response.data);
          this.hasFav = true;
          this.snackbar = true;
          //   alert("已成功加入收藏夹");
        })
        .catch(function(error) {
          console.log(error);
        });
    },

    cancelLike() {
      //删除收藏
      delFav(this.song.id)
        .then((response) => {
          console.log(response.data);
          this.hasFav = false;
        })
        .catch(function(error) {
          console.log(error);
        });
    },
    addShoppingCart() {
      //加入购物车
      addShopCart({
        song: this.song.id, // 商品id
        nums: 1, // 购买数量
      })
        .then((response) => {
          this.snackbar2 = true;
          //   this.$refs.model.setShow();
          // 更新store数据
          //   this.$store.dispatch("setShopList");
        })
        .catch(function(error) {
          console.log(error);
        });
    },

    heartbeat() {
      return Math.ceil(Math.random() * (120 - 80) + 80);
    },
    async takePulse(inhale = true) {
      this.checking = true;

      inhale && (await exhale(1000));

      this.heartbeats = Array.from({ length: 20 }, this.heartbeat);

      this.checking = false;
    },
  },
  created() {
    this.takePulse(false);
    // var productId = this.productId;
    // console.log("HERE");
    // console.log(this.song);
  },
};
</script>
