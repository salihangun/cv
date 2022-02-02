<template>
  <section class="work-section py-3">
    <h3 class="text-uppercase resume-section-heading mb-4">{{ $t('WORK_EXPERIENCES')}}</h3>

    <div class="item mb-4" v-for="item in data" :key="item">
      <div class="item-heading row align-items-center mb-2">
        <h4 class="item-title col-12 col-md-6 col-lg-6 mb-2 mb-md-0">
          {{ item.title }}
        </h4>
        <div
          class="
            item-meta
            col-12 col-md-6 col-lg-6
            text-muted text-start text-md-end
          "
        >
          {{ item.companyName }} | {{ item.startDate }} - {{ item.endDate }}
        </div>
      </div>
      <div class="item-content">
        <p>{{ item.description }}</p>
        <ul class="resume-list">
          <li v-for="skill in item.skills" :key="skill">{{ skill }}</li>
        </ul>
      </div>
    </div>
  </section>
</template>

<script>
export default {
  name: "workExperiences",
  props: {
    data: JSON,
  },
};
</script>

<style scoped>
</style>
