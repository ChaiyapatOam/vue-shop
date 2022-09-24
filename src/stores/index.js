import Vue from "vue";
import Vuex from "vuex";
import CartModule from "./cart";
Vue.use(Vuex);

export default new Vuex.Store({
  strict: true,
  modules: {
    cart: CartModule,
  },
});
