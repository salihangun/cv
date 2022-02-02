<template>
<div class="btn-group-sm float-start">
<button class="btn btn-outline-primary btn-group-sm mt-3" style="margin-right:15px;" @click="downloadFile">{{ $t('Download_Cv')}}</button>
</div>
</template>

<script>
import html2pdf from "html2pdf.js";
export default {
  name: "downloadPdfButton",
  props: {
    data: JSON,
  },
  methods: {
    downloadFile() {
      const invoice = document.querySelector('.main-wrapper');
      var opt = {
        image:{ type: 'jpeg', quality: 100 },
        filename: 'salih_angun',
      };
      html2pdf().from(invoice).set(opt).save();
    }
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
