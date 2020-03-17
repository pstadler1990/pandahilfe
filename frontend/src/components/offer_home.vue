<template>
    <div class="offer-home">

        <div id="offer-complete-overlay" class="full-overlay" v-if="offerCompleteStatus">
            <div class="offer-complete-status" v-if="offerCompleteSuccess">
                <h3>Vielen Dank! Ihre Hilfeunterstützung wurde erfolgreich eingetragen.</h3>
                <h4>Anzeigennummer: {{entryID}}</h4>
                <h5>Wichtig - Ihr Löschcode lautet: {{deleteCode}}</h5>
                <p>Mit diesem Löschcode können Sie Ihre Anzeige jederzeit löschen. Suchen Sie einfach nach Ihrer Anzeige und wählen Sie <em>Anzeige löschen</em>.</p>
                <button class="pure-button" @click="resetForm">Weitere Hilfe anbieten</button>
            </div>
            <div class="offer-complete-error" v-else>
                <h3>Hoppla! Leider konnten wir Ihren Eintrag nicht speichern..</h3>
                <p>Bitte versuchen Sie es in wenigen Minuten noch einmal, dann sollte es wieder klappen.</p>
            </div>
        </div>

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
                    <label for="contact-email">E-Mail
                        <input type="email" v-model="offerQuery.contactEmail" id="contact-email" class="pure-input-1" required/>
                        <span class="pure-form-message required-info">Pflichtfeld</span>
                    </label>
                </div>

                <div class="pure-u-1 pure-u-md-1-3">
                    <label for="contact-phone">Telefonnummer
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

            <button class="pure-button button-secondary" @click="extendForm">Hilfe anbieten</button>

            <!-- Error messages -->
            <ul v-if="formErrors.length">
                <li v-for="error in formErrors" :key="error" class="error-info">
                    {{error}}
                </li>
            </ul>
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
                formErrors: [],
                offerCompleteStatus: false,
                offerCompleteSuccess: false,
                deleteCode: '',
                entryID: 0,
            }
        },
        methods: {
            extendForm: function(e) {
                if(!this.formOpened) {
                    this.formOpened = true;
                    this.offerCompleteStatus = false;
                    this.offerCompleteSuccess = false;
                    e.preventDefault();
                    return false;
                } else{
                    /* Form already open, validate input fields and submit */
                    this.formErrors = [];

                    const hasOptions = this.offerQuery.tags.length > 0;
                    const hasLocation = this.offerQuery.location.length > 0;
                    const hasValidEmail = (email) => {
                        if(email.length === 0) {
                            return false;
                        }
                        const re = /\S+@\S+\.\S+/;
                        return re.test(email);
                    };

                    if(hasOptions && hasLocation && hasValidEmail(this.offerQuery.contactEmail)) {
                        // TODO: Submit offer form
                        this.$http.post(
                            `${config.search.apiUrl}/entry`, {
                            name: this.offerQuery.contactName,
                            email: this.offerQuery.contactEmail,
                            phone: this.offerQuery.contactPhone,
                            tags: this.offerQuery.tags,
                            notes: this.offerQuery.contactNotes,
                            location: this.offerQuery.location,
                            distance: this.offerQuery.distance,
                            isAnonymously: this.offerQuery.contactAnonymously
                        }).then(res => {
                           const response = res.data;
                           if(response.ok) {
                               this.deleteCode = response.deleteCode;
                               this.entryID = response.entry_id;
                               this.offerCompleteSuccess = true;
                           }
                        }).catch(() => {
                            this.offerCompleteSuccess = false;
                        }).finally(() => {
                            this.formOpened = false;
                            this.offerCompleteStatus = true;
                        })
                    } else {
                        if(!hasOptions) {
                            this.formErrors.push('Bitte wählen Sie mindestens eine Art der Hilfe aus');
                        }
                        if(!hasLocation) {
                            this.formErrors.push('Bitte wählen Sie einen Ort aus');
                        }
                        if(!hasValidEmail()) {
                            this.formErrors.push('Bitte überprüfen Sie die eingegebene E-Mail-Adresse');
                        }
                    }

                }

            },
            resetForm: function() {
                this.formOpened = false;
                this.offerCompleteStatus = false;
                this.offerCompleteSuccess = false;
                this.offerQuery = {
                    tags: [],
                    location: config.search.locations[0],
                    distance: 10,
                    contactName: '',
                    contactPhone: '',
                    contactEmail: '',
                    contactAnonymously: false,
                    contactNotes: ''
                };
                this.formErrors = [];
                this.deleteCode = '';
                this.entryID = 0;
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

    .error-info
        margin-left: -2em

    .button-secondary
        background: $color-theme-main
        color: white
        font-size: 120%

    .full-overlay
        position: absolute
        width: calc(100% - 2em)
        height: calc(100% - 2em)
        margin: -1em
        padding: 1em
        background: white

    .offer-complete-error
        background: #CB4B4B
        padding: 1em
        color: white

</style>