<template>
  <!-- Header Start -->

  <header class="navigation">
    <div class="header-top">
      <div class="container">
        <div class="row justify-content-between align-items-center">
          <div class="col-lg-2 col-md-4">
            <div
              class="header-top-socials text-center text-lg-left text-md-left"
            >
              <a href="https://www.facebook.com/" target="_blank"
                ><i class="ti-facebook"></i
              ></a>
              <a href="https://twitter.com/" target="_blank"
                ><i class="ti-twitter"></i
              ></a>
              <a href="https://github.com/" target="_blank"
                ><i class="ti-github"></i
              ></a>
            </div>
          </div>
          <div
            class="col-lg-10 col-md-8 text-center text-lg-right text-md-right"
          >
            <div class="header-top-info">
              <a href="#">Call Us : <span>+23-345-67890</span></a>
              <a href="#"
                ><i class="fa fa-envelope mr-2"></i
                ><span>support@gmail.com</span></a
              >
            </div>
          </div>
        </div>
      </div>
    </div>
    <nav class="navbar navbar-expand-lg py-4" id="navbar">
      <div class="container">
        <router-link class="navbar-brand" to="/">
          Mega<span>kit.</span>
        </router-link>
        <button
          class="navbar-toggler collapsed"
          type="button"
          data-toggle="collapse"
          data-target="#navbarsExample09"
          aria-controls="navbarsExample09"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span class="fa fa-bars"></span>
        </button>

        <div class="collapse navbar-collapse text-center" id="navbarsExample09">
          <ul class="navbar-nav ml-auto">
            <li
              class="nav-item"
              v-for="tag in getOnlyTagParent()"
              :key="tag.id"
            >
              <router-link
                class="nav-link"
                :to="{ name: 'blog-by-tag', params: { slug: tag.slug } }"
                >{{ tag.title }}</router-link
              >
            </li>
            <li class="nav-item">
              <a class="nav-link" href="#">About</a>
            </li>
            <li class="nav-item">
              <a class="nav-link" href="#">Contact</a>
            </li>
          </ul>

          <div
            class="
              my-2 my-md-0
              ml-lg-4
              text-center
              btn btn-solid-border btn-round-full
            "
            v-if="user"
          >
            {{ user.user_name }}
          </div>

          <router-link
            class="
              my-2 my-md-0
              ml-lg-4
              text-center
              btn btn-solid-border btn-round-full
            "
            v-else
            :to="{ name: 'login' }"
            >Login</router-link
          >
        </div>
      </div>
    </nav>
  </header>
  <!-- Header Close -->
</template>
<script>
import utilsCommon from "@/utils/common";
import { computed } from "vue";
import { useStore } from "vuex";

export default {
  setup() {
    const store = useStore();
    const isPending = computed(() => store.state.tag.isPending);
    const tags = computed(() => store.state.tag.data);
    const user = computed(() => utilsCommon.getStorageDataByKey("user"));

    const getOnlyTagParent = () => {
      return tags.value.filter((tag) => tag.parent_id === 0).slice(0, 4);
    };
    return { isPending, tags, getOnlyTagParent, user };
  },
};
</script>
<style scoped>
#navbar .nav-link.active {
  color: #f75757;
}
</style>
