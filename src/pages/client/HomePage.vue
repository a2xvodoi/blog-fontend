<template>
  <div><blogs-list category="Blogs" title="Blogs" bgSrc="" /></div>
</template>
<script>
import { useStore } from "vuex";
import BlogsList from "@/components/clients/BlogsList.vue";

export default {
  components: { BlogsList },
  setup() {
    const store = useStore();
    const getBlogs = () => {
      store.dispatch("blog/getBlogs");
    };
    getBlogs();
  },
};
</script>
<style>
</style>
