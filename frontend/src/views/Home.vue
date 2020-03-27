<template>
    <div>
        <header class="pure-u-1">
            <h1>Corona-Nachbarschaftshilfe {{page_city}}</h1>
            <div class="header-info">
                <p>Dieses Webportal soll Hilfesuchende, die aufgrund des <b>Coronavirus</b> Hilfe benötigen und Helfer*innen aus {{page_city}} und Umgebung zusammenbringen.</p>
                <p>WICHTIG: Dieses Portal dient <u>nicht für Notrufe</u>! Sollten Sie Beschwerden haben, kontaktieren Sie bitte die zuständigen Behörden.</p>

                <p class="important">Um Übertragungen zu vermeiden, halten Sie unbedingt Abstand zu den Personen, denen Sie helfen / von denen Ihnen geholfen wird! Wenn Sie beim Einkaufen helfen, sprechen Sie sich
                    so ab, dass Geld und Waren kontaktlos, z.B. durch Briefkasten oder Pakete übermittelt werden.
                    Vermeiden Sie den Kontakt mit und zwischen <a href="https://www.bundesregierung.de/breg-de/themen/coronavirus/coronavirus-risikogruppen-1730820">Risikogruppen</a>. Beachten Sie außerdem
                    die offiziellen <a href="https://www.stmgp.bayern.de/wp-content/uploads/2020/03/2020-03-20_media_merkblatt_coronavirus_barrierefrei.pdf">Merkblätter</a> und Hinweise der Regierung.
                </p>
            </div>
        </header>

        <div class="pure-u-1">
            <SearchHome :page_city="page_city"/>
        </div>
        <div class="pure-u-1 pure-u-lg-1-2">
            <OfferHome :page_city="page_city"/>
        </div>

        <div class="pure-u-1 pure-u-lg-1-2">
            <DeleteHome />
        </div>
    </div>
</template>

<script>
    import SearchHome from '../components/search_home'
    import OfferHome from '../components/offer_home'
    import DeleteHome from "../components/delete_home";

    export default {
        name: "Home",
        components: {
            DeleteHome,
            SearchHome,
            OfferHome
        },
        props: ['page_city'],
        beforeMount() {
            scroll(0,0);

            if(this.page_city === 'Würzburg') {
                document.body.classList.add('body-w');
            }
        },
        watch: {
            page_city: function() {
                if(this.page_city === 'Würzburg') {
                    document.body.classList.add('body-w');
                } else {
                    document.body.classList.remove('body-w');
                }
            }
        }
    }
</script>

<style scoped lang="sass">
    @import "src/assets/colors"

    .search-home, .offer-home, .delete-home
        padding: 1em
        border-radius: 3px
        margin: 1em

    .search-home
        box-shadow: 0 10px 10px rgba(0, 0, 0, .5)

    .search-home
        background: lighten($color-theme-past1, 70%)
        border: 1px solid $color-theme-past1
        position: relative

    .offer-home
        background: lighten($color-theme-main, 50%)
        position: relative

    .delete-home, .header-info
        background: rgba(255, 255, 255, .8)

    header
        width: calc(100% - 2em)
        padding: 1em
        border-radius: 2px
        h1
            color: darken($color-theme-past2, 50%)
            text-align: center
        .header-info
            font-size: 90%
            padding: 1em
            border-radius: 2px

    .important
        font-weight: bold
        color: $color-theme-past1
        border: 1px solid $color-theme-past1
        border-radius: 2px
        padding: .5em
        line-height: 140%

</style>