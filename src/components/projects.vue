<template>
  <section class="project-section py-3">
    <h3 class="text-uppercase resume-section-heading mb-4">Projects</h3>
    <div class="item mb-3" v-for="item in data" :key="item">
      <div class="item-heading row align-items-center mb-2">
        <h4 class="item-title col-12 col-md-6 col-lg-8 mb-2 mb-md-0">
          {{ item.projectName }}
        </h4>
        <div
          class="
            item-meta
            col-12 col-md-6 col-lg-4
            text-muted text-start text-md-end
          "
        >
          {{ item.projectType }}
        </div>
      </div>
      <div class="item-content">
        <p>{{ item.description }}</p>
      </div>
    </div>
  </section>
</template>

<script>
export default {
  name: "projects",
  props: {
    data: JSON,
  },
};
</script>

<style scoped>
</style>
