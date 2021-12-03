<template>
    <div>
        <div>{{ dayName }}</div>
        <v-img :src="iconUrl"></v-img>
        <div>{{ roundNumber(weekDay.temp.max) }}°  <span class="grey--text pl-1">{{ roundNumber(weekDay.temp.min) }}°</span></div>
    </div>
</template>

<script>
import roundNumberMixin from '@/mixins/roundNumberMixin'
export default {
    mixins: [roundNumberMixin],
    props: {
        weekDay: Object,
    },
    computed: {
        iconUrl() {
            return `http://openweathermap.org/img/wn/${this.weekDay.weather[0]?.icon}@2x.png`;
        },
        dayName() {
            return new Date(this.weekDay.dt * 1000).toDateString().split(' ')[0];
        },
    },
    mounted() {},
};
</script>

<style></style>
