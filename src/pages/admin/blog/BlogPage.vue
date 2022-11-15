<template>
  <!-- Default box -->
  <div class="card">
    <div class="card-header">
      <h3 class="card-title text-capitalize">{{ $t("blogs") }}</h3>

      <div class="card-tools">
        <router-link
          :to="{ name: 'blog-create' }"
          class="btn btn-secondary text-capitalize"
          >{{ $t("create") }}</router-link
        >
      </div>
    </div>
    <div class="card-body table-responsive p-0">
      <table class="table table-striped blogs">
        <thead class="text-capitalize">
          <tr>
            <th>ID</th>
            <th>{{ $t("title") }}</th>
            <th>{{ $t("image") }}</th>
            <th style="width: 30%">{{ $t("summary") }}</th>
            <th>{{ $t("published") }}</th>
            <th>{{ $t("tag") }}</th>
            <th>{{ $t("author") }}</th>
            <th></th>
          </tr>
        </thead>
        <tbody v-if="blogs.length">
          <blog-list v-for="blog in blogs" :key="blog.id"
            :id="blog.id"
            :title="blog.title"
            :image="blog.image"
            :summary="blog.summary"
            :published="blog.published"
            :tags="blog.tags.map(item => item.title).join(', ')"
            :author="blog.author"
            @show-modal="showModal"
          />
        </tbody>
        <tbody v-else>
          <tr class="text-center text-muted">
            <td colspan="8">{{ $t("not found data") }}</td>
          </tr>
        </tbody>
      </table>
    </div>
    <!-- /.card-body -->
  </div>
  <teleport to="body">
    <base-modal :open="openModal" @closeModal="toggle">
      <template #title>
        <h4 class="text-capitalize">{{ `${$t("delete")}?` }}</h4>
      </template>
      <div>{{ $t("alert-delete", {"attr" : $t("blog")}) }}</div>
      <template #footer>
        <button
          type="button"
          class="btn btn-secondary text-capitalize"
          @click="toggle"
        >
          {{ $t("cancel") }}
        </button>
        <button
          type="button"
          class="btn btn-danger text-capitalize"
          @click="handleDeleteBlog"
        >
          {{ $t("confirm") }}
        </button>
      </template>
    </base-modal>
    <loading-icon v-show="isPending" />
  </teleport>
  <!-- /.card -->
</template>
<script>
import { computed, ref } from "vue";
import { useStore } from "vuex";
import i18n from "@/i18n";
import BlogList from '@/components/admin/blog/BlogList.vue';
import { useModal } from "@/composables/useModal";
import { useToast } from "@/composables/useToast";

export default {
  components: { BlogList },
  setup() {
    const blogSelected = ref(null);
    const { openModal, toggle } = useModal();
    const store = useStore();
    const { toastSuccess, toastError } = useToast();
    const isPending = computed(() => store.state.blog.isPending);
    const blogs = computed(() => store.state.blog.data);
    const getBlogs = () => {
      store.dispatch("blog/getBlogs");
    };
    getBlogs();

    const showModal = (id) => {
      blogSelected.value = id;
      toggle();
    };

    const handleDeleteBlog = async () => {
      try {
        await store.dispatch("blog/destroy", blogSelected.value);
        toastSuccess({ title: i18n.global.t("delete-success") });
      } catch (error) {
        toastError({ title: i18n.global.t("delete-fail") });
      } finally {
        toggle();
      }
    };

    return {
      openModal,
      toggle,
      isPending,
      blogs,
      showModal,
      handleDeleteBlog,
    };
  },
};
</script>
<style>
</style>
