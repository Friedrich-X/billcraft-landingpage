import type { Metadata } from "next";
import Header from "@/components/Header";
import Footer from "@/components/Footer";

export const metadata: Metadata = {
  title: "Auftragsverarbeitungsvertrag (AVV) | BillCraft",
  description:
    "Auftragsverarbeitungsvertrag gemäß Art. 28 DSGVO für die Nutzung von BillCraft.",
};

export default function AVVPage() {
  return (
    <div className="min-h-screen bg-background">
      <Header />

      <main className="pt-32 pb-20">
        <div className="container mx-auto max-w-4xl px-4 md:px-6 lg:px-8">
          <h1 className="text-3xl md:text-4xl font-semibold text-foreground mb-4">
            Auftragsverarbeitungsvertrag (AVV)
          </h1>
          <p className="text-foreground/50 mb-10">
            gemäß Art. 28 Datenschutz-Grundverordnung (DSGVO)
            <br />
            Stand: März 2026
          </p>

          <div className="space-y-8 text-foreground/70 leading-relaxed">
            {/* Präambel */}
            <section>
              <h2 className="text-xl font-semibold text-foreground mb-3">
                Präambel
              </h2>
              <p>
                Dieser Auftragsverarbeitungsvertrag (nachfolgend „AVV") ergänzt
                die Allgemeinen Geschäftsbedingungen (AGB) und den Vertrag über
                die Nutzung des Service „BillCraft" und regelt die Verarbeitung
                personenbezogener Daten durch den Auftragsverarbeiter im Auftrag
                des Verantwortlichen.
              </p>
            </section>

            {/* 1. Vertragsparteien */}
            <section>
              <h2 className="text-xl font-semibold text-foreground mb-3">
                1. Vertragsparteien
              </h2>
              <p>
                <strong className="text-foreground">
                  Verantwortlicher (Auftraggeber):
                </strong>
                <br />
                Der Kunde von BillCraft, der den Service nutzt und in dessen
                Auftrag personenbezogene Daten verarbeitet werden (nachfolgend
                „Auftraggeber").
              </p>
              <p className="mt-4">
                <strong className="text-foreground">
                  Auftragsverarbeiter (Auftragnehmer):
                </strong>
                <br />
                Elias Ratt
                <br />
                Erdbergstraße 150/1/26-27
                <br />
                1030 Wien, Österreich
                <br />
                E-Mail:{" "}
                <a
                  href="mailto:datenschutz@billcraft.app"
                  className="text-primary hover:underline"
                >
                  datenschutz@billcraft.app
                </a>
                <br />
                (nachfolgend „Auftragnehmer" oder „BillCraft")
              </p>
            </section>

            {/* 2. Gegenstand und Dauer */}
            <section>
              <h2 className="text-xl font-semibold text-foreground mb-3">
                2. Gegenstand und Dauer der Verarbeitung
              </h2>
              <p>
                2.1. Der Auftragnehmer verarbeitet personenbezogene Daten im
                Auftrag des Auftraggebers im Rahmen der Bereitstellung des
                SaaS-Dienstes „BillCraft" (Rechnungserstellung,
                Angebotsverwaltung, Kundenverwaltung, Belegerfassung).
              </p>
              <p className="mt-2">
                2.2. Die Dauer der Verarbeitung entspricht der Laufzeit des
                Hauptvertrags (Nutzung des Service). Nach Beendigung des
                Vertrags werden die Daten gemäß Abschnitt 10 dieses AVV
                behandelt.
              </p>
            </section>

            {/* 3. Art und Zweck */}
            <section>
              <h2 className="text-xl font-semibold text-foreground mb-3">
                3. Art und Zweck der Verarbeitung
              </h2>
              <p>Die Verarbeitung umfasst folgende Tätigkeiten:</p>
              <ul className="list-disc pl-6 mt-2 space-y-1">
                <li>
                  Speicherung und Verwaltung von Kundenstammdaten des
                  Auftraggebers
                </li>
                <li>
                  Erstellung, Speicherung und Versand von Rechnungen und
                  Angeboten
                </li>
                <li>Verarbeitung von Zahlungsinformationen (Referenzdaten)</li>
                <li>Belegerfassung und -archivierung</li>
                <li>
                  E-Mail-Versand im Namen des Auftraggebers (z. B.
                  Rechnungsversand an Endkunden)
                </li>
                <li>PDF-Generierung von Geschäftsdokumenten</li>
                <li>Optionale KI-gestützte Texterkennung (OCR) von Belegen</li>
              </ul>
            </section>

            {/* 4. Art der Daten */}
            <section>
              <h2 className="text-xl font-semibold text-foreground mb-3">
                4. Art der personenbezogenen Daten
              </h2>
              <p>
                Folgende Kategorien personenbezogener Daten werden verarbeitet:
              </p>
              <ul className="list-disc pl-6 mt-2 space-y-1">
                <li>
                  Kontaktdaten: Name, Adresse, E-Mail-Adresse, Telefonnummer
                </li>
                <li>
                  Unternehmensdaten: Firmenname, UID-Nummer, Firmenbuch-Nummer
                </li>
                <li>
                  Finanzdaten: Rechnungsbeträge, Bankverbindungen (IBAN, BIC),
                  Zahlungsstatus
                </li>
                <li>
                  Kommunikationsdaten: E-Mail-Adressen der Endkunden für den
                  Rechnungsversand
                </li>
                <li>Belegdaten: Belegbilder, extrahierte Beträge und Texte</li>
              </ul>
            </section>

            {/* 5. Kategorien betroffener Personen */}
            <section>
              <h2 className="text-xl font-semibold text-foreground mb-3">
                5. Kategorien betroffener Personen
              </h2>
              <ul className="list-disc pl-6 space-y-1">
                <li>Kunden und Geschäftspartner des Auftraggebers</li>
                <li>
                  Ansprechpartner und Mitarbeiter der Kunden des Auftraggebers
                </li>
                <li>Lieferanten des Auftraggebers</li>
              </ul>
            </section>

            {/* 6. Pflichten */}
            <section>
              <h2 className="text-xl font-semibold text-foreground mb-3">
                6. Pflichten des Auftragsverarbeiters
              </h2>
              <p>Der Auftragnehmer verpflichtet sich:</p>
              <p className="mt-2">
                6.1. Personenbezogene Daten ausschließlich auf dokumentierte
                Weisung des Auftraggebers zu verarbeiten, es sei denn, eine
                Verarbeitung ist nach Unionsrecht oder dem Recht des
                Mitgliedstaats, dem der Auftragnehmer unterliegt, erforderlich.
              </p>
              <p className="mt-2">
                6.2. Sicherzustellen, dass sich die zur Verarbeitung befugten
                Personen zur Vertraulichkeit verpflichtet haben.
              </p>
              <p className="mt-2">
                6.3. Alle gemäß Art. 32 DSGVO erforderlichen technischen und
                organisatorischen Maßnahmen zu ergreifen (siehe Abschnitt 8).
              </p>
              <p className="mt-2">
                6.4. Die Bedingungen gemäß Art. 28 Abs. 2 und 4 DSGVO für die
                Inanspruchnahme von Unterauftragsverarbeitern einzuhalten (siehe
                Abschnitt 7).
              </p>
              <p className="mt-2">
                6.5. Den Auftraggeber durch geeignete technische und
                organisatorische Maßnahmen bei der Erfüllung der
                Betroffenenrechte (Art. 15–22 DSGVO) zu unterstützen.
              </p>
              <p className="mt-2">
                6.6. Den Auftraggeber bei der Einhaltung der Pflichten gemäß
                Art. 32–36 DSGVO zu unterstützen.
              </p>
              <p className="mt-2">
                6.7. Nach Beendigung der Verarbeitung alle personenbezogenen
                Daten nach Wahl des Auftraggebers zu löschen oder zurückzugeben
                (siehe Abschnitt 10).
              </p>
              <p className="mt-2">
                6.8. Dem Auftraggeber alle erforderlichen Informationen zum
                Nachweis der Einhaltung der in Art. 28 DSGVO niedergelegten
                Pflichten zur Verfügung zu stellen und Überprüfungen zu
                ermöglichen (siehe Abschnitt 9).
              </p>
            </section>

            {/* 7. Unterauftragsverarbeiter */}
            <section>
              <h2 className="text-xl font-semibold text-foreground mb-3">
                7. Unterauftragsverarbeiter
              </h2>
              <p>
                7.1. Der Auftraggeber erteilt dem Auftragnehmer eine allgemeine
                schriftliche Genehmigung zur Beauftragung von
                Unterauftragsverarbeitern.
              </p>
              <p className="mt-2">
                7.2. Der Auftragnehmer setzt derzeit folgende
                Unterauftragsverarbeiter ein:
              </p>
              <div className="mt-3 overflow-x-auto">
                <table className="w-full text-sm border-collapse">
                  <thead>
                    <tr className="border-b border-foreground/10">
                      <th className="text-left py-2 pr-4 text-foreground font-medium">
                        Unterauftragsverarbeiter
                      </th>
                      <th className="text-left py-2 pr-4 text-foreground font-medium">
                        Zweck
                      </th>
                      <th className="text-left py-2 pr-4 text-foreground font-medium">
                        Standort
                      </th>
                      <th className="text-left py-2 text-foreground font-medium">
                        Datenkategorien
                      </th>
                    </tr>
                  </thead>
                  <tbody className="divide-y divide-foreground/5">
                    <tr>
                      <td className="py-2 pr-4">Hetzner Online GmbH</td>
                      <td className="py-2 pr-4">Server-Hosting, Datenbank</td>
                      <td className="py-2 pr-4">Nürnberg, Deutschland</td>
                      <td className="py-2">
                        Alle im Service gespeicherten Daten
                      </td>
                    </tr>
                    <tr>
                      <td className="py-2 pr-4">Cloudflare Inc.</td>
                      <td className="py-2 pr-4">Frontend-Hosting, CDN</td>
                      <td className="py-2 pr-4">EU (Irland)</td>
                      <td className="py-2">Technische Zugriffsdaten</td>
                    </tr>
                    <tr>
                      <td className="py-2 pr-4">Stripe Payments Europe Ltd.</td>
                      <td className="py-2 pr-4">Zahlungsabwicklung</td>
                      <td className="py-2 pr-4">Dublin, Irland</td>
                      <td className="py-2">Zahlungsdaten, E-Mail</td>
                    </tr>
                    <tr>
                      <td className="py-2 pr-4">
                        Amazon Payments Europe S.C.A.
                      </td>
                      <td className="py-2 pr-4">Zahlungsabwicklung</td>
                      <td className="py-2 pr-4">Luxemburg</td>
                      <td className="py-2">Zahlungsdaten, E-Mail</td>
                    </tr>
                    <tr>
                      <td className="py-2 pr-4">Resend Inc.</td>
                      <td className="py-2 pr-4">E-Mail-Versand</td>
                      <td className="py-2 pr-4">USA (SCCs/DPF)</td>
                      <td className="py-2">E-Mail-Adressen, E-Mail-Inhalte</td>
                    </tr>
                    <tr>
                      <td className="py-2 pr-4">OpenAI L.L.C.</td>
                      <td className="py-2 pr-4">Belegerkennung (OCR)</td>
                      <td className="py-2 pr-4">USA (SCCs/DPF)</td>
                      <td className="py-2">Belegbilder (nur bei KI-Nutzung)</td>
                    </tr>
                    <tr>
                      <td className="py-2 pr-4">650 Industries Inc. (Expo)</td>
                      <td className="py-2 pr-4">Push-Benachrichtigungen</td>
                      <td className="py-2 pr-4">USA (SCCs/DPF)</td>
                      <td className="py-2">Gerätetokens, Nachrichteninhalte</td>
                    </tr>
                  </tbody>
                </table>
              </div>
              <p className="mt-3">
                7.3. Der Auftragnehmer informiert den Auftraggeber über
                beabsichtigte Änderungen in Bezug auf die Hinzuziehung oder
                Ersetzung von Unterauftragsverarbeitern mindestens 4 Wochen im
                Voraus per E-Mail. Der Auftraggeber kann der Änderung innerhalb
                von 2 Wochen widersprechen. Bei berechtigtem Widerspruch steht
                dem Auftraggeber ein Sonderkündigungsrecht zu.
              </p>
              <p className="mt-2">
                7.4. Der Auftragnehmer stellt vertraglich sicher, dass die
                Unterauftragsverarbeiter dieselben Datenschutzpflichten
                einhalten wie in diesem AVV vereinbart.
              </p>
            </section>

            {/* 8. TOMs */}
            <section>
              <h2 className="text-xl font-semibold text-foreground mb-3">
                8. Technische und organisatorische Maßnahmen (TOMs)
              </h2>
              <p>
                Der Auftragnehmer setzt folgende Maßnahmen gemäß Art. 32 DSGVO
                um:
              </p>

              <h3 className="text-lg font-medium text-foreground mb-2 mt-4">
                Vertraulichkeit
              </h3>
              <ul className="list-disc pl-6 space-y-1">
                <li>
                  Zugriffskontrolle: Authentifizierung mittels E-Mail/Passwort
                  oder OAuth, optionale Zwei-Faktor-Authentifizierung
                </li>
                <li>
                  Passwortsicherheit: Verschlüsselung mittels bcrypt
                  (Kostenfaktor 12)
                </li>
                <li>
                  Zugangsbeschränkung: Zugriff auf Kundendaten nur für den
                  jeweiligen Kontoinhaber, mandantenfähige Datentrennung
                </li>
                <li>
                  Trennungskontrolle: Logische Mandantentrennung über company_id
                  auf Datenbankebene
                </li>
              </ul>

              <h3 className="text-lg font-medium text-foreground mb-2 mt-4">
                Integrität
              </h3>
              <ul className="list-disc pl-6 space-y-1">
                <li>Verschlüsselung: TLS/SSL für alle Datenübertragungen</li>
                <li>
                  Protokollierung: Aktivitäts- und Audit-Logs für
                  sicherheitsrelevante Aktionen
                </li>
                <li>
                  Eingabekontrolle: Validierung aller Benutzereingaben,
                  CSRF-Schutz
                </li>
              </ul>

              <h3 className="text-lg font-medium text-foreground mb-2 mt-4">
                Verfügbarkeit und Belastbarkeit
              </h3>
              <ul className="list-disc pl-6 space-y-1">
                <li>Serverstandort: EU (Hetzner, Nürnberg, Deutschland)</li>
                <li>Regelmäßige Sicherheitsupdates und Patches</li>
                <li>Datensicherung: Regelmäßige Backups der Datenbank</li>
              </ul>

              <h3 className="text-lg font-medium text-foreground mb-2 mt-4">
                Verfahren zur regelmäßigen Überprüfung
              </h3>
              <ul className="list-disc pl-6 space-y-1">
                <li>
                  Regelmäßige Überprüfung und Aktualisierung der
                  Sicherheitsmaßnahmen
                </li>
                <li>Monitoring der Serverinfrastruktur</li>
              </ul>
            </section>

            {/* 9. Kontrollrechte */}
            <section>
              <h2 className="text-xl font-semibold text-foreground mb-3">
                9. Kontrollrechte des Auftraggebers
              </h2>
              <p>
                9.1. Der Auftraggeber hat das Recht, die Einhaltung der in
                diesem AVV festgelegten Pflichten zu überprüfen. Der
                Auftragnehmer stellt dem Auftraggeber auf Anfrage die hierfür
                notwendigen Informationen zur Verfügung.
              </p>
              <p className="mt-2">
                9.2. Überprüfungen vor Ort sind nach Abstimmung und mit
                angemessener Vorlaufzeit (mindestens 4 Wochen) möglich. Die
                Kosten der Überprüfung trägt der Auftraggeber.
              </p>
              <p className="mt-2">
                9.3. Der Auftragnehmer kann die Überprüfung auch durch Vorlage
                geeigneter Nachweise (z. B. Zertifikate, Berichte unabhängiger
                Prüfer) erfüllen.
              </p>
            </section>

            {/* 10. Löschung und Rückgabe */}
            <section>
              <h2 className="text-xl font-semibold text-foreground mb-3">
                10. Löschung und Rückgabe von Daten
              </h2>
              <p>
                10.1. Nach Beendigung des Hauptvertrags stellt der Auftragnehmer
                dem Auftraggeber für 30 Tage eine Export-Funktion zur Verfügung,
                über die alle gespeicherten Daten in einem maschinenlesbaren
                Format heruntergeladen werden können.
              </p>
              <p className="mt-2">
                10.2. Nach Ablauf dieser Frist löscht der Auftragnehmer alle
                personenbezogenen Daten des Auftraggebers, sofern keine
                gesetzlichen Aufbewahrungspflichten bestehen.
              </p>
              <p className="mt-2">
                10.3. Daten, die steuerrechtlichen Aufbewahrungspflichten
                unterliegen (z. B. Rechnungsdaten), werden nach Ablauf der
                gesetzlichen Frist (7 Jahre gemäß BAO) gelöscht.
              </p>
              <p className="mt-2">
                10.4. Die Löschung wird dem Auftraggeber auf Anfrage schriftlich
                bestätigt.
              </p>
            </section>

            {/* 11. Meldepflicht */}
            <section>
              <h2 className="text-xl font-semibold text-foreground mb-3">
                11. Meldepflicht bei Datenschutzverletzungen
              </h2>
              <p>
                11.1. Der Auftragnehmer informiert den Auftraggeber
                unverzüglich, in der Regel innerhalb von 24 Stunden, über jede
                Verletzung des Schutzes personenbezogener Daten (Data Breach)
                gemäß Art. 33 Abs. 2 DSGVO.
              </p>
              <p className="mt-2">11.2. Die Meldung enthält mindestens:</p>
              <ul className="list-disc pl-6 mt-1 space-y-1">
                <li>Beschreibung der Art der Verletzung</li>
                <li>
                  Betroffene Datenkategorien und ungefähre Anzahl betroffener
                  Personen
                </li>
                <li>Wahrscheinliche Folgen der Verletzung</li>
                <li>Ergriffene und vorgeschlagene Maßnahmen zur Behebung</li>
              </ul>
            </section>

            {/* 12. Laufzeit */}
            <section>
              <h2 className="text-xl font-semibold text-foreground mb-3">
                12. Laufzeit und Kündigung
              </h2>
              <p>
                12.1. Dieser AVV tritt mit Abschluss des Hauptvertrags in Kraft
                und endet automatisch mit dessen Beendigung.
              </p>
              <p className="mt-2">
                12.2. Die Pflichten aus diesem AVV, insbesondere die
                Geheimhaltungspflichten, bestehen auch nach Vertragsende fort.
              </p>
            </section>

            {/* 13. Anwendbares Recht */}
            <section>
              <h2 className="text-xl font-semibold text-foreground mb-3">
                13. Anwendbares Recht
              </h2>
              <p>
                Auf diesen AVV findet österreichisches Recht Anwendung.
                Gerichtsstand ist Wien.
              </p>
            </section>

            {/* 14. Schlussbestimmungen */}
            <section>
              <h2 className="text-xl font-semibold text-foreground mb-3">
                14. Schlussbestimmungen
              </h2>
              <p>
                14.1. Änderungen und Ergänzungen dieses AVV bedürfen der
                Schriftform.
              </p>
              <p className="mt-2">
                14.2. Sollten einzelne Bestimmungen dieses AVV unwirksam sein,
                bleibt die Wirksamkeit der übrigen Bestimmungen unberührt.
              </p>
              <p className="mt-2">
                14.3. Im Falle von Widersprüchen zwischen diesem AVV und dem
                Hauptvertrag gehen die Bestimmungen dieses AVV in Bezug auf den
                Datenschutz vor.
              </p>
            </section>

            {/* Kontakt */}
            <section className="pt-4 border-t border-foreground/10">
              <p>
                <strong className="text-foreground">
                  Kontakt für Fragen zum AVV:
                </strong>
                <br />
                Elias Ratt
                <br />
                E-Mail:{" "}
                <a
                  href="mailto:datenschutz@billcraft.app"
                  className="text-primary hover:underline"
                >
                  datenschutz@billcraft.app
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
