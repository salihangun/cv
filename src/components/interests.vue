<template>
  <section class="skills-section py-3">
    <h3 class="text-uppercase resume-section-heading mb-4">Interests</h3>
    <ul class="list-unstyled resume-interests-list mb-0">
      <li class="mb-2" v-for="item in data" :key="item">{{ item }}</li>
    </ul>
  </section>
</template>

<script>
export default {
  name: "interests",
  props: {
    data: JSON,
  },
};
</script>

<style scoped>
</style>
