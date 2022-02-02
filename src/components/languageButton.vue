<template>
 <div class="btn-group mt-3 btn-group-sm" role="group" >
  <input type="radio" class="btn-check" name="btnradio" id="btnEN" autocomplete="off" checked>
  <label class="btn btn-outline-primary" for="btnEN" @click="setSelectedLanguage('en')">EN</label>

  <input type="radio" class="btn-check" name="btnradio" id="btnDE" autocomplete="off">
  <label class="btn btn-outline-primary" for="btnDE" @click="setSelectedLanguage('de')">DE</label>

  <input type="radio" class="btn-check" name="btnradio" id="btnTR" autocomplete="off">
  <label class="btn btn-outline-primary" for="btnTR" @click="setSelectedLanguage('tr')">TR</label>
</div>
</template>

<script>
import { mapActions } from "vuex";
export default {
  name: "languageButton",
  props: {
    data: JSON,
  },
  methods: {
    ...mapActions(["updateSelectedLanguage"]),
    setSelectedLanguage(language) {
      
      this.updateSelectedLanguage(language);
    },
  },
};
</script>

<style scoped>
.btn-check:checked+.btn-outline-primary, .btn-check:active+.btn-outline-primary, .btn-outline-primary:active, .btn-outline-primary.active, .btn-outline-primary.dropdown-toggle.show,
.btn-outline-primary:hover{
  color:#fff !important;
}
.btn{
  height: inherit;
}
</style>
