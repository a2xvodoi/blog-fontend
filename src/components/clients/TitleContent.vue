<template>
  <!-- <section class="page-title" :style="{ background: 'url(' + bgSrc + ') no-repeat 50% 50%', backgroundSize: 'cover' }"> -->
  <section class="page-title">
    <div class="container">
      <div class="row">
        <div class="col-md-12">
          <div class="block text-center">
            <span class="text-white">{{ category }}</span>
            <h1 class="text-capitalize mb-4 text-lg">{{ title }}</h1>
            <ul class="list-inline">
              <li class="list-inline-item">
                <router-link :to="{ path: '/' }" class="text-white">{{
                  $t("home")
                }}</router-link>
              </li>
              <li class="list-inline-item">
                <span class="text-white">/</span>
              </li>
              <li class="list-inline-item">
                <router-link :to="{ path: '#' }" class="text-white-50">{{
                  title
                }}</router-link>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>
<script>
import { watchEffect } from "vue";

export default {
  props: {
    category: {
      type: String,
      default: "",
    },
    title: {
      type: String,
      default: "",
    },
    bgSrc: {
      type: String,
      default: "",
    },
  },
  setup(props) {
    watchEffect(() => {
      document.title = props.title;
    });
  },
};
</script>
<style>
.page-title {
  background: url("@/assets/images/bg/home-2.jpg") no-repeat 50% 50%;
  background-size: cover;
}
</style>
