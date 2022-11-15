<template>
  <!-- Default box -->
  <div class="card">
    <div class="card-header">
      <h3 class="card-title text-capitalize">{{ $t("tags") }}</h3>

      <div class="card-tools">
        <router-link
          :to="{ name: 'tag-create' }"
          class="btn btn-secondary text-capitalize"
          >{{ $t("create") }}</router-link
        >
      </div>
    </div>
    <div class="card-body table-responsive p-0">
      <table class="table table-striped tags">
        <thead class="text-capitalize">
          <tr>
            <th>ID</th>
            <th>{{ $t("title") }}</th>
            <th>{{ $t("image") }}</th>
            <th style="width: 40%">{{ $t("describe") }}</th>
            <th>{{ $t("follow") }}</th>
            <th>{{ $t("parent tag") }}</th>
            <th></th>
          </tr>
        </thead>
        <tbody v-if="tags.length">
          <tag-list
            v-for="tag in tags"
            :key="tag.id"
            :id="tag.id"
            :title="tag.title"
            :image="tag.image"
            :describe="tag.describe"
            :follow="tag.follow"
            :parent-tag="getTagParent(tag.parent_id)"
            @show-modal="showModal"
          />
        </tbody>
        <tbody v-else>
          <tr class="text-center text-muted">
            <td colspan="7">{{ $t("not found data") }}</td>
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
      <div>{{ $t("alert-delete", {"attr" : $t("tag")}) }}</div>
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
          @click="handleDeleteTag"
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
import TagList from "@/components/admin/tag/TagList.vue";
import { useModal } from "@/composables/useModal";
import { useToast } from "@/composables/useToast";

export default {
  components: { TagList },
  setup() {
    const tagSelected = ref(null);
    const { openModal, toggle } = useModal();
    const store = useStore();
    const { toastSuccess, toastError } = useToast();
    const isPending = computed(() => store.state.tag.isPending);
    const tags = computed(() => store.state.tag.data);
    const getTags = () => {
      store.dispatch("tag/getTags");
    };
    getTags();

    const getTagParent = (id) => {
      return tags.value
        .filter((tag) => tag.id === id)
        .map((tag) => tag.title)
        .join("");
    };

    const showModal = (id) => {
      tagSelected.value = id;
      toggle();
    };

    const handleDeleteTag = async () => {
      try {
        await store.dispatch("tag/destroy", tagSelected.value);
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
      tags,
      getTagParent,
      showModal,
      handleDeleteTag,
    };
  },
};
</script>
<style>
</style>
