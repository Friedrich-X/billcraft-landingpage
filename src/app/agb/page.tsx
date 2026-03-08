import type { Metadata } from "next";
import Header from "@/components/Header";
import Footer from "@/components/Footer";

export const metadata: Metadata = {
  title: "AGB | BillCraft – Allgemeine Geschäftsbedingungen",
  description:
    "Allgemeine Geschäftsbedingungen für die Nutzung von BillCraft. Geltungsbereich, Leistungen, Preise und Kündigungsbedingungen.",
};

export default function AGBPage() {
  return (
    <div className="min-h-screen bg-background">
      <Header />

      <main className="pt-32 pb-20">
        <div className="container mx-auto max-w-4xl px-4 md:px-6 lg:px-8">
          <h1 className="text-3xl md:text-4xl font-semibold text-foreground mb-4">
            Allgemeine Geschäftsbedingungen (AGB)
          </h1>
          <p className="text-foreground/50 mb-10">
            <strong className="text-foreground/70">
              BillCraft — Cloudbasierte Rechnungssoftware
            </strong>
            <br />
            Betreiber: Elias Ratt, Erdbergstraße 150/1/26-27, 1030 Wien,
            Österreich
            <br />
            Stand: März 2026
          </p>

          <div className="space-y-8 text-foreground/70 leading-relaxed">
            {/* 1. Geltungsbereich */}
            <section>
              <h2 className="text-xl font-semibold text-foreground mb-3">
                1. Geltungsbereich
              </h2>
              <p>
                1.1. Diese Allgemeinen Geschäftsbedingungen (nachfolgend „AGB")
                gelten für die Nutzung der unter{" "}
                <a
                  href="https://app.billcraft.app"
                  className="text-primary hover:underline"
                >
                  https://app.billcraft.app
                </a>{" "}
                bereitgestellten cloudbasierten Software zur Rechnungserstellung
                und Buchhaltung (nachfolgend „Service" oder „BillCraft") durch
                den Nutzer (nachfolgend „Kunde"). Die zugehörige
                Informationswebsite ist unter{" "}
                <a
                  href="https://billcraft.app"
                  className="text-primary hover:underline"
                >
                  https://billcraft.app
                </a>{" "}
                erreichbar.
              </p>
              <p className="mt-2">
                1.2. Der Service richtet sich sowohl an Unternehmer im Sinne des
                § 1 KSchG als auch an Verbraucher im Sinne des § 1 KSchG. Soweit
                einzelne Bestimmungen dieser AGB nach dem
                Konsumentenschutzgesetz (KSchG) gegenüber Verbrauchern unwirksam
                sind, bleiben die übrigen Bestimmungen unberührt.
              </p>
              <p className="mt-2">
                1.3. Abweichende, entgegenstehende oder ergänzende AGB des
                Kunden werden nicht Vertragsbestandteil, es sei denn, ihrer
                Geltung wird ausdrücklich schriftlich zugestimmt.
              </p>
            </section>

            {/* 2. Vertragsgegenstand */}
            <section>
              <h2 className="text-xl font-semibold text-foreground mb-3">
                2. Vertragsgegenstand
              </h2>
              <p>
                2.1. BillCraft stellt dem Kunden eine webbasierte
                Software-as-a-Service (SaaS) Lösung zur Verfügung, die
                insbesondere folgende Funktionen umfasst:
              </p>
              <ul className="list-disc pl-6 mt-2 space-y-1">
                <li>
                  Erstellung und Verwaltung von Rechnungen und Gutschriften
                </li>
                <li>Erstellung und Verwaltung von Angeboten</li>
                <li>Kunden- und Produktverwaltung</li>
                <li>Belegerfassung und -verwaltung</li>
                <li>Wiederkehrende Rechnungen</li>
                <li>Mahnwesen</li>
                <li>PDF-Erstellung und Versand</li>
              </ul>
              <p className="mt-3">
                2.2. Der konkrete Funktionsumfang richtet sich nach dem jeweils
                gewählten Tarif (Free, Pro oder vergleichbar). Die aktuell
                gültigen Tarife und deren Leistungsumfang sind auf der Website
                unter{" "}
                <a
                  href="https://billcraft.app/preise"
                  className="text-primary hover:underline"
                >
                  https://billcraft.app/preise
                </a>{" "}
                einsehbar.
              </p>
              <p className="mt-2">
                2.3. BillCraft behält sich das Recht vor, den Service
                weiterzuentwickeln, zu verbessern und anzupassen. Wesentliche
                Leistungsänderungen, die den vertraglich geschuldeten
                Funktionsumfang einschränken, werden dem Kunden mindestens 4
                Wochen im Voraus mitgeteilt. In diesem Fall steht dem Kunden ein
                Sonderkündigungsrecht zu.
              </p>
            </section>

            {/* 3. Vertragsschluss */}
            <section>
              <h2 className="text-xl font-semibold text-foreground mb-3">
                3. Vertragsschluss und Registrierung
              </h2>
              <p>
                3.1. Der Vertrag über die Nutzung von BillCraft kommt durch die
                Registrierung des Kunden und die Bestätigung der E-Mail-Adresse
                zustande.
              </p>
              <p className="mt-2">
                3.2. Der Kunde kann sich wahlweise per E-Mail und Passwort oder
                über Google OAuth registrieren.
              </p>
              <p className="mt-2">
                3.3. Der Kunde versichert, dass die bei der Registrierung
                angegebenen Daten vollständig und wahrheitsgemäß sind.
                Änderungen sind unverzüglich im Kundenkonto zu aktualisieren.
              </p>
              <p className="mt-2">
                3.4. Die Registrierung ist nur volljährigen und geschäftsfähigen
                Personen gestattet.
              </p>
            </section>

            {/* 4. Free-Tarif */}
            <section>
              <h2 className="text-xl font-semibold text-foreground mb-3">
                4. Kostenlose Nutzung (Free-Tarif)
              </h2>
              <p>
                4.1. BillCraft bietet einen kostenlosen Tarif mit
                eingeschränktem Funktionsumfang an. Dieser umfasst unter
                anderem:
              </p>
              <ul className="list-disc pl-6 mt-2 space-y-1">
                <li>Bis zu 5 Rechnungen pro Monat</li>
                <li>Bis zu 5 Angebote pro Monat</li>
                <li>Maximal 20 Kunden</li>
                <li>Maximal 20 Produkte</li>
                <li>Bis zu 20 manuelle Belege pro Monat</li>
                <li>1 wiederkehrende Rechnungsvorlage</li>
                <li>1 Unternehmen</li>
              </ul>
              <p className="mt-3">
                4.2. BillCraft behält sich vor, den Umfang des Free-Tarifs mit
                angemessener Vorankündigung (mindestens 4 Wochen) zu ändern.
              </p>
              <p className="mt-2">
                4.3. Auf den Free-Tarif finden die Bestimmungen dieser AGB
                entsprechend Anwendung, soweit sie nicht ausschließlich
                kostenpflichtige Tarife betreffen.
              </p>
            </section>

            {/* 5. Kostenpflichtige Tarife */}
            <section>
              <h2 className="text-xl font-semibold text-foreground mb-3">
                5. Kostenpflichtige Tarife und Preise
              </h2>
              <p>
                5.1. Die aktuellen Preise für kostenpflichtige Tarife sind auf
                der Website einsehbar. Alle Preise verstehen sich inklusive der
                gesetzlichen Umsatzsteuer, sofern anwendbar. Derzeit wird gemäß
                der Kleinunternehmerregelung (§ 6 Abs. 1 Z 27 UStG) keine
                Umsatzsteuer ausgewiesen.
              </p>
              <p className="mt-2">
                5.2. Die Abrechnung erfolgt je nach gewähltem
                Abrechnungszeitraum monatlich oder jährlich im Voraus.
              </p>
              <p className="mt-2">
                5.3. Preisänderungen werden dem Kunden mindestens 4 Wochen vor
                Inkrafttreten mitgeteilt. Bei Preiserhöhungen steht dem Kunden
                ein Sonderkündigungsrecht zum Zeitpunkt des Inkrafttretens der
                Preisänderung zu.
              </p>
            </section>

            {/* 6. Zahlung */}
            <section>
              <h2 className="text-xl font-semibold text-foreground mb-3">
                6. Zahlung
              </h2>
              <p>
                6.1. Die Zahlung erfolgt über die angebotenen Zahlungsmethoden
                (derzeit Kreditkarte via Stripe und Amazon Pay).
              </p>
              <p className="mt-2">
                6.2. Der Kunde ermächtigt BillCraft, die vereinbarten Beträge
                zum jeweiligen Fälligkeitszeitpunkt über die hinterlegte
                Zahlungsmethode einzuziehen.
              </p>
              <p className="mt-2">
                6.3. Bei Zahlungsverzug ist BillCraft berechtigt, nach
                erfolgloser Mahnung den Zugang zum Service einzuschränken oder
                zu sperren. Die Pflicht zur Zahlung der ausstehenden Beträge
                bleibt davon unberührt.
              </p>
              <p className="mt-2">
                6.4. Bei Zahlungsverzug werden Verzugszinsen in gesetzlicher
                Höhe berechnet. Gegenüber Unternehmern gelten die Verzugszinsen
                gemäß § 456 UGB.
              </p>
            </section>

            {/* 7. Vertragslaufzeit und Kündigung */}
            <section>
              <h2 className="text-xl font-semibold text-foreground mb-3">
                7. Vertragslaufzeit und Kündigung
              </h2>
              <p>
                7.1. Bei monatlicher Abrechnung beträgt die Vertragslaufzeit
                jeweils einen Monat. Bei jährlicher Abrechnung beträgt die
                Vertragslaufzeit jeweils ein Jahr.
              </p>
              <p className="mt-2">
                7.2. Der Vertrag verlängert sich automatisch um die jeweilige
                Vertragslaufzeit, sofern er nicht rechtzeitig gekündigt wird.
              </p>
              <p className="mt-2">
                <strong className="text-foreground">
                  7.3. Kündigungsfristen:
                </strong>
              </p>
              <ul className="list-disc pl-6 mt-1 space-y-1">
                <li>
                  Monatliche Abrechnung: Kündigung jederzeit zum Ende des
                  laufenden Abrechnungsmonats möglich.
                </li>
                <li>
                  Jährliche Abrechnung: Kündigung mit einer Frist von 1 Monat
                  zum Ende der laufenden Vertragslaufzeit möglich.
                </li>
              </ul>
              <p className="mt-3">
                7.4. Die Kündigung kann über die Kontoeinstellungen im Service
                oder per E-Mail an{" "}
                <a
                  href="mailto:hallo@billcraft.app"
                  className="text-primary hover:underline"
                >
                  hallo@billcraft.app
                </a>{" "}
                erfolgen. Verbraucher können den Vertrag auch auf jedem anderen
                zumutbaren Weg kündigen.
              </p>
              <p className="mt-2">
                7.5. Das Recht zur außerordentlichen Kündigung aus wichtigem
                Grund bleibt für beide Parteien unberührt. Ein wichtiger Grund
                liegt insbesondere vor, wenn:
              </p>
              <ul className="list-disc pl-6 mt-1 space-y-1">
                <li>
                  der Kunde trotz Mahnung mit der Zahlung von mindestens 2
                  Monatsbeträgen in Verzug ist;
                </li>
                <li>der Kunde wiederholt gegen diese AGB verstößt;</li>
                <li>
                  über das Vermögen einer Partei ein Insolvenzverfahren eröffnet
                  oder die Eröffnung mangels Masse abgelehnt wird.
                </li>
              </ul>
              <p className="mt-3">
                7.6. Bei Kündigung eines kostenpflichtigen Tarifs wird der
                Zugang bis zum Ende der bereits bezahlten Laufzeit
                aufrechterhalten. Bereits gezahlte Beträge für die restliche
                Laufzeit werden nicht erstattet, es sei denn, die Kündigung
                erfolgt aus wichtigem Grund, den BillCraft zu vertreten hat. Das
                gesetzliche Widerrufsrecht für Verbraucher bleibt unberührt.
              </p>
              <p className="mt-2">
                7.7. Der Free-Tarif kann jederzeit ohne Einhaltung einer Frist
                durch den Kunden oder durch BillCraft gekündigt werden.
              </p>
            </section>

            {/* 8. Widerrufsrecht */}
            <section>
              <h2 className="text-xl font-semibold text-foreground mb-3">
                8. Widerrufsrecht für Verbraucher
              </h2>
              <p>
                8.1. Verbraucher haben das Recht, den Vertrag innerhalb von 14
                Tagen ohne Angabe von Gründen zu widerrufen (Fern- und
                Auswärtsgeschäfte-Gesetz — FAGG).
              </p>
              <p className="mt-2">
                8.2. Die Widerrufsfrist beginnt mit dem Tag des
                Vertragsschlusses.
              </p>
              <p className="mt-2">
                8.3. Um das Widerrufsrecht auszuüben, muss der Kunde eine
                eindeutige Erklärung (z. B. per E-Mail an{" "}
                <a
                  href="mailto:hallo@billcraft.app"
                  className="text-primary hover:underline"
                >
                  hallo@billcraft.app
                </a>
                ) über den Entschluss, den Vertrag zu widerrufen, übermitteln.
              </p>
              <p className="mt-2">
                8.4. Im Falle eines wirksamen Widerrufs werden bereits
                geleistete Zahlungen unverzüglich, spätestens innerhalb von 14
                Tagen, zurückerstattet.
              </p>
              <p className="mt-2">
                8.5. Hat der Kunde ausdrücklich verlangt, dass die
                Dienstleistung vor Ablauf der Widerrufsfrist beginnen soll, hat
                er einen angemessenen Betrag für die bis zum Widerruf bereits
                erbrachten Leistungen zu zahlen.
              </p>
            </section>

            {/* 9. Pflichten des Kunden */}
            <section>
              <h2 className="text-xl font-semibold text-foreground mb-3">
                9. Pflichten des Kunden
              </h2>
              <p>
                9.1. Der Kunde ist verpflichtet, seine Zugangsdaten (Passwort,
                E-Mail) vertraulich zu behandeln und vor dem Zugriff Dritter zu
                schützen. Bei Verdacht auf Missbrauch ist BillCraft unverzüglich
                zu informieren.
              </p>
              <p className="mt-2">
                9.2. Der Kunde ist für die Rechtmäßigkeit der von ihm
                eingegebenen Daten und erstellten Dokumente (Rechnungen,
                Angebote etc.) selbst verantwortlich. BillCraft erbringt keine
                Steuer- oder Rechtsberatung.
              </p>
              <p className="mt-2">
                9.3. Der Kunde verpflichtet sich, den Service nicht
                missbräuchlich zu nutzen, insbesondere:
              </p>
              <ul className="list-disc pl-6 mt-1 space-y-1">
                <li>
                  keine rechtswidrigen Inhalte zu speichern oder zu verbreiten;
                </li>
                <li>
                  keine automatisierten Zugriffe (Bots, Scraping) durchzuführen;
                </li>
                <li>
                  den Service nicht zu dekompilieren, zu reverse-engineeren oder
                  in sonstiger Weise zu manipulieren;
                </li>
                <li>
                  die Infrastruktur nicht durch übermäßige Nutzung zu
                  beeinträchtigen.
                </li>
              </ul>
              <p className="mt-3">
                9.4. Der Kunde ist für die Erstellung regelmäßiger
                Sicherungskopien seiner Daten selbst verantwortlich. BillCraft
                stellt hierfür eine Datenexport-Funktion bereit.
              </p>
            </section>

            {/* 10. Nutzungsrechte */}
            <section>
              <h2 className="text-xl font-semibold text-foreground mb-3">
                10. Nutzungsrechte
              </h2>
              <p>
                10.1. BillCraft räumt dem Kunden für die Dauer des Vertrags ein
                nicht-ausschließliches, nicht übertragbares, nicht
                unterlizenzierbares Recht ein, den Service im Rahmen dieser AGB
                zu nutzen.
              </p>
              <p className="mt-2">
                10.2. Sämtliche Rechte an der Software, dem Design, der Marke
                und den Inhalten von BillCraft verbleiben beim Betreiber.
              </p>
              <p className="mt-2">
                10.3. Die vom Kunden eingegebenen Daten verbleiben im Eigentum
                des Kunden. BillCraft erwirbt daran keine Rechte, die über die
                zur Vertragserfüllung notwendige Verarbeitung hinausgehen.
              </p>
            </section>

            {/* 11. Verfügbarkeit und Support */}
            <section>
              <h2 className="text-xl font-semibold text-foreground mb-3">
                11. Verfügbarkeit und Support
              </h2>
              <p>
                11.1. BillCraft ist bemüht, eine Verfügbarkeit des Service von
                99 % im Jahresmittel zu gewährleisten. Hiervon ausgenommen sind:
              </p>
              <ul className="list-disc pl-6 mt-1 space-y-1">
                <li>
                  geplante Wartungsarbeiten (werden nach Möglichkeit vorab
                  angekündigt);
                </li>
                <li>
                  Störungen, die außerhalb des Einflussbereichs von BillCraft
                  liegen (höhere Gewalt, Störungen beim Hosting-Provider,
                  Internet-Ausfälle).
                </li>
              </ul>
              <p className="mt-3">
                11.2. Support erfolgt per E-Mail an{" "}
                <a
                  href="mailto:hallo@billcraft.app"
                  className="text-primary hover:underline"
                >
                  hallo@billcraft.app
                </a>
                . Ein Anspruch auf Support zu bestimmten Zeiten oder innerhalb
                bestimmter Reaktionszeiten besteht nicht.
              </p>
            </section>

            {/* 12. Gewährleistung */}
            <section>
              <h2 className="text-xl font-semibold text-foreground mb-3">
                12. Gewährleistung
              </h2>
              <p>
                12.1. BillCraft gewährleistet, dass der Service im Wesentlichen
                den beschriebenen Funktionen entspricht.
              </p>
              <p className="mt-2">
                12.2. Mängel sind BillCraft unverzüglich nach Entdeckung zu
                melden. BillCraft wird erkannte Mängel innerhalb angemessener
                Frist beheben.
              </p>
              <p className="mt-2">
                12.3. Gewährleistungsansprüche verjähren gegenüber Unternehmern
                nach 12 Monaten ab Bereitstellung. Gegenüber Verbrauchern gelten
                die gesetzlichen Gewährleistungsfristen.
              </p>
            </section>

            {/* 13. Haftung */}
            <section>
              <h2 className="text-xl font-semibold text-foreground mb-3">
                13. Haftung
              </h2>
              <p>
                13.1. BillCraft haftet unbeschränkt für Schäden aus der
                Verletzung des Lebens, des Körpers oder der Gesundheit sowie für
                Schäden, die auf Vorsatz oder grober Fahrlässigkeit beruhen.
              </p>
              <p className="mt-2">
                13.2. Bei leichter Fahrlässigkeit haftet BillCraft nur bei
                Verletzung wesentlicher Vertragspflichten (Kardinalpflichten).
                Die Haftung ist in diesen Fällen auf den vorhersehbaren,
                vertragstypischen Schaden begrenzt, maximal jedoch auf die Summe
                der vom Kunden in den letzten 12 Monaten gezahlten Entgelte.
              </p>
              <p className="mt-2">
                13.3. Die Haftung für mittelbare Schäden, entgangenen Gewinn und
                Datenverlust wird — soweit gesetzlich zulässig — ausgeschlossen.
              </p>
              <p className="mt-2">
                13.4. BillCraft haftet nicht für die inhaltliche Richtigkeit der
                vom Kunden erstellten Rechnungen und Dokumente. Die
                steuerrechtliche Verantwortung liegt ausschließlich beim Kunden.
              </p>
              <p className="mt-2">
                13.5. Gegenüber Verbrauchern gelten die zwingenden gesetzlichen
                Haftungsbestimmungen.
              </p>
            </section>

            {/* 14. Datenschutz */}
            <section>
              <h2 className="text-xl font-semibold text-foreground mb-3">
                14. Datenschutz
              </h2>
              <p>
                14.1. BillCraft verarbeitet personenbezogene Daten des Kunden
                gemäß der Datenschutz-Grundverordnung (DSGVO) und dem
                österreichischen Datenschutzgesetz (DSG).
              </p>
              <p className="mt-2">
                14.2. Details zur Datenverarbeitung sind der
                Datenschutzerklärung unter{" "}
                <a href="/datenschutz" className="text-primary hover:underline">
                  https://billcraft.app/datenschutz
                </a>{" "}
                zu entnehmen.
              </p>
              <p className="mt-2">
                14.3. Soweit der Kunde im Rahmen der Nutzung des Service
                personenbezogene Daten seiner eigenen Kunden verarbeitet (z. B.
                Kundendaten in Rechnungen), ist der Kunde Verantwortlicher im
                Sinne der DSGVO und BillCraft Auftragsverarbeiter. Die
                Einzelheiten sind im Auftragsverarbeitungsvertrag (AVV)
                geregelt, der unter{" "}
                <a href="/avv" className="text-primary hover:underline">
                  https://billcraft.app/avv
                </a>{" "}
                abrufbar ist.
              </p>
            </section>

            {/* 15. Geheimhaltung */}
            <section>
              <h2 className="text-xl font-semibold text-foreground mb-3">
                15. Geheimhaltung
              </h2>
              <p>
                15.1. Beide Parteien verpflichten sich, alle im Rahmen der
                Vertragsbeziehung erlangten vertraulichen Informationen der
                jeweils anderen Partei vertraulich zu behandeln und nicht an
                Dritte weiterzugeben.
              </p>
              <p className="mt-2">
                15.2. Diese Verpflichtung gilt auch nach Beendigung des Vertrags
                fort.
              </p>
            </section>

            {/* 16. Daten nach Vertragsende */}
            <section>
              <h2 className="text-xl font-semibold text-foreground mb-3">
                16. Daten nach Vertragsende
              </h2>
              <p>
                16.1. Nach Beendigung des Vertrags hat der Kunde die
                Möglichkeit, seine Daten innerhalb von 30 Tagen über die
                Export-Funktion herunterzuladen.
              </p>
              <p className="mt-2">
                16.2. Nach Ablauf dieser Frist wird BillCraft die Kundendaten
                löschen, sofern keine gesetzlichen Aufbewahrungspflichten
                entgegenstehen.
              </p>
            </section>

            {/* 17. Änderungen der AGB */}
            <section>
              <h2 className="text-xl font-semibold text-foreground mb-3">
                17. Änderungen der AGB
              </h2>
              <p>
                17.1. BillCraft behält sich vor, diese AGB mit Wirkung für die
                Zukunft zu ändern. Änderungen werden dem Kunden mindestens 4
                Wochen vor Inkrafttreten per E-Mail mitgeteilt.
              </p>
              <p className="mt-2">
                17.2. Widerspricht der Kunde den geänderten AGB nicht innerhalb
                von 4 Wochen nach Zugang der Mitteilung, gelten die geänderten
                AGB als angenommen. Auf diese Rechtsfolge wird in der
                Änderungsmitteilung gesondert hingewiesen.
              </p>
              <p className="mt-2">
                17.3. Widerspricht der Kunde, besteht ein Sonderkündigungsrecht
                für beide Parteien zum Zeitpunkt des geplanten Inkrafttretens
                der Änderungen. Bis zur Kündigung gelten die bisherigen AGB.
              </p>
              <p className="mt-2">
                17.4. Gegenüber Verbrauchern sind wesentliche Änderungen nur mit
                ausdrücklicher Zustimmung wirksam.
              </p>
            </section>

            {/* 18. Anwendbares Recht */}
            <section>
              <h2 className="text-xl font-semibold text-foreground mb-3">
                18. Anwendbares Recht und Gerichtsstand
              </h2>
              <p>
                18.1. Es gilt österreichisches Recht unter Ausschluss des
                UN-Kaufrechts (CISG).
              </p>
              <p className="mt-2">
                18.2. Gegenüber Unternehmern ist Gerichtsstand Wien.
              </p>
              <p className="mt-2">
                18.3. Gegenüber Verbrauchern gelten die zwingenden
                Zuständigkeitsregelungen des KSchG. Verbraucher können Klagen an
                ihrem allgemeinen Gerichtsstand einbringen.
              </p>
            </section>

            {/* 19. Salvatorische Klausel */}
            <section>
              <h2 className="text-xl font-semibold text-foreground mb-3">
                19. Salvatorische Klausel
              </h2>
              <p>
                Sollten einzelne Bestimmungen dieser AGB unwirksam sein oder
                werden, bleibt die Wirksamkeit der übrigen Bestimmungen
                unberührt. An die Stelle der unwirksamen Bestimmung tritt eine
                wirksame Regelung, die dem wirtschaftlichen Zweck der
                unwirksamen Bestimmung am nächsten kommt.
              </p>
            </section>

            {/* 20. Kontakt */}
            <section>
              <h2 className="text-xl font-semibold text-foreground mb-3">
                20. Kontakt
              </h2>
              <p>Bei Fragen zu diesen AGB wenden Sie sich bitte an:</p>
              <p className="mt-2">
                Elias Ratt
                <br />
                E-Mail:{" "}
                <a
                  href="mailto:hallo@billcraft.app"
                  className="text-primary hover:underline"
                >
                  hallo@billcraft.app
                </a>
              </p>
            </section>
          </div>
        </div>
      </main>

      <Footer />
    </div>
  );
}
