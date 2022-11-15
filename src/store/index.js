import { createStore, createLogger } from "vuex";
import tag from "./modules/tag";
import blog from "./modules/blog";

const debug = process.env.NODE_ENV !== "production";

export default createStore({
  modules: {
    tag: tag,
    blog: blog
  },
  strict: debug,
  plugins: debug ? [createLogger()] : [],
});
