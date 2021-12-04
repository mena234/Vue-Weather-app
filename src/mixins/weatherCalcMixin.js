export default {
    computed: {
        currentDate() {
            return this.index === 0 ? this.$t('today') : new Date(this.currentDay.dt * 1000).toLocaleDateString('de-DE', { weekday: 'short', year: 'numeric', month: 'long', day: 'numeric' });
        },
        description() {
            return this.currentDay.weather[0].description;
        },
        minTemp() {
            return this.roundNumber(this.currentDay.temp.min);
        },
        maxTemp() {
            return this.roundNumber(this.currentDay.temp.max);
        },
        precipitation() {
            return this.roundNumber(this.currentDay.pop * 100);
        },
        humidity() {
            return this.currentDay.humidity;
        },
        windSpeed() {
            return this.roundNumber(this.currentDay.wind_speed);
        },
        iconUrl() {
            return `http://openweathermap.org/img/wn/${this.currentDay.weather[0]?.icon}@2x.png`;
        },
    }
  }