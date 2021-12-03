<template>
    <div class="d-flex justify-space-around flex-wrap">
        <WeekDayWeather
            v-for="(item, index) in weekDays"
            :key="index"
            :weekDay="weekDays[index]"
            class="week-day rounded-lg"
            :class="{
                'grey lighten-4': activeIndex === index,
            }"
            @click.native="changeCurrentDay(index)"
        >
            time
        </WeekDayWeather>
    </div>
</template>

<script>
import WeekDayWeather from "./WeekDayWeather.vue";
export default {
    components: {
        WeekDayWeather,
    },
    data() {
        return {
            activeIndex: 0,
        }
    },
    props: {
        weekDays: Array,
    },
    methods: {
        changeCurrentDay(index) {
            this.activeIndex = index;
            this.$emit("changeCurrentDay", index);
        },
    },
};
</script>

<style>
.week-day {
    width: 100px;
    height: 100px;
    display: grid;
    grid-template: 3fr / 1fr;
    text-align: center;
    cursor: pointer;
    transition: background 0.3s;
}
</style>
