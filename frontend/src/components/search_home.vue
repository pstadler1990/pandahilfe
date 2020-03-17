<template>
    <div class="search-home">

        <div id="search-contact-overlay" class="full-overlay" v-if="searchContactForm">
            <h3>Kontaktaufnahme für {{searchQuery}} in {{searchLocation}}</h3>
        </div>

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

            <fieldset v-if="showResults">
                <div v-for="result in searchQueryResults" :key="result._id" class="result">
                    <div class="pure-u1 pure-u-md-1-2">
                        #{{result.entry_id}} <span v-for="tag in result.tags" :key="tag" :class="{'tag': true, 'tag-highlight': tag === searchQuery}">{{tag}}</span>
                    </div>

                    <div class="pure-u1 pure-u-md-1-2">
                        in {{result.location}} <small>im Umkreis von {{result.distance}} km</small>
                    </div>

                    <div class="pure-u1 sep notes" v-if="result.notes">
                        {{result.notes}}
                    </div>

                    <div class="pure-u-1 sep">
                        <div class="pure-u1 pure-u-md-1-2" v-if="result.name">
                            von <em>{{result.name}}</em>
                        </div>
                    </div>

                    <button class="pure-button sep">Kontakt aufnehmen</button>

                </div>
            </fieldset>

            <button class="pure-button pure-button-primary button-large" @click="findQuery" :disabled="!searchQueryResults.length" v-if="!showResults">
                {{searchQueryResults.length}} {{searchQuery}} anzeigen
            </button>
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
                searchLocation: config.search.locations[1],
                searchOptions: config.search.tags,
                supportedLocations: config.search.locations.filter(e => e !== 'Regensburg'),
                searchQueryResults: [],
                showResults: false,
                searchContactForm: false,
            }
        },
        methods: {
            prefetchQuery: function() {
                if(this.searchQuery) {
                    this.searchQueryResults = [];
                    this.$http.get(
                        `${config.search.apiUrl}/entry`, {
                            params: {
                                location: this.searchLocation,
                                tag: this.searchQuery
                            }
                        }
                    ).then(res => {
                        const results = res.data;
                        if(results.ok) {
                            this.searchQueryResults = results.entries;
                        }
                    });
                }
            },
            findQuery: function() {
                if(this.searchQueryResults) {
                    this.showResults = true;
                }
            }
        },
        watch: {
            searchQuery: function(n) {
                console.log('Query changed', n);
                this.prefetchQuery();
            },
            searchLocation: function(n) {
                console.log('Query changed', n);
                this.prefetchQuery();
            }
        },
        beforeMount() {
            this.prefetchQuery();
        }
    }
</script>

<style scoped lang="sass">
    @import "src/assets/colors"

    h2
        strong
            font-weight: bold
            border-bottom: 3px solid black

    .button-large
        font-size: 150%

    .tag
        margin-right: 1em
        font-size: 70%
        background: $color-theme-past1
        border: 1px solid $color-theme-past2
        padding: 2px
        border-radius: 2px
        display: inline-block

    .tag-highlight
        background: $color-theme-alt
        color: white
        border: 1px solid $color-theme-light

    .result
        padding: 1em
        border-radius: 3px
        margin-bottom: 1em
        background: whitesmoke
        box-shadow: 2px 3px 5px rgba(0, 0, 0, .3)

    .sep
        margin-top: 1em

    .notes
        font-family: monospace, monospace, "Courier New"
        font-size: 90%

    .full-overlay
        position: absolute
        width: calc(100% - 2em)
        height: calc(100% - 2em)
        margin: -1em
        padding: 1em
        background: white
</style>