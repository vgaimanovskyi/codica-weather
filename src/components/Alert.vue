<template>
  <v-snackbar
    :color="'success'"
    :multi-line="true"
    :timeout="5000"
    :value="true"
  >
    {{ alert }}
    <template v-slot:action="{ attrs }">
      <v-btn dark text v-bind="attrs" @click="closeAlert"> Close </v-btn>
    </template>
  </v-snackbar>
</template>

<script>
export default {
  props: ["alert"],
  methods: {
    closeAlert() {
      this.$store.commit("clearAlert");
    },
  },
};
</script>