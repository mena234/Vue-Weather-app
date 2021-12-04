<template>
    <v-row>
        <v-col xl="2" lg="3" md="3" sm="4">
            <v-row>
                <v-col lg="6" class="pa-0 d-flex align-center">
                    <v-img
                        lazy-src="@/assets/weather icon.png"
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
                    style="display: grid; grid-template-columns: 1fr fit-content(100px) 1fr; grid-template-rows: 3fr"
                >
                    <div class="text-h3 pt-2" style="grid-area: 1 / 1 / 3 / 2">
                        {{ dayTemp[0] }}
                    </div>
                    <div class="text-caption" style="grid-area: 3 / 1 / 4 / 2">
                        {{ maxTemp | celsius }}
                    </div>
                    <div class="text-h3 pt-2" style="grid-area: 1 / 2 / 4 / 3">
                        {{ dayTemp[1] }}
                    </div>
                    <div
                        class="text-caption grey--text"
                        style="grid-area: 3 / 2 / 4 / 3"
                    >
                        {{ minTemp | celsius }}
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
        <v-col xl="10" lg="9" md="9" sm="8" class="d-flex pa-0">
            <v-col lg="3" xl="3" sm="6" class="d-flex flex-column">
                <v-row class="pa-0 ma-0 text-body-2">
                    <span class="grey--text mr-1">{{ $t('precipitation')}}: </span>
                    <span>{{ precipitation }}%</span>
                </v-row>
                <v-row class="pa-0 ma-0 text-body-2">
                    <span class="grey--text mr-1">{{ $t('humidity')}}: </span>
                    <span>{{ humidity }}%</span>
                </v-row>
                <v-row class="pa-0 ma-0 text-body-2">
                    <span class="grey--text mr-1">{{ $t('wind')}}: </span>
                    <span>{{ windSpeed }}m/s</span>
                </v-row>
            </v-col>
            <v-spacer></v-spacer>
            <v-col lg="3" xl="3" sm="6" class="d-flex flex-column align-center text-body-6 mt-1">
                <v-row class="pa-0 ma-0 font-weight-black">{{ $t('cityName') }}</v-row>
                <v-row class="pa-0 ma-0">{{ currentDate }}</v-row>
                <v-row class="pa-0 ma-0">{{ description }}</v-row>
            </v-col>
        </v-col>
    </v-row>
</template>

<script>
import roundNumberMixin from '@/mixins/roundNumberMixin';
import weatherCalcMixin from '@/mixins/weatherCalcMixin'

export default {
    mixins: [roundNumberMixin, weatherCalcMixin],
    props: {
        currentDay: Object,
        index: Number
    },
    data() {
        return {
            icon: ""
        };
    },
    computed: {
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
    }
};
</script>

<style></style>
