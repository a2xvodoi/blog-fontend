<template>
  <!-- Header Start -->

  <header class="navigation">
    <header-content-contact />
    <nav class="navbar navbar-expand-lg py-4" id="navbar">
      <div class="container">
        <router-link class="navbar-brand" to="/">
          VA<span>log</span>
        </router-link>
        <!-- <button
          class="navbar-toggler collapsed"
          type="button"
          data-toggle="collapse"
          data-target="#navbarsExample09"
          aria-controls="navbarsExample09"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span class="fa fa-bars"></span>
        </button> -->

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
              <router-link class="nav-link" :to="{ name: 'about' }">About</router-link>
            </li>
            <li class="nav-item">
              <router-link class="nav-link" :to="{ name: 'contact' }">Contact</router-link>
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
import HeaderContentContact from "./HeaderContentContact.vue";

export default {
  components: { HeaderContentContact },
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
