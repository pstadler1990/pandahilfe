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
                    <input type="text" id="search-location" placeholder="z.B. Regensburg" class="pure-input-1"/>
                </div>
            </fieldset>

            <button class="pure-button pure-button-primary">Hilfe finden</button>
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
                searchOptions: config.search.tags
            }
        }
    }
</script>

<style scoped lang="sass">
    h2
        strong
            font-weight: bold
            border-bottom: 3px solid black
</style>