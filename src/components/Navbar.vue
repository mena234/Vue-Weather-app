<template>
    <v-toolbar class="toolbar">
        <v-toolbar-title>
            {{ $t("weatherApp") }}
        </v-toolbar-title>
        <v-spacer></v-spacer>
        <div style="width: 100px; height: 20px">
            <select
                name="lang"
                value="de"
                class="lang"
                @change="changeLanguage"
            >
                <option
                    v-for="(lang, index) in languages"
                    :key="index"
                    :value="lang.value"
                >
                    {{ lang.name }}
                </option>
            </select>
        </div>
    </v-toolbar>
</template>

<script>
import i18n from "@/plugins/i18n";
import languages from '@/constants/languages';
export default {
    data() {
        return {
            languages
        };
    },
    methods: {
        changeLanguage({ target: { value } }) {
            const date = this.languages.find(l => l.value === value).date;
            this.$root.$emit("langChange", {
                date,
                value
            });
            i18n.locale = value;
        },
    },
};
</script>

<style>
.toolbar {
    flex: 0 !important;
}
.lang {
    width: auto;
    height: 30px;
    border: 2px solid gray;
    border-radius: 100px;
    padding: 0 10px;
    color: gray;
}
</style>
