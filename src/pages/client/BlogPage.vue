<template>
  <div>
    <blogs-list
      v-if="getInfoTag()"
      :category="getInfoTag().describe"
      :title="getInfoTag().title"
      :bgSrc="getInfoTag().image"
    />
  </div>
</template>
<script>
import { useStore } from "vuex";
import BlogsList from "@/components/clients/BlogsList.vue";
import { useRoute } from "vue-router";
import { computed } from "@vue/runtime-core";

export default {
  components: { BlogsList },
  setup() {
    const store = useStore();
    const route = useRoute();
    const tags = computed(() => store.state.tag.data);
    const slug = computed(() => route.params.slug);
    const getBlogs = () => {
      slug.value && store.dispatch("blog/getBlogsByTag", { slug: slug.value });
    };
    getBlogs();

    const getInfoTag = () => {
      return tags.value.find((item) => item.slug === slug.value);
    };

    return { getInfoTag };
  },
};
</script>
<style>
</style>
