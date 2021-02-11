<template>
  <v-snackbar :color="'error'" :multi-line="true" :timeout="5000" :value="true">
    {{ error }}
    <template v-slot:action="{ attrs }">
      <v-btn dark text v-bind="attrs" @click="closeError"> Close </v-btn>
    </template>
  </v-snackbar>
</template>

<script>
export default {
  props: ["error"],
  methods: {
    closeError() {
      this.$store.commit("clearError");
    },
  },
};
</script>