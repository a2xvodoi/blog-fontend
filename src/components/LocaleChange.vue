<template>
  <div class="locale-changer">
    <select class="px-2 text-uppercase" v-model="$i18n.locale">
      <option
        v-for="locale in $i18n.availableLocales"
        :key="`locale-${locale}`"
        :value="locale"
      >
        {{ locale }}
      </option>
    </select>
  </div>
</template>
<style scoped>
  select, option {
    cursor: pointer;
  }

  select:focus-visible {
    outline: unset;
  }
</style>
