<template>
  <v-expansion-panels
            id="expansion-panel"
            v-if="$vuetify.breakpoint.mobile"
        >
            <v-expansion-panel>
                <v-expansion-panel-header>
                    <div class="d-flex justify-space-between">
                        <div class="d-flex align-center">
                            <div class="text-body-2 d-flex flex-column">
                                <div class="">
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
                            <div class="d-flex flex-column justify-space-between mr-3">
                                <div class="mb-2">{{ maxTemp }}°C</div>
                                <div class="grey--text">{{ minTemp }}°C</div>
                            </div>
                        </div>
                    </div>
                </v-expansion-panel-header>
                <v-expansion-panel-content>
                    something too
                </v-expansion-panel-content>
            </v-expansion-panel>
        </v-expansion-panels>
</template>

<script>
export default {

}
</script>

<style>

</style>