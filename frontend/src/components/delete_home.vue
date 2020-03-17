<template>
    <div class="delete-home">
        <form class="pure-form pure-form-stacked">
            <fieldset>
                <h5>Aufgegebene Anzeige löschen</h5>

                <div class="pure-u-1 pure-u-lg-1-2">
                    <label>Anzeigennummer<input type="number" placeholder="z.B. 105" v-model="deleteEntryId" class="pure-input-1" required/></label>
                </div>

                <div class="pure-u-1 pure-u-lg-1-2">
                    <label>Löschcode<input type="number" max="9999" v-model="deleteCode" class="pure-input-1" required/></label>
                </div>

                <div class="pure-u-1">
                    <p><button class="pure-button" @click="deleteEntry">Anzeige zur Löschung freigeben</button></p>
                </div>

                <div class="pure-u-1" v-if="showComplete">
                    <h6>Löschanfrage abgeschickt!</h6>
                    <p>Falls dein Löschcode richtig ist, wird Ihre Anzeige demnächst gelöscht.
                    Sollten Sie Probleme beim Löschen haben, kontaktieren Sie uns bitte per Email.</p>
                </div>

            </fieldset>
        </form>
    </div>
</template>

<script>
    import {config} from '../config'

    export default {
        name: "DeleteHome",
        data () {
            return {
                deleteEntryId: null,
                deleteCode: null,
                showComplete: false
            }
        },
        methods: {
            deleteEntry: function(e) {
                const hasEntryId = this.deleteEntryId.length > 0;
                const hasCode = this.deleteCode.length > 0;
                this.showComplete = false;
                if(hasEntryId && hasCode) {
                    this.$http.delete(`${config.search.apiUrl}/entry/${this.deleteEntryId}`, {
                        data: {
                            code: this.deleteCode
                        }
                    }).finally(() => {
                        this.resetForm();
                        this.showComplete = true;
                    });
                } else {
                    e.preventDefault();
                    return false;
                }
            },
            resetForm: function() {
                this.deleteEntryId = null;
                this.deleteCode = null;
            }
        }
    }
</script>

<style scoped lang="sass">
    form
        font-size: 80%
</style>