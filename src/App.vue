<template>
    <v-app>
        <Navbar></Navbar>
        <v-main>
            <Weather />
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
    }
};
</script>
