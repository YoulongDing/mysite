<template>
  <div>
    <songdetail :dialog.sync="songdetaildialog" :song="dialogdata" />
    <v-row class="ma-5">
      <v-col
        cols="12"
        sm="6"
        md="4"
        lg="3"
        v-for="song in listData"
        :key="song.id"
      >
        <v-container>
          <v-hover v-slot="{ hover }">
            <v-card
              :loading="loading"
              class="my-12"
              :class="{ 'on-hover': hover }"
              :elevation="hover ? 20 : 10"
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

              <v-img
                :src="`http://${song.cover}`"
                :gradient="
                  hover
                    ? 'to bottom, rgba(0,0,0,0.7), rgba(255,255,255,.1)'
                    : ''
                "
              ></v-img>

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
          </v-hover>
        </v-container>
      </v-col>
    </v-row>
    <!-- gggggg -->
  </div>
</template>
<script>
import songdetail from "@/components/songdetail/songdetail";
import { retrieveSong } from "@/api/song";
export default {
  data() {
    return {
      songdetaildialog: false,
      dialogdata: {},
    };
  },
  props: {
    listData: {
      type: Array,
      default: function() {
        return [];
      },
    },
  },
  components: { songdetail },
  created() {},
  watch: {},
  computed: {},
  methods: {
    addShoppingCart() {
      //加入购物车

      this.$http
        .post("/product/addShoppingCart", {
          params: {
            productId: this.productId, // 商品id
            num: this.proDetail.purNum, // 购买数量
          },
        })
        .then((response) => {
          console.log(response.data);
          alert("已成功加入购物车");
        })
        .catch(function(error) {
          console.log(error);
        });
    },
    songdetail(songid) {
      //   console.log(songid);
      retrieveSong({
        id: songid,
      })
        .then((response) => {
          this.dialogdata = response.data;
          this.songdetaildialog = true;
        })
        .catch(function(error) {
          console.log(error);
        });
    },
    // toProductDetail(id) {
    //     this.$router.push({name:'productDetail', params: {productId: id}});
    // }
  },
};
</script>
<style scoped>
.v-card:not(.on-hover) {
  opacity: 1;
}
.v-card.on-hover {
  opacity: 1;
}
</style>
