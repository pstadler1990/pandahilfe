<template>
    <div class="offer-home">
        <h2>Hilfe <strong>anbieten</strong></h2>
        <form class="pure-form pure-form-aligned">
            <fieldset>
                <div class="pure-u1 pure-u-md-1-2">
                    <div v-for="option in searchOptions" v-bind:value="option" :key="option" class="offer-option">
                        <label :for="option"><input type="checkbox" :value="option" :id="option" v-model="offerQuery.tags" />&nbsp;{{option}}</label>
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

            <fieldset v-if="formOpened">
                <div class="pure-u-1 pure-u-md-1-3">
                    <label for="contact-name">Name
                        <input type="text" v-model="offerQuery.contactName" id="contact-name" class="pure-input-1" />
                    </label>
                </div>

                <div class="pure-u-1 pure-u-md-1-3">
                    <label for="contact-name">E-Mail
                        <input type="email" v-model="offerQuery.contactEmail" id="contact-email" class="pure-input-1" required/>
                        <span class="pure-form-message required-info">Pflichtfeld</span>
                    </label>
                </div>

                <div class="pure-u-1 pure-u-md-1-3">
                    <label for="contact-name">Telefonnummer
                        <input type="tel" v-model="offerQuery.contactPhone" id="contact-phone" class="pure-input-1" />
                    </label>
                    <span class="pure-form-message">Die Angabe der Telefonnummer ist freiwillig. Lesen Sie hier mehr darüber.</span>
                </div>

                <p>
                    <label><input type="checkbox" v-model="offerQuery.contactAnonymously" id="contact-anonymously" />&nbsp;
                        Ich möchte anonym bleiben (Sie erhalten eine E-Mail von uns, wenn ein*e Hilfesuchende*r Sie kontaktieren möchte)
                    </label>
                </p>

                <div class="pure-u-1">
                    <label for="contact-notes">Anmerkungen
                        <textarea v-model="offerQuery.contactNotes" id="contact-notes" class="pure-input-1"/>
                    </label>
                    <span class="pure-form-message">Optional</span>
                </div>

            </fieldset>

            <button class="pure-button" @click.prevent="extendForm">Hilfe anbieten</button>
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
                    distance: 10,
                    contactName: '',
                    contactPhone: '',
                    contactEmail: '',
                    contactAnonymously: false,
                    contactNotes: ''
                },
                searchOptions: config.search.tags,
                supportedLocations: config.search.locations,
                formOpened: false,
            }
        },
        methods: {
            extendForm: function() {
                if(!this.formOpened) {
                    this.formOpened = true;
                } else{
                    /* Form already open, validate input fields and submit */
                    // TODO: Submit offer form
                }

            }
        }
    }
</script>

<style scoped lang="sass">
    @import "src/assets/colors"

    .offer-option
        padding: .1em

    .offer-distance
        padding: .25em

    h2
        strong
            font-weight: bold
            border-bottom: 3px solid black

    textarea
        resize: vertical
        min-height: 7em

    .required-info
        font-weight: bold
</style>