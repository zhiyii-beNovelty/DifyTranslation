---
metatitle: Zusammenfasser | Agentenvorlagen | FabriXAI Benutzerhandbuch
description: Dies ist ein Benutzerhandbuch zur effektiven Konfiguration und Nutzung des Zusammenfasser-Agenten.
lang: de
permalink: /agent-templates/summarizer
---

# Zusammenfasser

Der **Zusammenfassungsagent** ist darauf ausgelegt, umfangreiche Texte in prägnante Zusammenfassungen zu kondensieren, während die Kernbedeutung und der Kontext des Originalmaterials erhalten bleiben. Benutzer können den Tonfall der Zusammenfassung festlegen, eine Wortbegrenzung setzen und Feedback geben, um die Zusammenfassung weiter zu verfeinern. Diese Vielseitigkeit ermöglicht Zusammenfassungen, die spezifischen Bedürfnissen entsprechen, sei es für die beiläufige Lektüre oder für die formale Analyse. Sie können den Ausgabestil basierend auf Ihren Vorlieben anpassen, was es zu einem unschätzbaren Werkzeug für die effiziente Verarbeitung großer Informationsmengen FabriXAI Benutzerhandbuch
description: Dies ist ein Benutzerhandbuch zur effektiven Konfiguration und Nutzung des Zusammenfasser-Agenten.
lang: de
permalink: /agent-templates/summarizer
---

# Zusammenfasser

Der **Zusammenfassungsagent** ist darauf ausgelegt, umfangreiche Texte in prägnante Zusammenfassungen zu kondensieren, während die Kernbedeutung und der Kontext des Originalmaterials erhalten bleiben. Benutzer können den Tonfall der Zusammenfassung festlegen, eine Wortbegrenzung setzen und Feedback geben, um die Zusammenfassung weiter zu verfeinern. Diese Vielseitigkeit ermöglicht Zusammenfassungen, die spezifischen Bedürfnissen entsprechen, sei es für die beiläufige Lektüre oder für die formale Analyse. Sie können den Ausgabestil basierend auf Ihren Vorlieben anpassen, was es zu einem unschätzbaren Werkzeug für die effiziente Verarbeitung großer Informationsmengen macht.

## Erste Schritte

Um loszulegen, stellen Sie sicher, dass Sie den **Zusammenfasser** geklont haben. Folgen Sie [Erstellen aus Vorlagen](/en-us/create-from-templates/), um Ihren KI-Agent zu klonen und zu konfigurieren.

## Konfigurationsanleitungen

### Benutzer-Eingaben

| Bezeichnung               | Beschreibung                                            | Anweisung                                            |
| ------------------------- | -------------------------------------------------------- | ---------------------------------------------------- |
| Text zur Zusammenfassung  | Der Originaltext, den Sie zusammenfassen möchten.        | Geben Sie klare und zusammenhängende Absätze zum Zusammenfassen. |
| Ton der Zusammenfassung   | Der gewünschte Ton für die Zusammenfassung (z.B. leger, formell). | Wählen Sie einen Ton, der zu Ihrem Publikum passt.    |
| Wortbegrenzung            | Die maximale Anzahl von Wörtern für die Zusammenfassung. | Legen Sie eine Grenze zwischen 50 und 100 Wörtern fest. |

### Wissen

Sie können `.pdf`- oder `.txt`-Dateien hochladen, um dem Agenten maßgeschneiderte Kontexte zu liefern, die Ihren spezifischen Anforderungen entsprechen.

### KI-Modelle

Das Standardmodell ist *Llama 3.1 8B Instruct*, aber Sie können auch andere unterstützte KI-Modelle erkunden. Bei Bedarf können Sie Ihre Prompts verfeinern, um maßgeschneiderte Ausgaben zu erhalten.

::: tip
Für detailliertere Anweisungen zur Konfiguration eines KI-Agenten, lesen Sie bitte [KI-Agent konfigurieren](/en-us/configure-ai-agent/)
:::

## Beispiel-Eingaben und -Ausgaben

### Beispiel-Eingaben

- **Schreibstil**: Lässig
- **Wortlimit**: 80
- **Text**: Die rasante Entwicklung der künstlichen Intelligenz (KI) in den letzten Jahren hat sowohl spannende Chancen als auch erhebliche Herausforderungen mit sich gebracht. Einerseits hat KI Durchbrüche in Bereichen wie Gesundheitswesen, Verkehr und wissenschaftlicher Forschung ermöglicht und menschliche Fähigkeiten auf bemerkenswerte Weise erweitert und gestärkt. Automatisierte Systeme, die von KI angetrieben werden, steigern die Effizienz, eröffnen neue Erkenntnisse und retten sogar Leben. Der Aufstieg der KI wirft jedoch auch wichtige ethische und gesellschaftliche Fragen auf. Während KI-Systeme immer ausgefeilter und autonomer werden, wachsen die Bedenken hinsichtlich Themen wie algorithmische Voreingenommenheit, Datenschutz, Arbeitsplatzverdrängung und die existenziellen Risiken fortschrittlicher KI. Eine durchdachte Governance und sorgfältige Entwicklung von KI werden entscheidend sein, um sicherzustellen, dass diese Technologien verantwortungsvoll und gerecht eingesetzt werden, um der gesamten Menschheit zugute zu kommen. Insgesamt ist das transformative Potenzial von KI sowohl verlockend als auch riskant und erfordert ein sensibles Gleichgewicht zwischen Innovation und umsichtigem Abwägen der weitreichenden Auswirkungen der Technologie.

### Beispiel-Ausgabe

```
Der schnelle Fortschritt der Künstlichen Intelligenz ist äußerst spannend, bringt aber auch einige große Herausforderungen mit sich. Sie revolutioniert das Gesundheitswesen, den Verkehr und die Forschung, indem sie Systeme intelligenter und effizienter macht. Allerdings gehen mit diesen Fortschritten Bedenken wie Vorurteile, Datenschutzprobleme, Arbeitsplatzverlust und sogar existenzielle Risiken einher. Um wirklich von Künstlicher Intelligenz zu profitieren, benötigen wir kluge Regeln und eine sorgfältige Entwicklung, um Innovation mit den weitreichenden Auswirkungen der Technologie in Einklang zu bringen. Insgesamt ist das Potenzial der Künstlichen Intelligenz erstaunlich, muss aber mit Bedacht gehandhabt werden.
```

## Tipps zur effektiven Konfiguration

- **Definieren Sie klare Parameter**: Legen Sie den Schreibstil und die Wortgrenze fest, um sicherzustellen, dass Ihre Zusammenfassung den Erwartungen entspricht.
- **Verwenden Sie prägnanten Text**: Je klarer und prägnanter der Originaltext ist, desto besser wird die Zusammenfassung sein.
- **Verfeinern Sie Ihre Eingaben**: Wenn das Ergebnis nicht Ihren Erwartungen entspricht, passen Sie Ihren Schreibstil an oder vereinfachen Sie den bereitgestellten Text zur Klarheit.
- **Probieren Sie verschiedene Schreibstile**: Experimentieren Sie mit unterschiedlichen Schreibstilen, um denjenigen zu finden, der am besten den Bedürfnissen Ihres Publikums entspricht.
- **Überprüfen Sie das Feedback**: Nutzen Sie die Rückmeldungen des Agenten, um Ihre Zusammenfassungen basierend auf früheren Ergebnissen weiter zu verfeinern.

## Verwandte Artikel
