<template>
  <div class="card-body">
    <div class="text-danger my-3" v-show="error">{{ error }}</div>
    <div class="row align-items-end form-group">
      <div class="col-9">
        <label class="text-capitalize" for="title">{{ $t("title") }}</label>
        <input
          type="text"
          id="title"
          class="form-control"
          :value="title"
          @input="$emit('update:title', $event.target.value)"
        />
      </div>
      <div class="col-3">
        <div class="custom-control custom-checkbox">
          <input
            type="checkbox"
            id="published"
            class="custom-control-input"
            :checked="published"
            @input="$emit('update:published', !!$event.target.checked)"
          />
          <label class="custom-control-label text-capitalize" for="published">{{
            $t("published")
          }}</label>
        </div>
      </div>
    </div>
    <div class="form-group">
      <label class="text-capitalize" for="tag">{{ $t("tag") }}</label>
      <vue-multiselect
        id="tag"
        v-model="tagSelected"
        :options="tags"
        :multiple="true"
        :searchable="true"
        :close-on-select="false"
        :show-labels="false"
        label="title"
        track-by="id"
        placeholder="Select tag"
      ></vue-multiselect>
    </div>
    <div class="form-group">
      <label class="text-capitalize" for="summary">{{ $t("summary") }}</label>
      <textarea
        id="summary"
        class="form-control"
        rows="5"
        :value="summary"
        @input="$emit('update:summary', $event.target.value)"
      ></textarea>
    </div>
    <div class="form-group">
      <label class="text-capitalize" for="image">{{ $t("image") }}</label>
      <div class="input-group">
        <div class="custom-file">
          <input
            type="file"
            class="custom-file-input"
            id="image"
            @change="filesChange($event.target.files)"
          />
          <label class="custom-file-label" for="image">Choose file</label>
        </div>
      </div>
      <img
        class="w-25 img-thumbnail mt-2"
        alt="image"
        v-if="image"
        :src="isBase64(image) ? image : $imageBase(image)"
      />
    </div>
    <div class="form-group">
      <label class="text-capitalize" for="content">{{ $t("content") }}</label>
      <tiny-editor id="content" class="form-control" v-model="contentTiny" />
    </div>
  </div>
  <!-- /.card-body -->
  <div class="card-footer">
    <button
      type="submit"
      class="btn btn-primary text-capitalize mr-2"
      v-if="error"
      disabled
    >
      {{ $t(getButtonSubmit()) }}
    </button>
    <button type="submit" class="btn btn-primary text-capitalize mr-2" v-else>
      {{ $t(getButtonSubmit()) }}
    </button>
    <button
      type="submit"
      class="btn btn-secondary text-capitalize"
      v-once
      @click.prevent="$router.go(-1)"
    >
      {{ $t("cancel") }}
    </button>
  </div>
</template>
<script>
import { computed, ref, watch } from "vue";
import { useStore } from "vuex";
import { useRoute } from "vue-router";
import VueMultiselect from "vue-multiselect";
import { convertBase64, isBase64 } from "@/utils/helper";

export default {
  components: { VueMultiselect },
  props: {
    title: String,
    published: Boolean,
    summary: String,
    content: String,
    image: String,
    selected: Array,
    error: String,
  },
  emits: [
    "update:title",
    "update:published",
    "update:summary",
    "update:content",
    "update:image",
    "update:selected",
  ],
  setup(props, { emit }) {
    const store = useStore();
    const route = useRoute();
    const tags = computed(() => store.state.tag.data);
    const getTags = () => {
      store.dispatch("tag/getTags");
    };
    getTags();

    const contentTiny = ref(props.content);
    const tagSelected = ref(props.selected);

    watch(contentTiny, (newContent) => {
      emit("update:content", newContent);
    });

    watch(tagSelected, (newSelected) => {
      emit("update:selected", newSelected);
    });

    const getButtonSubmit = () => {
      return route.name === "blog-create" ? "create" : "update";
    };

    const filesChange = async (files) => {
      try {
        if (files[0]) {
          const base64 = await convertBase64(files[0]);
          emit("update:image", base64);
        }
      } catch (error) {
        console.error(error);
      }
    };

    return {
      contentTiny,
      tagSelected,
      tags,
      getButtonSubmit,
      filesChange,
      isBase64,
    };
  },
};
</script>
<style>
</style>
