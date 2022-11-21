<template>
  <div class="col-lg-4">
    <div class="sidebar-wrap">
      <div class="sidebar-widget search card p-4 mb-3 border-0">
        <input type="text" class="form-control" placeholder="search" />
        <a href="#" class="btn btn-mian btn-small d-block mt-2">search</a>
      </div>

      <blog-author/>
      <latest-post/>

      <div class="sidebar-widget bg-white rounded tags p-4 mb-3">
        <h5 class="mb-4">{{ $t("tags") }}</h5>
        <router-link
          v-for="tag in tags"
          :key="tag.id"
          :to="{ name: 'blog-by-tag', params: { slug: tag.slug } }"
          >{{ tag.title }}</router-link
        >
      </div>
    </div>
  </div>
</template>
<script>
import { computed } from "vue";
import { useStore } from "vuex";
import LatestPost from './LatestPost.vue';
import BlogAuthor from './BlogAuthor.vue';

export default {
  components: { LatestPost, BlogAuthor },
  setup() {
    const store = useStore();
    const isPending = computed(() => store.state.tag.isPending);
    const tags = computed(() => store.state.tag.data);

    return { isPending, tags };
  },
};
</script>
<style>
</style>
