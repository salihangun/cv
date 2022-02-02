<template>
  <section class="skills-section py-3">
    <h3 class="text-uppercase resume-section-heading mb-4">{{ $t('SKILLS')}}</h3>
    <div class="item">
      <h4 class="item-title">{{ $t('SKILLS_Technical')}}</h4>
      <ul class="list-unstyled resume-skills-list">
        <li class="mb-2" v-for="item in data.technical" :key="item">
          {{ item }}
        </li>
      </ul>
    </div>
    <div class="item">
      <h4 class="item-title">{{ $t('SKILLS_Professional')}}</h4>
      <ul class="list-unstyled resume-skills-list">
        <li class="mb-2" v-for="item in data.professional" :key="item">
          {{ item }}
        </li>
      </ul>
    </div>
  </section>
</template>

<script>
export default {
  name: "skills",
  props: {
    data: JSON,
  },
};
</script>

<style scoped>
</style>
