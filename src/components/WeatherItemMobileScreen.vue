<template>
    <v-expansion-panel>
        <v-expansion-panel-header>
            <div class="d-flex justify-space-between">
                <div class="d-flex align-center">
                    <div class="text-body-2 d-flex flex-column">
                        <div class="mb-1">
                            {{ currentDate }}
                        </div>
                        <div class="grey--text">
                            {{ description }}
                        </div>
                    </div>
                </div>
                <div class="d-flex align-center">
                    <v-img
                        :lazy-src="iconUrl"
                        :src="iconUrl"
                        height="60px"
                        width="60px"
                    >
                    </v-img>
                    <div
                        class="d-flex flex-column justify-space-between mr-3 text-right"
                    >
                        <div class="mb-2">{{ maxTemp }}°C</div>
                        <div class="grey--text">{{ minTemp }}°C</div>
                    </div>
                </div>
            </div>
        </v-expansion-panel-header>
        <v-expansion-panel-content>
            <v-divider></v-divider>
            <div class="d-flex justify-space-between align-center">
                <div class="d-flex flex-column mt-3 text-body-2">
                    <div>
                        <span class="grey--text mr-1">Precipitation: </span>
                        <span>{{ precipitation }}%</span>
                    </div>
                    <div>
                        <span class="grey--text mr-1">Humidity: </span>
                        <span>{{ humidity }}%</span>
                    </div>
                    <div>
                        <span class="grey--text mr-1">Wind: </span>
                        <span>{{ windSpeed }}m/s</span>
                    </div>
                </div>
                <div class="text-h2 mt-3">{{ currentTemp }}°C</div>
            </div>
        </v-expansion-panel-content>
    </v-expansion-panel>
</template>

<script>
import roundNumberMixin from '@/mixins/roundNumberMixin'
import weatherCalcMixin from '@/mixins/weatherCalcMixin'
export default {
    mixins: [roundNumberMixin, weatherCalcMixin],
    props: {
        currentDay: Object,
        index: Number
    },
    computed: {
        currentTemp() {
            return this.roundNumber(this.currentDay.temp.day)
        },
    },
};
</script>

<style></style>
