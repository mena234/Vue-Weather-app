<template>
    <v-row>
        <v-col cols="2">
            <v-row>
                <v-col cols="6" class="pa-0 d-flex align-center">
                    <v-img
                        :lazy-src="iconUrl"
                        :src="iconUrl"
                        height="80px"
                        width="80px"
                    >
                        <template v-slot:placeholder>
                            <v-row
                                class="fill-height ma-0"
                                align="center"
                                justify="center"
                            >
                                <v-progress-circular
                                    indeterminate
                                    color="grey lighten-5"
                                ></v-progress-circular>
                            </v-row>
                        </template>
                    </v-img>
                </v-col>
                <v-spacer></v-spacer>
                <v-col
                    cols="4"
                    class="pa-0"
                    style="display: grid; grid-template: 3fr / 3fr"
                >
                    <div class="text-h3 pt-2" style="grid-area: 1 / 1 / 3 / 2">
                        {{ dayTemp[0] }}
                    </div>
                    <div class="text-caption" style="grid-area: 3 / 1 / 4 / 2">
                        {{ maxTemp }}°C
                    </div>
                    <div class="text-h3 pt-2" style="grid-area: 1 / 2 / 4 / 3">
                        {{ dayTemp[1] }}
                    </div>
                    <div
                        class="text-caption grey--text"
                        style="grid-area: 3 / 2 / 4 / 3"
                    >
                        {{ minTemp }}°C
                    </div>
                    <div class="text-h6 pt-2" style="grid-area: 1 / 3 / 2 / 4">
                        °C
                    </div>
                </v-col>
                <v-spacer></v-spacer>
            </v-row>
        </v-col>
        <div style="height: 70%">
            <v-divider vertical></v-divider>
        </div>
        <v-col cols="10" class="d-flex pa-0">
            <v-col cols="3" class="d-flex flex-column">
                <v-row class="pa-0 ma-0 text-body-2">
                    <span class="grey--text mr-1">Precipitation: </span>
                    <span>{{ currentDay.pop }}%</span>
                </v-row>
                <v-row class="pa-0 ma-0 text-body-2">
                    <span class="grey--text mr-1">Humidity: </span>
                    <span>{{ currentDay.humidity }}%</span>
                </v-row>
                <v-row class="pa-0 ma-0 text-body-2">
                    <span class="grey--text mr-1">Wind: </span>
                    <span>{{ windSpeed }}m/s</span>
                </v-row>
            </v-col>
            <v-spacer></v-spacer>
            <v-col cols="3" class="d-flex flex-column">
                <v-row class="pa-0 ma-0 text-h6 font-weight-black"> </v-row>
                <v-row class="pa-0 ma-0"> date </v-row>
                <v-row class="pa-0 ma-0">weather description </v-row>
            </v-col>
        </v-col>
    </v-row>
</template>

<script>
import axios from "axios";
export default {
    data() {
        return {
            latitude: "52.520008",
            longitude: "13.404954",
            api_token: process.env.VUE_APP_API_TOKEN,
            lang: "en",
            icon: "",
            weekDays: [],
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
                weather: [],
                wind_deg: 0,
                wind_gust: 0,
                wind_speed: 0,
            },
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

<style></style>
