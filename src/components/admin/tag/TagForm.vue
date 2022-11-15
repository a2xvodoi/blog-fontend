<template>
  <div class="card-body">
    <div class="text-danger my-3" v-show="error">{{ error }}</div>
    <div class="form-group">
      <label class="text-capitalize" for="title">{{ $t("title") }}</label>
      <input
        type="text"
        id="title"
        class="form-control"
        :value="title"
        @input="$emit('update:title', $event.target.value)"
      />
    </div>
    <div class="form-group">
      <label class="text-capitalize" for="describe">{{ $t("describe") }}</label>
      <textarea
        id="describe"
        class="form-control"
        rows="4"
        :value="describe"
        @input="$emit('update:describe', $event.target.value)"
      ></textarea>
    </div>
    <div class="form-group">
      <label class="text-capitalize" for="image">{{
        $t("image")
      }}</label>
      <div class="input-group">
        <div class="custom-file">
          <input type="file" class="custom-file-input" id="image" @change="filesChange($event.target.name, $event.target.files)"/>
          <label class="custom-file-label" for="image"
            >Choose file</label
          >
        </div>
      </div>
    </div>
    <div class="form-group">
      <label class="text-capitalize" for="parent_id">{{
        $t("parent tag")
      }}</label>
      <select
        id="parent_id"
        class="form-control custom-select"
        :value="parentId"
        @input="$emit('update:parentId', +$event.target.value)"
      >
        <option value="0">----</option>
        <option v-for="tag in tagParent" :key="tag.id" :value="tag.id">
          {{ tag.title }}
        </option>
      </select>
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
<script setup>
import { defineProps, defineEmits, computed } from "vue";
import { useStore } from "vuex";
import { useRoute } from "vue-router";

defineProps({
  title: String,
  describe: String,
  parentId: Number,
  error: String,
});

defineEmits(["update:title", "update:describe", "update:parentId"]);

const route = useRoute();
const store = useStore();
const tagParent = computed(() => store.getters["tag/tagParent"]);
const getTags = () => {
  store.dispatch("tag/getTags");
};

getTags();

const getButtonSubmit = () => {
  return route.name === "tag-create" ? "create" : "update";
};

const filesChange = (name, files) => {
console.log(name, files);
}
</script>
<style>
</style>
