/* eslint-disable no-unused-vars */
// This is the main.js file. Import global CSS and scripts here.
// The Client API can be used here. Learn more: gridsome.org/docs/client-api
import Vuesax from "vuesax";
import "vuesax/dist/vuesax.css";

import DefaultLayout from "./layouts/Default.vue";

export default (Vue, { router, head, isClient }) => {
  // Set default layout as a global component
  Vue.component("Layout", DefaultLayout);
  Vue.use(Vuesax, {});
};
