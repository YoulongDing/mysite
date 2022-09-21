<template>
  <v-menu open-on-click bottom offset-y>
    <template v-slot:activator="{ on, attrs }">
      <v-btn color="grey" dark text v-bind="attrs" v-on="on">
        <span>Menu</span>
        <v-icon medium>mdi-menu-down</v-icon>
      </v-btn>
    </template>
    <v-list>
      <v-list-item v-for="cat in cateMenu" :key="cat.id">
        <v-menu open-on-hover bottom offset-x>
          <template v-slot:activator="{ on, attrs }">
            <v-btn color="grey" dark text v-bind="attrs" v-on="on">
              <span>{{ cat.name }}</span>
            </v-btn>
          </template>
          <v-list>
            <v-list-item v-for="item in cat.sub_cat" :key="item.id">
              <v-list-item-title>
                <button @click="changeMenu(item.id)">{{ item.name }}</button>
              </v-list-item-title>
            </v-list-item>
          </v-list>
        </v-menu>
      </v-list-item>
    </v-list>
  </v-menu>
</template>
<script>
export default {
  props: {
    cateMenu: {
      default: function() {
        return {};
      },
    },
    proNum: {
      //商品数量
      type: Number,
      default: 0,
    },
    isArray: {
      default: function() {
        return false;
      },
    },
    isObject: false,
    currentCategoryName: "",
  },
  data() {
    return {};
  },
  computed: {},
  methods: {
    changeMenu(id) {
      // console.log("SSS");
      // console.log(id);
      this.$emit("on-change", id);
    },
  },
};
</script>
