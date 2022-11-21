<template>
  <div class="sidebar-widget latest-post card border-0 p-4 mb-3">
    <h5>Latest Posts</h5>

    <div class="media py-3" v-for="blog in blogLatest" :key="blog.id">
      <router-link :to="{ name: 'blog-detail', params: { slug: blog.slug } }">
        <img class="mr-4" :src="$imageBase(blog.image)" alt="" />
      </router-link>
      <div class="media-body">
        <h6 class="my-2">
          <router-link
            :to="{ name: 'blog-detail', params: { slug: blog.slug } }"
            >{{ blog.title }}</router-link
          >
        </h6>
        <span class="text-sm text-muted">{{
          formatDate(blog.published_at)
        }}</span>
      </div>
    </div>
  </div>
</template>
<script>
import { computed } from "vue";
import { useStore } from "vuex";
import { formatDate } from "@/utils/helper";

export default {
  setup() {
    const store = useStore();
    const blogLatest = computed(() => store.state.blog.latest);
    return { blogLatest, formatDate };
  },
};
</script>
<style scoped>
img {
  max-width: 85px;
}
.media:not(:last-child) {
  border-bottom: 1px solid #dee2e6;
}
</style>
