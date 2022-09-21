<template>
  <div class="search-options" id="search-options">
    <div class="bd">
      <dl>
        <dt>价格：</dt>
        <dd class="dd-price" style="height: 48px;">
          <div class="items cle w500">
            <div
              class="link"
              v-for="item in priceRange"
              @click="changePriceRange(item.min, item.max)"
            >
              <a class="item">{{ item.min }}&nbsp;-&nbsp;{{ item.max }}</a>
            </div>
            <!-- <div class="link"> <a class="item">20&nbsp;-&nbsp;70</a> </div>
                    <div class="link"> <a class="item">70&nbsp;-&nbsp;120</a> </div>
                    <div class="link"> <a class="item">120&nbsp;-&nbsp;170</a> </div>
                    <div class="link"> <a class="item">170&nbsp;-&nbsp;220</a> </div>
                    <div class="link"> <a class="item">220&nbsp;-&nbsp;270</a> </div> -->
          </div>
          <div
            class="priceform"
            id="priceform"
            v-clickoutside="handleClickOutside"
          >
            <div class="form-bg">
              <form id="freepriceform">
                <span class="rmb"></span>
                <input
                  type="text"
                  value=""
                  name="price_min"
                  id="pricemin"
                  v-model="price_min"
                  @focus="focus = true"
                />
                <span class="rmb rmb2"></span>
                <input
                  type="text"
                  value=""
                  name="price_max"
                  id="pricemax"
                  v-model="price_max"
                  @focus="focus = true"
                />
                <input
                  v-show="focus"
                  value="确定"
                  @click="changePriceRange(price_min, price_max)"
                  class="submit"
                />
              </form>
            </div>
          </div>
        </dd>
      </dl>
    </div>
  </div>
</template>
<script>
import clickoutside from "../../../static/js/clickoutside";
export default {
  data() {
    return {
      price_min: "",
      price_max: "",
      focus: false, //是否获得焦点
    };
  },
  directives: {
    clickoutside,
  },
  components: {},
  props: {
    priceRange: {
      type: Array,
      default: [],
    },
  },
  created() {},
  watch: {},
  computed: {},
  methods: {
    changePriceRange(min, max) {
      this.$emit("on-change", { min, max });
    },
    handleClickOutside() {
      this.focus = false;
    },
  },
};
</script>
