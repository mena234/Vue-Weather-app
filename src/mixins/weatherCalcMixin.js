import roundNumber from '@/helpers/roundNumber.js';
export default {
    data() {
        return {
            lang: "de-DE"
        }
    },
    mounted() {
        this.$root.$on('langChange', (result) => {
            this.lang = result.date;
        })
    },
    computed: {
        currentDate() {
            return this.index === 0 ? this.$t('today') : new Date(this.currentDay.dt * 1000).toLocaleDateString(this.lang, { weekday: 'short', year: 'numeric', month: 'short', day: 'numeric' });
        },
        description() {
            return this.currentDay.weather[0].description;
        },
        minTemp() {
            return roundNumber(this.currentDay.temp.min);
        },
        maxTemp() {
            return roundNumber(this.currentDay.temp.max);
        },
        precipitation() {
            return roundNumber(this.currentDay.pop * 100);
        },
        humidity() {
            return this.currentDay.humidity;
        },
        windSpeed() {
            return roundNumber(this.currentDay.wind_speed);
        },
        iconUrl() {
            return `http://openweathermap.org/img/wn/${this.currentDay.weather[0]?.icon}@2x.png`;
        },
    }
  }