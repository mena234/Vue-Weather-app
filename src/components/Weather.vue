<template>
    <div>
        <WeatherMobileScreen
            v-if="$vuetify.breakpoint.mobile"
            :weekDays="weekDays"
        ></WeatherMobileScreen>
        <v-container class="grey lighten-4 mt-10" v-else>
            <v-row class="ma-1 white rounded-lg main-row align-center">
                <v-expansion-panels>
                    <v-expansion-panel>
                        <v-expansion-panel-header>
                            <WeatherDetails
                                :index="index"
                                :weekDays="weekDays"
                                :currentDay="currentDay"
                            ></WeatherDetails>
                        </v-expansion-panel-header>
                        <v-expansion-panel-content>
                            <v-divider></v-divider>
                            <WeekDaysWeather
                                class="mt-5"
                                @changeCurrentDay="changeCurrentDay"
                                :weekDays="weekDays"
                            ></WeekDaysWeather>
                        </v-expansion-panel-content>
                    </v-expansion-panel>
                </v-expansion-panels>
            </v-row>
        </v-container>
    </div>
</template>

<script>
import axios from "axios";
import WeatherDetails from "./WeatherDetails.vue";
import WeekDaysWeather from "./WeekDaysWeather.vue";
import roundNumberMixin from "@/mixins/roundNumberMixin";
import WeatherMobileScreen from "./WeatherMobileScreen.vue";
export default {
    mixins: [roundNumberMixin],
    components: {
        WeatherDetails,
        WeekDaysWeather,
        WeatherMobileScreen,
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
            currentDay: {
                clouds: "",
                dew_point: 0,
                dt: 0,
                feels_like: {},
                humidity: 0,
                moon_phase: 0,
                moonrise: 0,
                moonset: 0,
                pop: 0,
                pressure: 0,
                sunrise: 0,
                sunset: 0,
                temp: {
                    day: 0,
                    min: 0,
                    max: 0,
                },
                uvi: 0,
                weather: [
                    {
                        description: "",
                    },
                ],
                wind_deg: 0,
                wind_gust: 0,
                wind_speed: 0,
            },
            index: 0,
        };
    },
    computed: {
        url() {
            return `https://api.openweathermap.org/data/2.5/onecall?lat=${this.latitude}&lon=${this.longitude}&exclude=hourly&appid=${this.api_token}&lang=${this.lang}&units=${this.units}`;
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
        },
        changeCurrentDay(index) {
            this.index = index;
            this.currentDay = this.weekDays[index];
        },
    },
};
</script>

<style scoped></style>
