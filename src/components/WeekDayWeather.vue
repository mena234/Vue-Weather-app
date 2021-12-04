<template>
    <div>
        <div>{{ dayName }}</div>
        <v-img :src="iconUrl"></v-img>
        <div>{{ roundNumber(weekDay.temp.max) }}°  <span class="grey--text pl-1">{{ roundNumber(weekDay.temp.min) }}°</span></div>
    </div>
</template>

<script>
import roundNumber from '@/helpers/roundNumber';
export default {
    props: {
        weekDay: Object,
    },
    data() {
        return {
            lang: 'de-DE'
        }
    },
    computed: {
        iconUrl() {
            return `http://openweathermap.org/img/wn/${this.weekDay.weather[0]?.icon}@2x.png`;
        },
        dayName() {
            return new Date(this.weekDay.dt * 1000).toLocaleDateString(this.lang, { weekday: 'short', year: 'numeric', month: 'long', day: 'numeric' }).split(',')[0];
        },
    },
    methods: {
        roundNumber
    },
    mounted() {
        this.$root.$on('langChange', (result) => {
            this.lang = result.date;
        })
    },
};
</script>

<style></style>
