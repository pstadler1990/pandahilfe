<template>
    <div class="search-home">

        <div id="search-contact-overlay" v-if="searchContactForm">

            <div v-if="!contactCompleteStatus">
                <h3>Kontaktaufnahme für Anzeige #{{searchContactEntryId}} - {{searchQuery}} in {{searchLocation}}</h3>
                <form class="pure-form pure-form-aligned">
                    <fieldset>
                        <div class="pure-u-1 pure-u-md-1-3">
                            <label>Ihr Name
                                <input type="text" class="pure-input-1" v-model="searchContactName"/>
                            </label>
                        </div>
                        <div class="pure-u-1 pure-u-md-1-3">
                            <label>Ihre Email
                                <input type="email" class="pure-input-1" v-model="searchContactEmail" required/>
                            </label>
                            <span class="pure-form-message"><strong>Pflichtfeld</strong></span>
                        </div>
                        <div class="pure-u-1 pure-u-md-1-3">
                            <label>Ihre Telefonnummer
                                <input type="tel" class="pure-input-1" v-model="searchContactPhone" />
                            </label>
                            <span class="pure-form-message">Optional, für schnellere Kontaktaufnahme empfohlen</span>
                        </div>

                        <button class="pure-button pure-button-primary" @click="sendForm">Kontaktanfrage stellen</button>
                    </fieldset>
                </form>
            </div>
            <div v-else>
                <div v-if="contactCompleteSuccess">
                    <h3>Ihre Anfrage wurde erfolgreich verschickt!</h3>
                    <p>Der / die einstellende Person sollte demnächst Ihre Anfrage erhalten und wird sich dann bei Ihnen melden.
                    Bitte haben Sie Verständis, dass alle hier beteiligten Helfer*innen freiwillig handeln - es gibt also keine
                    Garantie, ob und wann diese sich bei Ihnen melden.</p>
                </div>
                <div v-else>
                    <h3>Hoppla! Leider konnten wir Ihren Anfrage nicht versenden..</h3>
                    <p>Bitte versuchen Sie es in wenigen Minuten noch einmal, dann sollte es wieder klappen.</p>
                </div>

                <button class="pure-button" @click="resetForm">Zurück zum Formular</button>
            </div>
        </div>

        <div v-else>
        <h2>Hilfe <strong>finden</strong></h2>
        <form class="pure-form pure-form-stacked">
            <fieldset>
                <div class="pure-u-1 pure-u-md-1-2">
                    <label for="search-query">Ich suche</label>
                    <select id="search-query" v-model="searchQuery" class="pure-input-1">
                        <option v-for="option in searchOptions" v-bind:value="option" :key="option">
                            {{option}}
                        </option>
                    </select>
                </div>

                <div class="pure-u-1 pure-u-md-1-2">
                    <label for="search-location">Ort</label>
                    <select id="search-location" v-model="searchLocation" class="pure-input-1">
                        <option v-for="location in supportedLocations" v-bind:value="location" :key="location">
                            {{location}}
                        </option>
                    </select>
                </div>
            </fieldset>

            <fieldset v-if="showResults">
                <div class="pure-u-1">{{searchQueryResults.length}} Ergebnisse</div>

                <div v-for="result in searchQueryResults" :key="result._id" class="result sep">
                    <div class="pure-u1 pure-u-md-1-2">
                        #{{result.entry_id}} <span v-for="tag in result.tags" :key="tag" :class="{'tag': true, 'tag-highlight': tag === searchQuery}">{{tag}}</span>
                    </div>

                    <div class="pure-u1 pure-u-md-1-2">
                        in <span v-for="location in result.location" :key="location" :class="{'tag': true, 'tag-highlight': location === searchLocation}">{{location}}</span>
                    </div>

                    <div class="pure-u1 sep notes" v-if="result.notes">
                        {{result.notes}}
                    </div>

                    <div class="pure-u-1 sep">
                        <div class="pure-u1 pure-u-md-1-2" v-if="result.name">
                            von <em>{{result.name}}</em>
                            <span v-if="result.email">&mdash; 📧 <a :href="emailLink(result.email)">{{result.email}}</a></span>
                            <span v-if="result.phone">&mdash; ☎ <a :href="phoneLink(result.phone)">{{result.phone}}</a></span>
                        </div>
                    </div>

                    <button class="pure-button sep" @click="openContactForm(result.entry_id)">Kontakt aufnehmen</button>

                </div>
            </fieldset>

            <button class="pure-button pure-button-primary pure-input-1" @click="findQuery" :disabled="!searchQueryResults.length || querying" v-if="!showResults">
                {{searchQueryResults.length}} {{searchQuery}} anzeigen
            </button>

            <button class="pure-button button-secondary" v-if="showResults" @click="resetForm">⮌ Neue Anfrage</button>
        </form>
        </div>
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
                searchContactEntryId: 0,
                searchContactName: '',
                searchContactEmail: '',
                searchContactPhone: '',
                querying: false,
                contactCompleteStatus: false,
                contactCompleteSuccess: false
            }
        },
        methods: {
            prefetchQuery: function() {
                if(this.searchQuery) {
                    this.querying = true;
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
                    }).finally(() => {
                        this.querying = false;
                    });
                }
            },
            findQuery: function() {
                if(this.searchQueryResults) {
                    this.showResults = true;
                }
            },
            resetFormData: function() {
                this.searchQuery = config.search.tags[0];
                this.searchLocation = config.search.locations[1];
                this.searchQueryResults = [];
                this.showResults = false;
                this.searchContactForm = false;
                this.querying = false;
                this.searchContactName = '';
                this.searchContactEmail =  '';
                this.searchContactPhone = '';
                this.searchContactEntryId = null;
                this.contactCompleteSuccess = false;
                this.contactCompleteStatus = false;
            },
            resetForm: function() {
                this.resetFormData();
                this.prefetchQuery();
            },
            openContactForm: function(entry_id) {
                this.resetFormData();
                this.searchContactForm = true;
                this.searchContactEntryId = entry_id;
            },
            sendForm: function() {
                const hasValidEmail = (email) => {
                    if(email.length === 0) {
                        return false;
                    }
                    const re = /\S+@\S+\.\S+/;
                    return re.test(email);
                };

                if(!hasValidEmail(this.searchContactEmail)) {
                    return false;
                }
                this.$http.post(`${config.search.apiUrl}/entry/${this.searchContactEntryId}`, {
                    name: this.searchContactName,
                    email: this.searchContactEmail,
                    phone: this.searchContactPhone
                }).then(res => {
                    console.log(res);
                    this.contactCompleteSuccess = true;
                }).catch(() => {
                    this.contactCompleteSuccess = false;
                }).finally(() => {
                    this.contactCompleteStatus = true;
                });
            },
            emailLink: function(mail) {
                return `mailto: ${mail}`;
            },
            phoneLink: function(num) {
                return `tel: ${num}`;
            }
        },
        watch: {
            searchQuery: function() {
                this.searchQueryResults = [];
                this.showResults = false;
                this.prefetchQuery();
            },
            searchLocation: function() {
                this.searchQueryResults = [];
                this.showResults = false;
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

    .button-secondary
        background: $color-theme-light
        font-size: 90%
        color: white
</style>