import { createStore } from "vuex";
import sampleModule from "./sample/index.js";
import rootGetters from "./getter.js";
import rootActions from "./actions.js";
import rootMutations from "./mutation.js";

const store = createStore({
  // Khai báo kiểu module
  modules: {
    a: sampleModule,
  },
  state: () => ({}),
  mutations: rootMutations,
  getters: rootGetters,
  actions: rootActions,
});

export default store;

// khai báo state cách 1
// state() {
//     return {
//         Author: "NXC",
//         count: 0,
//     }
// },
// khai báo state cách 2
