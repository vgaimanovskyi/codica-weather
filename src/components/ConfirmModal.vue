<template>
  <v-dialog v-model="modal" persistent max-width="290">
    <v-card>
      <v-card-title class="headline"> Confirm </v-card-title>
      <v-card-text>
        Do you want to delete all data in store and cookies?
      </v-card-text>
      <v-card-actions>
        <v-spacer></v-spacer>
        <v-btn color="green darken-1" text @click="modal = false"> No </v-btn>
        <v-btn color="red darken-1" text @click="clearAll"> Yes </v-btn>
      </v-card-actions>
    </v-card>
  </v-dialog>
</template>

<script>
export default {
  props: ["open"],
  computed: {
    modal: {
      get() {
        return this.open;
      },
      set(value) {
        if (!value) {
          this.$emit("close");
        }
      },
    },
  },
  methods: {
    clearAll() {
      this.$store.dispatch("clearAll");
      this.modal = false;
      if (this.$route.path !== "/") {
        this.$router.push("/");
      }
    },
  },
};
</script>

<style>
</style>