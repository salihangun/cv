<template>
<div class="container resume-container px-3 px-lg-5" style="min-height:16px">
 <div class="btn-group float-end mt-3 btn-group-sm" role="group" >
  <input type="radio" class="btn-check" name="btnradio" id="btnEN" autocomplete="off" checked>
  <label class="btn btn-outline-primary" for="btnEN">EN</label>

  <input type="radio" class="btn-check" name="btnradio" id="btnDE" autocomplete="off">
  <label class="btn btn-outline-primary" for="btnDE">DE</label>

  <input type="radio" class="btn-check" name="btnradio" id="btnTR" autocomplete="off">
  <label class="btn btn-outline-primary" for="btnTR">TR</label>
</div>
</div>
</template>

<script>
export default {
  name: "languageButton",
  props: {
    data: JSON,
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
