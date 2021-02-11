<template>
  <v-app-bar app color="#273d75" dark>
    <v-spacer></v-spacer>
    <v-toolbar-title>
      <router-link
        to="/"
        tag="a"
        class="custom-hover white--text text-decoration-none"
      >
        Codica test task
      </router-link>
    </v-toolbar-title>
    <v-spacer></v-spacer>
  </v-app-bar>
</template>

<style lang="scss" scoped>
.custom-hover {
  transition: 0.3s;

  &:hover {
    letter-spacing: 1px;
  }
}
</style>
