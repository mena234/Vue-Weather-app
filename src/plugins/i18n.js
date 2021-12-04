import Vue from 'vue';
import VueI18n from 'vue-i18n';

Vue.use(VueI18n);

const messages = {
    'de': {
        weatherApp: 'Wetteranwendung',
        precipitation: 'Niederschlag',
        humidity: 'Feuchtigkeit',
        wind: 'Wind',
        cityName: 'STADTNAME',
        today: 'Heute'
    },
    'en': {
        weatherApp: 'Weather app',
        precipitation: 'Precipitation',
        humidity: 'Humidity',
        wind: 'Wind',
        cityName: 'CITY NAME',
        today: 'Today'
    }
};

export default new VueI18n({
    locale: 'de',
    fallbackLocale: 'en',
    messages, 
});