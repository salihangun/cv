<template>
  <section class="education-section py-3">
    <h3 class="text-uppercase resume-section-heading mb-4">Education</h3>
    <ul class="list-unstyled resume-education-list">
      <li class="mb-3" v-for="item in data" :key="item">
        <div class="resume-degree font-weight-bold">
          {{ item.department }}
        </div>
        <div class="resume-degree-org text-muted">
          {{ item.schoolName }}
        </div>
        <div class="resume-degree-time text-muted">
          {{ item.startDate }} - {{ item.endDate }}
        </div>
      </li>
    </ul>
  </section>
</template>

<script>
export default {
  name: "education",
  props: {
    data: JSON,
  },
};
</script>

<style scoped>
</style>
