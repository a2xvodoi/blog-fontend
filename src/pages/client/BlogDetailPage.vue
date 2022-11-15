<template>
  <div>
    <blog-detail />
  </div>
</template>
<script>
import { computed } from "vue";
import { useStore } from "vuex";
import { useRoute } from "vue-router";
import BlogDetail from "@/components/clients/BlogDetail.vue";

export default {
  components: { BlogDetail },
  setup() {
    const store = useStore();
    const route = useRoute();
    const slug = computed(() => route.params.slug);
    const getBlogs = () => {
      slug.value && store.dispatch("blog/getBySlug", { slug: slug.value });
    };
    getBlogs();

    return {};
  }
};
</script>
<style>
</style>
