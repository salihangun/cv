<template>
  <section class="skills-section py-3">
    <h3 class="text-uppercase resume-section-heading mb-4">Languages</h3>
    <ul class="list-unstyled resume-lang-list">
      <li class="mb-2" v-for="item in data" :key="item">
        {{ item.language }} <span class="text-muted">({{ item.level }})</span>
      </li>
    </ul>
  </section>
</template>

<script>
export default {
  name: "languages",
  props: {
    data: JSON,
  },
};
</script>

<style scoped>
</style>
