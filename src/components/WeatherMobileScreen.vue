<template>
    <v-expansion-panels v-model="panel">
        <WeatherItemMobileScreen
            v-for="(weekDay, index) in weekDays"
            :key="index"
            :currentDay="weekDay"
            :index="index"
        >
        </WeatherItemMobileScreen>
    </v-expansion-panels>
</template>

<script>
import WeatherItemMobileScreen from "@/components/WeatherItemMobileScreen";
export default {
    components: {
        WeatherItemMobileScreen,
    },
    props: {
        weekDays: Array,
    },
    data() {
        return {
            panel: [0, 1, 2]
        }
    },
    mounted() {
        console.log(this.weekDays);
    },
    watch: {
        weekDays(value, oldValue) {
            console.log(value, oldValue);
        }
    }
};
</script>

<style></style>
