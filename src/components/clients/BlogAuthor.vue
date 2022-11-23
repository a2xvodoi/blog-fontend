<template>
  <div class="sidebar-widget card border-0 mb-3" v-if="author">
    <img src="" alt="" class="img-fluid" />
    <div class="card-body p-4 text-center">
      <h5 class="mb-0 mt-4">
        {{ author.first_name + " " + author.last_name }}
      </h5>
      <p>{{ author.job }}</p>
      <p>{{ author.describe }}</p>

      <ul class="list-inline author-socials">
        <li class="list-inline-item mr-3">
          <span><i class="fab fa-facebook-f text-muted"></i></span>
        </li>
        <li class="list-inline-item mr-3">
          <span><i class="fab fa-twitter text-muted"></i></span>
        </li>
        <li class="list-inline-item mr-3">
          <span><i class="fab fa-linkedin-in text-muted"></i></span>
        </li>
        <li class="list-inline-item mr-3">
          <span><i class="fab fa-pinterest text-muted"></i></span>
        </li>
        <li class="list-inline-item mr-3">
          <span><i class="fab fa-behance text-muted"></i></span>
        </li>
      </ul>
    </div>
  </div>
</template>
<script>
import { computed } from "vue";
import { useStore } from "vuex";
import { useRoute } from "vue-router";
export default {
  setup() {
    const store = useStore();
    const route = useRoute();
    const author = computed(() => store.state.blog.item.author);
    store.dispatch("blog/getInfoAuthor", { slug: route.params.slug });

    return { author };
  },
};
</script>
<style>
</style>
