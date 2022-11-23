<template>
  <tr>
    <td>{{ id }}</td>
    <td>{{ title }}</td>
    <td style="width: 10%">
      <img alt="Avatar" class="table-avatar w-75" :src="$imageBase(image)" />
    </td>
    <td>{{ describe }}</td>
    <td>{{ follow }}</td>
    <td>{{ parentTag }}</td>
    <td class="project-actions text-right text-capitalize">
      <a class="btn btn-primary btn-sm my-1" href="#">
        <i class="fas fa-folder"> </i>
        {{ $t("view") }}
      </a>
      <router-link
        class="btn btn-info btn-sm mx-1 my-1"
        :to="{ name: 'tag-edit', params: { id: id } }"
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
    describe: {
      type: String,
      required: true,
    },
    follow: {
      type: Number,
      required: true,
    },
    parentTag: {
      type: String,
      required: true,
    },
  },
};
</script>
