---
metatitle: Kundenanfragen Priorisierungs-Agent | Agent-Vorlagen | FabriXAI Benutzerhandbuch
description: Dies ist ein Benutzerhandbuch für den Kundenanfragen-Priorisierungs-Agenten, der Kundenanfragen basierend auf der Dringlichkeit klassifiziert.
lang: de-DE
permalink: /agent-templates/customer-inquiry-prioritizing-agent
---

# Agent zur Priorisierung von Kundenanfragen

Der **Agent zur Priorisierung von Kundenanfragen** ist darauf ausgelegt, Kundenanfragen zu analysieren und ihnen eine von fünf Prioritätsstufen zuzuweisen: Dringend, Hoch, Mittel, Niedrig oder Allgemein. Durch die Bewertung der Priorität, Schwere und des Potenzials für Folgeprobleme in jeder Anfrage unterstützt der Agent Unternehmen dabei, Kundenanfragen im Support effektiv zu priorisieren. Dadurch wird sichergestellt, dass kritische Probleme umgehend behandelt werden, was die Kundenzufriedenheit und die Betriebseffizienz FabriXAI Benutzerhandbuch
description: Dies ist ein Benutzerhandbuch für den Kundenanfragen-Priorisierungs-Agenten, der Kundenanfragen basierend auf der Dringlichkeit klassifiziert.
lang: de
permalink: /agent-templates/customer-inquiry-prioritizing-agent
---

# Agent zur Priorisierung von Kundenanfragen

Der **Agent zur Priorisierung von Kundenanfragen** ist darauf ausgelegt, Kundenanfragen zu analysieren und ihnen eine von fünf Prioritätsstufen zuzuweisen: Dringend, Hoch, Mittel, Niedrig oder Allgemein. Durch die Bewertung der Priorität, Schwere und des Potenzials für Folgeprobleme in jeder Anfrage unterstützt der Agent Unternehmen dabei, Kundenanfragen im Support effektiv zu priorisieren. Dadurch wird sichergestellt, dass kritische Probleme umgehend behandelt werden, was die Kundenzufriedenheit und die Betriebseffizienz steigert.

## Erste Schritte

Um loszulegen, stellen Sie sicher, dass Sie den **Agenten, der Kundendienstanfragen priorisiert**, geklont haben. Klicken Sie auf [Aus Vorlagen erstellen](/en-us/create-from-templates/), um Ihren KI-Agenten zu klonen und zu konfigurieren.

## Konfigurationsanleitung

### Nutzer-Eingaben

| Bezeichnung        | Beschreibung                                               | Hinweise                                                                                                                 |
| ------------------ | ---------------------------------------------------------- | ----------------------------------------------------------------------------------------------------------------------- |
| Kundenanfrage      | Der Text der Kundenanfrage, der klassifiziert werden muss. | Die Eingabe sollte eine klare und prägnante Beschreibung der Anfrage sein, idealerweise auf 200 Wörter begrenzt. Konzentrieren Sie sich darauf, die wichtigsten Themen, Bedenken oder Anfragen einzuschließen. |

### Wissen

Sie können `.pdf` oder `.txt` Dateien hochladen, damit der Agent einen Kontext erhält, der genau auf Ihre Bedürfnisse zugeschnitten ist.

### KI-Modelle

Das Standardmodell ist *Llama 3.1 8B Instruct*, aber Sie können auch andere unterstützte KI-Modelle erkunden. Passen Sie bei Bedarf Ihre Eingabeaufforderungen an, um maßgeschneiderte Ergebnisse zu erhalten.

::: tip
Für detailliertere Anweisungen zum Konfigurieren eines KI-Agenten, besuchen Sie bitte [KI-Agent konfigurieren](/en-us/configure-ai-agent/)
:::

## Beispiel Eingaben und Ausgaben

### Sample Inputs

- **Kundenanfrage**: Ich versuche, eine dringende Bestellung für einen Kunden abzuschließen, kann mich jedoch nicht in mein Konto auf Ihrer E-Commerce-Plattform einloggen. Ich wurde ausgesperrt und habe keinen Zugriff auf meine Auftragsverwaltungstools. Dies hindert mich daran, eine zeitkritische Bestellung für einen wichtigen Kunden zu erfüllen. Ich benötige sofort eine Lösung, da dies meine Geschäftsabläufe stark beeinträchtigt.

### Sample output

```
Dringend

Der Kunde oder die Kundin kann sich nicht in ihr Konto anmelden, was sie daran hindert, eine zeitkritische Bestellung für einen wichtigen Kunden zu erfüllen. Dies verursacht erhebliche Störungen in den Geschäftsabläufen und erfordert sofortige Aufmerksamkeit, um das Problem zu lösen. Das Geschäft des Kunden oder der Kundin ist stark betroffen, und das Problem muss schnell angegangen werden, um weitere Konsequenzen zu verhindern.
```

## Tipps zur effektiven Konfiguration

- **Sei spezifisch**: Detaillierte Anfragen helfen dem Agenten, sie genauer für die Dringlichkeitsklassifizierung zu analysieren.
- **Begrenze die Länge**: Versuche, Anfragen prägnant zu halten; eine Längenbegrenzung von 200 Wörtern verbessert in der Regel die Antwortgenauigkeit.
- **Verwende klare Sprache**: Vermeide Fachjargon und mehrdeutige Begriffe, damit der Agent die Anfrage besser verstehen kann.
- **Teste Varianten**: Probiere verschiedene Versionen ähnlicher Anfragen aus, um zu sehen, wie der Agent sie klassifiziert, und optimiere schließlich deine Eingaben.
- **Regelmäßige Aktualisierungen**: Halte die Wissensdatenbank aktuell, um sicherzustellen, dass der Agent mit den relevantesten Informationen antwortet.

## Verwandte Artikel
