<template>
  <div class="col-lg-4">
    <div class="sidebar-wrap">
      <div class="sidebar-widget search card p-4 mb-3 border-0">
        <input type="text" class="form-control" placeholder="search" />
        <a href="#" class="btn btn-mian btn-small d-block mt-2">search</a>
      </div>

      <div class="sidebar-widget card border-0 mb-3">
        <img src="" alt="" class="img-fluid" />
        <div class="card-body p-4 text-center">
          <h5 class="mb-0 mt-4">Arther Conal</h5>
          <p>Digital Marketer</p>
          <p>
            Lorem ipsum dolor sit amet, consectetur adipisicing elit. Incidunt,
            dolore.
          </p>

          <ul class="list-inline author-socials">
            <li class="list-inline-item mr-3">
              <a href="#"><i class="fab fa-facebook-f text-muted"></i></a>
            </li>
            <li class="list-inline-item mr-3">
              <a href="#"><i class="fab fa-twitter text-muted"></i></a>
            </li>
            <li class="list-inline-item mr-3">
              <a href="#"><i class="fab fa-linkedin-in text-muted"></i></a>
            </li>
            <li class="list-inline-item mr-3">
              <a href="#"><i class="fab fa-pinterest text-muted"></i></a>
            </li>
            <li class="list-inline-item mr-3">
              <a href="#"><i class="fab fa-behance text-muted"></i></a>
            </li>
          </ul>
        </div>
      </div>

      <div class="sidebar-widget latest-post card border-0 p-4 mb-3">
        <h5>Latest Posts</h5>

        <div class="media border-bottom py-3">
          <a href="#"><img class="mr-4" src="" alt="" /></a>
          <div class="media-body">
            <h6 class="my-2">
              <a href="#">Thoughtful living in los Angeles</a>
            </h6>
            <span class="text-sm text-muted">03 Mar 2018</span>
          </div>
        </div>

        <div class="media border-bottom py-3">
          <a href="#"><img class="mr-4" src="" alt="" /></a>
          <div class="media-body">
            <h6 class="my-2">
              <a href="#">Vivamus molestie gravida turpis.</a>
            </h6>
            <span class="text-sm text-muted">03 Mar 2018</span>
          </div>
        </div>

        <div class="media py-3">
          <a href="#"><img class="mr-4" src="" alt="" /></a>
          <div class="media-body">
            <h6 class="my-2">
              <a href="#">Fusce lobortis lorem at ipsum semper sagittis</a>
            </h6>
            <span class="text-sm text-muted">03 Mar 2018</span>
          </div>
        </div>
      </div>

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
export default {
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
