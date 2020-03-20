<template>
    <div>
        <header class="pure-u-1">
            <h1>Impressum und Datenschutz</h1>
            <div class="header-info">
                <h2>V.i.S.d. Presse- und Telemediengesetzes</h2>

                <p>Patrick Stadler<br/>
                    Paarstr. 34<br/>
                    93059 Regensburg</p>

                <p>Email: <a href="mailto: pandahilfe-rgb@web.de">pandahilfe-rgb@web.de</a></p>
                <br />
                <h3>Haftungsausschluss</h3>
                <p>Die Inhalte unserer Seiten wurden mit größter Sorgfalt erstellt. Für die Richtigkeit, Vollständigkeit
                    und Aktualität der Inhalte können wir jedoch keine Gewähr übernehmen.</p>

                <h2>Datenschutzerklärung</h2>
                <p>Wir haben diese Datenschutzerklärung (Fassung 18.03.2020-311163098) verfasst, um Ihnen gemäß der
                    Vorgaben der Datenschutz-Grundverordnung (EU) 2016/679 zu erklären,
                    welche Informationen wir sammeln, wie wir Daten verwenden und welche Entscheidungsmöglichkeiten
                    Sie als Besucher dieser Webseite haben.</p>

                <p>Leider liegt es in der Natur der Sache, dass diese Erklärungen sehr technisch klingen,
                    wir haben uns bei der Erstellung jedoch bemüht die wichtigsten Dinge so einfach
                    und klar wie möglich zu beschreiben.
                    Speicherung persönlicher Daten</p>

                <p>Persönliche Daten, die Sie uns auf dieser Website elektronisch übermitteln, wie zum
                    Beispiel Name, E-Mail-Adresse, Adresse oder andere persönlichen Angaben im Rahmen der
                    Übermittlung eines Formulars oder Kommentaren im Blog, werden von uns
                    gemeinsam mit dem Zeitpunkt und der IP-Adresse nur zum jeweils angegebenen Zweck verwendet,
                    sicher verwahrt und nicht an Dritte weitergegeben.</p>

                <p>Wir nutzen Ihre persönlichen Daten somit nur für die Kommunikation mit jenen Besuchern,
                    die Kontakt ausdrücklich wünschen und für die Abwicklung der auf dieser Webseite
                    angebotenen Dienstleistungen und Produkte. Wir geben Ihre persönlichen Daten ohne
                    Zustimmung nicht weiter, können jedoch nicht ausschließen, dass diese Daten beim
                    Vorliegen von rechtswidrigem Verhalten eingesehen werden.</p>

                <p>Wenn Sie uns persönliche Daten per E-Mail schicken – somit abseits dieser Webseite –
                    können wir keine sichere Übertragung und den Schutz Ihrer Daten garantieren.
                    Wir empfehlen Ihnen, vertrauliche Daten niemals unverschlüsselt per E-Mail zu übermitteln.</p>

                <p>Die Rechtsgrundlage besteht nach Artikel 6  Absatz 1 a DSGVO (Rechtmäßigkeit der Verarbeitung) darin,
                    dass Sie uns die Einwilligung zur Verarbeitung der von Ihnen eingegebenen Daten geben.
                    Sie können diesen Einwilligung jederzeit widerrufen – eine formlose E-Mail reicht aus,
                    Sie finden unsere Kontaktdaten im Impressum.
                    Rechte laut Datenschutzgrundverordnung</p>

                <p>Ihnen stehen laut den Bestimmungen der DSGVO grundsätzlich die folgende Rechte zu:</p>

                Recht auf Berichtigung (Artikel 16 DSGVO)<br />
                Recht auf Löschung („Recht auf Vergessenwerden“) (Artikel 17 DSGVO)<br />
                Recht auf Einschränkung der Verarbeitung (Artikel 18 DSGVO)<br />
                Recht auf Benachrichtigung – Mitteilungspflicht im Zusammenhang mit der Berichtigung oder Löschung
                personenbezogener Daten oder der Einschränkung der Verarbeitung (Artikel 19 DSGVO)<br />
                Recht auf Datenübertragbarkeit (Artikel 20 DSGVO)<br />
                Widerspruchsrecht (Artikel 21 DSGVO)<br />
                Recht, nicht einer ausschließlich auf einer automatisierten Verarbeitung — einschließlich Profiling —
                beruhenden Entscheidung unterworfen zu werden (Artikel 22 DSGVO)<br />

                <p>Wenn Sie glauben, dass die Verarbeitung Ihrer Daten gegen das Datenschutzrecht verstößt oder Ihre
                    datenschutzrechtlichen Ansprüche sonst in einer Weise verletzt worden sind, können Sie sich an die
                    Bundesbeauftragte für den Datenschutz und die Informationsfreiheit (BfDI) wenden.
                    Automatische Datenspeicherung</p>

                <p>Wenn Sie heutzutage Webseiten besuchen, werden gewisse Informationen automatisch erstellt und
                    gespeichert, so auch auf dieser Webseite.</p>

                <p>Wenn Sie unsere Webseite so wie jetzt gerade besuchen, speichert unser
                    Webserver (Computer auf dem diese Webseite gespeichert ist) automatisch Daten wie</p>

                die Adresse (URL) der aufgerufenen Webseite<br />
                Browser und Browserversion<br />
                das verwendete Betriebssystem<br />
                die Adresse (URL) der zuvor besuchten Seite (Referrer URL)<br />
                den Hostname und die IP-Adresse des Geräts von welchem aus zugegriffen wird<br />
                Datum und Uhrzeit<br />

                <p>in Dateien (Webserver-Logfiles).</p>

                <p>In der Regel werden Webserver-Logfiles zwei Wochen gespeichert und danach automatisch gelöscht.
                    Wir geben diese Daten nicht weiter, können jedoch nicht ausschließen, dass
                    diese Daten beim Vorliegen von rechtswidrigem Verhalten eingesehen werden.</p>

                <p>Quelle: Erstellt mit dem Datenschutz Generator von AdSimple in Kooperation mit justmed.de</p>
            </div>

            <br />
            <div class="pure-u-1">
                <a href="#" @click.prevent="$router.go(-1)">zurück zur Startseite</a>
            </div>
        </header>
    </div>
</template>

<script>
    export default {
        name: "Impress",
        beforeMount() {
            scroll(0,0);
        }
    }
</script>

<style scoped lang="sass">
    @import "src/assets/colors"

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
            background: rgba(255, 255, 255, .8)
</style>