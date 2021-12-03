<template>
    <v-row>
        <v-col xl="2" lg="2" md="3" sm="4">
            <v-row>
                <v-col lg="6" class="pa-0 d-flex align-center">
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
                    lg="4" xl="4"
                    class="pa-0"
                    style="display: grid; grid-template: 3fr / 3fr"
                >
                    <div class="text-h3 pt-2" style="grid-area: 1 / 1 / 3 / 2">
                        {{ dayTemp[0] }}
                    </div>
                    <div class="text-caption" style="grid-area: 3 / 1 / 4 / 2">
                        {{ roundNumber(currentDay.temp.max) }}°C
                    </div>
                    <div class="text-h3 pt-2" style="grid-area: 1 / 2 / 4 / 3">
                        {{ dayTemp[1] }}
                    </div>
                    <div
                        class="text-caption grey--text"
                        style="grid-area: 3 / 2 / 4 / 3"
                    >
                        {{ roundNumber(currentDay.temp.min) }}°C
                    </div>
                    <div class="text-h6 pt-2" style="grid-area: 1 / 3 / 2 / 4">
                        °C
                    </div>
                </v-col>
                <v-spacer></v-spacer>
            </v-row>
        </v-col>
        <div style="height: 80px">
            <v-divider vertical></v-divider>
        </div>
        <v-col lg="10" xl="10" md="9" sm="8" class="d-flex pa-0">
            <v-col lg="3" xl="3" sm="6" class="d-flex flex-column">
                <v-row class="pa-0 ma-0 text-body-2">
                    <span class="grey--text mr-1">Precipitation: </span>
                    <span>{{ roundNumber(currentDay.pop * 100) }}%</span>
                </v-row>
                <v-row class="pa-0 ma-0 text-body-2">
                    <span class="grey--text mr-1">Humidity: </span>
                    <span>{{ currentDay.humidity }}%</span>
                </v-row>
                <v-row class="pa-0 ma-0 text-body-2">
                    <span class="grey--text mr-1">Wind: </span>
                    <span>{{ roundNumber(currentDay.wind_speed) }}m/s</span>
                </v-row>
            </v-col>
            <v-spacer></v-spacer>
            <v-col lg="3" xl="3" sm="6" class="d-flex flex-column align-center text-body-6 mt-1">
                <v-row class="pa-0 ma-0 font-weight-black">CITY NAME</v-row>
                <v-row class="pa-0 ma-0">{{ index === 0 ? 'Today' : currentDate }}</v-row>
                <v-row class="pa-0 ma-0">{{ currentDay.weather[0].description }}</v-row>
            </v-col>
        </v-col>
    </v-row>
</template>

<script>
import roundNumberMixin from '@/mixins/roundNumberMixin'
export default {
    mixins: [roundNumberMixin],
    props: {
        weekDays: Array,
        currentDay: Object,
        index: Number
    },
    data() {
        return {
            icon: ""
        };
    },
    computed: {
        url() {
            return `https://api.openweathermap.org/data/2.5/onecall?lat=${this.latitude}&lon=${this.longitude}&exclude=hourly&appid=${this.api_token}&lang=${this.lang}&units=${this.units}`;
        },
        iconUrl() {
            return `http://openweathermap.org/img/wn/${this.currentDay.weather[0]?.icon}@2x.png`;
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
                return [""];
            }
        },
        currentDate() {
            return new Date(this.currentDay.dt * 1000).toDateString();
        }
    }
};
</script>

<style></style>
