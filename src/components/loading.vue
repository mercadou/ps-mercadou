<template>
  <v-layout row justify-center>
    <v-dialog
      v-model="loading"
      persistent
      fullscreen
      content-class="loading-dialog"
    >
      <v-container fill-height>
        <v-layout row justify-center align-center>
          <v-progress-circular
            indeterminate
            :size="70"
            :width="7"
            color="orange"
          >
            <h1 class="color-loading">Aguarde...<br /><br /><br /><br /></h1>
          </v-progress-circular>
        </v-layout>
      </v-container>
    </v-dialog>
  </v-layout>
</template>
<script>
export default {
  name: "loading",
  props: { loading: Boolean }
};
</script>
<style>
.color-loading {
  color: #ffffff;
  stop-opacity: inherit;
}
.loading-dialog {
  background-color: #000000;
  opacity: 0.8;
}
td.img-table {
  cursor: pointer;
  user-select: none;
}
</style>