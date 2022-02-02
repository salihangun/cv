<template>
  <div class="container resume-container px-3 px-lg-5" style="min-height: 16px">
    <div class="float-end">
      <download-pdf-button />
      <language-button />
    </div>
  </div>
  <cv />
</template>

<script>
import cv from "./views/cv.vue";
import languageButton from "./components/languageButton.vue";
import downloadPdfButton from "./components/downloadPdfButton.vue";
export default {
  name: "App",
  components: {
    cv,
    languageButton,
    downloadPdfButton,
  },
  data() {
    return {};
  },
  methods: {},
};
</script>

<style>
@import "https://fonts.googleapis.com/css?family=Roboto:300,400,500,700,900";
@import "./assets/css/theme.css";
</style>
