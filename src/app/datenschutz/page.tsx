import type { Metadata } from "next";
import Header from "@/components/Header";
import Footer from "@/components/Footer";

export const metadata: Metadata = {
  title: "Datenschutzerklärung | BillCraft",
  description:
    "Datenschutzerklärung der BillCraft-Website. Informationen zur Erhebung und Verarbeitung personenbezogener Daten gemäß DSGVO.",
};

export default function DatenschutzPage() {
  return (
    <div className="min-h-dvh bg-background">
      <Header />

      <main className="pt-32 pb-20">
        <div className="prose-legal container mx-auto max-w-4xl px-4 md:px-6 lg:px-8">
          <h1>Datenschutzerklärung</h1>
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
            {/* 1. Verantwortlicher */}
            <section>
              <h2>
                1. Verantwortlicher
              </h2>
              <p>
                Verantwortlicher im Sinne der Datenschutz-Grundverordnung
                (DSGVO) und des österreichischen Datenschutzgesetzes (DSG):
              </p>
              <p className="mt-2">
                Elias Ratt
                <br />
                Erdbergstraße 150/1/26-27
                <br />
                1030 Wien, Österreich
              </p>
              <p className="mt-2">
                E-Mail:{" "}
                <a
                  href="mailto:datenschutz@billcraft.app"
                  className="text-primary hover:underline"
                >
                  datenschutz@billcraft.app
                </a>
                <br />
                Website:{" "}
                <a
                  href="https://billcraft.app"
                  className="text-primary hover:underline"
                >
                  https://billcraft.app
                </a>
                <br />
                Service:{" "}
                <a
                  href="https://app.billcraft.app"
                  className="text-primary hover:underline"
                >
                  https://app.billcraft.app
                </a>
              </p>
            </section>

            {/* 2. Datenschutzbeauftragter */}
            <section>
              <h2>
                2. Datenschutzbeauftragter
              </h2>
              <p>
                Eine Bestellung eines Datenschutzbeauftragten ist gesetzlich
                nicht erforderlich. Bei Fragen zum Datenschutz wenden Sie sich
                bitte an:{" "}
                <a
                  href="mailto:datenschutz@billcraft.app"
                  className="text-primary hover:underline"
                >
                  datenschutz@billcraft.app
                </a>
              </p>
            </section>

            {/* 3. Überblick */}
            <section>
              <h2>
                3. Überblick über die Datenverarbeitung
              </h2>
              <p>
                BillCraft verarbeitet personenbezogene Daten ausschließlich im
                Einklang mit der DSGVO und dem DSG. Die Verarbeitung erfolgt
                stets auf Basis einer Rechtsgrundlage gemäß Art. 6 DSGVO.
              </p>
            </section>

            {/* 4. Rechtsgrundlagen */}
            <section>
              <h2>
                4. Rechtsgrundlagen der Verarbeitung
              </h2>
              <ul className="list-disc pl-6 space-y-2">
                <li>
                  <strong className="text-foreground">
                    Art. 6 Abs. 1 lit. a DSGVO (Einwilligung):
                  </strong>{" "}
                  Für optionale Funktionen wie Newsletter, Marketing-Cookies.
                </li>
                <li>
                  <strong className="text-foreground">
                    Art. 6 Abs. 1 lit. b DSGVO (Vertragserfüllung):
                  </strong>{" "}
                  Für die Bereitstellung des Service, Kontoverwaltung,
                  Zahlungsabwicklung.
                </li>
                <li>
                  <strong className="text-foreground">
                    Art. 6 Abs. 1 lit. c DSGVO (Rechtliche Verpflichtung):
                  </strong>{" "}
                  Für steuerrechtliche Aufbewahrungspflichten.
                </li>
                <li>
                  <strong className="text-foreground">
                    Art. 6 Abs. 1 lit. f DSGVO (Berechtigtes Interesse):
                  </strong>{" "}
                  Für Sicherheitsmaßnahmen, Fehlerbehebung, Optimierung des
                  Service.
                </li>
              </ul>
            </section>

            {/* 5. Welche Daten wir erheben */}
            <section>
              <h2>
                5. Welche Daten wir erheben
              </h2>

              <h3 className="mt-4">
                5.1 Registrierung und Kontodaten
              </h3>
              <p>Bei der Registrierung und Nutzung erheben wir:</p>
              <div className="mt-3 overflow-x-auto">
                <table className="w-full text-sm border-collapse">
                  <thead>
                    <tr className="border-b border-foreground/10">
                      <th className="text-left py-2 pr-4 text-foreground font-medium">
                        Datenkategorie
                      </th>
                      <th className="text-left py-2 pr-4 text-foreground font-medium">
                        Daten
                      </th>
                      <th className="text-left py-2 text-foreground font-medium">
                        Rechtsgrundlage
                      </th>
                    </tr>
                  </thead>
                  <tbody className="divide-y divide-foreground/5">
                    <tr>
                      <td className="py-2 pr-4">Pflichtdaten</td>
                      <td className="py-2 pr-4">
                        Vorname, Nachname, E-Mail-Adresse
                      </td>
                      <td className="py-2">Art. 6 Abs. 1 lit. b</td>
                    </tr>
                    <tr>
                      <td className="py-2 pr-4">Optionale Profildaten</td>
                      <td className="py-2 pr-4">Telefonnummer, Profilbild</td>
                      <td className="py-2">Art. 6 Abs. 1 lit. b</td>
                    </tr>
                    <tr>
                      <td className="py-2 pr-4">Authentifizierung</td>
                      <td className="py-2 pr-4">
                        Passwort (gehasht), 2FA-Daten, Google OAuth Token
                      </td>
                      <td className="py-2">Art. 6 Abs. 1 lit. b</td>
                    </tr>
                    <tr>
                      <td className="py-2 pr-4">Kontodaten</td>
                      <td className="py-2 pr-4">
                        Zeitzone, Onboarding-Status, letzte Anmeldung
                      </td>
                      <td className="py-2">Art. 6 Abs. 1 lit. b</td>
                    </tr>
                  </tbody>
                </table>
              </div>

              <h3 className="mt-6">
                5.2 Unternehmensdaten des Kunden
              </h3>
              <p>
                Zur Nutzung des Service speichern wir die vom Kunden
                eingegebenen Unternehmensdaten:
              </p>
              <ul className="list-disc pl-6 mt-2 space-y-1">
                <li>Firmenname, Rechtsform, Adresse</li>
                <li>Telefonnummer, E-Mail, Website</li>
                <li>Bankverbindung (IBAN, BIC)</li>
                <li>Firmenbuch-Nummer, UID-Nummer</li>
                <li>Logo</li>
              </ul>

              <h3 className="mt-6">
                5.3 Geschäftsdaten des Kunden
              </h3>
              <p>
                Im Rahmen der Nutzung verarbeiten wir die vom Kunden
                eingegebenen Geschäftsdaten:
              </p>
              <ul className="list-disc pl-6 mt-2 space-y-1">
                <li>
                  Kundenstammdaten (Namen, Adressen, Kontaktdaten der Kunden des
                  Nutzers)
                </li>
                <li>Rechnungen und Gutschriften</li>
                <li>Angebote</li>
                <li>Produkte und Dienstleistungen</li>
                <li>Belege und Ausgaben</li>
                <li>Mahnungen</li>
              </ul>
              <p className="mt-3 text-sm bg-foreground/5 rounded-lg p-3">
                <strong className="text-foreground">Hinweis:</strong> Für diese
                Daten ist der Kunde Verantwortlicher im Sinne der DSGVO.
                BillCraft verarbeitet diese Daten als Auftragsverarbeiter gemäß
                Art. 28 DSGVO. Details regelt der{" "}
                <a href="/avv" className="text-primary hover:underline">
                  Auftragsverarbeitungsvertrag (AVV)
                </a>
                .
              </p>

              <h3 className="mt-6">
                5.4 Zahlungsdaten
              </h3>
              <p>
                Zahlungsmethode (Kreditkarte, Amazon Pay) — die vollständigen
                Zahlungsdaten werden ausschließlich von Stripe bzw. Amazon Pay
                verarbeitet. BillCraft speichert nur eine Referenz-ID und den
                Zahlungsstatus.
              </p>

              <h3 className="mt-6">
                5.5 Technische Daten (Server-Logs)
              </h3>
              <p>
                Bei jedem Zugriff auf den Service werden automatisch folgende
                Daten erhoben:
              </p>
              <ul className="list-disc pl-6 mt-2 space-y-1">
                <li>IP-Adresse (anonymisiert nach 7 Tagen)</li>
                <li>Datum und Uhrzeit des Zugriffs</li>
                <li>Aufgerufene URL</li>
                <li>HTTP-Statuscode</li>
                <li>Browser und Betriebssystem (User-Agent)</li>
                <li>Referrer-URL</li>
              </ul>
              <p className="mt-2">
                <strong className="text-foreground">Rechtsgrundlage:</strong>{" "}
                Art. 6 Abs. 1 lit. f DSGVO (berechtigtes Interesse an der
                Sicherheit und Stabilität des Service).
              </p>
              <p className="mt-1">
                <strong className="text-foreground">Speicherdauer:</strong>{" "}
                Server-Logs werden nach 30 Tagen gelöscht.
              </p>

              <h3 className="mt-6">
                5.6 Gerätetokens (Push-Benachrichtigungen)
              </h3>
              <p>
                Nutzt der Kunde die mobile App, wird ein Gerätetoken (Expo Push
                Token) gespeichert, um Push-Benachrichtigungen zuzustellen. Die
                Speicherung erfolgt auf Basis von Art. 6 Abs. 1 lit. b DSGVO.
                Der Kunde kann Push-Benachrichtigungen jederzeit in den
                Geräteeinstellungen deaktivieren.
              </p>
            </section>

            {/* 6. Drittanbieter */}
            <section>
              <h2>
                6. Einsatz von Drittanbietern (Auftragsverarbeiter)
              </h2>

              <h3 className="mt-4">
                6.1 Hosting und Infrastruktur
              </h3>
              <div className="mt-3 overflow-x-auto">
                <table className="w-full text-sm border-collapse">
                  <thead>
                    <tr className="border-b border-foreground/10">
                      <th className="text-left py-2 pr-4 text-foreground font-medium">
                        Dienst
                      </th>
                      <th className="text-left py-2 pr-4 text-foreground font-medium">
                        Anbieter
                      </th>
                      <th className="text-left py-2 pr-4 text-foreground font-medium">
                        Zweck
                      </th>
                      <th className="text-left py-2 text-foreground font-medium">
                        Standort
                      </th>
                    </tr>
                  </thead>
                  <tbody className="divide-y divide-foreground/5">
                    <tr>
                      <td className="py-2 pr-4 font-medium text-foreground">
                        Hetzner Online
                      </td>
                      <td className="py-2 pr-4">
                        Hetzner Online GmbH, Industriestr. 25, 91710
                        Gunzenhausen, Deutschland
                      </td>
                      <td className="py-2 pr-4">
                        Backend-Hosting, Datenbank, Dateispeicher
                      </td>
                      <td className="py-2">Nürnberg, Deutschland (EU)</td>
                    </tr>
                    <tr>
                      <td className="py-2 pr-4 font-medium text-foreground">
                        Cloudflare Pages
                      </td>
                      <td className="py-2 pr-4">
                        Cloudflare Inc., 101 Townsend St, San Francisco, CA
                        94107, USA
                      </td>
                      <td className="py-2 pr-4">Frontend-Hosting, CDN</td>
                      <td className="py-2">Irland/EU (EU-Rechenzentren)</td>
                    </tr>
                  </tbody>
                </table>
              </div>
              <p className="mt-3">
                Cloudflare verarbeitet technische Zugriffsdaten (IP-Adressen,
                HTTP-Anfragen) im Rahmen der Content-Delivery. Es besteht ein
                Auftragsverarbeitungsvertrag gemäß Art. 28 DSGVO. Cloudflare ist
                unter dem EU-US Data Privacy Framework zertifiziert.
              </p>

              <h3 className="mt-6">
                6.2 Zahlungsabwicklung
              </h3>
              <div className="mt-3 overflow-x-auto">
                <table className="w-full text-sm border-collapse">
                  <thead>
                    <tr className="border-b border-foreground/10">
                      <th className="text-left py-2 pr-4 text-foreground font-medium">
                        Dienst
                      </th>
                      <th className="text-left py-2 pr-4 text-foreground font-medium">
                        Anbieter
                      </th>
                      <th className="text-left py-2 pr-4 text-foreground font-medium">
                        Zweck
                      </th>
                      <th className="text-left py-2 text-foreground font-medium">
                        Rechtsgrundlage
                      </th>
                    </tr>
                  </thead>
                  <tbody className="divide-y divide-foreground/5">
                    <tr>
                      <td className="py-2 pr-4 font-medium text-foreground">
                        Stripe
                      </td>
                      <td className="py-2 pr-4">
                        Stripe Payments Europe, Ltd., 1 Grand Canal Street
                        Lower, Dublin 2, Irland
                      </td>
                      <td className="py-2 pr-4">
                        Kreditkartenzahlung, Abo-Verwaltung
                      </td>
                      <td className="py-2">Art. 6 Abs. 1 lit. b</td>
                    </tr>
                    <tr>
                      <td className="py-2 pr-4 font-medium text-foreground">
                        Amazon Pay
                      </td>
                      <td className="py-2 pr-4">
                        Amazon Payments Europe S.C.A., 38 avenue J.F. Kennedy,
                        L-1855 Luxemburg
                      </td>
                      <td className="py-2 pr-4">Zahlungsabwicklung</td>
                      <td className="py-2">Art. 6 Abs. 1 lit. b</td>
                    </tr>
                  </tbody>
                </table>
              </div>
              <p className="mt-3">
                Stripe und Amazon Pay erhalten die zur Zahlungsabwicklung
                notwendigen Daten (Name, E-Mail, Zahlungsinformationen).
                BillCraft speichert keine vollständigen Kreditkartennummern.
              </p>

              <h3 className="mt-6">
                6.3 E-Mail-Versand
              </h3>
              <div className="mt-3 overflow-x-auto">
                <table className="w-full text-sm border-collapse">
                  <thead>
                    <tr className="border-b border-foreground/10">
                      <th className="text-left py-2 pr-4 text-foreground font-medium">
                        Dienst
                      </th>
                      <th className="text-left py-2 pr-4 text-foreground font-medium">
                        Anbieter
                      </th>
                      <th className="text-left py-2 pr-4 text-foreground font-medium">
                        Zweck
                      </th>
                      <th className="text-left py-2 text-foreground font-medium">
                        Rechtsgrundlage
                      </th>
                    </tr>
                  </thead>
                  <tbody>
                    <tr>
                      <td className="py-2 pr-4 font-medium text-foreground">
                        Resend
                      </td>
                      <td className="py-2 pr-4">
                        Resend Inc., 2261 Market Street #4988, San Francisco, CA
                        94114, USA
                      </td>
                      <td className="py-2 pr-4">
                        Transaktionaler E-Mail-Versand (Bestätigungen,
                        Rechnungen, Passwort-Reset)
                      </td>
                      <td className="py-2">Art. 6 Abs. 1 lit. b</td>
                    </tr>
                  </tbody>
                </table>
              </div>
              <p className="mt-3">
                Resend verarbeitet E-Mail-Adressen und E-Mail-Inhalte im Auftrag
                von BillCraft. Es besteht ein Data Processing Agreement. Die
                Verarbeitung in den USA erfolgt auf Basis des EU-US Data Privacy
                Framework bzw. Standardvertragsklauseln (SCCs).
              </p>

              <h3 className="mt-6">
                6.4 Authentifizierung
              </h3>
              <div className="mt-3 overflow-x-auto">
                <table className="w-full text-sm border-collapse">
                  <thead>
                    <tr className="border-b border-foreground/10">
                      <th className="text-left py-2 pr-4 text-foreground font-medium">
                        Dienst
                      </th>
                      <th className="text-left py-2 pr-4 text-foreground font-medium">
                        Anbieter
                      </th>
                      <th className="text-left py-2 pr-4 text-foreground font-medium">
                        Zweck
                      </th>
                      <th className="text-left py-2 text-foreground font-medium">
                        Rechtsgrundlage
                      </th>
                    </tr>
                  </thead>
                  <tbody>
                    <tr>
                      <td className="py-2 pr-4 font-medium text-foreground">
                        Google OAuth
                      </td>
                      <td className="py-2 pr-4">
                        Google Ireland Limited, Gordon House, Barrow Street,
                        Dublin 4, Irland
                      </td>
                      <td className="py-2 pr-4">
                        Optionale Anmeldung via Google-Konto
                      </td>
                      <td className="py-2">
                        Art. 6 Abs. 1 lit. a (Einwilligung)
                      </td>
                    </tr>
                  </tbody>
                </table>
              </div>
              <p className="mt-3">
                Bei der Anmeldung über Google werden Name, E-Mail-Adresse und
                Profilbild von Google an BillCraft übermittelt. Die Nutzung von
                Google OAuth ist freiwillig.
              </p>

              <h3 className="mt-6">
                6.5 KI-Funktionen
              </h3>
              <div className="mt-3 overflow-x-auto">
                <table className="w-full text-sm border-collapse">
                  <thead>
                    <tr className="border-b border-foreground/10">
                      <th className="text-left py-2 pr-4 text-foreground font-medium">
                        Dienst
                      </th>
                      <th className="text-left py-2 pr-4 text-foreground font-medium">
                        Anbieter
                      </th>
                      <th className="text-left py-2 pr-4 text-foreground font-medium">
                        Zweck
                      </th>
                      <th className="text-left py-2 text-foreground font-medium">
                        Rechtsgrundlage
                      </th>
                    </tr>
                  </thead>
                  <tbody>
                    <tr>
                      <td className="py-2 pr-4 font-medium text-foreground">
                        OpenAI API
                      </td>
                      <td className="py-2 pr-4">
                        OpenAI, L.L.C., 3180 18th Street, San Francisco, CA
                        94110, USA
                      </td>
                      <td className="py-2 pr-4">
                        Automatische Belegerkennung (OCR)
                      </td>
                      <td className="py-2">Art. 6 Abs. 1 lit. b</td>
                    </tr>
                  </tbody>
                </table>
              </div>
              <p className="mt-3">
                Bei Nutzung der KI-Belegerfassung werden Belegbilder an die
                OpenAI API übermittelt, um Text und Beträge zu extrahieren. Die
                Verarbeitung erfolgt auf Basis des Auftragsverarbeitungsvertrags
                mit OpenAI. OpenAI verwendet diese Daten gemäß deren Data
                Processing Agreement nicht zum Training von Modellen. Die
                Nutzung dieser Funktion ist nur in kostenpflichtigen Tarifen
                verfügbar und freiwillig.
              </p>

              <h3 className="mt-6">
                6.6 Push-Benachrichtigungen
              </h3>
              <div className="mt-3 overflow-x-auto">
                <table className="w-full text-sm border-collapse">
                  <thead>
                    <tr className="border-b border-foreground/10">
                      <th className="text-left py-2 pr-4 text-foreground font-medium">
                        Dienst
                      </th>
                      <th className="text-left py-2 pr-4 text-foreground font-medium">
                        Anbieter
                      </th>
                      <th className="text-left py-2 pr-4 text-foreground font-medium">
                        Zweck
                      </th>
                      <th className="text-left py-2 text-foreground font-medium">
                        Rechtsgrundlage
                      </th>
                    </tr>
                  </thead>
                  <tbody>
                    <tr>
                      <td className="py-2 pr-4 font-medium text-foreground">
                        Expo
                      </td>
                      <td className="py-2 pr-4">
                        650 Industries Inc., Palo Alto, CA, USA
                      </td>
                      <td className="py-2 pr-4">
                        Zustellung von Push-Benachrichtigungen an mobile Geräte
                      </td>
                      <td className="py-2">Art. 6 Abs. 1 lit. b</td>
                    </tr>
                  </tbody>
                </table>
              </div>
            </section>

            {/* 7. Cookies */}
            <section>
              <h2>
                7. Cookies und lokale Speicherung
              </h2>

              <h3 className="mt-4">
                7.1 Technisch notwendige Cookies
              </h3>
              <p>
                BillCraft verwendet ausschließlich technisch notwendige Cookies
                für:
              </p>
              <ul className="list-disc pl-6 mt-2 space-y-1">
                <li>Session-Verwaltung und Authentifizierung</li>
                <li>CSRF-Schutz (Cross-Site Request Forgery)</li>
                <li>Spracheinstellungen</li>
              </ul>
              <p className="mt-2">
                Diese Cookies sind für den Betrieb des Service erforderlich und
                können nicht deaktiviert werden.
              </p>
              <p className="mt-1">
                <strong className="text-foreground">Rechtsgrundlage:</strong>{" "}
                Art. 6 Abs. 1 lit. b DSGVO und § 165 Abs. 3 TKG 2021 (technisch
                notwendig).
              </p>

              <h3 className="mt-6">
                7.2 Analyse- und Marketing-Cookies
              </h3>
              <p>
                BillCraft verwendet derzeit keine Analyse- oder
                Marketing-Cookies. Sollte dies in Zukunft der Fall sein, wird
                vor der Aktivierung eine Einwilligung eingeholt
                (Consent-Banner).
              </p>
            </section>

            {/* 8. Datentransfer */}
            <section>
              <h2>
                8. Datentransfer in Drittländer
              </h2>
              <p>
                Einige der eingesetzten Dienstleister haben ihren Sitz in den
                USA. Der Datentransfer erfolgt auf Grundlage von:
              </p>
              <ul className="list-disc pl-6 mt-2 space-y-1">
                <li>
                  <strong className="text-foreground">
                    EU-US Data Privacy Framework
                  </strong>{" "}
                  (für zertifizierte Unternehmen wie Cloudflare, Stripe)
                </li>
                <li>
                  <strong className="text-foreground">
                    Standardvertragsklauseln (SCCs)
                  </strong>{" "}
                  gemäß Art. 46 Abs. 2 lit. c DSGVO
                </li>
              </ul>
              <p className="mt-2">
                BillCraft stellt sicher, dass alle eingesetzten US-Dienstleister
                über angemessene Datenschutzgarantien verfügen.
              </p>
            </section>

            {/* 9. Speicherdauer */}
            <section>
              <h2>
                9. Speicherdauer
              </h2>
              <div className="mt-3 overflow-x-auto">
                <table className="w-full text-sm border-collapse">
                  <thead>
                    <tr className="border-b border-foreground/10">
                      <th className="text-left py-2 pr-4 text-foreground font-medium">
                        Datenkategorie
                      </th>
                      <th className="text-left py-2 text-foreground font-medium">
                        Speicherdauer
                      </th>
                    </tr>
                  </thead>
                  <tbody className="divide-y divide-foreground/5">
                    <tr>
                      <td className="py-2 pr-4">Kontodaten</td>
                      <td className="py-2">
                        Für die Dauer des Vertragsverhältnisses + 30 Tage nach
                        Kündigung
                      </td>
                    </tr>
                    <tr>
                      <td className="py-2 pr-4">
                        Geschäftsdaten (Rechnungen, Belege)
                      </td>
                      <td className="py-2">
                        7 Jahre nach Vertragsende (steuerrechtliche
                        Aufbewahrungspflicht gemäß BAO)
                      </td>
                    </tr>
                    <tr>
                      <td className="py-2 pr-4">Server-Logs</td>
                      <td className="py-2">30 Tage</td>
                    </tr>
                    <tr>
                      <td className="py-2 pr-4">Zahlungsdaten bei Stripe</td>
                      <td className="py-2">
                        Gemäß Stripe-Aufbewahrungsrichtlinien
                      </td>
                    </tr>
                    <tr>
                      <td className="py-2 pr-4">E-Mail-Versandprotokolle</td>
                      <td className="py-2">90 Tage</td>
                    </tr>
                    <tr>
                      <td className="py-2 pr-4">Gerätetokens</td>
                      <td className="py-2">
                        Bis zur Deaktivierung oder Kontolöschung
                      </td>
                    </tr>
                  </tbody>
                </table>
              </div>
            </section>

            {/* 10. Rechte */}
            <section>
              <h2>
                10. Ihre Rechte als betroffene Person
              </h2>
              <p>Sie haben gemäß DSGVO folgende Rechte:</p>
              <ul className="list-disc pl-6 mt-2 space-y-2">
                <li>
                  <strong className="text-foreground">
                    Auskunftsrecht (Art. 15):
                  </strong>{" "}
                  Sie können Auskunft über die von uns verarbeiteten
                  personenbezogenen Daten verlangen.
                </li>
                <li>
                  <strong className="text-foreground">
                    Recht auf Berichtigung (Art. 16):
                  </strong>{" "}
                  Sie können die Berichtigung unrichtiger Daten verlangen.
                </li>
                <li>
                  <strong className="text-foreground">
                    Recht auf Löschung (Art. 17):
                  </strong>{" "}
                  Sie können die Löschung Ihrer Daten verlangen, sofern keine
                  gesetzlichen Aufbewahrungspflichten entgegenstehen.
                </li>
                <li>
                  <strong className="text-foreground">
                    Recht auf Einschränkung (Art. 18):
                  </strong>{" "}
                  Sie können die Einschränkung der Verarbeitung verlangen.
                </li>
                <li>
                  <strong className="text-foreground">
                    Recht auf Datenübertragbarkeit (Art. 20):
                  </strong>{" "}
                  Sie können Ihre Daten in einem strukturierten,
                  maschinenlesbaren Format erhalten.
                </li>
                <li>
                  <strong className="text-foreground">
                    Widerspruchsrecht (Art. 21):
                  </strong>{" "}
                  Sie können der Verarbeitung auf Basis berechtigter Interessen
                  widersprechen.
                </li>
                <li>
                  <strong className="text-foreground">
                    Widerrufsrecht (Art. 7 Abs. 3):
                  </strong>{" "}
                  Eine erteilte Einwilligung kann jederzeit mit Wirkung für die
                  Zukunft widerrufen werden.
                </li>
              </ul>
              <p className="mt-3">
                Zur Ausübung Ihrer Rechte wenden Sie sich bitte an:{" "}
                <a
                  href="mailto:datenschutz@billcraft.app"
                  className="text-primary hover:underline"
                >
                  datenschutz@billcraft.app
                </a>
              </p>
            </section>

            {/* 11. Beschwerderecht */}
            <section>
              <h2>
                11. Beschwerderecht bei der Aufsichtsbehörde
              </h2>
              <p>
                Sie haben das Recht, sich bei einer Datenschutz-Aufsichtsbehörde
                zu beschweren. Die zuständige Behörde in Österreich ist:
              </p>
              <p className="mt-2">
                <strong className="text-foreground">
                  Österreichische Datenschutzbehörde
                </strong>
                <br />
                Barichgasse 40-42
                <br />
                1030 Wien
                <br />
                Telefon: +43 1 52 152-0
                <br />
                E-Mail:{" "}
                <a
                  href="mailto:dsb@dsb.gv.at"
                  className="text-primary hover:underline"
                >
                  dsb@dsb.gv.at
                </a>
                <br />
                Website:{" "}
                <a
                  href="https://www.dsb.gv.at"
                  className="text-primary hover:underline"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  https://www.dsb.gv.at
                </a>
              </p>
            </section>

            {/* 12. Datensicherheit */}
            <section>
              <h2>
                12. Datensicherheit
              </h2>
              <p>
                BillCraft trifft angemessene technische und organisatorische
                Maßnahmen zum Schutz personenbezogener Daten, insbesondere:
              </p>
              <ul className="list-disc pl-6 mt-2 space-y-1">
                <li>Verschlüsselung der Datenübertragung mittels TLS/SSL</li>
                <li>Verschlüsselung von Passwörtern mittels bcrypt</li>
                <li>Verschlüsselte Speicherung von Bankdaten (IBAN, BIC)</li>
                <li>
                  Zwei-Faktor-Authentifizierung (2FA) als optionale
                  Sicherheitsmaßnahme
                </li>
                <li>Regelmäßige Sicherheitsupdates</li>
                <li>Zugriffsbeschränkung auf personenbezogene Daten</li>
                <li>Serverstandort in der EU (Deutschland)</li>
              </ul>
            </section>

            {/* 13. Automatisierte Entscheidungsfindung */}
            <section>
              <h2>
                13. Automatisierte Entscheidungsfindung
              </h2>
              <p>
                Eine automatisierte Entscheidungsfindung oder Profiling im Sinne
                von Art. 22 DSGVO findet nicht statt. Die KI-gestützte
                Belegerfassung dient ausschließlich der Texterkennung und trifft
                keine rechtlich bindenden Entscheidungen.
              </p>
            </section>

            {/* 14. Änderungen */}
            <section>
              <h2>
                14. Änderungen dieser Datenschutzerklärung
              </h2>
              <p>
                BillCraft behält sich vor, diese Datenschutzerklärung bei Bedarf
                anzupassen, insbesondere bei Änderungen der Rechtslage, des
                Service oder der eingesetzten Drittanbieter. Die aktuelle
                Version ist stets unter{" "}
                <a href="/datenschutz" className="text-primary hover:underline">
                  https://billcraft.app/datenschutz
                </a>{" "}
                abrufbar. Bei wesentlichen Änderungen werden registrierte Nutzer
                per E-Mail informiert.
              </p>
            </section>

            {/* 15. Kontakt */}
            <section>
              <h2>
                15. Kontakt
              </h2>
              <p>Bei Fragen zum Datenschutz:</p>
              <p className="mt-2">
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
