<template>
  <section class="education-section py-3">
    <h3 class="text-uppercase resume-section-heading mb-4">Awards</h3>
    <ul class="list-unstyled resume-awards-list">
      <li class="mb-3" v-for="item in data" :key="item">
        <div class="font-weight-bold">{{ item.name }}</div>
        <div class="text-muted">{{ item.organisation }} ({{ item.year }})</div>
      </li>
    </ul>
  </section>
</template>

<script>
export default {
  name: "awards",
  props: {
    data: JSON,
  },
};
</script>

<style scoped>
</style>
