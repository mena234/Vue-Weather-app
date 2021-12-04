<template>
    <v-app>
        <Navbar @langChange="langChange"></Navbar>
        <v-main>
            <Weather :lang="lang" />
        </v-main>
    </v-app>
</template>

<script>
import Weather from "@/components/Weather.vue";
import Navbar from '@/components/Navbar.vue'
export default {
    name: "App",
    components: {
        Weather,
        Navbar
    },

    data: () => ({
      markers: [],
      lang: 'de'
    }),
    methods: {
      langChange(value) {
        this.lang = value;
      }
    }
};
</script>
