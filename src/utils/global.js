export default {
  install(Vue, options) {
    Vue.prototype.xxxxx = (data) => {
      console.log(data.content);
      data.fn && data.fn();
    };
  },
};
