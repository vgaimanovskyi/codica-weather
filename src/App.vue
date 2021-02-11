<template>
  <v-app>
    <Bar />

    <v-main class="background">
      <transition name="slither">
        <router-view></router-view>
      </transition>
    </v-main>

    <v-speed-dial
      fixed
      v-model="fab"
      right
      bottom
      direction="top"
      transition="y-reverse-transition"
    >
      <template v-slot:activator>
        <v-btn v-model="fab" color="blue darken-2" dark fab>
          <v-icon v-if="fab"> mdi-close </v-icon>
          <v-icon v-else> mdi-menu </v-icon>
        </v-btn>
      </template>
      <v-btn
        fab
        dark
        small
        color="green"
        title="Add new city"
        @click="openNewCityModal = true"
      >
        <v-icon>mdi-plus</v-icon>
      </v-btn>
      <v-btn
        fab
        dark
        small
        color="warning"
        title="Use geolocation"
        @click="useGeo"
      >
        <v-icon>mdi-map-marker-outline</v-icon>
      </v-btn>
      <v-btn
        fab
        dark
        small
        color="red"
        title="Clear all"
        @click="openConfirmModal = true"
      >
        <v-icon>mdi-delete</v-icon>
      </v-btn>
    </v-speed-dial>

    <!-- Add new City modal -->
    <AddNewCity :open="openNewCityModal" @close="openNewCityModal = false" />
    <!-- Confirm Deleting modal -->
    <ConfirmModal :open="openConfirmModal" @close="openConfirmModal = false" />
    <Alert v-if="alert" :alert="alert" />
    <Error v-if="error" :error="error" />

    <Footer />
  </v-app>
</template>

<script>
import Bar from "@/components/Bar";
import Footer from "@/components/Footer";
import Error from "@/components/Error";
import Alert from "@/components/Alert";
import AddNewCity from "@/components/AddNewCity";
import ConfirmModal from "@/components/ConfirmModal";
import Cookies from "js-cookie";

export default {
  name: "App",
  components: { Error, Alert, Bar, Footer, AddNewCity, ConfirmModal },
  data() {
    return {
      fab: false,
      city: "",
      openNewCityModal: false,
      openConfirmModal: false,
      rules: [
        (value) => !!value || "Required.",
        (value) => (value && value.length >= 3) || "Min 3 characters",
      ],
    };
  },
  computed: {
    error() {
      return this.$store.getters.getError;
    },
    alert() {
      return this.$store.getters.getAlert;
    },
  },
  methods: {
    useGeo() {
      if (!navigator.geolocation) {
        this.setGeoError("Geolocation is not supported by your browser");
      } else {
        navigator.geolocation.getCurrentPosition(this.getGeo, this.setGeoError);
      }
    },
    setGeoError(error = "Unable to retrieve your location") {
      this.$store.commit("setError", error);
    },
    async getGeo(position) {
      const lat = position.coords.latitude;
      const lon = position.coords.longitude;
      await this.$store.dispatch("fetchByGeo", { lat, lon });
    },
  },
  async mounted() {
    const cookieStr = Cookies.get("weather-cities");
    const cities = JSON.parse(cookieStr || "[]");
    if (cities.length) {
      await this.$store.dispatch("fetchGroupByIds", cities);
    }
  },
};
</script>

<style lang="scss">
.background {
  background: radial-gradient(circle, #7386e6 0, #041644 100%);
}
.slither-enter-active,
.slither-leave-active {
  transition: 0.5s;
}

.slither-enter,
.slither-leave-to {
  transform: translateY(100px);
  opacity: 0;
}

.slither-enter-to,
.slither-leave {
  transform: translateY(0);
}
</style>