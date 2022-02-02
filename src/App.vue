<template>
  <language-button />
  <cv />
</template>

<script>
import cv from "./views/cv.vue";
import languageButton from "./components/languageButton.vue";
export default {
  name: "App",
  components: {
    cv,
    languageButton
  },
  data() {
    return {
    };
  },
};
</script>

<style>
@import "https://fonts.googleapis.com/css?family=Roboto:300,400,500,700,900";
@import "./assets/css/theme.css";
</style>
