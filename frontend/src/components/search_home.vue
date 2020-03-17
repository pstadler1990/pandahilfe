<template>
    <div class="search-home">
        <h2>Hilfe <strong>finden</strong></h2>
        <form class="pure-form pure-form-stacked">
            <fieldset>
                <div class="pure-u1 pure-u-md-1-2">
                    <label for="search-query">Ich suche</label>
                    <select id="search-query" v-model="searchQuery" class="pure-input-1">
                        <option v-for="option in searchOptions" v-bind:value="option" :key="option">
                            {{option}}
                        </option>
                    </select>
                </div>

                <div class="pure-u1 pure-u-md-1-2">
                    <label for="search-location">Ort</label>
                    <select id="search-location" v-model="searchLocation" class="pure-input-1">
                        <option v-for="location in supportedLocations" v-bind:value="location" :key="location">
                            {{location}}
                        </option>
                    </select>
                </div>
            </fieldset>

            <button class="pure-button pure-button-primary button-large">Hilfe finden</button>
        </form>
    </div>
</template>

<script>
    import {config} from '../config'
    
    export default {
        name: "SearchHome",
        data () {
            return {
                searchQuery: config.search.tags[0],
                searchLocation: config.search.locations[0],
                searchOptions: config.search.tags,
                supportedLocations: config.search.locations
            }
        }
    }
</script>

<style scoped lang="sass">
    h2
        strong
            font-weight: bold
            border-bottom: 3px solid black

    .button-large
        font-size: 150%
</style>