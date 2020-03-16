<template>
    <div class="offer-home">
        <h2>Hilfe <strong>anbieten</strong></h2>
        <form class="pure-form pure-form-aligned">
            <fieldset>
                <div class="pure-u1 pure-u-md-1-2">
                    <div v-for="option in searchOptions" v-bind:value="option" :key="option" class="offer-option">
                        <input type="checkbox" :value="option" :id="option" v-model="offerQuery.tags" />&nbsp;
                        <label :for="option">{{option}}</label>
                    </div>
                </div>

                <div class="pure-u1 pure-u-md-1-2">

                    <label for="offer-location">Ort</label>
                    <select id="offer-location" v-model="offerQuery.location" class="pure-input-1">
                        <option v-for="location in supportedLocations" v-bind:value="location" :key="location">
                            {{location}}
                        </option>
                    </select>

                    <label for="offer-distance" class="pure-form-message-inline offer-distance">Im Umkreis von
                    <input type="number" id="offer-distance" v-model="offerQuery.distance"  /> km</label>
                </div>
            </fieldset>

            <button class="pure-button pure-button-primary">Hilfe anbieten</button>
        </form>
    </div>
</template>

<script>
    import {config} from '../config'

    export default {
        name: "OfferHome",
        data () {
            return {
                offerQuery: {
                    tags: [],
                    location: config.search.locations[0],
                    distance: 10
                },
                searchOptions: config.search.tags,
                supportedLocations: config.search.locations
            }
        }
    }
</script>

<style scoped lang="sass">
    .offer-option
        padding: .1em

    .offer-distance
        padding: .25em

    h2
        strong
            font-weight: bold
            border-bottom: 3px solid black
</style>