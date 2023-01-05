import { createStore } from "vuex";

import authentication from "./modules/authentication";
import collection from "./modules/collection";
import products from "./modules/products";

export default createStore({
  modules: {
    authentication,
    collection,
    products
  },
});
