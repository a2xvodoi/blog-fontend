<template>
  <tr>
    <td>{{ id }}</td>
    <td>{{ title }}</td>
    <td style="width: 10%">
      <img alt="Avatar" class="table-avatar w-75" :src="$imageBase(image)" />
    </td>
    <td>{{ summary }}</td>
    <td>
      <div
        class="mb-0 py-1 text-capitalize alert"
        :class="checkPublish(published).cls"
      >
        {{ $t(checkPublish(published).text) }}
      </div>
    </td>
    <td>{{ tags }}</td>
    <td>{{ author }}</td>
    <td class="project-actions text-right text-capitalize">
      <a class="btn btn-primary btn-sm my-1" href="#">
        <i class="fas fa-folder"> </i>
        {{ $t("view") }}
      </a>
      <router-link
        class="btn btn-info btn-sm mx-1 my-1"
        :to="{ name: 'blog-edit', params: { id: id } }"
      >
        <i class="fas fa-pencil-alt"> </i>
        {{ $t("edit") }}
      </router-link>
      <button
        class="btn btn-danger btn-sm text-capitalize my-1"
        @click.prevent="$emit('showModal', id)"
      >
        <i class="fas fa-trash"> </i>
        {{ $t("delete") }}
      </button>
    </td>
  </tr>
</template>

<script>
export default {
  props: {
    id: {
      type: Number,
      required: true,
    },
    title: {
      type: String,
      required: true,
    },
    image: {
      type: String,
      required: true,
    },
    summary: {
      type: String,
      required: true,
    },
    published: {
      type: Boolean,
      required: true,
    },
    tags: {
      type: String,
      required: true,
    },
    author: {
      type: String,
      required: true,
    },
  },
  setup() {
    const checkPublish = (publish) => {
      return publish
        ? {
            cls: "alert-success",
            text: "published",
          }
        : {
            cls: "alert-secondary",
            text: "not-published",
          };
    };
    return { checkPublish };
  },
};
</script>
