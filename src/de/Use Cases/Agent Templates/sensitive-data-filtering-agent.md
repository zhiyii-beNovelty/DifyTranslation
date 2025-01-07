---
metatitle: Agent zur Filterung sensibler Daten | Agent-Vorlagen | FabriXAI Benutzerhandbuch
description: Dies ist ein Benutzerhandbuch für den Agenten zur Filterung sensibler Daten, das entwickelt wurde, um Benutzern dabei zu helfen, persönliche Informationen zu schützen, indem es automatisch sensible Daten in einem gegebenen Text identifiziert und verschleiert.
lang: de
permalink: /agent-templates/sensitive-data-filtering-agent
---

# Sensitiver Datenfilteragent

Der **Sensitiver Datenfilteragent** ist dazu gedacht, Benutzern zu helfen, persönliche Informationen zu schützen, indem er sensible Daten in einem Text automatisch erkennt und unkenntlich macht. Dieser Agent verarbeitet spezifische Kategorien wie HKID-Nummern, Telefonnummern, Adressen, Finanzinformationen und Geburtsdaten und ersetzt sensible Daten systematisch durch festgelegte Platzhalter. Benutzer können so die Integrität ihrer Kommunikation und die Einhaltung der Datenschutzvorschriften wahren, während sie sicherstellen, dass vertrauliche Details nicht preisgegeben werden. Dadurch wird er zu einem unverzichtbaren Werkzeug für Fachleute, die mit sensiblen Dokumenten FabriXAI Benutzerhandbuch
description: Dies ist ein Benutzerhandbuch für den Agenten zur Filterung sensibler Daten, das entwickelt wurde, um Benutzern dabei zu helfen, persönliche Informationen zu schützen, indem es automatisch sensible Daten in einem gegebenen Text identifiziert und verschleiert.
lang: de
permalink: /agent-templates/sensitive-data-filtering-agent
---

# Sensitiver Datenfilteragent

Der **Sensitiver Datenfilteragent** ist dazu gedacht, Benutzern zu helfen, persönliche Informationen zu schützen, indem er sensible Daten in einem Text automatisch erkennt und unkenntlich macht. Dieser Agent verarbeitet spezifische Kategorien wie HKID-Nummern, Telefonnummern, Adressen, Finanzinformationen und Geburtsdaten und ersetzt sensible Daten systematisch durch festgelegte Platzhalter. Benutzer können so die Integrität ihrer Kommunikation und die Einhaltung der Datenschutzvorschriften wahren, während sie sicherstellen, dass vertrauliche Details nicht preisgegeben werden. Dadurch wird er zu einem unverzichtbaren Werkzeug für Fachleute, die mit sensiblen Dokumenten umgehen.

## Erste Schritte

Um zu starten, stellen Sie sicher, dass Sie den **Sensitiven Datenfilteragent** geklont haben. Folgen Sie [Mit Vorlagen erstellen](/en-us/create-from-templates/), um Ihren KI-Agenten zu klonen und zu konfigurieren.

## Konfigurationsanweisungen

### Benutzereingaben

Für diese KI-Agenten sind keine Eingabefelder erforderlich.

### Wissen

Sie können `.pdf`- oder `.txt`-Dateien hochladen, um dem Agenten individuelle Informationen bereitzustellen, die Ihren spezifischen Anforderungen entsprechen.

### KI-Modelle

Das Standardmodell ist *Llama 3.1 8B Instruct*, aber Sie können auch andere unterstützte KI-Modelle ausprobieren. Falls nötig, verfeinern Sie Ihre Eingabeaufforderungen für angepasste Ergebnisse.

::: tip
Für detailliertere Anweisungen zur Konfiguration eines KI-Agenten, verweisen wir auf [KI-Agent konfigurieren](/en-us/configure-ai-agent/)
:::

## Beispiel-Eingaben und -Ausgabe

### Beispiel-Eingaben

```
Vollständiger Name: John Doe
HKID: A123456(7)
Telefonnummer: 9123 4567
Kontonummer: 123-456-789
Geburtsdatum: 01.01.1990
Adresse: 23 Main Str., Hongkong
```

### Beispiel-Ausgabe

```
Basierend auf den bereitgestellten Richtlinien werde ich die sensiblen Daten aus dem Text filtern. Hier ist der modifizierte Text:

Vollständiger Name: John Doe
HKID: XXXXXXXX(X)
Telefonnummer: XXXXXXXX
Kontonummer: XXXXXXXX
Geburtsdatum: XX.XX.XXXX
Adresse: XXXX (Adresse)

Ich habe die sensiblen Daten wie folgt ersetzt:

1. HKID: A123456(7) -> XXXXXXXX(X)
2. Telefonnummer: 9123 4567 -> XXXXXXXX
3. Kontonummer: 123-456-789 -> XXXXXXXX
4. Geburtsdatum: 01.01.1990 -> XX.XX.XXXX
5. Adresse: 23 Main Str., Hongkong -> XXXX (Adresse)

Beachten Sie, dass ich alle Vorkommen sensibler Daten im Text ersetzt habe, sodass der ursprüngliche Text außer der Filterung sensibler Daten unverändert bleibt.
```

## Tipps für eine effektive Konfiguration

- **Datentypen verstehen**: Kennen Sie die verschiedenen Arten von sensiblen Daten, die Sie filtern müssen, um eine umfassende Abdeckung zu gewährleisten.
- **Kontextbezogene Beispiele bereitstellen**: Laden Sie Beispiele sensibler Daten hoch, um dem Agenten dabei zu helfen, diese Informationen genau zu identifizieren und zu ersetzen.
- **Vielfältige Eingaben testen**: Verwenden Sie unterschiedliche Formate sensibler Daten, um die Leistung des Agenten in verschiedenen Szenarien zu überprüfen.
- **Agentenleistung überwachen**: Überprüfen Sie regelmäßig die Ausgaben, um fehlende Daten oder falsch positive Ergebnisse zu erkennen und passen Sie die Konfigurationen bei Bedarf an.
- **Regelungen auf dem neuesten Stand halten**: Informieren Sie sich über Datenschutzgesetze, um sicherzustellen, dass die Filterpraktiken des Agenten konform bleiben.

## Verwandte Artikel
