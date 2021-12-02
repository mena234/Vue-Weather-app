<template>
    <v-container class="grey lighten-4 mt-10">
        <v-row class="ma-1 white rounded-lg main-row align-center">
            <v-expansion-panels>
                <v-expansion-panel>
                    <v-expansion-panel-header>
                        <WeatherDetails></WeatherDetails>
                    </v-expansion-panel-header>
                    <v-expansion-panel-content>
                        Some content
                    </v-expansion-panel-content>
                </v-expansion-panel>
            </v-expansion-panels>
        </v-row>
    </v-container>
</template>

<script>
import axios from "axios";
import WeatherDetails from './WeatherDetails.vue';
export default {
    components: {
        WeatherDetails
    },
    data() {
        return {
            latitude: "52.520008",
            longitude: "13.404954",
            api_token: process.env.VUE_APP_API_TOKEN,
            lang: "en",
            icon: "",
            weekDays: [],
            units: "metric",
        };
    },
    computed: {
        url() {
            return `https://api.openweathermap.org/data/2.5/onecall?lat=${this.latitude}&lon=${this.longitude}&exclude=hourly&appid=${this.api_token}&lang=${this.lang}&units=${this.units}`;
        },
        iconUrl() {
            return `http://openweathermap.org/img/wn/${this.icon}@2x.png`;
        },
        dayTemp() {
            if (this.currentDay.temp.day) {
                const roundValueOfTempOfDay = Math.round(
                    this.currentDay.temp.day
                );
                const stringValueOfTemp = String(roundValueOfTempOfDay);
                if (stringValueOfTemp.length >= 2) {
                    return stringValueOfTemp.split("");
                }
                return [stringValueOfTemp];
            } else {
                return ["", ""];
            }
        },
        // using computed better than using methods because it caches the value.
        minTemp() {
            return Math.round(this.currentDay.temp.min);
        },
        maxTemp() {
            return Math.round(this.currentDay.temp.min);
        },
        windSpeed() {
            return Math.round(this.currentDay.wind_speed);
        },
    },
    async mounted() {
        if (window.navigator && window.navigator.geolocation) {
            window.navigator.geolocation.getCurrentPosition(
                async (position) => {
                    this.latitude = position.coords.latitude;
                    this.longitude = position.coords.longitude;
                    // await this.setInitialData()
                }
            );
        }
        await this.setInitialData();
    },
    methods: {
        async setInitialData() {
            const response = await axios.get(this.url);
            const { data } = response;
            this.weekDays = data.daily;
            this.currentDay = data.daily[0];
            console.log(this.currentDay);
            this.icon = this.currentDay.weather[0].icon;
        },
    },
};
</script>

<style scoped>
.v-expansion-panel-header {
    height: 100px;
}
</style>
