<template>
  <div>
    <title-content :category="category" :title="title" :bgSrc="bgSrc" />
    <section class="section blog-wrap bg-gray">
      <div class="container">
        <div class="row">
          <div class="col-lg-8">
            <div class="row" v-if="!isPending">
              <card-item-blog
                v-for="blog in blogs"
                :key="blog.id"
                :tags="blog.tags"
                :title="blog.title"
                :summary="blog.summary"
                :slug="blog.slug"
              />
            </div>
          </div>
          <side-bar />
        </div>
        <div class="row mt-5">
          <div class="col-lg-8">
            <nav class="navigation pagination py-2 d-inline-block">
              <div class="nav-links">
                <a class="prev page-numbers" href="#">Prev</a>
                <span aria-current="page" class="page-numbers current">1</span>
                <a class="page-numbers" href="#">2</a>
                <a class="next page-numbers" href="#">Next</a>
              </div>
            </nav>
          </div>
        </div>
      </div>
    </section>
    <loading-icon v-show="isPending"/>
  </div>
</template>
<script>
import { computed } from "vue";
import { useStore } from "vuex";
import TitleContent from "@/components/clients/TitleContent.vue";
import SideBar from "@/components/clients/SideBar.vue";
import CardItemBlog from "@/components/clients/CardItemBlog.vue";

export default {
  components: { TitleContent, SideBar, CardItemBlog },
  props: {
    category: String,
    title: String,
    bgSrc: String,
  },
  setup() {
    const store = useStore();
    const isPending = computed(() => store.state.blog.isPending);
    const blogs = computed(() => store.state.blog.data);

    return { isPending, blogs };
  },
};
</script>
<style>
</style>
